/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, useContext } from 'react';
import { Input, Label, Button, Textarea } from '@theme-ui/components';
import { Formik, Form } from 'formik';
import TaskContext from '../../context/TaskContext';
import { formatDate } from '../../utils/formatDate';
import PropTypes from 'prop-types';

import CustomCheckmark from '../CustomCheckmark';

const CreateTask = ({ toggleCreateTaskForm }) => {
  const userId = parseInt(localStorage.getItem('userId'));
  const todayDate = formatDate(new Date()); // for min value for due date input

  const { createTask } = useContext(TaskContext);

  const initialValues = {
    user_id: userId, // getting from localStorage returns it as a string, but we need it as an integer
    task_name: '',
    category_name: '',
    due_date: '',
    all_day: false,
    task_notes: '',
    is_complete: false,
  };

  const handleSubmit = (values) => {
    createTask(values, userId);
    toggleCreateTaskForm();
  };

  return (
    <Fragment>
      {/* <Navigation /> */}
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
                value={values.task_name}
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
                value={values.task_notes}
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
                value={values.due_date}
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
                value={values.category_name}
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
  toggleCreateTaskForm: PropTypes.func,
};

export default CreateTask;
