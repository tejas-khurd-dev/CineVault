import { useState } from "react";
import { getAllBookingsAdmin } from "../services/listBooking.api.js";

export const useBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleGetAllBookingsAdmin = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getAllBookingsAdmin();
      setBookings(data.bookings);
      return data;
    } 
    catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    bookings,
    loading,
    error,
    handleGetAllBookingsAdmin,
  };
};