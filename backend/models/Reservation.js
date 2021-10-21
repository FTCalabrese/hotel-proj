const {Schema, model} = require('mongoose');

const reservationSchema = new Schema({
    roomId: {type: Schema.Types.ObjectId, ref: 'Room'},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    price: {type: Number, required: true}
})

const Reservation = model('Reservation', reservationSchema, 'reservations');
module.exports = Reservation;