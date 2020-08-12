/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '../../../../tests/themeProviderTestsUtil';

import FilterDropdown from '../FilterDropdown';

describe('FilterDropdown tests', () => {
  it('renders without crashing', () => {
    const editFilter = jest.fn();
    const filter = null; // set to null to show all tasks
    render(<FilterDropdown editFilter={editFilter} filter={filter} />);
  });
});
