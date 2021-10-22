const express = require('express');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 8034;
app.use(cors({
    origin: "http:localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());



/**
 * using  /auth with all of the authetication routes for google. 
 */
app.use('/auth', require('./routes/google-auth.js'));


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})











