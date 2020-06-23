/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '../../../../tests/themeProviderTestsUtil';

import Dashboard from '../Dashboard';

describe('Dashboard tests', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });
});
