import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // { id, username, email }

  const setUserFromToken = (token) => {
    try {
      const decoded = jwtDecode(token);

      // questi nomi dipendono da come hai messo i claim
      const id =
        decoded.sub ||
        decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

      const email =
        decoded.email ||
        decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];

      const username =
        decoded.username || decoded.name || email; // fallback se manca

      setUser({ id, email, username });
      setIsAuthenticated(true);
    } catch (err) {
      console.error("Errore nel decode del token:", err);
      setUser(null);
      setIsAuthenticated(false);
    }
  };


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserFromToken(token);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setUserFromToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
