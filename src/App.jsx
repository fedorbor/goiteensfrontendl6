import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import ClockPage from './pages/ClockPage';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/clock" element={<ClockPage />}/>
        </Route>
    </Routes>
    
  );
};

export default App
