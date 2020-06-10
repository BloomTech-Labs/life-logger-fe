/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: `repeat(auto-fill, minmax(50px, 100px))`,
        gridGap: `15px`,
      }}
    >
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

// for eslint props validation
TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
