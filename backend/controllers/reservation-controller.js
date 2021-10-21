const mongoose = require('mongoose');
const Reservation = require('../models/Reservation.js');

const { addReservationReferenceToRoom } = require('./room-controller.js');

//this change must be reflected in the room and customer
const createReservation = async({roomId, startDate, endDate}) =>{
    try
    {
        await mongoose.connect(process.env.ATLAS_URI);

        //const price = 

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