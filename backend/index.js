const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
require('dotenv').config();

const { createUser, getCustomerReservationsById } = require('./controllers/user-controller.js');

const app = express();
const port = 9003;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.get('/', async (req, res) => {
    try
    {
        const data = await getCustomerReservationsById(1);
        console.log(data);
        res.sendFile(resolve('index.html'));
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

app.post('/', async (req, res) => {
    try
    {
        const data = await createUser(req.body);
        console.log(data);
        res.sendFile(resolve('index.html'));
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});