/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUpForm from './components/forms/SignupForm';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/LandingPage';
import LoginForm from './components/forms/LoginForm';
import CreateTask from './components/forms/CreateTask';
import AboutUs from './AboutUs';
import Header from './components/header/Header';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutus" component={AboutUs} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/createtask" component={CreateTask} />
      </Switch>
    </Fragment>
  );
};
export default App;
