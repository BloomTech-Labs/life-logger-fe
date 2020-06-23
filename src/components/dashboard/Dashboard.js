/** @jsx jsx */
import { jsx } from 'theme-ui';

import TaskList from './TaskList';

const Dashboard = () => {
  const tasks = [
    {
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
    },
    {
      all_day: true,
      category: 2,
      event_ct_tm: '2020-05-28T03:36:47.000Z',
      event_et_tm: '2020-05-11T17:00:00.000Z',
      event_resource: '',
      event_st_tm: '2020-05-11T16:00:00.000Z',
      event_text: 'Here are some notes',
      id: 179,
      iscomplete: false,
      location: 'Work',
      title: 'Another task',
      user_id: 49,
    },
  ];
  return (
    <div
      sx={{
        width: `80%`,
        maxWidth: `960px`,
        margin: `0 auto`,
      }}
    >
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
