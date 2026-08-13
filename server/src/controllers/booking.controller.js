import Razorpay from "razorpay";
import crypto from "crypto";
import bookingModel from "../models/booking.model.js";
import showModel from "../models/show.model.js";
import userPastBookingsModel from "../models/userPastBookings.model.js";
import { sendBookingConfirmation } from "../services/sendMail.service.js";
import userModel from "../models/user.model.js";
import movieModel from "../models/movie.model.js";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});


export const handleCreateBooking = async (req, res) => {
    try {
        const { showId, seats } = req.body;
        const userId = req.user.id;

        if (!showId || !Array.isArray(seats) || seats.length === 0) {
            return res.status(400).json({
                success: false,
                message: "showId and at least one seat are required",
            });
        }

        const show = await showModel.findById(showId);

        if (!show) {
            return res.status(404).json({
                success: false,
                message: "Show not found",
            });
        }

        if (show.ticket === 0) {
            return res.status(409).json({
                success: false,
                message: "Tickets are sold out",
            });
        }


        if (seats.length > 5) {
            return res.status(400).json({
                success: false,
                message: "You can only book up to 5 seats",
            });
        }

        

        const alreadyTaken = seats.some((seat) => show.seatsBooked.includes(seat));

        if (alreadyTaken) {
            return res.status(409).json({
                success: false,
                message: "One or more selected seats are already booked",
            });
        }

        const amount = seats.length * show.price;

      
        const order = await razorpay.orders.create({
            amount: amount * 100,
            currency: "INR",
            receipt: `receipt_${showId}_${Date.now()}`,
        });

        const expireAt = new Date(show.expireAt.getTime() + 15 * 60 * 1000);

        const booking = await bookingModel.create({
            show: showId,
            user: userId,
            seats,
            amount,
            razorpayOrderId: order.id,
            expireAt
        });

        

        return res.status(201).json({
            success: true,
            message: "Order created",
            order,
            bookingId: booking._id,
            key: process.env.RAZORPAY_KEY_ID, 
        });
    } catch (error) {
        console.error("Error creating booking order:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while creating the booking",
        });
    }
};


export const handleVerifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !bookingId) {
            return res.status(400).json({
                success: false,
                message: "Missing payment verification details",
            });
        }

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({
                success: false,
                message: "Payment verification failed",
            });
        }

        const booking = await bookingModel.findById(bookingId);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }

        if (booking.isPaid) {
            return res.status(200).json({
                success: true,
                message: "Booking already confirmed",
                booking,
            });
        }

        const show = await showModel.findById(booking.show);

        if (!show) {
            return res.status(404).json({
                success: false,
                message: "Show not found",
            });
        }

        const alreadyTaken = booking.seats.some((seat) => show.seatsBooked.includes(seat));

        if (alreadyTaken) {
            return res.status(409).json({
                success: false,
                message: "One or more of your selected seats were booked by someone else. Contact support for a refund.",
            });
        }

        show.seatsBooked.push(...booking.seats);
        show.ticket = Math.max(0, show.ticket - booking.seats.length);
        await show.save();

        booking.isPaid = true;
        booking.razorpayPaymentId = razorpay_payment_id;
        await booking.save();

        await deleteExpiredBookings();

        await userPastBookingsModel.create({
            user: booking.user,
            booking: booking._id,
            show: booking.show,
            seats: booking.seats,
            amount: booking.amount,
            razorpayOrderId: booking.razorpayOrderId,
            razorpayPaymentId: booking.razorpayPaymentId,
        });

        const userId = req.user.id

        const user = await userModel.findById(userId)

        const movie = await movieModel.findById(show.movie)

        await sendBookingConfirmation({
            email: user.email,
            bookingId: booking._id.toString(),
            movieTitle: movie.title,
            seats: booking.seats,
            date: show.date,
            time: show.time,
            amount: booking.amount,
        });

        return res.status(200).json({
            success: true,
            message: "Payment verified, booking confirmed",
            booking,
            userPastBookingsModel
        });
    } catch (error) {
        console.error("Error verifying payment:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while verifying payment",
        });
    }
};

export const getMyBookings = async (req, res) => {
    try {
        const userId = req.user.id;

        const bookings = await bookingModel
            .find({ user: userId, isPaid: true })
            .populate({
                path: "show",
                populate: { path: "movie", select: "title posterPath" },
            })
            .sort({ createdAt: -1 });


        return res.status(200).json({
            success: true,
            bookings,
        });
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching bookings",
        });
    }
};


const deleteExpiredBookings = async () => {
    try {
        const result = await bookingModel.deleteMany({
            isPaid: false,
        });

    } catch (error) {
        console.error("Error deleting cancel bookings:", error);
    }
};


export const getUserPastBookings = async (req, res) => {
    try {
        const userId = req.user.id;
 
        const pastBookings = await userPastBookingsModel
            .find({ user: userId })
            .populate({
                path: "show",
                populate: { path: "movie", select: "title posterPath" },
            })
            .sort({ bookedAt: -1 });
 
        return res.status(200).json({
            success: true,
            pastBookings,
        });
    } catch (error) {
        console.error("Error fetching past bookings:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching past bookings",
        });
    }
};