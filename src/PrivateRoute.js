import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import LandingPage from './components/landing-page';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useSelector(
    state => state.users.userData
  );

  const storageToken = localStorage.getItem('token');
  console.log('localstorage token: ', storageToken);

  return (
    <Route {...rest} render={props =>
      // token ?
      storageToken ?
          <Component {...props} {...rest} />
        : <LandingPage />}
    />
  );
};

export default PrivateRoute;
