import React from "react";
import { Component } from "react";
import Login from "./Login";
import Registraition from "./Registraition";

class LandingPage extends Component {
  state = {
    isUser: true
  };

ToggleRegisterComponent() {
  this.setState({
    isUser: false
  })
}

  render() {
    return this.state.isUser ? (
      <div>
        <Login />{" "}
        <button onClick={() => this.ToggleRegisterComponent()}>Or register here!</button>
      </div>
    ) : (
      <Registraition />
    );
  }
}

export default LandingPage;
