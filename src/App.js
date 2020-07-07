/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import SignUpForm from './components/SignupForm';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import TaskPage from './components/TaskPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/LandingPage" component={LandingPage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="/" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/Taskpage" component={TaskPage} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
