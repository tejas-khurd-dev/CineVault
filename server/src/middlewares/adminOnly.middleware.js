import userModel from "../models/user.model.js";

const adminOnlyMiddleware = async (req, res, next) => {

    const user = await userModel.findById(req.user.id)

    const userRole = user?.role
  

    if (userRole !== "admin") {
        return res.status(403).json({
            success: false,
            message: "Access denied. Admins only.",
        });
    }
    next();
};

export default adminOnlyMiddleware;