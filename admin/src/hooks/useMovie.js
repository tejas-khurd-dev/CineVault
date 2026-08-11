import { useContext } from "react";
import { MovieContext } from "../services/movie.context.jsx";
import { addMovie, getAllMovies, getMovieById, deleteMovie } from "../services/movie.api.js";

export const useMovie = () => {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error("useMovie must be used within MovieProvider");
  }

  const { movies, setMovies, movie, setMovie, loading, setLoading, error, setError } = context;

  const handleAddMovie = async (formData) => {
    setLoading(true);
    setError("");
    try {
      const data = await addMovie(formData);
      setMovies((prev) => [data.movie, ...prev]);
      return data.movie;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleGetAllMovies = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getAllMovies();
      setMovies(data.movies);
      return data.movies;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleGetMovieById = async (movieId) => {
    setLoading(true);
    setError("");
    try {
      const data = await getMovieById(movieId);
      setMovie(data.movieDetail.movie);
      return data.movieDetail.movie;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      setError(message);
      console.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMovie = async (movieId) => {
    setLoading(true);
    setError("");
    try {
      await deleteMovie(movieId);
      setMovies((prev) => prev.filter((movie) => movie._id !== movieId));
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
    movies,
    movie,
    loading,
    error,
    setError,
    handleAddMovie,
    handleGetAllMovies,
    handleGetMovieById,
    handleDeleteMovie,
  };
};