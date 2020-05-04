//Packages
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//Components
import { HeaderContainer } from '../../../styles/Styles';
import Nav from './Nav';
import Logo from '../../../assets/img/mainLogo.png'

function Header() {
  const { username } = useSelector(state => state.users.userData);

  return (
    <HeaderContainer className="navbar">
      <div className='leftContent'>
        <img className="logo" src={Logo} alt='' style={{marginLeft: '10px'}} />
        <Link
          to="/"
          style={{
            marginLeft: '15px',
            textDecoration: 'none',
            color: 'white'
          }}
        >
          <h4>LYFE LOGGER</h4>{' '}
          <div className="user">
            {username ? `Logged in as: ${username}` : null}
          </div>
        </Link>
      </div>
      <Nav />
    </HeaderContainer>
  );
}

export default Header;
