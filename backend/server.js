const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8034;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



/**
 * Basic set up of the server. Can remove these later.
 * Pretty sure these would need to be placed in the React Router DOM front end instead.  
 * Just testing with Google OAuth for now. 
 */
app.get('/login', (req,res)=> {
    res.json({location: "login page"});
})

app.get('/', (req,res)=> {
    res.json({location: "home page"});
})

app.get('/auth/google', require('./routes/google-auth.js'));

app.get('/auth/google/callback', require('./routes/google-auth.js'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})











