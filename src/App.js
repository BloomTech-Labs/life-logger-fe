//Style
import './App.css';

//Packages
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
//Components
import Header from './components/dashboard/header/Header';
import LandingPage from './components/landing-page/index';
import { createUser, fetchUser } from './store/actions';
import { AppContainer } from './styles/Styles';

function App() {
  return (
    <AppContainer>
      <Header />
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route exact path="/home" component={LandingPage} />
    </AppContainer>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users,
    events: state.events
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  createUser
})(App);
