/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '../../../../../tests/themeProviderTestsUtil';

import AnimatedStrikethrough from '../AnimatedStrikethrough';

describe('AnimatedStrikethrough tests', () => {
  it('renders without crashing', () => {
    const isStruckOut = false;
    const isNotInitial = false;
    const stringToStrike = 'I am test content';

    render(
      <AnimatedStrikethrough
        stringToStrike={stringToStrike}
        isStruckOut={isStruckOut}
        isNotInitial={isNotInitial}
      />
    );
  });
});
