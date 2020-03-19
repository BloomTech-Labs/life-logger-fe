import React from 'react';
import { TaskContainer } from '../styles';

const EditTask = props => {
  const eventID = props.match.params.id;

  return (
    <TaskContainer>
      <h1>
        Edit Task ID: {eventID}
      </h1>
    </TaskContainer>
  );
};

export default EditTask;
