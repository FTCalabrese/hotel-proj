const mongoose = require('mongoose');
const User = require('../models/User.js');

// get all of a users reservations given their googleId
const getCustomerReservationsById = async(userId) =>{
    
    try
    {
        await mongoose.connect(process.env.COSMO_DB);
        const customer = await User.findOne({googleId: userId});
        if(customer === null) throw {status: 500, error: 'user not found'};
        if(customer.reservations.length === 0) throw {status: 500, error: 'No reservations found'};
        
        mongoose.connection.close();
        console.log(customer.reservations);
        return customer.reservations;
    }
    catch(err)
    {
        mongoose.connection.close();
        throw err;
    }
}

// register a user in the database (initialization)
const createUser = async({googleId, name}) =>{
    try
    {

        await mongoose.connect(process.env.ATLAS_URI);

        const alreadyExists = await User.findOne({googleId: googleId});
        if(alreadyExists !== null) 
        {
            mongoose.connection.close();
            return alreadyExists;
        }

        const customer = new User({googleId, name});
        await customer.save();

        mongoose.connection.close();
        return customer;
    }
    catch(err)
    {
        mongoose.connection.close();
        throw err;
    }
}

const createReservation = async({roomId, startDate, endDate}) =>{
    try
    {
        await mongoose.connect(process.env.ATLAS_URI);

        //const price = 
        //const roomId = 
        
        const reservation = new Reservation({roomId, startDate, endDate /*, price*/});

        //await addReservationReferenceToRoom(roomId, reservation._id);

        await reservation.save();

        mongoose.connection.close();
        return {status: 201, message: `reservation successfully created!`};
    }
    catch(err)
    {
        mongoose.connection.close();
        throw {status: 500, error: 'Could not create reservation'};
    }
}

module.exports = 
{
    getCustomerReservationsById,
    createUser
}