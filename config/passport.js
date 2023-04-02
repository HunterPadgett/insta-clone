const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = function (passport) {
 passport.use(
  new LocalStrategy(
   { usernameField: "username" },
   async (username, password, done) => {
    try {
     const lowercaseUsername = username.toLowerCase();
     const user = await User.findOne({ userName: lowercaseUsername });
     if (!user)
      return done(null, false, { msg: "Username does not exist. Try again." });
     user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err);
      if (isMatch) return done(null, user);
      return done(null, false, {
       msg: `Password for ${user.userName} is incorrect. Try again.`,
      });
     });
    } catch (err) {
     return done(err);
    }
   }
  )
 );

 passport.serializeUser((user, done) => {
  done(null, user.id);
 });

 passport.deserializeUser((id, done) => {
  User.findById(id)
   .then((user) => {
    done(null, user);
   })
   .catch((err) => {
    done(err, null);
   });
 });
};
