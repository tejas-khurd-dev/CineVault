import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    overview: {
      type: String,
      required: true,
    },
    posterPath: {
      type: String,
      required: true,
    },
    posterFileId: {
      type: String,
      required: true,
    },
    backdropPath: {
      type: String,
      required: true,
    },
    backdropFileId: {
      type: String,
      required: true,
    },
    genres: [{ type: String }],
    releaseDate: {
      type: Date,
      required: true,
    },
    originalLanguage: {
      type: String,
      default: "en",
    },
    tagline: {
      type: String,
      reqired: true
    },
    runtime: {
      type: Number, // minutes
      reqired: true
    },
    voteAverage: {
      type: Number, // generated server-side on creation
    },
    voteCount: {
      type: Number, // generated server-side on creation
    },
  },
  { timestamps: true }
);

const movieModel = mongoose.model("Movies", movieSchema);

export default movieModel;