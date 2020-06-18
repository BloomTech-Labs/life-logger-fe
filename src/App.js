/** @jsx jsx */
import { jsx } from 'theme-ui';

import Header from './components/header/Header';
import PrivateRoute from './PrivateRoute';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      {/* <h1 sx={{ textAlign: `center` }}>Welcome to Lyfe Logger</h1> */}
      <Route exact path="/" component={LandingPage} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default App;
