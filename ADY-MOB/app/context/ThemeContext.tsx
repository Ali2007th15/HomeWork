import React, { createContext, useContext, useState, ReactNode } from "react";

type ThemeContextType = {
  isDark: boolean;
  colors: {
    background: string;
    card: string;
    text: string;
  };
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const colors = {
    background: isDark ? "#12141c" : "#f2f2f2",
    card: isDark ? "#1b1d27" : "#ffffff",
    text: isDark ? "#ffffff" : "#000000",
  };

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
