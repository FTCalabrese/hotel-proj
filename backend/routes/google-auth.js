const router = require('express').Router();
require('dotenv').config();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/auth/google/callback',
}, 
    (accessToken, refreshToken, profile, done) => {
            console.log(profile);
            return done(profile.displayName);
    }
))


router.get('/auth/google', 
passport.authenticate('google', {scope: ['openid', 'profile','email'] }));

router.get('/auth/google/callback',
passport.authenticate('google', {successRedirect: '/', failureRedirect: '/login', failureFlash: true}));


module.exports =  router;