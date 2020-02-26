import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import LandingPage from "./components/landing page/LandingPage";

import { connect } from "react-redux";
import { createUser, fetchUser, /*updateUser*/ } from "./actions/index";

function App() {
  return (
    <div>
      <LandingPage />
      <Dashboard />
    </div>
  );
}



const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { fetchUser, createUser })(App);
