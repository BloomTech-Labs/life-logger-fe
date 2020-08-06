/** @jsx jsx */
import { jsx } from 'theme-ui';

import Task from './dashboard/Task';
//I want to render the details of a task once a user clicks on the task on the dashboard. Where do the task details reside? I dont think we will need to do a GET request. We should be able to pull those details in front Props from another component.
//Once a user onClicks a Task, what is rendered?
//The details of the specific task
//So we need to be able to extract the userId
//I only want to render specifc information
function ViewTask() {
  return (
    <div>
      <Task />
    </div>
  );
}

export default ViewTask;
