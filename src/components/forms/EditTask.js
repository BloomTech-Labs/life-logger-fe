/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, Label, Button, Textarea } from '@theme-ui/components';
import CustomCheckmark from '../CustomCheckmark';
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

import { formatDate } from '../../utils/formatDate';

const EditTask = ({ task, close, setClose }) => {
  const todayDate = formatDate(new Date());

  const dueDateObj = new Date(task.due_date);
  const dueDate = formatDate(dueDateObj);

  const { editTask } = useContext(TaskContext);
  const initialValues = {
    ...task,
    due_date: dueDate,
    user_id: parseInt(localStorage.getItem('userId')),
  };

  const handleSubmit = (values) => {
    editTask(task.user_id, task.id, values);
    setClose(!close);
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
            Edit Task
          </Button>
        </Form>
      )}
    </Formik>
  );
};
// for eslint props validation
EditTask.propTypes = {
  task: PropTypes.object,
  close: PropTypes.bool,
  setClose: PropTypes.func,
};

export default EditTask;
