const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect',
    passReqToCallback: true,
}, 
    (request, accessToken, refreshToken, profile, done) => {
            console.log('callback function fired');
            console.log(profile._json);
    }
))