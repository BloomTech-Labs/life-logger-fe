//Style
import './App.css';

//Packages
<<<<<<< HEAD
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./components/dashboard";
import EditTask from "./components/dashboard/components/EditTask";
import Task from "./components/dashboard/components/Task";
import Header from "./components/landing-page/components/Header";
import { AppContainer } from "./styles/Styles";
import GAinit, { initGA } from './InitGA'
import CalendarApp from "./components/dashboard/components/Calendarlist";
=======
import React, { useEffect } from 'react';
import { initGA } from './InitGA';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard';
import Calendar from './components/dashboard/components/Calendar';
import EditTask from './components/dashboard/components/EditTask';
import Task from './components/dashboard/components/Task';
import Header from './components/landing-page/components/Header';
import { AppContainer } from './styles/Styles';
>>>>>>> 075bb5cc718e8d974893155268565b8fdbf0659b

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <AppContainer>
      <Header />
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute path="/task/:id" component={Task} />
      <PrivateRoute path="/edit-task/:id" component={EditTask} />
      <PrivateRoute path="/calendar" component={Calendar} />
    </AppContainer>
  );
}

export default App;
