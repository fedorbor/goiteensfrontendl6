import React from 'react';
import Clock from '../components/Clock/Clock';
import { Link, Outlet } from 'react-router-dom';
 
const ClockPage = () => {
  return (
    
     <div>
  
      <nav>
        <ul>
          <li><Link to="Registration">Registration</Link></li>
        </ul>
      </nav>
      <main>
        <Clock />
        <Outlet />
      </main>
    </div> 
  );
};

export default ClockPage;