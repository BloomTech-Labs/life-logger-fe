import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  deleteEvent,
  fetchEvent
} from '../../../store/actions';
import { TaskContainer } from '../styles';

const Task = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [startDate, setStartDate] = useState();
  const [dueDate, setDueDate] = useState();
  const { currentEvent } = useSelector(
    state => state.events
  );
  const eventID = props.match.params.id;

  useEffect(
    () => {
      dispatch(fetchEvent(eventID));
    },
    [eventID, dispatch]
  );

  useEffect(
    () => {
      if (currentEvent) {
        setStartDate(
          moment(currentEvent.event_st_tm).format(
            'ddd, MMM Do, YYYY - HH:mm A'
          )
        );

        setDueDate(
          moment(currentEvent.event_et_tm).format(
            'ddd, MMM Do, YYYY - HH:mm A'
          )
        );
      }
    },
    [currentEvent]
  );

  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this task?'
    );

    if (confirmed) {
      dispatch(deleteEvent(eventID));
      history.push('/');
    }
  };

  const handleEdit = () => {
    history.push(`/edit-task/${eventID}`);
  };

  if (!currentEvent) return <h1>Loading...</h1>;
  else
    return (
      <TaskContainer>
        <button onClick={()=>{history.push('/')}}>Back</button>
        <h1>
          {currentEvent.title}
        </h1>
        {/* <div className="category">
          {category}
        </div> */}
        <div className="task-info">
          <div>
            <span>Start Date:</span>
            <span>
              {startDate}
            </span>
          </div>
          <div>
            <span>Due Date:</span>
            <span>
              {dueDate}
            </span>
          </div>
          <div>
            <span>Location:</span>
            <span>
              {currentEvent.location}
            </span>
          </div>
        </div>
        <p className="description">
          {currentEvent.event_text}
        </p>
        <div className="button-container">
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      </TaskContainer>
    );
};

export default Task;
