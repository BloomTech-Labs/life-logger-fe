//Packages
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//Components
import { unfetchUser } from '../../../store/actions/index';
import { NavContainer } from '../../../styles/Styles';
import { useDarkMode } from '../../../hooks/useDarkMode';
import sun from '../../../assets/img/sun.png';
import moon from '../../../assets/img/moon.png';

const Nav = () => {
  const dispatch = useDispatch();
  // We cannot delete the line below because it's the only thing triggering a re-render.
  // If removed, this component will only even check for an id in localStorage once
  // and never re-run based on the user logging in/logging out
  // This is a bad pattern, and needs to be corrected at some point.
  const { isLoggedIn } = useSelector(state => state.users);
  // const id = localStorage.getItem("id");

  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <NavContainer >
      {isLoggedIn &&
        <>
          <div className="nav-link">
            <img src={sun} alt='' />
            <div className="dark-mode__toggle">
              <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}/>  
            </div>
            <img src={moon} alt='' />
          </div>

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
              onClick={() => dispatch(unfetchUser())}
              style={{ textDecoration: 'none',color: 'white'}}
            >
              Log Out
            </Link>
          </div>
        </>}
    </NavContainer>
  );
};

export default Nav;
