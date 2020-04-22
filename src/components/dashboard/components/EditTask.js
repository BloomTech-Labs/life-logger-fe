import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchEvent, updateEvent } from '../../../store/actions';
import { TaskContainer } from '../styles';

const EditTask = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userData } = useSelector(state => state.users);
  const { currentEvent } = useSelector(state => state.events);
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [task, setTask] = useState({
    user_id: userData.user_id,
    title: '',
    event_text: '',
    location: '',
    category: 1,
    event_ct_tm: '',
    event_st_tm: '',
    event_et_tm: '',
    all_day: true,
    event_resource: ''
  });
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
        setTask(task => ({
          ...task,
          title: currentEvent.title,
          event_text: currentEvent.event_text,
          location: currentEvent.location
        }));
        setStartDate(moment(currentEvent.event_st_tm).format('YYYY-MM-DD'));

        setStartTime(moment(currentEvent.event_st_tm).format('HH:mm'));

        setEndDate(moment(currentEvent.event_et_tm).format('YYYY-MM-DD'));

        setEndTime(moment(currentEvent.event_et_tm).format('HH:mm'));
      }
    },
    [currentEvent]
  );

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const today = moment().utc().format();

    const startDateUTC = moment(`${startDate} ${startTime}`).utc().format();

    const endDateUTC = moment(`${endDate} ${endTime}`).utc().format();

    dispatch(
      updateEvent(
        {
          ...task,
          event_ct_tm: today,
          event_st_tm: startDateUTC,
          event_et_tm: endDateUTC
        },
        eventID
      )
    );
    history.goBack();
  };

  if (!currentEvent) return <h1>Loading...</h1>;
  else
    return (
      <form onSubmit={handleSubmit}>
        <TaskContainer>
          <h1>
            <input
              className="task-title-edit"
              name="title"
              value={task.title}
              onChange={handleChange}
            />
          </h1>
          <div className="task-info">
            <div>
              <span>Start Date:</span>
              <input
                type="date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
              <span>Start Time:</span>
              <input
                type="time"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
              />
            </div>
            <div>
              <span>End Date:</span>
              <input
                type="date"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
              <span>End Time:</span>
              <input
                type="time"
                value={endTime}
                onChange={e => setEndTime(e.target.value)}
              />
            </div>
            <div>
              <span>Category</span>
              <select
                name="category"
                value={task.category}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value={0}>Work</option>
                <option value={1}>Home</option>
                <option value={2}>Family</option>
              </select>
              <span>Location:</span>
              <input
                type="text"
                name="location"
                value={task.location}
                onChange={handleChange}
              />
            </div>
          </div>
          <p className="description">
            <textarea
              className="event-text-edit"
              type="text"
              name="event_text"
              value={task.event_text}
              onChange={handleChange}
            />
          </p>
          <div className="button-container">
            <button onClick={() => history.push(`/task/${eventID}`)}>
              Cancel
            </button>
            <button onClick={handleSubmit}>Confirm</button>
          </div>
        </TaskContainer>
      </form>
    );
};

export default EditTask;
