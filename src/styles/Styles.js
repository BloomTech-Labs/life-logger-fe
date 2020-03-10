import styled from "styled-components";
import BackgroundImg from "../assets/img/Background.jpg";

export const AppContainer = styled.div`
  min-width: fit-content;
  text-align: center;
  background: url(${BackgroundImg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  min-height: 100vh;
  max-width: 1400px;
  margin: auto;
`;

//Header

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
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-height: 50vh;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
  }
  > div {
    margin: auto;
    width: 45%;
    display: flex;
    justify-content: center;
    @media (max-width: 850px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding-top: 5%;
      padding-bottom: 5%;
    }
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
  > div {
    > div {
      > input {
        margin:5% 0%;
       }
    }
    }
  }
`;

export const LoginRegisterButton = styled.button`
width: 100%;
  margin: 5% 0%;
  padding: 5% 0%;
  border: 1px solid white;
  }
`;


//Footer

export const FooterWrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background-color: rgba(0, 22, 46, 0.5);
  width: 100%;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  
  justify-content: space-around;
  @media (max-width: 760px) {
    flex-direction:column;
    align-items: center;
    width:100%; 
    padding-top: 5%;
    padding-bottom: 5%;
  }
`;


export const ContactInfo = styled.div`
width: 45%;
margin: auto;
>p {
  text-align: center;
}
@media (max-width: 600px) {
  width:auto;
`;

export const SocialFollow = styled.div`
  width: 45%;
  margin: auto;
  display: flex;
  padding: 5%;
  flex-wrap: wrap;
  justify-content: space-around;
  > div {
    width: 100%;
  }
`;
export const SocialIcon = styled.a`
 padding:3%;
 &:hover{
  color:aqua;
  transition: 0.3s;
  box-shadow: 0 5px 15px rgba(0,0,0,1);
}
`;