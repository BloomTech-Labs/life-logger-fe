import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { Container, Hero } from './styles';

const LandingPage = () => {
  const [activeForm, setActiveForm] = useState('login');

  return (
    <Container>
      <Hero>
        <h1>Life Logger</h1>
        <p >
          Organize all the things about life that are
          irregular. The things you forget to do. Change
          your oil, rotate your tires, replace your AC air
          filter. Home, auto, other maintenance tasks. Log
          events, later searchable so you can remember when
          /where /what you did.
        </p>
      </Hero>
      {activeForm === 'login'
        ? <LoginForm setActiveForm={setActiveForm} />
        : <RegisterForm setActiveForm={setActiveForm} />}
    </Container>
  );
};

export default LandingPage;
