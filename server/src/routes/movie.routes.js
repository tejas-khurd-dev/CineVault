import express from "express";
import adminOnlyMiddleware from "../middlewares/adminOnly.middleware.js";
import storeMovieImgs from "../middlewares/storeMovieImgs.middleware.js";
import { handleAddMovie, getAllMovies } from "../controllers/movie.controller.js";
import { authUserMiddleware } from "../middlewares/auth.middleware.js";
import { getMovieById } from "../controllers/movie.controller.js";
import { handleDeleteMovie } from "../controllers/movie.controller.js";


const movieRouter = express.Router();


movieRouter.post("/add", authUserMiddleware, adminOnlyMiddleware, storeMovieImgs, handleAddMovie);

movieRouter.get("/", getAllMovies);

movieRouter.get("/:movieId", getMovieById);

movieRouter.delete("/delete/:movieId", authUserMiddleware, adminOnlyMiddleware, handleDeleteMovie)

export default movieRouter;