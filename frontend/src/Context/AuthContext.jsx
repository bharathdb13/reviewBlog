import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchUserData(storedToken);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch("http://localhost:1337/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("Failed to fetch user data");

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("User fetch error:", error);
      logout(); // Logout if token is invalid
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: email, password }),
      });

      const data = await response.json();
      console.log("Login Response:", data); // Debugging log

      if (!response.ok || !data.jwt) {
        throw new Error(data?.message || "Login failed");
      }

      localStorage.setItem("token", data.jwt);
      setToken(data.jwt);
      setUser(data.user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
