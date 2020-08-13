/** @jsx jsx */
import { jsx } from 'theme-ui';
import { darken } from '@theme-ui/color';
import PropTypes from 'prop-types';

import AnimatedStrikethrough from './AnimatedStrikethrough';

const TaskCardContents = ({ task, isComplete, isNotInitial }) => {
  const taskDueDateObj = new Date(task.due_date);
  const dueDate = taskDueDateObj.toLocaleDateString();

  return (
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: `repeat(2, 1fr)`,
        gridGap: `10px`,
      }}
    >
      <p
        sx={{
          margin: `0`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
          gridColumn: `1 / span 2`,
          fontWeight: 700,
          color: isComplete ? darken('muted', 0.4) : 'text',
          transition: isComplete
            ? 'color 0.1s cubic-bezier(.55, 0, .1, 1)'
            : 'none',
        }}
      >
        <AnimatedStrikethrough
          stringToStrike={task.task_name}
          isStruckOut={isComplete}
          isNotInitial={isNotInitial}
        />
      </p>

      <small
        sx={{
          margin: `0`,
          color: isComplete ? darken('muted', 0.4) : 'text',
          transition: isComplete
            ? 'color 0.1s cubic-bezier(.55, 0, .1, 1)'
            : 'none',
        }}
      >
        <AnimatedStrikethrough
          stringToStrike={dueDate}
          isStruckOut={isComplete}
          isNotInitial={isNotInitial}
        />
      </small>
    </div>
  );
};

// for eslint props validation
TaskCardContents.propTypes = {
  task: PropTypes.object,
  isComplete: PropTypes.bool,
  isNotInitial: PropTypes.bool,
};

export default TaskCardContents;
