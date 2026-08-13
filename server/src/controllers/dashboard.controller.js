import bookingModel from "../models/booking.model.js";
import movieModel from "../models/movie.model.js";
import userModel from "../models/user.model.js";

export const getDashboardStats = async (req, res) => {
    try {
        const paidBookings = await bookingModel.find({ isPaid: true });

        const totalBookings = paidBookings.length;
        const totalRevenue = paidBookings.reduce((sum, booking) => sum + booking.amount, 0);

        const activeMoviesCount = await movieModel.countDocuments();
        const totalUsers = await userModel.countDocuments();

        return res.status(200).json({
            success: true,
            stats: {
                totalBookings,
                totalRevenue,
                activeMoviesCount,
                totalUsers,
            },
        });
    } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching dashboard stats",
        });
    }
};



const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 
export const getEarningsStats = async (req, res) => {
    try {
        const monthlyAgg = await bookingModel.aggregate([
            { $match: { isPaid: true } },
            {
                $group: {
                    _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
                    revenue: { $sum: "$amount" },
                },
            },
            { $sort: { "_id.year": 1, "_id.month": 1 } },
        ]);
 
        const yearlyAgg = await bookingModel.aggregate([
            { $match: { isPaid: true } },
            {
                $group: {
                    _id: { year: { $year: "$createdAt" } },
                    revenue: { $sum: "$amount" },
                },
            },
            { $sort: { "_id.year": 1 } },
        ]);
 
        const monthly = monthlyAgg.map((entry) => ({
            label: `${MONTH_NAMES[entry._id.month - 1]} ${entry._id.year}`,
            year: entry._id.year,
            month: entry._id.month,
            revenue: entry.revenue,
        }));
 
        const yearly = yearlyAgg.map((entry) => ({
            label: `${entry._id.year}`,
            year: entry._id.year,
            revenue: entry.revenue,
        }));
 
        return res.status(200).json({
            success: true,
            monthly,
            yearly,
        });
    } catch (error) {
        console.error("Error fetching earnings stats:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching earnings stats",
        });
    }
};