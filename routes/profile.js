const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const profileController = require("../controllers/profile");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, profileController.getProfile);
router.post("/createPost", upload.single("file"), profileController.createPost);

module.exports = router;
