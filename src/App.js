/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import SignUpForm from './components/SignupForm';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <Route exact path="/signup" component={SignUpForm} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Fragment>
  );
};

export default App;
