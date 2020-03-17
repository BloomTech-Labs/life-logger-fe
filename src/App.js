//Style
import './App.css';

//Packages
import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard';
//Components
import Header from './components/dashboard/header/Header';
import LandingPage from './components/landing-page/index';
import { AppContainer } from './styles/Styles';

function App() {
  return (
    <AppContainer>
      <Header />
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route path="/home" component={LandingPage} />
    </AppContainer>
  );
}

export default App;
