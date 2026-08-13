import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/book-show`,
  withCredentials: true,
});


export async function getAllBookingsAdmin() {
  try {
    const response = await api.get("/admin/all");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}