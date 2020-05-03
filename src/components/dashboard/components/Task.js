import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import trashBin from '../../../assets/img/trash.png';
import { deleteEvent, fetchEvent, updateEvent } from '../../../store/actions';
import { TaskContainer } from '../styles';
import Loading from "../../UI/Loading";

const Task = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [startDate, setStartDate] = useState();
  const [dueDate, setDueDate] = useState();
  const { currentEvent } = useSelector(state => state.events);
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
          moment(currentEvent.event_st_tm).format('ddd, MMM Do, YYYY - h:mm A')
        );

        setDueDate(
          moment(currentEvent.event_et_tm).format('ddd, MMM Do, YYYY - h:mm A')
        );
      }
    },
    [currentEvent]
  );

  const handleDelete = () => {
    Swal.fire({
      title: `Are you sure you want to delete this task?`,
      icon: 'error',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Yes'
    }).then(result => {
      if (result.value) {
        dispatch(deleteEvent(eventID));
      }
      history.goBack();
    });
  };

  const handleEdit = () => {
    history.push(`/edit-task/${eventID}`);
  };

  const handleComplete = () => {
    dispatch(
      updateEvent(
        {
          ...currentEvent,
          iscomplete: !currentEvent.iscomplete
        },
        eventID
      )
    );
    // console.log("iscomplete: ", currentEvent.iscomplete)
    history.goBack();
  };

  console.log('current event', currentEvent)

  if (!currentEvent) return <Loading />;
  else
    return (
      <TaskContainer>
        <div className="back-button-container">
          <button
            onClick={() => {
              history.push('/');
            }}
          >
            Back to Task List
          </button>
          <button
            onClick={() => {
              history.push('/calendar');
            }}
          >
            Go to Calendar
          </button>
        </div>
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
              {currentEvent.location ? currentEvent.location : 'Not specified'}
            </span>
          </div>
          <div>
            <span>Status:</span>
            <span
              style={{
                backgroundColor: currentEvent.iscomplete ? '#39FF13' : 'red',
                borderRadius: '25px',
                width: '18px',
                marginLeft: '36px'
              }}
            />
          </div>
        </div>
        <p className="description">
          {currentEvent.event_text}
        </p>
        <div className="button-container">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleComplete}>
            {currentEvent.iscomplete ? 'Not Completed' : 'Mark Completed'}
          </button>
          {/* <button onClick={handleDelete}>Delete</button> */}
          <div onClick={handleDelete}>
            <img alt="trash bin" src={trashBin} />
          </div>
        </div>
      </TaskContainer>
    );
};

export default Task;
