/** @jsx jsx */
import { jsx } from 'theme-ui';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const ViewTask = () => {
  axiosWithAuth()
    .get(
      'https://lyfe-logger-be.herokuapp.com/api/tasks/findById/user=:user_id/:task_id'
    )
    .then((res) => console.log('Hello from the console', res))
    .catch((err) => console.log('Error', err));

  return (
    <div>
      <h2>Due Date</h2>
      <h2>Description</h2>
    </div>
  );
};
export default ViewTask;
