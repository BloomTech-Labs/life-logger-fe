/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import BurgerMenu from "../BurgerMenu";

// import Filter from '../dashboard/Filter';

const HeaderDiv = styled.div `
  background: #304E70;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
`

const Header = () => {
  return (
    <HeaderDiv>
      <BurgerMenu/>
      {/* <Filter /> */}
    </HeaderDiv>
  );
};

export default Header;
