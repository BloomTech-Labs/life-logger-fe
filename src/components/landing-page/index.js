import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';

import confused from '../../assets/img/confused.png'
import logged from '../../assets/img/logged.png'
import Loading from "../UI/Loading";
// styling:
import { Container, Hero } from './styles';

const LandingPage = () => {
  const [activeForm, setActiveForm] = useState('login');
  const { isFetching } = useSelector(state => state.users);
  // let replace = true;
  // const func = () => setTimeout(() => replace = false, 3000);
  // func();
  return (
    <Container>
      <Hero>
        <Fade left duration={1500}>
          <div className='heroImage'>
            <img
              className='top'
              style={{margin:"100px 0px 30px 0px"}}
              src={confused}
              alt='confused'
              width='180px'
              />
            <img
              className='bottom'
              style={{margin: '30px 0px 30px 80px', }}
              src={logged}
              alt='organized'
              width='360px'
            />
          </div>
          <h1>Life Logger</h1>
        </Fade>
        <Fade right>
          <p>
            Organize all the things about life that are
            irregular. The things you forget to do. Log
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
