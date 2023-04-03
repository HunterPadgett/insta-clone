const Post = require("../models/Post");
const cloudinary = require("../middleware/cloudinary");

exports.getProfile = async (req, res) => {
 try {
  const posts = await Post.find({ user: req.user.id })
   .sort({ createdAt: "desc" })
   .lean()
   .exec();
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
  const result = await cloudinary.uploader.upload(req.file.path);

  await Post.create({
   image: result.secure_url,
   cloudinaryId: result.public_id,
   caption: req.body.caption,
   likes: 0,
   user: req.user.id,
  });

  console.log("post has been added");
  res.redirect("/profile");
 } catch (err) {
  console.error(err);
 }
};
