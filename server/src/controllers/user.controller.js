import ImageKit from "imagekit";
import userModel from "../models/user.model.js";
import movieModel from "../models/movie.model.js";
import favouriteMovieListModel from "../models/favouriteMovieList.model.js";

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export const handleUpdateUser = async (req, res) => {
    try {
        const userId = req.user.id; 
        const { username } = req.body;
        const file = req.file; 

        if (!username && !file) {
            return res.status(400).json({
                success: false,
                message: "Provide at least username or pfp to update",
            });
        }

        const updateData = {};

        if (username) {
            updateData.username = username;
        }

        if (file) {
            const currentUser = await userModel.findById(userId);

            if (!currentUser) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }

    
            if (currentUser.profileImageFileId) {
                try {
                    await imagekit.deleteFile(currentUser.profileImageFileId);
                } catch (deleteError) {
                    console.error("Error deleting old profile image:", deleteError);
                }
            }

            const uploadResponse = await imagekit.upload({
                file: file.buffer,
                fileName: `pfp_${userId}_${Date.now()}`,
                folder: "/cinevault/profile-pictures",
            });

            updateData.profileImage = uploadResponse.url;
            updateData.profileImageFileId = uploadResponse.fileId;
        }

        const updatedUser = await userModel
            .findByIdAndUpdate(userId, updateData, { returnDocument: "after" })
            .select("-password");

        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            user: updatedUser,
        });
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while updating user",
        });
    }
};

export const handleUserFavouriteMovies = async (req, res) => {
  try {
    const { movieId } = req.params;
    const userId = req.user.id;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const movie = await movieModel.findById(movieId);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    const existingFavourite = await favouriteMovieListModel.findOne({
      user: userId,
      movie: movieId,
    });

    if (existingFavourite) {
      return res.status(409).json({
        success: false,
        message: "Movie already added to favourites",
      });
    }

    const favourite = await favouriteMovieListModel.create({
      user: userId,
      movie: movieId,
    });

    return res.status(201).json({
      success: true,
      message: "Movie added to favourites",
      favourite,
    });
  } catch (error) {
    console.error("Error adding movie to favourites:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while adding movie to favourites",
    });
  }
};