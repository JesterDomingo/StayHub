import mongoose from 'mongoose'

const bookingSchema = mongoose.Schema({
    place: {type: mongoose.Schema.Types.ObjectId, required: true, ref:"Place"},
    user: {type: mongoose.Schema.Types.ObjectId, required:true},
    checkIn: {type: Date, required:true},
    checkOut: {type: Date, required:true},
    price: Number,
});

const BookingModel = mongoose.model("Booking", bookingSchema);

export default BookingModel;