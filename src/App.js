//Packages
import React, { useState } from "react";
import "./App.css";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { createUser, fetchUser, /*updateUser*/ } from "./actions/index";
import { Route } from "react-router-dom";

//Components
import Header from "./components/dashboard/header/Header"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "./components/dashboard/Dashboard";
import LandingPage from "./components/landing page/LandingPage";
import { AppContainer } from "./styles/Styles";
import Footer from "./components/dashboard/Footer";
import Login from "./components/landing page/Login"
 
function App() {
  const token = localStorage.token;

  return (
    
    <AppContainer>
      <Header />
    {token?
      <Redirect to="/dashboard" />: 
      <Route exact path = "/" component = {LandingPage}/>}
      <PrivateRoute path = "/dashboard" component = {Dashboard}/>
      <Route path = "/login" component = {Login} />
       <Footer />
    </AppContainer>
  );
}



const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { fetchUser, createUser })(App);
