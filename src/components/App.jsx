import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Lessons from './Lessons';
import About from './About';
import Navbar from './Navbar';

export const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

