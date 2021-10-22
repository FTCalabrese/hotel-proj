const router = require('express').Router();
const passport = require('passport');
const passportConfig = require('../config/passport-config.js');


router.get('/google', passport.authenticate('google', {scope: ['openid','profile', 'email'] }));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    console.log("Successful redirect");
    res.send({status: 201, message: "Successfully authenticated"});
}) 


module.exports =  router;