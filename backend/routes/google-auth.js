const router = require('express').Router();
require('dotenv').config();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/auth/google/callback',
    passReqToCallback: true,
}, 
    (request, accessToken, refreshToken, profile, done) => {
            console.log(profile);
           return done(null, profile);
    }
))

router.get('/auth/google', 
passport.authenticate('google', {scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
passport.authenticate('google', {failureRedirect: 'http://localhost:3000/login', failWithError: true}), 
function (req, res) {
    console.log(req.user);
    res.redirect('http://localhost:3000/');
});


module.exports =  router;