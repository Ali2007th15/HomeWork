import React, { useEffect, useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Train from './components/train/Train';
import Detail from './components/detail/Detail';
import Checkout from './components/checkout/Checkout';
import News from './components/news/News.jsx';
import About from './components/about/About';
import ChatBot from './components/chatbot/ChatBot';
import Category from './components/category/Category';
import { TripProvider } from './context/TripContext'; 
import Dashboard from './components/dashboard/DashBoard';
import AdminPanel from './components/adminpanel/AdminPanel.jsx';
import Login from './components/login/Login';
import Register from './components/register/Register';

// Create Auth Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const checkAuth = async () => {
      // First check session storage
      const storedUserData = sessionStorage.getItem('userData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        setIsAuthenticated(true);
        setUserRole(userData.role);
        setIsLoading(false);
        return;
      }
      
      // If not in session, check server
      try {
        const response = await fetch("https://localhost:7261/api/Users/CurrentUser", {
          credentials: "include"
        });
        
        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(true);
          setUserRole(data.Role);
          
          // Store in session storage
          sessionStorage.setItem('userData', JSON.stringify({
            role: data.Role,
            email: data.Email,
            firstName: data.FirstName,
            lastName: data.LastName
          }));
        }
      } catch (error) {
        console.error("Auth check error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUserRole(userData.role);
    sessionStorage.setItem('userData', JSON.stringify(userData));
  };

  const logout = async () => {
    try {
      await fetch("https://localhost:7261/api/Users/Logout", {
        method: "POST",
        credentials: "include"
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
    
    setIsAuthenticated(false);
    setUserRole(null);
    sessionStorage.removeItem('userData');
  };

  const value = {
    isAuthenticated,
    userRole,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

function PrivateRoute({ children, roles }) {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if not authenticated after loading
    if (!auth.isLoading && !auth.isAuthenticated) {
      navigate('/');
    }
    
    // Redirect if role doesn't match
    if (!auth.isLoading && roles && !roles.includes(auth.userRole)) {
      navigate('/');
    }
  }, [auth, navigate, roles]);

  if (auth.isLoading) {
    return (
      <div className="full-page-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!auth.isAuthenticated || (roles && !roles.includes(auth.userRole))) {
    return null; // Already redirected in useEffect
  }

  return children;
}

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const openLogin = () => {
    setLoginOpen(true);
    setRegisterOpen(false);
  };

  const openRegister = () => {
    setRegisterOpen(true);
    setLoginOpen(false);
  };

  const closeLogin = () => {
    setLoginOpen(false);
  };

  const closeRegister = () => {
    setRegisterOpen(false);
  };

  return (
    <TripProvider>
      <AuthProvider>
        <Router>
          <div className="w-full min-h-screen bg-neutral-50 dark:bg-[#12141c] text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden">
            <Navbar 
              openLogin={openLogin} 
              openRegister={openRegister} 
            />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/train" element={<Train />} />
              <Route path="/detail/:tripType" element={<Detail />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/category" element={<Category />} />
              <Route path="/news" element={<News/>} />
              
              <Route path="/dashboard" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              
              <Route path="/admin" element={
                <PrivateRoute roles={['admin']}>
                  <AdminPanel/>
                </PrivateRoute>
              } />
            </Routes>
            
            {registerOpen && (
              <Register 
                onClose={closeRegister} 
                openLogin={openLogin} 
              />
            )}
            
            {loginOpen && (
              <Login 
                onClose={closeLogin} 
                openRegister={openRegister} 
              />
            )}
            
            <ChatBot />
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </TripProvider>
  );
}

export default App;