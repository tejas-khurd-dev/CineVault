import express from "express";
import {authUserMiddleware} from "../middlewares/auth.middleware.js";
import adminOnlyMiddleware from "../middlewares/adminOnly.middleware.js";
import { getCastsByMovie, handleAddCast, handleDeleteCast } from "../controllers/cast.controller.js";
import storePFP from "../middlewares/storePFP.middleware.js";

const castRouter = express.Router();


castRouter.post("/add/:movieId", authUserMiddleware, adminOnlyMiddleware, storePFP, handleAddCast);

castRouter.delete("/delete/:castId", authUserMiddleware, adminOnlyMiddleware, handleDeleteCast);

castRouter.get("/:movieId", getCastsByMovie);

export default castRouter;