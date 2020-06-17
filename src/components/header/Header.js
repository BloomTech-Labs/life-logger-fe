/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import DarkModeToggle from './DarkModeToggle';

const HeaderGrid = styled.header`
  ${({ theme: t }) => `
    width: 100%;
    height: 70px;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: minmax(40px, 225px) 1fr 40px minmax(100px, 200px);
    grid-gap: 15px; 
    align-items: center;
    background: ${t.colors.primary}
  `}
`;

const StyledLink = styled(Link)`
  ${({ theme: t }) => `
  text-decoration: none;
  color: ${t.colors.text};
  `}
`;

const Header = () => {
  return (
    <HeaderGrid>
      <img src="" alt="Lyfe Logger logo" />
      <DarkModeToggle />
      <nav
        sx={{
          gridColumnStart: `4`,
          display: `grid`,
          gridTemplateColumns: `repeat(auto-fit, minmax(50px, 100px))`,
        }}
      >
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/dashboard">Dashboard</StyledLink>
      </nav>
    </HeaderGrid>
  );
};

export default Header;
