/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '../../../../tests/themeProviderTestsUtil';

import Card from '../Card';

describe('Card tests', () => {
  it('renders without crashing', () => {
    render(
      <Card>
        <p>I am test content</p>
      </Card>
    );
  });
});
