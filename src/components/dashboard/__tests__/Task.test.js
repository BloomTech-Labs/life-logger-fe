/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '../../../../tests/themeProviderTestsUtil';

import Task from '../Task';

describe('Task tests', () => {
  it('renders without crashing', () => {
    const task = {
      all_day: true,
      category: 1,
      event_ct_tm: '2020-05-28T03:36:47.000Z',
      event_et_tm: '2020-05-11T17:00:00.000Z',
      event_resource: '',
      event_st_tm: '2020-05-11T16:00:00.000Z',
      event_text: 'Here are some notes',
      id: 178,
      iscomplete: false,
      location: 'Home',
      title: 'A task',
      user_id: 49,
    };

    render(<Task task={task} />);
  });
});
