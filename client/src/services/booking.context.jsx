import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [pastBookings, setPastBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  return (
    <BookingContext.Provider value={{ bookings, setBookings, pastBookings, setPastBookings, loading, setLoading, error, setError }}>
      {children}
    </BookingContext.Provider>
  );
};