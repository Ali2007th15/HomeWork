import React, { createContext, useContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const API_URL = "http://192.168.100.232:7261/api/Users";

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===== Restore Session =====
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const storedUser = await SecureStore.getItemAsync("userData");

        if (storedUser) {
          const parsed = JSON.parse(storedUser);
          setUserData(parsed);
          setUserRole(parsed.email === "ady-admin@gmail.com" ? "admin" : "user");
          setIsAuthenticated(true);
        }
      } catch (e) {
        console.log("Session restore error:", e);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  // ===== LOGIN =====
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/Login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        return { success: false, message: "Invalid email or password" };
      }

      const data = await response.json();

      // save user in secure storage
      await SecureStore.setItemAsync("userData", JSON.stringify(data));

      setUserData(data);
      setUserRole(data.email === "ady-admin@gmail.com" ? "admin" : "user");
      setIsAuthenticated(true);

      return { success: true };
    } catch (error) {
      return { success: false, message: "Server error" };
    }
  };

  // ===== LOGOUT =====
  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync("userData");
      setIsAuthenticated(false);
      setUserData(null);
      setUserRole(null);
    } catch (e) {
      console.log("Logout error:", e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userData,
        userRole,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
