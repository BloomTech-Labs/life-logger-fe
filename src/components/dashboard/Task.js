/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Card } from '@theme-ui/components';
import PropTypes from 'prop-types';

const pStyles = {
  margin: `0`,
};

const Task = ({ task }) => {
  const taskDueDateObj = new Date(task.event_et_tm);
  const dueDate = taskDueDateObj.toLocaleDateString();

  return (
    <Card
      sx={{
        bg: `primary`,
        transition: `all 0.15s ease-in-out`,

        '&:hover': {
          bg: `muted`,
        },
      }}
    >
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
          <p sx={{ ...pStyles, fontWeight: 700 }}>{task.title}</p>
          <p sx={pStyles}>{'>'}</p>
        </div>

        <p sx={pStyles}>Due date:</p>
        <p sx={pStyles}>{dueDate}</p>
        <p sx={pStyles}>Last completed:</p>
        <p sx={pStyles}>I don&apos;t exist in the backend</p>
      </div>
    </Card>
  );
};

// for eslint props validation
Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
