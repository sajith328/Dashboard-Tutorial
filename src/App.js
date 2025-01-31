import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './Components/Pages/About';
import Work from './Components/Pages/Work';
import Services from './Components/Pages/Services';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    
  <>
    <Router>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Work' element={<Work />} />
        <Route path='/Service' element={<Services />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </>
  );
}
   

export default App;
