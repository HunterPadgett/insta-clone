const Post = require("../models/Post");
const cloudinary = require("../middleware/cloudinary");

exports.getProfile = async (req, res) => {
 try {
  // since this is the profile page, query the database for posts that belong to the user whose ID is stored in `req.user.id` aka the logged in user. then sort it.
  const posts = await Post.find({ user: req.user.id })
   .sort({ createdAt: "desc" })
   .lean()
   .exec();
  //  This line renders the "profile" ejs. Passes in an object containing variables that the view can use, including the page title, the current user's information (stored in `req.user`), and the array of posts belonging to the user queried from the db
  res.render("profile", {
   title: "Profile | Huntagram",
   user: req.user,
   posts,
  });
 } catch (err) {
  console.error(err);
 }
};

exports.createPost = async (req, res) => {
 try {
  // upload the image from the form to Cloudinary and get back the result
  const result = await cloudinary.uploader.upload(req.file.path);
  // Create a new Post document in the database
  await Post.create({
   image: result.secure_url, // secure URL returned by Cloudinary
   cloudinaryId: result.public_id, // public ID returned by Cloudinary
   caption: req.body.caption, // caption submitted in the form
   likes: 0, // set initial likes to 0
   user: req.user.id, // Set the user id to the id of the currently logged in user
  });
  console.log("post has been added");
  res.redirect("/profile");
 } catch (err) {
  console.error(err);
 }
};

exports.deletePost = async (req, res) => {
 const postId = req.params.id;
 try {
  // Find the post via its id retrieve the cloudinaryId of the image
  const post = await Post.findById(postId);
  // Remove the image from Cloudinary
  await cloudinary.uploader.destroy(post.cloudinaryId);
  // Delete the post from the database
  await Post.findByIdAndDelete({ _id: postId });
  // log if sucessful and reload page
  console.log("post removed from feed");
  res.redirect("/profile");
 } catch (err) {
  console.error(err);
 }
};

exports.likePost = async (req, res) => {
 try {
  // req.params.id = post._id from the form
  // find Post with that id, increment likes on that post by 1, return updated document
  await Post.findByIdAndUpdate(
   req.params.id,
   { $inc: { likes: 1 } },
   { new: true }
  );
  console.log("likes +1");
  res.redirect("/profile");
 } catch (err) {
  console.error(err);
 }
};
