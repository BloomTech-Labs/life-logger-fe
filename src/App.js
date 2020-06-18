/** @jsx jsx */
import { jsx } from 'theme-ui';

import Header from './components/header/Header';
import PrivateRoute from './PrivateRoute';
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
  );
};

export default App;
