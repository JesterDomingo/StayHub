import express from 'express'
const app = express();

import BookingModel from '../models/booking.model.js';

const addBooking = async(req, res) => {
    try
    {
        const {place, checkIn, checkOut, numberOfGuests, name, price, user} = req.body;

        const userData = user;

        const booking = await BookingModel.create({
            place, checkIn, checkOut, numberOfGuests, name, price,
            user: userData._id
        });

        res.status(201).json(booking);
    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({ error: "Something went wrong while add booking" });
    }
}


const getBookings = async(req, res) => {
    try
    {
        const {id} = req.query;

        const bookings = await BookingModel.find({ user: id })
        .populate('place')
        res.status(200).json(bookings);
    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({ error: "Something went wrong while getting bookings" });
    }
}

export default {addBooking, getBookings}