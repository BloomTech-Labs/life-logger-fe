import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import PropTypes from 'prop-types';
import theme from '../src/theme/theme';

// use this render test utility function where you need access to the ThemeProvider and theme styles, but not the TaskContext

const render = (ui, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
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
