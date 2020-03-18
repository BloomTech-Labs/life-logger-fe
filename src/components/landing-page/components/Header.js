//Packages
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../../../styles/Styles';
//Components
import Nav from './Nav';

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <h4>Lyfe Logger</h4>{' '}
      </Link>

      <Nav />
    </HeaderContainer>
  );
}

export default Header;
