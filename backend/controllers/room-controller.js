const mongoose = require('mongoose');
const Room = require('../models/Room.js');

//call this when a reservation is created to reflect the change in the relevant room's reservation array
const addReservationReferenceToRoom = async(roomId, reservationId) => //untested
{
    try
    {
        await mongoose.connect(process.env.ATLAS_URI);
        const room = await Room.updateOne({_id: roomId}, {$addToSet: {reservations: {reservationId: reservationId}}});
        if(room.modifiedCount === 0) throw {status: 500, error: 'unable to add reservation reference to room'};

        mongoose.connection.close();
        return {status: 200, message: `reservation reference to room successfully`};
    }
    catch(err)
    {
        mongoose.connection.close();
        throw err;
    }
}