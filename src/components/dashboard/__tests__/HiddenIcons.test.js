/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '../../../../tests/themeProviderTestsUtil';

import HiddenIcons from '../HiddenIcons';

describe('HiddenIcons tests', () => {
  it('renders without crashing', () => {
    const toggleIsEditModalOpen = jest.fn();
    const toggleIsDeleteModalOpen = jest.fn();

    render(
      <HiddenIcons
        toggleIsEditModalOpen={toggleIsEditModalOpen}
        toggleIsDeleteModalOpen={toggleIsDeleteModalOpen}
      />
    );
  });
});
