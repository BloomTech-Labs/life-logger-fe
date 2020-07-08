/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import TaskCheckmark from './TaskCheckmark';
import PropTypes from 'prop-types';
import Card from './Card';

const pStyles = {
  margin: `0`,
};

const Task = ({ task }) => {
  const [isComplete, setIsComplete] = useState(task.is_complete);

  const taskDueDateObj = new Date(task.due_date);
  const dueDate = taskDueDateObj.toLocaleDateString();

  const toggleComplete = () => {
    setIsComplete(!isComplete);
    // make PUT request to backend to update `is_complete` for this task
  };

  return (
    <div
      sx={{
        position: 'relative',
      }}
    >
      <TaskCheckmark
        toggleCheck={toggleComplete}
        isChecked={isComplete}
        id={task.id}
      />
      <Card>
        <div
          sx={{
            display: `grid`,
            gridTemplateColumns: `repeat(2, 1fr)`,
            gridGap: `10px`,
          }}
        >
          <div
            sx={{
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
              gridColumn: `1 / span 2`,
            }}
          >
            <p sx={{ ...pStyles, fontWeight: 700 }}>{task.task_name}</p>
            <p sx={pStyles}>{'>'}</p>
          </div>

          <p sx={pStyles}>Due date:</p>
          <p sx={pStyles}>{dueDate}</p>
          <p sx={pStyles}>Last completed:</p>
          <p sx={pStyles}>I don&apos;t exist in the backend</p>
        </div>
      </Card>
    </div>
  );
};

// for eslint props validation
Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
