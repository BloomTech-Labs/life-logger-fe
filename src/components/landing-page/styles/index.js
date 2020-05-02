import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85vh;
  width: 100%;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55%;
  height: 100vh;
  padding: 20px;
  margin-top: 35px;
  
  h1 {
    font-size: 50px;
    color: #4A4A4A
  }

  p {
    font-size: 2.0rem;
    margin-top: 30px;
    width: 55%;
    text-align: justify;
  }
  
  @media (max-width: 1230px) {
    .top {
      display: none
    }
  }

  // @media (max-width: 1200px) {
  //   width: 80vw;
  // }

`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-top: 20px;
  width: 50%;
  // height: 100vh;
  height: 50vh;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 220px;

    button {
      width: 220px;
      height: 40px;
      background-color: #0abcf9;
      background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
      color: white;
    }

    h2 {
      font-size: 2.3rem
    }

    input {
      height: 30px;
      width: 220px;
    }
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-top: 20px;
  width: 50%;
  height: 100vh;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 220px;

    button {
      width: 220px;
      height: 40px;
      background-color: #0abcf9;
      background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
      color: white;
    }

    h2 {
      font-size: 2.3rem
    }

    input {
      height: 30px;
      width: 220px;
    }
  }
`;
