const express = require('express');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8034;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());



/**
 * Basic set up of the server. Can remove these later.
 * Pretty sure these would need to be placed in the React Router DOM front end instead.  
 * Just testing with Google OAuth for now. 
 */
app.get('/auth/google', require('./routes/google-auth.js'));

app.get('/auth/google/callback', require('./routes/google-auth.js'));


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})











