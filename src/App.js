/** @jsx jsx */
import { jsx } from 'theme-ui';
import taskContext from './context/task_context';
import SignUpForm from './components/SignupForm';
import Header from './components/header/Header';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';

import axios from 'axios';
import { Route } from 'react-router-dom';



const App = (props) => {

  const SignUp = (prop) => {
    return axios.post("https://lyfe-logger-be.herokuapp.com/api/auth/register", prop)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
  }




  return (

    <taskContext.Provider value={{ SignUp }}>
      <Route exact path="/" component={SignUpForm} />
     

      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </taskContext.Provider>

  );
};

export default App;
