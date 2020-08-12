import React, { useState } from 'react';
import TaskContext from './TaskContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import PropTypes from 'prop-types';

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  const editSearch = (term) => {
    setSearchTerm(term);
  };

  const editFilter = (filterValue) => {
    console.log('filterValue: ', filterValue);
    let newFilter = filter;
    if (
      filterValue === 'incomplete' ||
      filterValue === 'complete' ||
      filterValue === null
    ) {
      newFilter = filterValue;
    }

    setFilter(newFilter);
  };

  const getTasks = async (userId) => {
    try {
      const taskList = await axiosWithAuth().get(
        `https://lyfe-logger-be.herokuapp.com/api/tasks/findByUserId/${userId}`
      );
      setTasks(taskList.data);
    } catch (err) {
      console.log(`Error fetching tasks: `, err);
    }
  };

  const editTask = async (userId, taskId, updatedTask) => {
    try {
      const taskRes = await axiosWithAuth().put(
        `https://lyfe-logger-be.herokuapp.com/api/tasks/updateTask/user=${userId}/${taskId}`,
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


  const deleteTask = async (userId, taskId) => {
    try {
      console.log(userId, taskId);
      await axiosWithAuth().delete(
        `https://lyfe-logger-be.herokuapp.com/api/tasks/deleteTask/user=${userId}/${taskId}`
      );

      const taskIndex = tasks.findIndex((task) => task.id === taskId);
      const deleteTasks = [...tasks];
      deleteTasks.splice(taskIndex, 1);
      setTasks(deleteTasks);
    } catch (err) {
      console.error('Task Not Deleted', err);
    }
  };

  const taskState = { tasks, filter, editFilter, getTasks, editTask, searchTerm, editSearch, deleteTask };

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
