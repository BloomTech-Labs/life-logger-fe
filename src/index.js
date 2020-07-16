import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';
import theme from './theme/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import TaskProvider from './context/TaskProvider';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <TaskProvider>
        <Router>
          <App />
        </Router>
      </TaskProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
