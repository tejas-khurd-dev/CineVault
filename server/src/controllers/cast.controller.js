import castModel from "../models/cast.model.js";
import movieModel from "../models/movie.model.js";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// done
export const handleAddCast = async (req, res) => {
    try {
        const { name, character } = req.body;
        const {movieId} = req.params
        const file = req.file;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "name is required",
            });
        }

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "Cast member's photo is required",
            });
        }

        const movie = await movieModel.findById(movieId);


        const uploadResponse = await imagekit.upload({
            file: file.buffer,
            fileName: `cast_${movieId}_${Date.now()}`,
            folder: "/cinevault/movies/casts",
        });

        const newCast = await castModel.create({
            movie: movieId,
            name,
            character,
            profilePath: uploadResponse.url,
            profileFileId: uploadResponse.fileId,
        });


        return res.status(201).json({
            success: true,
            message: "Cast member added successfully",
            cast: newCast,
        });
    } catch (error) {
        console.error("Error adding cast member:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while adding cast member",
        });
    }
};

// done
export const getCastsByMovie = async (req, res) => {
    try {
        const { movieId } = req.params;

        const casts = await castModel
            .find({ movie: movieId })
            .select("name character profilePath");

        return res.status(200).json({
            success: true,
            casts,
        });
    } catch (error) {
        console.error("Error fetching casts:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching casts",
        });
    }
};

// done
export const handleDeleteCast = async (req, res) => {
    try {
        const { castId } = req.params;

        const cast = await castModel.findById(castId);

        if (!cast) {
            return res.status(404).json({
                success: false,
                message: "Cast member not found",
            });
        }

        try {
            await imagekit.deleteFile(cast.profileFileId);
        } 
        catch (deleteError) {
            console.error("Error deleting cast photo from ImageKit:", deleteError);
        }

        await castModel.findByIdAndDelete(castId);

        return res.status(200).json({
            success: true,
            message: "Cast member removed successfully",
        });
    } catch (error) {
        console.error("Error deleting cast member:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while deleting cast member",
        });
    }
};