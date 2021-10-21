const {Schema, model} = require('mongoose');

const reservationSchema = new Schema({
    roomId: {type: Schema.Types.ObjectId, ref: 'Room'},
    customer: {type: String, required: true}, //email, credit card, or something
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    price: {type: Number, required: true}
})

const Reservation = model('Reservation', reservationSchema, 'reservations');
module.exports = Reservation;