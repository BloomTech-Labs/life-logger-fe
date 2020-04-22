//Packages
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//Components
import { HeaderContainer } from '../../../styles/Styles';
import Nav from './Nav';

function Header() {
  const { username } = useSelector(state => state.users.userData);

  return (
    <HeaderContainer className="navbar">
      <Link
        to="/"
        style={{
          marginLeft: '40px',
          textDecoration: 'none',
          color: 'white'
        }}
      >
        <h4>LYFE LOGGER</h4>{' '}
        <div className="user">
          {username ? `Logged in as: ${username}` : null}
        </div>
      </Link>
      <Nav />
    </HeaderContainer>
  );
}

export default Header;
