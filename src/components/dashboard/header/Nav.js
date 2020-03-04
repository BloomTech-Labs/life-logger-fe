//Packages
import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className = "nav-container">
      <div className = "nav-links">
        <div className = "nav-link">
          <Link to = "/dashboard">Dashboard</Link>
        </div>

        <div className = "nav-link">
          <Link to = "/dashboard">Dashboard</Link>
        </div>

        <div className = "nav-link">
          <Link to = "/dashboard">Dashboard</Link>
        </div>

        <div className = "nav-link">
          <Link to = "/dashboard">Dashboard</Link>
        </div>
        
        <div className = "nav-search">
          <Link to = "/dashboard">Dashboard</Link>
        </div>
      </div>
    </div>
  );
}


export default Nav;