//Packages
import React, { useState } from "react";
import "./App.css";

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

function App() {
  const token = localStorage.token;

  return (
    
    <AppContainer>
      <Header />
    {token?
      <PrivateRoute path = "/dashboard" component = {Dashboard}/> : 
      <Route exact path = "/" component = {LandingPage}/>}
      {/* <Dashboard /> */}
       {/* to view dashboard without a token */}
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
