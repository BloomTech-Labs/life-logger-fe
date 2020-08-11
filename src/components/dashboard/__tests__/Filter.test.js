/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '../../../../tests/themeProviderTestsUtil';

import Filter from '../Filter';

describe('Filter tests', () => {
  it('renders without crashing', () => {
    const toggleFilterDropdown = jest.fn();
    render(<Filter toggleFilterDropdown={toggleFilterDropdown} />);
  });
});
