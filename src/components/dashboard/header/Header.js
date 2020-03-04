//Packages
import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Nav from './Nav'


function Header() {
  return (
    <div className = "header-container">
      <div className = "header-logo-container">
        <h4>Logo Goes Here</h4>
      </div>

      <div className = "header-nav-container">
        <Nav />
      </div>
    </div>
  );
}


export default Header;