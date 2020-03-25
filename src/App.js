//Style
import "./App.css";

//Packages
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./components/dashboard";
import EditTask from "./components/dashboard/components/EditTask";
import Task from "./components/dashboard/components/Task";
import Header from "./components/landing-page/components/Header";
import LandingPage from "./components/landing-page/index";
import { AppContainer } from "./styles/Styles";
import GAinit, { initGA } from './InitGA'
import CalenderApp from "./components/dashboard/components/Calendar";

function App(props) {
  useEffect(() => {
 initGA();
  }, [])

  return (
    <AppContainer>
      <Header />
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route path="/home" component={LandingPage} />
      <Route path="/task/:id" component={Task} />
      <Route path="/edit-task/:id" component={EditTask} />
      <Route path="/calendar" component={CalenderApp} />
    </AppContainer>
  );
}

export default App;
