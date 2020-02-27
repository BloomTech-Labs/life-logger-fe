//Packages
import React from "react";
import "./App.css";

import { connect } from "react-redux";
import { createUser, fetchUser, /*updateUser*/ } from "./actions/index";
import { Route } from "react-router-dom";

//Components
import PrivateRoute from './PrivateRoute'
import Dashboard from "./components/dashboard/Dashboard";
import LandingPage from "./components/landing page/LandingPage";

function App() {
  return (
    <div>
      <Route exact path = "/" component = {LandingPage}/>
      <PrivateRoute path = "/dashboard" component = {Dashboard}/>
      <Dashboard /> {/* to view dashboard without a token */}
    </div>
  );
}



const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { fetchUser, createUser })(App);
