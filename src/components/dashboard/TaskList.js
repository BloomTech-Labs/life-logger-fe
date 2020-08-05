/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useContext, useEffect } from 'react';
import TaskContext from '../../context/TaskContext';

import Task from './Task';

const TaskList = () => {
  const { tasks, filter, getTasks } = useContext(TaskContext);

  const filterTasks = (task) => {
    if (filter === null) {
      return task;
    } else if (filter === 'incomplete') {
      return task.is_complete === false;
    } else if (filter === 'complete') {
      return task.is_complete === true;
    }
  };

  useEffect(() => {
    const userId = window.localStorage.getItem('userId');

    getTasks(userId);
  }, []);

  return (
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: [`1fr`, `minmax(auto, 400px)`],
        gridGap: `15px`,
      }}
    >
      {tasks.filter(filterTasks).map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
