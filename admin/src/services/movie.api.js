import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/movie`,
  withCredentials: true,
});

export async function addMovie(formData) {
  try {
    const response = await api.post("/add", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllMovies() {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMovieById(movieId) {
  try {
    const response = await api.get(`/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteMovie(movieId) {
  try {
    const response = await api.delete(`/delete/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}