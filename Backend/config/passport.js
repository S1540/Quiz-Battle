const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/LoginSchema");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/google/callback",
      prompt: "consent",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        let user = await User.findOne({ email });
        if (!user) {
          user = await User.create({
            username: profile.displayName,
            email: profile.emails[0].value,
            password: null,
            provider: "google",
          });
        }
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);
module.exports = passport;
