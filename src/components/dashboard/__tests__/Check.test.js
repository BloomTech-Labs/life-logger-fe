/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '../../../../tests/themeProviderTestsUtil';

import Check from '../Check';

describe('Check tests', () => {
  it('renders without crashing', () => {
    render(<Check />);
  });
});
