import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { initialState as reducerInitialState } from '../src/store/reducers/EventReducer';
import { initialState as userInitialState } from '../src/store/reducers/RegisterReducer';
import rootReducer from '../src/store/reducers';

// pass in a component ('ui'), a mock redux store, and whatever options
// whatever you pass in will override the default values of the arguments
// the component will get wrapped in a redux provider
// you can import this util `render` function in place of `render` from @testing-library/react to wrap everything in a redux provider

const render = (
  ui,
  {
    initialState = { ...reducerInitialState, ...userInitialState }, // default value of initialState is reducerInitialState
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)), // default value of store is createStore(reducer, initialState)
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  // for eslint props validation
  // PropTypes.node means it can be of any type
  // PropTypes.oneOfType here is saying it's either going to be a single thing of any one type OR an array of things of any type
  Wrapper.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method from @testing-library/react
export { render };
