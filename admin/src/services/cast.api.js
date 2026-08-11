import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/cast`,
  withCredentials: true,
});

export async function addCast(movieId, { name, character, pfp }) {
  try {
    const formData = new FormData();
    formData.append("name", name);
    if (character) formData.append("character", character);
    formData.append("pfp", pfp); 

    const response = await api.post(`/add/${movieId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCastsByMovie(movieId) {
  try {
    const response = await api.get(`/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteCast(castId) {
  try {
    const response = await api.delete(`/delete/${castId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}