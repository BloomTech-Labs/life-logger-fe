/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button } from '@theme-ui/components';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';

const DeleteTask = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  const userId = parseInt(localStorage.getItem('userId'));

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteTask(userId, task.id);
  };

  return (
    <form
      onSubmit={handleSubmit}
      sx={{
        width: `300px`,
        margin: `0 auto`,
        display: `grid`,
        gridGap: `2px`,
      }}
    >
      <h1>Are you sure want to delete this task?</h1>
      <Button type="submit">Yes</Button>
    </form>
  );
};

// for eslint props validation
DeleteTask.propTypes = {
  task: PropTypes.object,
};

export default DeleteTask;
