//Packages
import React from 'react';
import { Link } from 'react-router-dom';

//Components
import { NavContainer } from "../../../styles/Styles"


function Nav() {
  return (
    <NavContainer>
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
    </NavContainer>
  );
}


export default Nav;