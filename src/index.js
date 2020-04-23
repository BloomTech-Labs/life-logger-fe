//Packages and Modules

import "./index.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import App from "./App";
import rootReducer from "./store/reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider
    store={createStore(
      rootReducer,
      composeEnhancer(applyMiddleware(thunk, logger))
    )}
  >
    <Router>
      <App />
    </Router>{" "}
  </Provider>,
  document.getElementById("root")
);
