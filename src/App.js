/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import SignUpForm from './components/SignupForm';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import ViewTask from './components/ViewTask';
import CreateTask from './components/CreateTask';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';

const App = () => {
  return (
    <Fragment>
<<<<<<< HEAD
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/viewtask" component={ViewTask} />
        <Route path="/createtask" component={CreateTask} />
      </Switch>
=======
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/taskpage" component={TaskPage} />
          <Route path="/createtask" component={CreateTask} />
        </Switch>
>>>>>>> 7c686cc6fc11788cbe9b177d9a8589616a927ca3
    </Fragment>
  );
};
export default App;
