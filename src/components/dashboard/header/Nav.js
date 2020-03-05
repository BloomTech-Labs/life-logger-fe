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
          <Link to = "/dashboard">Events</Link>
        </div>

        <div className = "nav-link">
          <Link to = "/dashboard">Settings</Link>
        </div>

        <div className = "nav-link">
          <Link to = "/">Log Out</Link>
        </div>
        
        <div className = "nav-search">
          <button>Search Button</button>
        </div>
      </div>
    </div>
  );
}


export default Nav;