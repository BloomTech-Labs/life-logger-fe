import React from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

// switch to Context
const PrivateRoute = ({ component: Component, ...rest }) => {
  // check if user exists, otherwise render Landing page
  //   const { token } = useSelector(state => state.users.userData);

  // TODO: backend has a `/validate-token POST endpoint to verify the token
  // should probably have a util function to hit that endpoint and verify the user before rendering `LandingPage`

  const token = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} {...rest} /> : <LandingPage />
      }
    />
  );
};

// for eslint props validation
PrivateRoute.propTypes = {
  component: PropTypes.element,
};

export default PrivateRoute;
