import express from "express";
import {authUserMiddleware} from "../middlewares/auth.middleware.js";
import adminOnlyMiddleware from "../middlewares/adminOnly.middleware.js";
import { getDashboardStats, getEarningsStats } from "../controllers/dashboard.controller.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/", authUserMiddleware, adminOnlyMiddleware, getDashboardStats);

dashboardRouter.get("/earnings", authUserMiddleware, adminOnlyMiddleware, getEarningsStats);


export default dashboardRouter;