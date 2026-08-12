import { addUserFavouriteMovie, deleteUserFavouriteMovie, getUserFavouriteMovies, handleUpdateUser } from "../controllers/user.controller.js";
import { authUserMiddleware } from "../middlewares/auth.middleware.js";
import storePFP from "../middlewares/storePFP.middleware.js";
import express from "express";

const userRouter = express.Router()

userRouter.put("/updateUserInfo", authUserMiddleware, storePFP, handleUpdateUser);

userRouter.post("/favourite/add/:movieId", authUserMiddleware, addUserFavouriteMovie);

userRouter.delete("/favourite/delete/:movieId", authUserMiddleware, deleteUserFavouriteMovie);

userRouter.get("/favourite/movies", authUserMiddleware, getUserFavouriteMovies);


export default userRouter