/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, Label, Button } from '@theme-ui/components';
import { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

const EditTask = ({ task }) => {
  const { editTask } = useContext(TaskContext);
  const initialValues = {
    ...task,
    user_id: parseInt(localStorage.getItem('userId')),
  };

  const handleSubmit = (values) => {
    editTask(task.user_id, task.id, values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Form
          sx={{
            width: `95%`,
            margin: `0 auto`,
            display: `grid`,
            gridGap: `20px`,
            padding: 3,
          }}
        >
          <div>
            <Label>Task Name</Label>
            <Input
              type="text"
              name="task_name"
              value={values.task_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Category Name</Label>
            <Input
              type="text"
              name="category_name"
              value={values.category_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Due Date</Label>
            <Input
              type="date"
              name="due_date"
              required="required"
              value={values.due_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Notes</Label>
            <Input
              type="text"
              name="task_notes"
              value={values.task_notes}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Task Completed</Label>
            <input
              type="checkbox"
              name="is_complete"
              value={values.is_complete}
              onChange={handleChange}
            />
          </div>
          <div>
            <Button type="submit">Create Task</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
// for eslint props validation
EditTask.propTypes = {
  task: PropTypes.object,
};

export default EditTask;
