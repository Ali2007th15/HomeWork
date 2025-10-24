import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await fetch('https://localhost:7261/api/Users/VerifyToken', {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(true);
          setUserData(data);
          setUserRole(data.email === 'ady-admin@gmail.com' ? 'admin' : 'user');
        } else {
          setIsAuthenticated(false);
          setUserData(null);
          setUserRole(null);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUserData(null);
        setUserRole(null);
      }
    };

    verifyAuth();
  }, []);


  const login = (userData, role) => {
    setIsAuthenticated(true);
    setUserData(userData);
    setUserRole(role);
  };

  
  const logout = async () => {
    try {
      await fetch('https://localhost:7261/api/Users/Logout', {
        method: 'POST',
        credentials: 'include',
      });
      setIsAuthenticated(false);
      setUserData(null);
      setUserRole(null);
      navigate('/');
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userData,
        userRole,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook for consuming the context
export const useAuth = () => useContext(AuthContext);
