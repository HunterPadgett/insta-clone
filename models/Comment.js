const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
 comment: {
  type: String,
  require: true,
 },
 madeBy: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  require: true,
 },
 onPost: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Post",
  require: true,
 },
 createdAt: {
  type: Date,
  default: Date.now,
 },
});

module.exports = mongoose.model("Comment", CommentSchema);
