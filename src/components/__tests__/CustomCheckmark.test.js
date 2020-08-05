/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '../../../tests/themeProviderTestsUtil';

import CustomCheckmark from '../CustomCheckmark';

describe('CustomCheckmark tests', () => {
  it('renders without crashing', () => {
    render(<CustomCheckmark isChecked={false} />);
  });
});
