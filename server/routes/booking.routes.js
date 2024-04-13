import express from 'express'
import bookingCtrl from '../controllers/booking.controller.js'

const router = express.Router();

router.post("/api/addbooking", bookingCtrl.addBooking);

router.get("/api/getBookings", bookingCtrl.getBookings);

export default router;