import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;

  padding: 20px;

  p {
    width: 300px;
    text-align: center;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 200px;
    height: 200px;

    input,
    button {
      width: 100%;
    }
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 200px;
    height: 200px;

    input,
    button {
      width: 100%;
    }
  }
`;
