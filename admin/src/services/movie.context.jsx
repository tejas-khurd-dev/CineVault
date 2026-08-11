import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  return (
    <MovieContext.Provider value={{ movies, setMovies, movie, setMovie, loading, setLoading, error, setError }}>
      {children}
    </MovieContext.Provider>
  );
};