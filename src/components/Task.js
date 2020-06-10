/** @jsx jsx */
import { jsx, Card } from 'theme-ui';
import PropTypes from 'prop-types';

const Task = ({ task }) => {
  return (
    <Card>
      <p>{task.title}</p>
    </Card>
  );
};

// for eslint props validation
Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
