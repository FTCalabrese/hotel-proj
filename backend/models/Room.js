const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    googleId: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    reservations: [reservationSchema]
})

const roomSchema = new Schema({
    number: {type: Number, required: true, unique: true},
    roomType: {
        type: String,
        required: true,
        enum: ['Suite', 'Basic'],
        default: 'Basic'
    },
    reservations: [{type: Schema.Types.ObjectId, ref: 'Reservation'}]
})

const reservationSchema = new Schema({
    customer: {type: String, required: true}, //email, credit card, or something
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    price: {type: Number, required: true}
})

const Room = model('Room', roomSchema, 'rooms');
module.exports = Room;
