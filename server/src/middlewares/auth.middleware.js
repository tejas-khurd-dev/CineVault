import jwt from "jsonwebtoken";
import config from "../config/config.js";
import blackListModel from "../models/blackList.model.js";

export async function authUserMiddleware(req, res, next) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  const isTokenExists = await blackListModel.findOne({ token });

  if (isTokenExists) {
    return res.status(401).json({ msg: "Token already blacklisted" });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "invalid token" });
  }
}
