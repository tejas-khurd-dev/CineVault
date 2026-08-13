import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        show: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shows",
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
            required: true,
        },
        seats: [{ type: String, required: true }],
        amount: {
            type: Number,
            required: true,
        },
        isPaid: {
            type: Boolean,
            default: false,
        },
        razorpayOrderId: {
            type: String,
            required: true,
        },
        razorpayPaymentId: {
            type: String,
        },
        expireAt: {
            type: Date,
            required: true,
            expires: 0,
        },
    },
    { timestamps: true }
);

const bookingModel = mongoose.model("Bookings", bookingSchema);

export default bookingModel;