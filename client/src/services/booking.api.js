import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/book-show`,
  withCredentials: true,
});

export async function createBooking({ showId, seats }) {
  try {
    const response = await api.post("/create", { showId, seats });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function verifyPayment(payload) {
  try {
    const response = await api.post("/verify", payload);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMyBookings() {
  try {
    const response = await api.get("/my-bookings");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPastBookings() {
  try {
    const response = await api.get("/past-bookings");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}