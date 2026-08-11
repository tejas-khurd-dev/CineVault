import mongoose from "mongoose";

const favouriteMovieListSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
  },
);

const favouriteMovieListModel = mongoose.model("FavouriteMovieList", favouriteMovieListSchema);

export default favouriteMovieListModel;