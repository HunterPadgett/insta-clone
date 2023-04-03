const Post = require("../models/Post");
const cloudinary = require("../middleware/cloudinary");

exports.getFeed = async (req, res) => {
 try {
  const posts = await Post.find()
   .populate("user")
   .sort({ createdAt: "desc" })
   .lean()
   .exec();
  res.render("feed", {
   user: req.user,
   posts,
  });
 } catch (error) {
  console.error(err);
 }
};
