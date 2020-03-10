//Packages
import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Nav from "./Nav"
import { HeaderContainer } from "../../../styles/Styles"


function Header() {
  return (
    <HeaderContainer>
        <Link to = "/"><h4>Logo Goes Here</h4> </Link>

        <Nav />

    </HeaderContainer>
  );
}


export default Header;