import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

// ✅ Import the AuthProvider (you created this file earlier)
import { AuthProvider } from './hooks/AuthContext';

function App() {
  return (
    <TripProvider>
      <Router>
        {/* ✅ Wrap the entire app in AuthProvider */}
        <AuthProvider>
          <div className='w-full min-h-screen bg-neutral-50 dark:bg-[#12141c] text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/train' element={<Train />} />
              <Route path='/detail/:tripType' element={<Detail />} />
              <Route path='/detail' element={<Detail />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/about' element={<About />} />
              <Route path='/category' element={<Category />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/admin' element={<AdminPanel />} />
              <Route path='/news' element={<News />} />
            </Routes>
            <ChatBot />
            <Footer />
          </div>
        </AuthProvider>
      </Router>
    </TripProvider>
  );
}

export default App;
