//Packages
import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//Components
import { unfetchUser } from '../../../store/actions/index';
import { NavContainer } from '../../../styles/Styles';

const Nav = props => {
  const { isLoggedIn } = useSelector(state => state.users);
  return (
    <NavContainer>
      {isLoggedIn &&
        <>
          <div className="nav-link">
            <Link exact to="/" style={{ textDecoration: 'none',color: 'white'}}>
              Home
            </Link>
          </div>

          <div className="nav-link">
            <Link to="/calendar" style={{ textDecoration: 'none',color: 'white'}}>
              Calendar
            </Link>
          </div>

          <div className="nav-link">
            <Link to="/settings" style={{ textDecoration: 'none',color: 'white'}}>
              Settings
            </Link>
          </div>

          <div className="nav-link">
            <Link
              exact to="/"
              onClick={() => props.unfetchUser()}
              style={{ textDecoration: 'none',color: 'white'}}
            >
              Log Out
            </Link>
          </div>
        </>}
    </NavContainer>
  );
};

export default connect(
  state => {
    return {
      userData: state.userData,
      isFetching: state.isFetching,
      error: state.error
    };
  },
  { unfetchUser }
)(Nav);
