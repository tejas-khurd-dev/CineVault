import { useContext } from "react";
import { CastContext } from "../services/cast.context.jsx";
import { addCast, getCastsByMovie, deleteCast } from "../services/cast.api.js";

export const useCast = () => {
  const context = useContext(CastContext);

  if (!context) {
    throw new Error("useCast must be used within CastProvider");
  }

  const { casts, setCasts, loading, setLoading, error, setError } = context;

  const handleAddCast = async (movieId, { name, character, pfp }) => {
    setLoading(true);
    setError("");
    try {
      const data = await addCast(movieId, { name, character, pfp });
      setCasts((prev) => [...prev, data.cast]);
      return data.cast;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleGetCastsByMovie = async (movieId) => {
    setLoading(true);
    setError("");
    try {
      const data = await getCastsByMovie(movieId);
      setCasts(data.casts);
      return data.casts;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCast = async (castId) => {
    setLoading(true);
    setError("");
    try {
      await deleteCast(castId);
      setCasts((prev) => prev.filter((cast) => cast._id !== castId));
      return true;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    casts,
    loading,
    error,
    setError,
    handleAddCast,
    handleGetCastsByMovie,
    handleDeleteCast,
  };
};