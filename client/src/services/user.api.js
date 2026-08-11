import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/user`,
  withCredentials: true,
});


export async function updateUserInfo({ username, pfp }) {
  try {
    const formData = new FormData();
    if (username) formData.append("username", username);
    if (pfp) formData.append("pfp", pfp); 

    const response = await api.put("/updateUserInfo", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}