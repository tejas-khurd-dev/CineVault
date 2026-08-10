import { createContext, useState } from "react";

export const AuthUserContext = createContext();

export const AuthUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  return (
    <AuthUserContext.Provider value={{ user, setUser, loading, setLoading, error, setError }}>
      {children}
    </AuthUserContext.Provider>
  );
};