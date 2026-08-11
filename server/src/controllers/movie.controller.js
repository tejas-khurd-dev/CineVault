import castModel from "../models/cast.model.js";
import movieModel from "../models/movie.model.js";
import ImageKit from "imagekit";
import showModel from "../models/show.model.js";
import favouriteMovieListModel from "../models/favouriteMovieList.model.js";

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const randomVoteAverage = (min = 7, max = 9.2) => {
    return Number((Math.random() * (max - min) + min).toFixed(1));
};

const randomVoteCount = (min = 5000, max = 13000) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// done
export const handleAddMovie = async (req, res) => {
    try {
        const { title, overview, genres, originalLanguage, runtime } = req.body;

        const posterFile = req.files?.poster?.[0];
        const backdropFile = req.files?.backdrop?.[0];

        if (!title || !overview || !genres || !runtime) {
            return res.status(400).json({
                success: false,
                message: "Title, overview, genres, and runtime are required",
            });
        }

        if (!posterFile || !backdropFile) {
            return res.status(400).json({
                success: false,
                message: "Both poster and backdrop images are required",
            });
        }

        let parsedGenres = [];

        try {
            parsedGenres = JSON.parse(genres);
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: "Invalid genres format",
            });
        }

        const posterUpload = await imagekit.upload({
            file: posterFile.buffer,
            fileName: `poster_${Date.now()}`,
            folder: "/cinevault/movies/posters",
        });

        const backdropUpload = await imagekit.upload({
            file: backdropFile.buffer,
            fileName: `backdrop_${Date.now()}`,
            folder: "/cinevault/movies/backdrops",
        });

        const newMovie = await movieModel.create({
            title,
            overview,
            posterPath: posterUpload.url,
            posterFileId: posterUpload.fileId,
            backdropPath: backdropUpload.url,
            backdropFileId: backdropUpload.fileId,
            genres: parsedGenres,
            originalLanguage: originalLanguage || "en",
            runtime: Number(runtime),
            voteAverage: randomVoteAverage(),
            voteCount: randomVoteCount(),
        });

        return res.status(201).json({
            success: true,
            message: "Movie added successfully",
            movie: newMovie,
        });
    } catch (error) {
        console.error("Error adding movie:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while adding movie",
        });
    }
};

// done
export const getAllMovies = async (req, res) => {
    try {
        const movies = await movieModel.find().sort({ createdAt: 1 });

        return res.status(200).json({
            success: true,
            movies,
        });
    } catch (error) {
        console.error("Error fetching movies:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching movies",
        });
    }
};

// done
export const getMovieById = async (req, res) => {
    try {
        const { movieId } = req.params;
        const movie = await movieModel.findById(movieId);

        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found",
            });
        }

        const casts = await castModel.find({ movie: movieId }).select("name character profile_path");

        return res.status(200).json({
            success: true,
            movieDetail: { movie, casts },
        });
    } catch (error) {
        console.error("Error fetching movie:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching movie",
        });
    }
};

// done
export const handleDeleteMovie = async (req, res) => {
    try {
        const { moveiId } = req.params;
 
        const movie = await movieModel.findById(moveiId);
 
        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found",
            });
        }
 

        const casts = await castModel.find({ movie: moveiId });
 
     
        for (const cast of casts) {
            try {
                await imagekit.deleteFile(cast.profileFileId);
            } catch (deleteError) {
                console.error(
                    `Error deleting cast photo (${cast._id}):`,
                    deleteError
                );
            }
        }
    
 
     
        await castModel.deleteMany({ movie: moveiId });

        await showModel.deleteMany({movie: moveiId})
 
        await favouriteMovieListModel.deleteMany({movie: moveiId})
  
        try {
            await imagekit.deleteFile(movie.posterFileId);
        } catch (deleteError) {
            console.error("Error deleting poster from ImageKit:", deleteError);
        }
 
        try {
            await imagekit.deleteFile(movie.backdropFileId);
        } catch (deleteError) {
            console.error("Error deleting backdrop from ImageKit:", deleteError);
        }
 
       
        await movieModel.findByIdAndDelete(moveiId);
 
        return res.status(200).json({
            success: true,
            message: "Movie and all linked cast members deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting movie:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while deleting movie",
        });
    }
};