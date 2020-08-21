/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import BurgerMenu from '../BurgerMenu';

const HeaderDiv = styled.header`
  ${({ theme }) => `
    background: ${theme.colors.secondary};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  `}
`;

const Logo = styled.img`
  width: 200px;
  // height: 50px;
`;

const Header = () => {
  return (
    <HeaderDiv data-testid="testtag">
      <Logo src="/LifeLoggerBlue.png" />
      <BurgerMenu />
    </HeaderDiv>
  );
};

export default Header;
