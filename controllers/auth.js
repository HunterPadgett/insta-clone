const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

exports.getLogin = (req, res) => {
 if (req.user) {
  return res.redirect("/feed");
 }
 res.render("login", {
  title: "Log in | Huntagram",
  user: req.user,
 });
};

exports.postLogin = (req, res, next) => {
 // // start of sign up validation
 const validationErrors = [];
 // make sure user types in username & password
 if (validator.isEmpty(req.body.username))
  validationErrors.push({ msg: "Password cannot be blank" });
 if (validator.isEmpty(req.body.password))
  validationErrors.push({ msg: "Password cannot be blank" });

 if (validationErrors.length) {
  req.flash("errors", validationErrors);
  return res.redirect("/auth/login");
 }
 // // end of sign up validation

 // Authenticate user
 passport.authenticate("local", (err, user, info) => {
  if (err) {
   return next(err);
  }
  if (!user) {
   req.flash("errors", info);
   return res.redirect("/auth/login");
  }
  req.logIn(user, (err) => {
   if (err) {
    return next(err);
   }
   req.flash("success", { msg: "Success! You are logged in" });
   res.redirect(req.session.returnTo || "/feed");
  });
 })(req, res, next);
};

exports.getSignup = (req, res) => {
 if (req.user) {
  return res.redirect("/feed");
 }
 res.render("signup", {
  title: "Sign up | Huntagram",
  user: req.user,
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
  return res.redirect("/auth/signup");
 }
 // // end of sign up validation

 try {
  // check to see if username already exists, if it does send them error msg and redirect to /signup
  const existingUser = await User.findOne({ userName: req.body.username });
  if (existingUser) {
   req.flash("errors", {
    msg: "Account with that username already exists. Enter a different username",
   });
   return res.redirect("/auth/signup");
  }

  // If no existing user found, create a new user object
  const user = new User({
   name: req.body.name.trim(),
   userName: req.body.username.trim(),
   password: req.body.password.trim(),
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

exports.logout = (req, res) => {
 req.logout((err) => {
  if (err) {
   console.log("Error logging out: ", err);
  } else {
   console.log("User has logged out.");
   req.session.destroy((err) => {
    console.log("user logged out, session destroyed");
    if (err) {
     console.error("Error: Failed to destroy the session during logout.", err);
    }
    req.user = null;
    res.redirect("/");
   });
  }
 });
};
