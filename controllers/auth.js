const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

exports.getLogin = (req, res) => {
 //  if (req.user) {
 //   return res.redirect("/feed");
 //  }
 res.render("login");
};

exports.getSignup = (req, res) => {
 //  if (req.user) {
 //   return res.redirect("/feed");
 //  }
 res.render("signup");
};
