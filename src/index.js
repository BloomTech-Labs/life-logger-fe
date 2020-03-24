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
import * as serviceWorker from "./serviceWorker";
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
