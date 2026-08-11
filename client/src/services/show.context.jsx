import { createContext, useState } from "react";

export const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  return (
    <ShowContext.Provider value={{ shows, setShows, loading, setLoading, error, setError }}>
      {children}
    </ShowContext.Provider>
  );
};