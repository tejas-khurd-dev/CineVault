import { createContext, useState } from "react";

export const CastContext = createContext();

export const CastProvider = ({ children }) => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  return (
    <CastContext.Provider value={{ casts, setCasts, loading, setLoading, error, setError }}>
      {children}
    </CastContext.Provider>
  );
};