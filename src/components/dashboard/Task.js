/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import PropTypes from 'prop-types';

import TaskCheckmark from './TaskCheckmark';
import Card from './Card';
import AnimatedStrikethrough from './AnimatedStrikethrough';

const pStyles = {
  margin: `0`,
};

const Task = ({ task }) => {
  const { updateTask } = useContext(TaskContext);
  const [isComplete, setIsComplete] = useState(task.is_complete);
  const [isNotInitial, setIsNotInitial] = useState(false); // state to prevent "unstrike" keyframe animation from running on mount

  const taskDueDateObj = new Date(task.due_date);
  const dueDate = taskDueDateObj.toLocaleDateString();

  const toggleComplete = () => {
    setIsComplete(!isComplete);
    setIsNotInitial(true); // allows "unstrike" animation to run now whenever a task is marked incomplete

    // make PUT request to backend to update `is_complete` for this task
    // need to pass in task id
    updateTask({ id: task.id, is_complete: isComplete });
  };

  return (
    <Card>
      <TaskCheckmark
        toggleComplete={toggleComplete}
        isChecked={isComplete}
        id={task.id}
      />
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
          <p
            sx={{
              ...pStyles,
              fontWeight: 700,
              color: isComplete ? `#9B9B9B` : 'text',
              transition: isComplete
                ? 'color 0.1s cubic-bezier(.55, 0, .1, 1)'
                : 'none',
            }}
          >
            <AnimatedStrikethrough
              stringToStrike="I am a task"
              isStruckOut={isComplete}
              isNotInitial={isNotInitial}
            />
            {/* <AnimatedStrikethrough stringToStrike={task.name} isStruckOut={isComplete} isNotInitial={isNotInitial}/> */}
          </p>
          <p sx={pStyles}>{'>'}</p>
        </div>

        <p
          sx={{
            ...pStyles,
            color: `#9B9B9B`,
          }}
        >
          <AnimatedStrikethrough
            stringToStrike={dueDate}
            isStruckOut={isComplete}
            isNotInitial={isNotInitial}
          />
        </p>
      </div>
    </Card>
  );
};

// for eslint props validation
Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
