import styled from "styled-components";
import BackgroundImg from "../assets/img/Background.jpg";



export const AppContainer = styled.div`
text-align: center;
background: url(${BackgroundImg}) no-repeat center center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
color: white;
min-height: 100vh;
max-width:1400px;
margin: auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

//Login Component

export const LoginWrapper = styled.div`
  background-color: rgba(0, 22, 46, 0.5);
  color:white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5%;
  height: 350px;
  > div {
    margin: auto;
    width: 45%;
    display: flex;
    justify-content: center;
    > div {
      > span {
        text-align: center;
        padding: 5%;
        display: flex;
      }
      > h1 {
        padding: 5%;
        margin: auto;
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export const LoginForm = styled.form`
display: flex;
flex-direction: column;
  }
`;