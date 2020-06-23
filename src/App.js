/** @jsx jsx */
import { jsx } from 'theme-ui';
import taskContext from "./context/task_context";
import Header from './components/header/Header';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import axios from "axios"



const App = () => {
  const fakedata = [1,2,3]


  return (
    <taskContext.Provider value={{ fakedata }}>
    <div>
      <Header />
      <h1 sx={{ textAlign: `center` }}>Welcome to Lyfe Logger</h1>

      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </div>
    </taskContext.Provider>
  );
};

export default App;
