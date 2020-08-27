/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import DarkModeToggle from './header/DarkModeToggle';

const Ul = styled.ul`
  ${({ open, theme }) => `
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.background};
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${theme.colors.secondary};
    position: fixed;
    transform: ${open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    z-index: 2;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: ${theme.colors.background};
    }
  }`}
`;

const SideNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/aboutus">About Us</a>
      </li>
      <li>
        <a href="/">Log Out</a>
      </li>
      <li>
        <DarkModeToggle />
      </li>
    </Ul>
  );
};

// for eslint props validation
SideNav.propTypes = {
  open: PropTypes.bool,
};

export default SideNav;
