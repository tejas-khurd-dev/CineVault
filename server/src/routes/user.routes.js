import { handleUpdateUser } from "../controllers/user.controller.js";
import { authUserMiddleware } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/storePFP.middleware.js";
import express from "express";

const userRouter = express.Router()

userRouter.put("/updateUserInfo", authUserMiddleware, upload.single("pfp"), handleUpdateUser);

export default userRouter