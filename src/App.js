/** @jsx jsx */
import { jsx } from 'theme-ui';

import Header from './components/header/Header';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  return (
    <div>
      <Header />
      <h1 sx={{ textAlign: `center` }}>Welcome to Lyfe Logger</h1>

      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default App;
