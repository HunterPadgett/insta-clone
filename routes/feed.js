const express = require("express");
const router = express.Router();
const feedController = require("../controllers/feed");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, feedController.getFeed);
router.delete("/deletePost/:id", feedController.deletePost);
router.put("/likePost/:id", feedController.likePost);
router.post("/addComment/:id", feedController.addComment);

module.exports = router;
