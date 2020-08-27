/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import styled from '@emotion/styled';
import BurgerMenu from '../BurgerMenu';
import Logo from '../Logo';

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

const Header = () => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <HeaderDiv data-testid="testtag">
      <div
        sx={{
          width: `50px`,
          height: `50px`,
        }}
      >
        <Logo hasSecondaryBackground={!isDark} />
      </div>
      <BurgerMenu />
    </HeaderDiv>
  );
};

export default Header;
