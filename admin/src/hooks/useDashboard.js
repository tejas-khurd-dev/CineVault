import { useState } from "react";
import { getDashboardStats, getEarnings } from "../services/dashboard.api.js";

export const useDashboard = () => {
  const [stats, setStats] = useState(null);
  const [monthlyEarnings, setMonthlyEarnings] = useState([]);
  const [yearlyEarnings, setYearlyEarnings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleGetDashboardStats = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getDashboardStats();
      setStats(data.stats);
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleGetEarnings = async () => {
    setError("");
    try {
      const data = await getEarnings();
      setMonthlyEarnings(data.monthly);
      setYearlyEarnings(data.yearly);
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    }
  };

  return {
    stats,
    monthlyEarnings,
    yearlyEarnings,
    loading,
    error,
    handleGetDashboardStats,
    handleGetEarnings,
  };
};