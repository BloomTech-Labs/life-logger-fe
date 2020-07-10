/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import SignUpForm from './components/SignupForm';
import CreateTask from './components/CreateTask'
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <Route exact path="/signup" component={SignUpForm} />
      <Route exact path="/createTask" component={CreateTask} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Fragment>
  );
};

export default App;
