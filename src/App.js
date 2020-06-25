/** @jsx jsx */
import { jsx } from 'theme-ui';

// import Header from './components/header/Header';
import PrivateRoute from './PrivateRoute';
import LandingPage from './components/LandingPage';
import Dashboard from './components/dashboard/Dashboard';
import SignUpForm from "./components/SignupForm";

import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={LandingPage} />
      <Route path="/signupform" component={SignUpForm} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Footer />
    </div>
  );
};

export default App;
