import React, { useState } from 'react';
import TaskContext from './TaskContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import PropTypes from 'prop-types';

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async (userId) => {
    try {
      const taskList = await axiosWithAuth.get(
        `https://lyfe-logger-be.herokuapp.com/api/tasks/findByUserId/${userId}`
      );

      setTasks(taskList.data);
    } catch (err) {
      console.log(`Error fetching tasks: `, err);
    }
  };

  const taskState = { tasks, getTasks };

  return (
    <TaskContext.Provider value={taskState}>{children}</TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default TaskProvider;
