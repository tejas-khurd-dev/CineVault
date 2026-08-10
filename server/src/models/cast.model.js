import mongoose from "mongoose";

const castSchema = new mongoose.Schema(
  {
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movies",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    character: {
      type: String,
    },
    profilePath: {
      type: String,
      required: true,
    },
    profileFileId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const castModel = mongoose.model("Casts", castSchema);

export default castModel;