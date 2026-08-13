import mongoose from "mongoose";

const favouriteMovieListSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
            required: true,
        },

        movie: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movies",
            required: true,
            unique: true
        },
    }
);

favouriteMovieListSchema.index({ user: 1, movie: 1 }, { unique: true });

const favouriteMovieListModel = mongoose.model( "FavouriteMovieList", favouriteMovieListSchema);

export default favouriteMovieListModel;