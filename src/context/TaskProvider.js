import React, { useState } from 'react';
import TaskContext from './TaskContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import PropTypes from 'prop-types';

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async (userId) => {
    try {
      const taskList = await axiosWithAuth().get(
        `http://localhost:5000/api/tasks/findByUserId/${userId}`
      );

      setTasks(taskList.data);
    } catch (err) {
      console.log(`Error fetching tasks: `, err);
    }
  };

  const editTask = async (userId, taskId, updatedTask) => {
    try {
      const taskRes = await axiosWithAuth().put(
        `http://localhost:5000/api/tasks/updateTask/user=${userId}/${taskId}`,
        updatedTask
      );

      const updatedTasks = [...tasks];
      const taskIndex = tasks.findIndex((task) => task.id === taskId);

      updatedTasks[taskIndex] = {
        ...updatedTasks[taskIndex],
        ...taskRes.data[0],
      };

      setTasks(updatedTasks);
    } catch (err) {
      console.log('Error updating task: ', err);
    }
  };

  const taskState = { tasks, getTasks, editTask };

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
