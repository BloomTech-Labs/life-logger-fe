/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import SignUpForm from './components/SignupForm';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import TaskPage from './components/ViewTask';
import CreateTask from './components/CreateTask';
import { Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/viewtask" component={ViewTask} />
        <Route path="/createtask" component={CreateTask} />
      </Switch>
    </Fragment>
  );
};
export default App;