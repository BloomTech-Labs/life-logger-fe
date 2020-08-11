/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useContext, useEffect } from 'react';
import Search from "./Search";

import TaskContext from '../../context/TaskContext';

import Task from './Task';

const TaskList = () => {
  const { tasks, getTasks } = useContext(TaskContext);

  useEffect(() => {
    const userId = window.localStorage.getItem('userId');

    getTasks(userId);
  }, []);

  return (
    <div>
    <Search />
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
    </div>
  );
};

export default TaskList;
