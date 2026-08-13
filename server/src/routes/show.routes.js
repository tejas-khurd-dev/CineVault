import express from "express";
import {authUserMiddleware} from "../middlewares/auth.middleware.js";
import adminOnlyMiddleware from "../middlewares/adminOnly.middleware.js";
import { handleAddShow, getShowsByMovie, handleDeleteShow, getShowById } from "../controllers/show.controller.js";
import { getAllShows } from "../controllers/show.controller.js";

const showRouter = express.Router();


showRouter.post("/add/:movieId", authUserMiddleware, adminOnlyMiddleware, handleAddShow);


showRouter.delete("/delete/:showId", authUserMiddleware, adminOnlyMiddleware, handleDeleteShow);


showRouter.get("/:movieId", getShowsByMovie);

showRouter.get('/', getAllShows); 

showRouter.get('/one/:showId', getShowById); 

export default showRouter;