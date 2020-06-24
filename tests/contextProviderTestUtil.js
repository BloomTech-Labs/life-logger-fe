import React, {useContext} from 'react';
import { render as rtlRender } from '@testing-library/react';
import taskContext from '../src/context/task_context';
import PropTypes from 'prop-types';


const SignUp = (prop) => {
  
  }

const render = (
  ui,
  { ...renderOptions } = {} // after we get Context set up, we'll need to pass in an initial state and context store
) => {
  // after we get Context set up, we'll need to include the ContextProvider in this Wrapper, too
  const Wrapper = ({ children }) => {
    return  <taskContext.Provider value={{ SignUp }}>{children}</taskContext.Provider>;
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
