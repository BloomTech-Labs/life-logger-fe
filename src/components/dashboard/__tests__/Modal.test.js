/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '../../../../tests/themeProviderTestsUtil';

import Modal from '../Modal';

describe('Modal tests', () => {
  it('renders without crashing', () => {
    const onClose = jest.fn();

    render(
      <Modal onClose={onClose}>
        <p>I am dummy test content</p>
      </Modal>
    );
  });
});
