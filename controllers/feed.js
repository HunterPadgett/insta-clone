const Post = require("../models/Post");
const Comment = require("../models/Comment");
const cloudinary = require("../middleware/cloudinary");

exports.getFeed = async (req, res) => {
 try {
  // Find ALL posts and populate the "user" field with the corresponding User model since User is referenced in the Post model
  const posts = await Post.find()
   .populate("user")
   .sort({ createdAt: "desc" })
   .lean()
   .exec();

  const comments = await Comment.find()
   .populate("madeBy")
   .sort({ createdAt: "asc" })
   .lean()
   .exec();

  // console.log(posts);

  // Render the "feed" view with the user object and the retrieved posts
  res.render("feed", {
   user: req.user,
   posts,
   comments,
  });
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
  res.redirect("/feed");
 } catch (err) {
  console.log(err);
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
  res.redirect("/feed");
 } catch (err) {
  console.error(err);
 }
};

exports.addComment = async (req, res) => {
 try {
  await Comment.create({
   comment: req.body.comment,
   madeBy: req.user.id,
   onPost: req.params.id,
  });
  console.log("comment has been added");
  res.redirect("/feed");
 } catch (err) {
  console.error(err);
 }
};
