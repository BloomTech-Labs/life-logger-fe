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
        width: `100%`,
        display: `grid`,
        gridGap: `2px`,
        textAlign: `center`,
      }}
    >
      <h2>Are you sure want to delete this task?</h2>
      <Button type="submit">Yes</Button>
    </form>
  );
};

// for eslint props validation
DeleteTask.propTypes = {
  task: PropTypes.object,
};

export default DeleteTask;
