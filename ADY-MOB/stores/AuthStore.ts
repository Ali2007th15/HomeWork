import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
  id: number;
  email: string;
  name?: string;
  password?: string;
  lastName?: string;
  birthDate?: string;
  phoneNumber?: string;
  country?: string;
  gender?: string;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  

  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  register: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  updateProfile: (profileData: Partial<User>) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  checkAuthStatus: () => Promise<void>;
}

const API_BASE_URL = 'http://localhost:3000'; 

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: false,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        
        try {
          
          const response = await fetch(`${API_BASE_URL}/users?email=${email}`);
          const users = await response.json();
          
          if (users.length === 0) {
            set({ isLoading: false });
            return { success: false, message: 'User not found' };
          }
          
          const user = users[0];
          
          if (user.password !== password) {
            set({ isLoading: false });
            return { success: false, message: 'Invalid password' };
          }
          
          
          const token = `token_${user.id}_${Date.now()}`;
          
          
          const { password: _, ...userWithoutPassword } = user;
          
          set({ 
            user: userWithoutPassword,
            token,
            isAuthenticated: true,
            isLoading: false 
          });
          
          return { success: true };
        } catch (error) {
          set({ isLoading: false });
          return { success: false, message: 'Network error' };
        }
      },

      register: async (email: string, password: string) => {
        set({ isLoading: true });
        
        try {
          const checkResponse = await fetch(`${API_BASE_URL}/users?email=${email}`);
          const existingUsers = await checkResponse.json();
          
          if (existingUsers.length > 0) {
            set({ isLoading: false });
            return { success: false, message: 'User already exists' };
          }
          
        
          const newUser = {
            email,
            password,
            createdAt: new Date().toISOString()
          };
          
          const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
          });
          
          if (!response.ok) {
            throw new Error('Registration failed');
          }
          
          const createdUser = await response.json();
          
         
          const token = `token_${createdUser.id}_${Date.now()}`;
          
          
          const { password: _, ...userWithoutPassword } = createdUser;
          
          set({ 
            user: userWithoutPassword,
            token,
            isAuthenticated: true,
            isLoading: false 
          });
          
          return { success: true };
        } catch (error) {
          set({ isLoading: false });
          return { success: false, message: 'Registration failed' };
        }
      },

      updateProfile: async (profileData: Partial<User>) => {
        const { user } = get();
        if (!user) return { success: false, message: 'User not authenticated' };
        
        set({ isLoading: true });
        
        try {
        
          const currentUserResponse = await fetch(`${API_BASE_URL}/users/${user.id}`);
          
          if (!currentUserResponse.ok) {
            throw new Error('Failed to fetch current user data');
          }
          
          const currentUserData = await currentUserResponse.json();
          
        
          const updatedUser = { ...currentUserData, ...profileData };
          
          const response = await fetch(`${API_BASE_URL}/users/${user.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
          });
          
          if (!response.ok) {
            throw new Error('Profile update failed');
          }
          
          const savedUser = await response.json();
          
        
          const { password: _, ...userWithoutPassword } = savedUser;
          
          set({ 
            user: userWithoutPassword,
            isLoading: false 
          });
          
          return { success: true };
        } catch (error) {
          set({ isLoading: false });
          return { success: false, message: 'Profile update failed' };
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      checkAuthStatus: async () => {
        const { user, token } = get();
        
        if (user && token) {
          set({ isAuthenticated: true });
        } else {
          set({ isAuthenticated: false });
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);