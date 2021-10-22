const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../models/User.js');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect',
    passReqToCallback: true,
}, // if no req in callback function with passReqToCallback
   (req, accessToken, refreshToken, profile, done) => {
        console.log('Passprt callback firing');
        console.log(profile._json);
   }
))