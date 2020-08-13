/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '../../../../../tests/themeProviderTestsUtil';

import Task from '../Task';

describe('Task tests', () => {
  it('renders without crashing', () => {
    const task = {
      all_day: true,
      due_date: '2020-05-28T03:36:47.000Z',
      task_notes: 'Here are some notes',
      id: 178,
      is_complete: false,
      name: 'A task',
      user_id: 49,
    };

    render(<Task task={task} />);
  });
});
