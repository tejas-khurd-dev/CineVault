import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/dashboard`,
  withCredentials: true,
});

export async function getDashboardStats() {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getEarnings() {
  try {
    const response = await api.get("/earnings");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}