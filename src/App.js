//Style
import './App.css';

//Packages
import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard';
import EditTask from './components/dashboard/components/EditTask';
import Task from './components/dashboard/components/Task';
import Header from './components/landing-page/components/Header';
import LandingPage from './components/landing-page/index';
import { AppContainer } from './styles/Styles';

function App(props) {
  return (
    <AppContainer>
      <Header />
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route path="/home" component={LandingPage} />
      <Route path="/task/:id" component={Task} />
      <Route path="/edit-task/:id" component={EditTask} />
    </AppContainer>
  );
}

export default App;
