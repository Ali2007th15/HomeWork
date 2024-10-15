import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Train from './components/train/Train';
import Detail from './components/train/Detail';
import Checkout from './components/checkout/Checkout';
import About from './components/about/About';

function App() {

  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
       
          <Navbar />  
          <Routes> 
            <Route path="/" element={<Home/>} /> 
            <Route path="/train" element={<Train/>} />
            <Route path="/train/train-details" element={<Detail/>} />
            <Route path="/train/train-details/checkout" element={<Checkout/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        
           <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
