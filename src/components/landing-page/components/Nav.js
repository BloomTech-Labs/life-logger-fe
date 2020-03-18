//Packages
import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link as UnstyledLink } from 'react-router-dom';
import styled from 'styled-components';
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
            <Link to="/">Home</Link>
          </div>

          <div className="nav-link">
            <Link to="/calendar">Calendar</Link>
          </div>

          <div className="nav-link">
            <Link to="/">Settings</Link>
          </div>

          <div className="nav-link">
            <Link
              to="/home"
              onClick={() => props.unfetchUser()}
            >
              Log Out
            </Link>
          </div>
        </>}
    </NavContainer>
  );
};

const Link = styled(UnstyledLink)`

`;

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
