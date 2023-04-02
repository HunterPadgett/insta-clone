const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

exports.getLogin = (req, res) => {
 if (req.user) {
  return res.redirect("/feed");
 }
 res.render("login", {
  title: "Log in | Huntagram",
 });
};

exports.getSignup = (req, res) => {
 if (req.user) {
  return res.redirect("/feed");
 }
 res.render("signup", {
  title: "Sign up | Huntagram",
 });
};

exports.postSignup = async (req, res, next) => {
 // // start of sign up validation
 const validationErrors = [];
 //  name length check
 if (!validator.isLength(req.body.name, { min: 2, max: 30 }))
  validationErrors.push({ msg: "Name must be at least 2 characters long" });
 // username length check
 if (!validator.isLength(req.body.username, { min: 2, max: 30 }))
  validationErrors.push({
   msg: "Username must be 3 characters long and no longer than 30 characters",
  });
 // username !special character character check
 if (!validator.isAlphanumeric(req.body.username))
  validationErrors.push({
   msg: "Username can only contain letters and numbers (no special characters)",
  });
 // password length check
 if (!validator.isLength(req.body.password, { min: 6 }))
  validationErrors.push({
   msg: "Password must be at least 6 characters long",
  });
 // password match check
 if (req.body.password !== req.body.confirmPassword)
  validationErrors.push({ msg: "Passwords do not match!" });

 if (validationErrors.length) {
  req.flash("errors", validationErrors);
  return res.redirect("/signup");
 }
 // // end of sign up validation

 try {
  // check to see if username already exists, if it does send them error msg and redirect to /signup
  const existingUser = await User.findOne({ userName: req.body.username });
  if (existingUser) {
   req.flash("errors", {
    msg: "Account with that username already exists. Enter a different username",
   });
   return res.redirect("/signup");
  }

  // If no existing user found, create a new user object
  const user = new User({
   name: req.body.name,
   userName: req.body.username,
   password: req.body.password,
  });

  // Save the new user object to the database, log them in, and direct them to /feed
  await user.save();
  req.logIn(user, (err) => {
   if (err) return next(err);
   res.redirect("/feed");
  });
 } catch (err) {
  console.error(err);
  return next(err);
 }
};

exports.getFeed = (req, res) => {
 res.render("feed");
};
