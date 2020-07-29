/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import DarkModeToggle from './header/DarkModeToggle';
import BurgerMenu from "./BurgerMenu";

const HeaderGrid = styled.header`
  ${({ theme: t }) => `
    width: 100%;
    height: 55px;
    padding: 0 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: ${t.colors.primary};
  `}
`;

const Navigation = () => {
    return (
        <HeaderGrid>
        <DarkModeToggle />
        <BurgerMenu />
                
        </HeaderGrid>
    )
}

export default Navigation;