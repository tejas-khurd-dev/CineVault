import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/auth`,
  withCredentials: true,
});

export async function login({ email, password }) {
  try {
    const response = await api.post("/login", { email, password });
    return response.data;
  } catch (error) {
    console.error(`Login failed, ${error}`);
    throw error;
  }
}

export async function logout() {
  try {
    await api.get("/logout");
  } catch (error) {
    console.error(`Logout failed, ${error}`);
    throw error;
  }
}

export async function getMe() {
  try {
    const response = await api.get("/get-me");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export async function googleLogin(credential) {
  try {
    const response = await api.post("/google", { credential });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
