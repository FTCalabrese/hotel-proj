const {Schema, model} = require('mongoose');

const roomSchema = new Schema({
    number: {type: Number, required: true, unique: true},
    available: {type: Boolean, required: true},
    roomType: {
        type: String,
        required: true,
        enum: ['Suite', 'Basic'],
        default: 'Basic'
    },
    reservation: {
        type: [reservationSchema]
    }
})

const reservationSchema = new Schema({
    customer: {type: String, required: true}, //email, credit card, or something
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    price: {type: Number, required: true}
})

const Room = mongoose.model('Room', roomSchema, 'rooms');
module.exports = Room;
