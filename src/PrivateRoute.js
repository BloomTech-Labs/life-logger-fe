import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import LandingPage from './components/landing-page';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // We cannot delete the line below because it's the only thing triggering a re-render.
  // If removed, this component will only ever check for an token in localStorage once
  // and never re-run based on the user logging in/logging out
  // This is a bad pattern, and needs to be corrected at some point.
  const { token } = useSelector(state => state.users.userData);

  // We are only ever checking that a token exists, but we are
  // never validating that token
  const storageToken = localStorage.getItem('token');
  console.log(storageToken)

  return (
    <Route
      {...rest}
      render={props =>
        // token ?
        storageToken ? <Component {...props} {...rest} /> : <LandingPage />}
    />
  );
};

export default PrivateRoute;
