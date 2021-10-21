const {Schema, model} = require('mongoose');

const reservationSchema = new Schema({
    roomId: {type: Schema.Types.ObjectId, ref: 'Room'},
    customer: {type: String, required: true}, //email, credit card, or something
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    price: {type: Number, required: true}
})

const userSchema = new Schema({
    googleId: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    reservations: [{
        room: Number,
        roomtype: String
    }]
    //reservations: [reservationSchema]
})




const User = model('User', userSchema, 'users');
module.exports = User;