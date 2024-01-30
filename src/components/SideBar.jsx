// sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/sidebar.css';

const SideBar = () => {

  return (
    <div className="admin-dashboard">
    <div className="sidebar">
      <h2>              <img src='QWERTYYY-01-1.png' style={{ height: "80px", width: "170px", filter: "brightness(100%)"}} alt="Logo" />
</h2>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/bookings">Bookings</Link>
        </li>
        <li>
          <Link to="/admin/tours">Tours</Link>
        </li>
        <li>
          <Link to="/admin/customers">Customers</Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </div>
   
    </div>
  );
};

export default SideBar;
