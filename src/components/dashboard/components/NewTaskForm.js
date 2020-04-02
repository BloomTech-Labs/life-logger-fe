import moment from 'moment-timezone';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent } from '../../../store/actions';
import { NewTaskForm as Form } from '../styles';

import { useHistory } from 'react-router-dom';

const NewTaskForm = () => {
  const history = useHistory();
  // this variable indicates if user is coming from calendar view:
  const fromCalendar = history.location.state;

  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.users);

  // pre-populate dates picked from calendar view
  const [startDate, setStartDate] = useState(fromCalendar ? fromCalendar.date : '');
  const [endDate, setEndDate] = useState(fromCalendar ? fromCalendar.date : '');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [newTask, setNewTask] = useState({
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
  
  // open form by default if coming from calendar
  const [toggleForm, setToggleForm] = useState(fromCalendar ? true : false);
  console.log('history state:', fromCalendar);

  const handleChange = e => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const today = moment().utc().format();

    const startDateUTC = moment(`${startDate} ${startTime}`)
      .utc()
      .format();

    const endDateUTC = moment(`${endDate} ${endTime}`)
      .utc()
      .format();

    dispatch(
      createEvent({
        ...newTask,
        event_ct_tm: today,
        event_st_tm: startDateUTC,
        event_et_tm: endDateUTC
      })
    );

    setNewTask({
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
    })
    
    setStartDate('')
    setStartTime('')
    setEndDate('')
    setEndTime('')

    setToggleForm(false);

    // reroute back if coming from calendar 
    if (fromCalendar) history.goBack();
  };

  return (
    <Form>
      {!toggleForm &&
        <button
          type="button"
          onClick={() => setToggleForm(true)}
          style={{ marginTop: '20px'}}
        >
          Create Task
        </button>}

      {toggleForm &&
        <>
          <div className="task-input-title">
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleChange}
              placeholder="Add a task..."
              style={{marginTop: "30px"}}
            />
          </div>
          <div className="task-input-info">
            <div>
              <span>Start Date:</span>
              <input
                // needs to be type 'text' to fill the form picked from calendar view. Otherwise 'date'
                type={history.location.state ? "text" : "date"}
                name=""
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
                // needs to be type 'text' to fill the form picked from calendar view. Otherwise 'date'
                type={history.location.state ? "text" : "date"}
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
              <br/>
              <select
                name="category"
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
                onChange={handleChange}
              />
            </div>
          </div>
          <span>Event Notes:</span>
        <textarea name="event_text" value={newTask.event_text} onChange={handleChange}/>
          <div className="task-form-buttons">
            <button
              type="button"
              className="delete-button"
              // reroute back if coming from calendar. Otherwise close form
              onClick={() => fromCalendar ? history.goBack() : setToggleForm(false)}
            >
              Close
            </button>
            <button
              className="confirm-button"
              type="submit"
              onClick={handleSubmit}
            >
              Confirm
            </button>
          </div>
        </>}
    </Form>
  );
};

export default NewTaskForm;
