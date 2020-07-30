/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, Label, Button } from '@theme-ui/components';
import { Formik, Form } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const CreateTask = () => {
  const initialValues = {
    user_id: parseInt(localStorage.getItem('userId')), // getting from localStorage returns it as a string, but we need it as an integer
    task_name: '',
    category_name: '',
    due_date: '',
    all_day: false,
    task_notes: '',
    is_complete: false,
  };

  const handleSubmit = (values) => {
    axiosWithAuth()
      .post(`https://lyfe-logger-be.herokuapp.com/api/tasks/createTask`, values)
      .then((res) => console.log('Successfully Created a Task', res))
      .catch((err) => console.error('Error creating new task', err));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Form
          sx={{
            width: `300px`,
            margin: `0 auto`,
            display: `grid`,
            gridGap: 2,
            padding: 3,
            borderRadius: `12px`,
            bg: (t) => t.colors.primary,
            boxShadow: `0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23)`,
          }}
        >
          <div>
            <Label>Task Name</Label>
            <Input
              type="text"
              name="task_name"
              value={values.taskNotes}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Category Name</Label>
            <Input
              type="text"
              name="category_name"
              value={values.taskNotes}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Due Date</Label>
            <Input
              type="date"
              name="due_date"
              required="required"
              value={values.dueDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Notes</Label>
            <Input
              type="text"
              name="task_notes"
              value={values.taskNotes}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>All Day</Label>
            <input
              type="checkbox"
              name="all_day"
              value={values.all_day}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Task Completed</Label>
            <input
              type="checkbox"
              name="is_complete"
              value={values.taskNotes}
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

export default CreateTask;
