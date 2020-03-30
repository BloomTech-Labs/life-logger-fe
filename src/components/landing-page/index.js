import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Fade from 'react-reveal';
import { useSelector } from 'react-redux';
import Loading from "../UI/Loading";
// styling:
import { Container, Hero } from './styles';

const LandingPage = () => {
  const [activeForm, setActiveForm] = useState('login');
  const { isFetching } = useSelector(state => state.users);

  return (
    <Container>
      <Hero>
        <Fade left>
          <h1>Life Logger</h1>
        </Fade>
        <Fade right>
          <p>
            Organize all the things about life that are
            irregular. The things you forget to do. Change
            your oil, rotate your tires, replace your AC air
            filter. Home, auto, other maintenance tasks. Log
            events, later searchable so you can remember when
            /where /what you did.
          </p>
        </Fade>
      </Hero>
      {isFetching ? <Loading /> :
        <>{activeForm === 'login'
          ? <LoginForm setActiveForm={setActiveForm} />
          : <RegisterForm setActiveForm={setActiveForm} />}
        </>
      }
    </Container>
  );
};

export default LandingPage;
