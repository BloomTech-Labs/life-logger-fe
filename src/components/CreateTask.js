/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { Input, Label, Button, Textarea } from '@theme-ui/components';
import { Formik, Form } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { formatDate } from '../utils/formatDate';
import ReactRouterPropTypes from 'react-router-prop-types';

import Header from './header/Header';
import CustomCheckmark from './CustomCheckmark';

const CreateTask = ({ history }) => {
  const todayDate = formatDate(new Date()); // for min value for due date input

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
      .then((res) => {
        console.log('Successfully Created a Task', res);
        history.push('/dashboard'); // go back to dashboard page after successful task creation
      })
      .catch((err) => console.error('Error creating new task', err));
  };

  return (
    <Fragment>
      <Header />
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
              <Label htmlFor="task_name">Title</Label>
              <Input
                id="task_name"
                type="text"
                name="task_name"
                value={values.taskNotes}
                onChange={handleChange}
                placeholder="Task name"
              />
            </div>

            <div>
              <Label
                htmlFor="task_notes"
                sx={{
                  marginBottom: `0.5rem`,
                }}
              >
                Description
              </Label>
              <Textarea
                id="task_notes"
                type="text"
                name="task_notes"
                value={values.taskNotes}
                onChange={handleChange}
                placeholder="Optional notes about your task"
              />
            </div>

            <div>
              <Label htmlFor="due_date">Due Date</Label>
              <Input
                id="due_date"
                type="date"
                name="due_date"
                required="required"
                min={todayDate}
                value={values.dueDate}
                onChange={handleChange}
                sx={{
                  fontFamily: `inherit`,
                }}
              />
            </div>

            <div>
              <Label htmlFor="category_name">Category Name</Label>
              <Input
                id="category_name"
                type="text"
                name="category_name"
                value={values.taskNotes}
                onChange={handleChange}
                placeholder="Home, Work, etc."
              />
            </div>
            <div
              sx={{
                display: `flex`,
                alignItems: `center`,
                position: `relative`,
              }}
            >
              <input
                id="is_complete"
                type="checkbox"
                name="is_complete"
                value={values.is_complete}
                onChange={handleChange}
                sx={{
                  position: `absolute`,
                  left: `-100vw`, // "hide" checkbox off screen
                }}
              />
              <Label
                htmlFor="is_complete"
                sx={{
                  display: `flex`,
                  alignItems: `center`,
                }}
              >
                <CustomCheckmark
                  isChecked={values.is_complete}
                  extraStyles={{
                    marginRight: `1rem`,
                  }}
                />
                Task Completed
              </Label>
            </div>

            <Button
              type="submit"
              sx={{
                marginTop: `2rem`,
              }}
            >
              Create Task
            </Button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

CreateTask.propTypes = {
  history: ReactRouterPropTypes.history,
};

export default CreateTask;
