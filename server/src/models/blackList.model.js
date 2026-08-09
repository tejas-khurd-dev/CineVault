import mongoose from "mongoose";

const blackListSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "3d",
  },
});

const blackListModel = mongoose.model("BlackList", blackListSchema);

export default blackListModel;
