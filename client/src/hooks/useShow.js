import { useContext } from "react";
import { ShowContext } from "../services/show.context.jsx";
import { addShow, getAllShows, getShowsByMovie, deleteShow } from "../services/show.api.js";

export const useShow = () => {
  const context = useContext(ShowContext);

  if (!context) {
    throw new Error("useShow must be used within ShowProvider");
  }

  const { shows, setShows, loading, setLoading, error, setError } = context;

  const handleAddShow = async (movieId, { date, time, price }) => {
    setLoading(true);
    setError("");
    try {
      const data = await addShow(movieId, { date, time, price });
      setShows((prev) => [...prev, data.show]);
      return data.show;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleGetAllShows = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getAllShows();
      setShows(data.shows)
      console.log(data);
      return data.shows;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleGetShowsByMovie = async (movieId) => {
    setLoading(true);
    setError("");
    try {
      const data = await getShowsByMovie(movieId);
      setShows(data.shows);
      return data.shows;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteShow = async (showId) => {
    setLoading(true);
    setError("");
    try {
      await deleteShow(showId);
      setShows((prev) => prev.filter((show) => show._id !== showId));
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
    shows,
    loading,
    error,
    setError,
    handleAddShow,
    handleGetAllShows,
    handleGetShowsByMovie,
    handleDeleteShow,
  };
};