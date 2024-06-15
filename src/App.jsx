import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import ClockPage from './pages/ClockPage';
import RegistrationPage from "./pages/RegistrationPage"

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/clock" element={<ClockPage />}>
            <Route path="Registration" element={<RegistrationPage />}/>
            </Route>
        </Route>
    </Routes>
    
  );
};

export default App
