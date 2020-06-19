import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { isAuthenticated } from './utils/isAuthenticated';
import LandingPage from './components/LandingPage';

// switch to Context
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [hasAuth, setHasAuth] = useState(false);
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    const fetchAuth = async () => {
      const auth = await isAuthenticated(token);
      setHasAuth(auth);
    };

    fetchAuth();
  }, [token]);

  return (
    <Route
      {...rest}
      render={(props) =>
        hasAuth ? <Component {...props} {...rest} /> : <LandingPage />
      }
    />
  );
};

// for eslint props validation
PrivateRoute.propTypes = {
  component: PropTypes.elementType,
};

export default PrivateRoute;
