import express from "express";
import {authUserMiddleware} from "../middlewares/auth.middleware.js";
import { handleCreateBooking, handleVerifyPayment, getMyBookings, getUserPastBookings, getAllBookingsAdmin } from "../controllers/booking.controller.js";
import adminOnlyMiddleware from "../middlewares/adminOnly.middleware.js";

const bookingRouter = express.Router();

bookingRouter.post("/create", authUserMiddleware, handleCreateBooking);


bookingRouter.post("/verify", authUserMiddleware, handleVerifyPayment);

bookingRouter.get("/my-bookings", authUserMiddleware, getMyBookings);

bookingRouter.get("/past-bookings", authUserMiddleware, getUserPastBookings);

bookingRouter.get("/admin/all", authUserMiddleware, adminOnlyMiddleware, getAllBookingsAdmin);


export default bookingRouter;