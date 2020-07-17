import React from 'react';
import { render as themeRender } from './themeProviderTestsUtil';
import TaskProvider from '../src/context/TaskProvider';
import PropTypes from 'prop-types';

const render = (ui, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => {
    return <TaskProvider>{children}</TaskProvider>;
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

  return themeRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method from @testing-library/react
export { render };
