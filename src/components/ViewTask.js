/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { AiTwotoneCalendar } from 'react-icons/ai';

function ViewTask({ task }) {
  const h3Div = {
    display: 'flex',
  };
  const AiTwoTone = {
    paddingTop: '25px',
  };
  const dueDate = {
    paddingLeft: '20px',
    color: '#b6b6b6',
  };
  const dueDateActual = {
    paddingLeft: '40px',
    marginTop: '5px',
  };
  const categoryName = {
    paddingLeft: '35px',
  };

  return (
    <div>
      <h1>{task.task_name}</h1>
      <div sx={h3Div}>
        <div sx={AiTwoTone}>
          <AiTwotoneCalendar />
        </div>

        <div>
          <h3 sx={dueDate}>Due Date</h3>
        </div>
      </div>

      <p sx={dueDateActual}>{task.due_date}</p>

      <p>{task.category_name}</p>

      <div>
        <h3 sx={categoryName}>Category Name: </h3>
      </div>

      <h3>Task Notes:</h3>

      <p>{task.task_notes}</p>
    </div>
  );
}
ViewTask.propTypes = {
  task: PropTypes.object,
};
export default ViewTask;
