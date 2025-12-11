import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";

// Описываем тип контекста
type UserData = {
  email: string;
  [key: string]: any;
};

type AuthContextType = {
  isAuthenticated: boolean;
  userData: UserData | null;
  userRole: string | null;
  loading: boolean;
  login: (userData: UserData, role: string) => void;
  logout: () => void;
};

// Создаём контекст с дефолтным значением
const AuthContext = createContext<AuthContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await fetch("https://192.168.100.241:7261/api/Users/RefreshToken", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const data: UserData = await response.json();
          setIsAuthenticated(true);
          setUserData(data);
          setUserRole(data.email === "ady-admin@gmail.com" ? "admin" : "user");
        } else {
          setIsAuthenticated(false);
          setUserData(null);
          setUserRole(null);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUserData(null);
        setUserRole(null);
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  const login = (userData: UserData, role: string) => {
    setIsAuthenticated(true);
    setUserData(userData);
    setUserRole(role);
  };

  const logout = async () => {
    try {
      await fetch("https://192.168.100.241:7261/api/Users/Logout", {
        method: "POST",
        credentials: "include",
      });

      setIsAuthenticated(false);
      setUserData(null);
      setUserRole(null);

      router.replace("/(auth)/MainLogin");
    } catch (error) {
      Alert.alert("Error", "Ошибка при выходе из аккаунта");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, userRole, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Хук с проверкой
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
