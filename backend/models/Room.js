const {Schema, model} = require('mongoose');

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

const Room = model('Room', roomSchema, 'rooms');
module.exports = Room;
