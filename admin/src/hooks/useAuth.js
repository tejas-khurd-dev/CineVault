import { useContext, useEffect } from "react";
import { AuthUserContext } from "../services/auth.user.context.jsx";
import { getMe, login, logout, googleLogin, updateUserInfo } from "../services/auth.api.js";

export const useAuth = () => {
  const context = useContext(AuthUserContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthUserProvider");
  }

  const { user, setUser, loading, setLoading, error, setError } = context;

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    setError("");
    try {
      const data = await login({ email, password });
      setUser(data.user);
      return data.user;
    } catch (error) {
      const message = error?.response?.data?.msg || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (credential) => {
    setLoading(true);
    setError("");
    try {
      const data = await googleLogin(credential);
      setUser(data.user);
      return data.user;
    } catch (error) {
        console.error("Google login error:", error);
      const message = error?.response?.data?.msg || error?.message || "Google authentication failed";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    setError("");
    try {
      await logout();
      setUser(null);
    } catch (error) {
      const message = error?.response?.data?.msg || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUserInfo = async ({ username, pfp }) => {
    setLoading(true);
    setError("");
    try {
      const data = await updateUserInfo({ username, pfp });
      setUser(data.user);
      return data.user;
    } catch (error) {
      const message = error?.response?.data?.msg || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getAndSetUser = async () => {
      try {
        const data = await getMe();
        setUser(data.user);
      } catch (error) {
        setUser(null);
        setError("");
      } finally {
        setLoading(false);
      }
    };

    getAndSetUser();
  }, [setLoading, setUser]);

  return { user, loading, error, setError, handleLogin, handleLogout, handleGoogleLogin, handleUpdateUserInfo };
};
