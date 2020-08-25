/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { GrCalendar } from 'react-icons/gr';
import { GrNotes } from 'react-icons/gr';
import { GrTask } from 'react-icons/gr';

function ViewTask({ task }) {
  const taskDueDateObj = new Date(task.due_date);
  const dueDate = taskDueDateObj.toLocaleDateString();

  return (
    <div>
      <p
        sx={{
          //just messing around. Remove this is you do not like it.
          borderBottomWidth: '1px',
          borderBottomColor: 'black',
          borderBottomStyle: 'solid',
          fontSize: '30px',
        }}
      >
        {task.task_name}
      </p>

      <div
        sx={{
          display: 'flex',
        }}
      >
        <div
          sx={{
            paddingTop: '1.5rem',
          }}
        >
          <GrCalendar />
        </div>

        <div>
          <h3
            sx={{
              paddingLeft: '1rem',
              color: 'black',
            }}
          >
            Due Date
          </h3>
          <p
            sx={{
              paddingLeft: '1rem',
              marginTop: '5px',
            }}
          >
            {dueDate}
          </p>
        </div>
      </div>

      <div
        sx={{
          display: 'flex',
        }}
      >
        <div
          sx={{
            paddingTop: '1.5rem',
          }}
        >
          <GrTask />
        </div>

        <div>
          <h3
            sx={{
              paddingLeft: '1rem',
              color: 'black',
            }}
          >
            Category
          </h3>
          <p
            sx={{
              paddingLeft: '1rem',
              marginTop: '5px',
            }}
          >
            {task.category_name}
          </p>
        </div>
      </div>

      <div
        sx={{
          display: 'flex',
        }}
      >
        <div
          sx={{
            paddingTop: '1.5rem',
          }}
        >
          <GrNotes />
        </div>

        <div>
          <h3
            sx={{
              paddingLeft: '1rem',
              color: 'black',
            }}
          >
            Task Notes
          </h3>
          <p
            sx={{
              paddingLeft: '1rem',
              marginTop: '5px',
            }}
          >
            {task.task_notes}
          </p>
        </div>
      </div>
    </div>
  );
}
ViewTask.propTypes = {
  task: PropTypes.object,
};
export default ViewTask;
