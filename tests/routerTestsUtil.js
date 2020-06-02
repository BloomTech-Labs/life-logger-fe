import React from 'react';
import { render } from './reduxProviderTestsUtil';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

// pass in a component ('Ui'), renderOptions (like a mock redux store), and the path and route as arguments
// whatever you pass in will override the default values of the arguments
// the component will now be wrapped in a Router, Route, and redux Provider
// you can import this util `renderWithRouter` function in place of `render` from @testing-library/react` wherever there is a Route and a redux Provider involved for a component to properly render

export const renderWithRouter = (
  Ui, // the component you want to test
  renderOptions, // can pass in a mock redux store here
  {
    path = '/', // default value is '/'
    route = '/', // default value is '/'
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  console.log('Ui: ', Ui);
  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={Ui} />
      </Router>,
      renderOptions
    ),
  };
};
