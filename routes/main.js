const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
// const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/feed", ensureAuth, authController.getFeed);
router.get("/profile", ensureAuth, authController.getProfile);
router.get("/logout", authController.logout);

module.exports = router;
