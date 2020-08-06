/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
function ViewTask({ task }) {
  const dueDateStyle = {
    color: '#b6b6b6',
  };
  return (
    <div>
      <h1>{task.task_name}</h1>
      <h3 style={dueDateStyle}>Due Date </h3>
      <p>{task.due_date}</p>
      <h3>Category Name: </h3>
      <p>{task.category_name}</p>

      <h3>Task Notes:</h3>
      <p>{task.task_notes}</p>
    </div>
  );
}
ViewTask.propTypes = {
  task: PropTypes.object,
};
export default ViewTask;
