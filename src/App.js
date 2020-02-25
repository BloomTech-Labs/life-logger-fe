import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import LandingPage from "./components/landing page/LandingPage";
//These are examples for setting up redux
import { connect } from "react-redux";
import { addTodo } from "./actions";

function App() {
  return (
    <div>
      <LandingPage />
      <Dashboard />
    </div>
  );
}

//This is an example of how to setup a map state to props.
// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos
//   };
// };

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(App);
