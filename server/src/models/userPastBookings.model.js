import mongoose from "mongoose";

const userPastBookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },

    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bookings",
      required: true,
    },

    show: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shows",
      required: true,
    },

    seats: {
      type: [String],
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    razorpayOrderId: {
      type: String,
      required: true,
    },

    razorpayPaymentId: {
      type: String,
      required: true,
    },

    bookedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const userPastBookingsModel = mongoose.model("UserPastBookings", userPastBookingSchema);

export default userPastBookingsModel;