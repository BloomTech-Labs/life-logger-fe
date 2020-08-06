/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button } from '@theme-ui/components';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const DeleteTask = ({ task }) => {
  const userId = window.localStorage.getItem('userId');

  const handleSubmit = () => {
    axiosWithAuth()
      .delete(
        `https://lyfe-logger-be.herokuapp.com/auth/tasks/deleteTask/${userId}/${task.id}`
      )
      .then((res) => console.log('Task Deleted', res))
      .catch((err) => console.error('Task Not Deleted', err));
  };

  return (
    <Formik onSubmit={handleSubmit}>
      <Form>
        <h1>Are you sure want to delete this task?</h1>
        <Button type="submit">Yes</Button>
        <Button>No</Button>
      </Form>
    </Formik>
  );
};

// for eslint props validation
DeleteTask.propTypes = {
  task: PropTypes.object,
};

export default DeleteTask;
