/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '../../../../tests/themeProviderTestsUtil';

import Header from '../Header.js';

test("is here", () => {
    const { getByTestId } = render(<Header />);
  
    expect(getByTestId("testtag")).toHaveTextContent("Home");
    
  });