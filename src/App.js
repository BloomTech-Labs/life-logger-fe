/** @jsx jsx */
import { jsx } from 'theme-ui';

import Header from './components/header/Header';
import PrivateRoute from './PrivateRoute';
<<<<<<< HEAD
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
       <Header />
        <h1 sx={{ textAlign: `center` }}>Welcome to Lyfe Logger</h1>

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path='/login' component={LoginForm} />
      </div>
    </Router>
=======
import LandingPage from './components/LandingPage';
import Dashboard from './components/dashboard/Dashboard';

import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      {/* <h1 sx={{ textAlign: `center` }}>Welcome to Lyfe Logger</h1> */}
      <Route exact path="/" component={LandingPage} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </div>
>>>>>>> e29fe2e9058c58ac31cbad064a2a1e04fcc85749
  );
};

export default App;
