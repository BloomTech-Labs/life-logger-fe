//Packages
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../../../styles/Styles';
//Components
import Nav from './Nav';

function Header() {
  return (
    <HeaderContainer>
      <Link to="/" style={{
        marginLeft: '40px', textDecoration: 'none',
        color: 'white'
      }}
      >
        <h4>LYFE LOGGER</h4>{' '}
      </Link>

      <Nav />
    </HeaderContainer>
  );
}

export default Header;
