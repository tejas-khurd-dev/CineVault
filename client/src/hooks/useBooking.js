import { useContext } from "react";
import { BookingContext } from "../services/booking.context.jsx";
import { createBooking, verifyPayment, getMyBookings, getPastBookings } from "../services/booking.api.js";

export const useBooking = () => {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBooking must be used within BookingProvider");
  }

  const { bookings, setBookings, loading, setLoading, error, setError, pastBookings, setPastBookings } = context;

  const handleCreateBooking = async ({ showId, seats }) => {
    setError("");
    try {
      const data = await createBooking({ showId, seats });
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    }
  };

  const handleVerifyPayment = async (payload) => {
    setError("");
    try {
      const data = await verifyPayment(payload);
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    }
  };

  const handleGetMyBookings = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getMyBookings();
      setBookings(data.bookings);
      return data.bookings;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleGetPastBookings = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getPastBookings();
      setPastBookings(data.pastBookings);
      return data.pastBookings;
    } catch (error) {
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
    setError,
    handleCreateBooking,
    handleVerifyPayment,
    handleGetMyBookings,
    handleGetPastBookings,
    pastBookings
  };
};