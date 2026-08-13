import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/show`,
  withCredentials: true,
});

export async function addShow(movieId, { date, time, price }) {
  try {
    const response = await api.post(`/add/${movieId}`, { date, time, price });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllShows() {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getShowsByMovie(movieId) {
  try {
    const response = await api.get(`/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteShow(showId) {
  try {
    const response = await api.delete(`/delete/${showId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getShowById(showId) {
    try {
        const response = await api.get(`/one/${showId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}