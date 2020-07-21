import React from 'react';
import { render } from './themeProviderTestsUtil';
import { render as taskContextRender } from './contextProviderTestUtil';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

// pass in a component ('Ui'), renderOptions (like a mock context store), and the path and route as arguments
// whatever you pass in will override the default values of the arguments
// the component will now be wrapped in a Router, Route, and ThemeProvider
// you can import this util `renderWithRouter` function in place of `render` from @testing-library/react` wherever there is a Route involved for a component to properly render

export const renderWithRouter = (
  Ui, // the component you want to test
  {
    path = '/', // default value is '/'
    route = '/', // default value is '/'
    history = createMemoryHistory({ initialEntries: [route] }),
    needsTaskContext = false, // default value is false, set to true to use render function from the contextProviderTestUtil
  } = {},
  renderOptions
) => {
  return needsTaskContext
    ? {
        ...taskContextRender(
          <Router history={history}>
            <Route
              exact
              path={path}
              route={route}
              render={(props) => <Ui {...props} />}
            />
          </Router>,
          renderOptions
        ),
      }
    : {
        ...render(
          <Router history={history}>
            <Route
              exact
              path={path}
              route={route}
              render={(props) => <Ui {...props} />}
            />
          </Router>,
          renderOptions
        ),
      };
};
