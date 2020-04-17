//Style
import './App.css';

//Packages
import React, { useEffect } from 'react';
import { initGA } from './InitGA';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard';
import Calendar from './components/dashboard/components/Calendar';
import EditTask from './components/dashboard/components/EditTask';
import Task from './components/dashboard/components/Task';
import Header from './components/landing-page/components/Header';
import { AppContainer } from './styles/Styles';

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <AppContainer id="container">
      <Header />
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute path="/task/:id" component={Task} />
      <PrivateRoute path="/edit-task/:id" component={EditTask} />
      <PrivateRoute path="/calendar" component={Calendar} />
    </AppContainer>
  );
}

export default App;
