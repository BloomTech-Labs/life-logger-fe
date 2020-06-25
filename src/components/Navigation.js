/** @jsx jsx */
import { jsx } from 'theme-ui';
import { NavLink } from 'theme-ui';
import { Flex } from "theme-ui";
import styled from '@emotion/styled';
import DarkModeToggle from './header/DarkModeToggle';

const HeaderGrid = styled.header`
  ${({ theme: t }) => `
    width: 100%;
    height: 70px;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: minmax(40px, 225px) 1fr 40px minmax(100px, 200px);
    grid-gap: 15px; 
    align-items: center;
    background: ${t.colors.primary};
  `}
`;

const StyledLink = styled(NavLink)`
  ${({ theme: t }) => `
  text-decoration: none;
  color: ${t.colors.text};
  `}
`;

const Navigation = () => {
    return (
        <HeaderGrid>
      <DarkModeToggle />

            <Flex as='nav'>
                <StyledLink href='/' p={2} sx={{hover: "white"}}>
                    Home
                </StyledLink>
                <StyledLink href='/dashboard' p={2}>
                    Dashboard
                </StyledLink>
                <StyledLink href='/about' p={2}>
                    About
                </StyledLink>
            </Flex>
        </HeaderGrid>
    )
}

export default Navigation;