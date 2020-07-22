/** @jsx jsx */
import { jsx } from 'theme-ui';
// import { useContext } from 'react';
// import TaskContext from '../../context/TaskContext';

import Task from './Task';

const TaskList = () => {
  // const { tasks } = useContext(TaskContext);
  const tasks = [
    {
      all_day: true,
      due_date: '2020-05-28T03:36:47.000Z',
      task_notes: 'Here are some notes',
      id: 178,
      is_complete: false,
      task_name: 'A task',
      user_id: 49,
    },
    {
      all_day: true,
      due_date: '2020-05-28T03:36:47.000Z',
      task_notes: 'Here are some notes',
      id: 179,
      is_complete: true,
      task_name: 'Another task',
      user_id: 49,
    },
  ];

  return (
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: [`1fr`, `minmax(auto, 400px)`],
        gridGap: `15px`,
      }}
    >
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
