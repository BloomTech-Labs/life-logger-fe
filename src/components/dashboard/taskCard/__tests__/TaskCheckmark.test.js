/** @jsx jsx */
import { jsx } from 'theme-ui';

import { render } from '../../../../../tests/themeProviderTestsUtil';

import TaskCheckmark from '../TaskCheckmark';

describe('TaskCheckmark tests', () => {
  it('renders without crashing', () => {
    const toggleComplete = jest.fn();
    const isChecked = false;
    const handleKeyEnterPress = jest.fn();

    render(
      <TaskCheckmark
        toggleComplete={toggleComplete}
        isChecked={isChecked}
        handleKeyEnterPress={handleKeyEnterPress}
      />
    );
  });
});
