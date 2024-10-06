import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
function App() {

  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />
          

          {/* Home  */}
          <Routes> <Route path="/" element={<Home/>} /> </Routes>
          {/* Footer */}
           <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
