//Packages
import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Nav from "./Nav"
import { HeaderContainer } from "../../../styles/Styles"


function Header() {
  return (
    <HeaderContainer>
        <h4>Logo Goes Here</h4>

        <Nav />

    </HeaderContainer>
  );
}


export default Header;