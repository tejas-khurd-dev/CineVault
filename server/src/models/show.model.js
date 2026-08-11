import mongoose from "mongoose";

const showSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movies",
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  time: {
    type: String,
    required: true,
  },

  ticket: {
    type: Number,
    default: 90,
  },
  price: {
    type: Number,
    required: true,
  },

  expireAt: {
    type: Date,
    required: true,
    expires: 0,
  },
});

const showModel = mongoose.model("Shows", showSchema);

export default showModel;