import showModel from "../models/show.model.js";
import movieModel from "../models/movie.model.js";

export const handleAddShow = async (req, res) => {
    try {
        const { movieId } = req.params;
        const { date, time, price } = req.body;
 
        if (!movieId || !date || !time || !price) {
            return res.status(400).json({
                success: false,
                message: "movieId, date, time, and price are required",
            });
        }
 
        if (Number(price) <= 0) {
            return res.status(400).json({
                success: false,
                message: "Price must be greater than 0",
            });
        }
 
        const movie = await movieModel.findById(movieId);
 
        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found",
            });
        }
 
        const showDateTime = new Date(`${date}T${time}`);
 
        const expireAt = new Date(showDateTime.getTime() + (Number(movie.runtime) + 2) * 60 * 1000);
 
        const newShow = await showModel.create({
            movie: movieId,
            date,
            time,
            price: Number(price),
            expireAt,
        });
 
        return res.status(201).json({
            success: true,
            message: "Show added successfully",
            show: newShow,
        });
    } catch (error) {
        console.error("Error adding show:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while adding show",
        });
    }
};

export const getShowsByMovie = async (req, res) => {
    try {
        const { movieId } = req.params;

        const shows = await showModel
            .find({ movie: movieId })
            .sort({ date: 1, time: 1 });

        return res.status(200).json({
            success: true,
            shows,
        });
    } catch (error) {
        console.error("Error fetching shows:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching shows",
        });
    }
};

export const handleDeleteShow = async (req, res) => {
    try {
        const { showId } = req.params;

        const show = await showModel.findById(showId);

        if (!show) {
            return res.status(404).json({
                success: false,
                message: "Show not found",
            });
        }

        await showModel.findByIdAndDelete(showId);

        return res.status(200).json({
            success: true,
            message: "Show removed successfully",
        });
    } catch (error) {
        console.error("Error deleting show:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while deleting show",
        });
    }
};


export const getAllShows = async (req, res) => {
  const shows = await showModel
    .find()
    .populate('movie', 'title')
    .sort({ date: 1, time: 1 });

  return res.status(200).json({ success: true, shows });
};


export const getShowById = async (req, res) => {
    try {
        const { showId } = req.params;

        const show = await showModel
            .findById(showId)
            .populate('movie');

        if (!show) {
            return res.status(404).json({
                success: false,
                message: "Show not found",
            });
        }

        return res.status(200).json({
            success: true,
            show,
        });
    } catch (error) {
        console.error("Error fetching show:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching show",
        });
    }
};