import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:7261/api/Users';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthResult {
  success: boolean;
  message?: string;
  user?: User;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<AuthResult>;
  register: (firstName: string, lastName: string, email: string, password: string) => Promise<AuthResult>;
  logout: () => Promise<AuthResult>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  login: async () => ({ success: false, message: '' }),
  register: async () => ({ success: false, message: '' }),
  logout: async () => ({ success: false, message: '' }),
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const token = await AsyncStorage.getItem('jwt');
      if (token) {
        const response = await fetch(`${API_URL}/RefreshToken`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Cookie': `jwt=${token}`,
          },
        });

        if (response.ok) {
          const userData: User = await response.json();
          setUser(userData);
        } else {
          await AsyncStorage.removeItem('jwt');
        }
      }
    } catch (error) {
      console.error('Ошибка проверки сессии:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<AuthResult> => {
    try {
      const response = await fetch(`${API_URL}/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const userData: User = await response.json();

        const setCookieHeader = response.headers.get('set-cookie');
        if (setCookieHeader) {
          const tokenMatch = setCookieHeader.match(/jwt=([^;]+)/);
          if (tokenMatch) {
            await AsyncStorage.setItem('jwt', tokenMatch[1]);
          }
        }

        setUser(userData);
        return { success: true, user: userData };
      } else {
        const errorText = await response.text();
        return { success: false, message: errorText || 'Неверный email или пароль' };
      }
    } catch (error) {
      console.error('Ошибка входа:', error);
      return { success: false, message: 'Ошибка подключения к серверу' };
    }
  };

  const register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<AuthResult> => {
    try {
      const response = await fetch(`${API_URL}/Registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        return await login(email, password);
      } else {
        const errorText = await response.text();
        return { success: false, message: errorText || 'Ошибка регистрации' };
      }
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      return { success: false, message: 'Ошибка подключения к серверу' };
    }
  };

  const logout = async (): Promise<AuthResult> => {
    try {
      const token = await AsyncStorage.getItem('jwt');

      await fetch(`${API_URL}/Logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Cookie': `jwt=${token}`,
        },
      });

      await AsyncStorage.removeItem('jwt');
      setUser(null);
      return { success: true };
    } catch (error) {
      console.error('Ошибка выхода:', error);
      return { success: false, message: 'Ошибка при выходе' };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
};