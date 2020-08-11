/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import BurgerMenu from "../BurgerMenu";

const HeaderDiv = styled.div `
  background: #002550;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
`

const Logo = styled.img `
  width: 40px;
  height: 50px;
  margin-left: 15px;
  margin-top: 15px;
`

const Title = styled.h2 `
  color: white;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-left: 130px;
`

const Header = () => {
  return (
    <HeaderDiv>
      <Logo src="/OrangeIcon.png" />
      <BurgerMenu/>
      <Title>Life Logger</Title>
    </HeaderDiv>
  );
};

export default Header;
