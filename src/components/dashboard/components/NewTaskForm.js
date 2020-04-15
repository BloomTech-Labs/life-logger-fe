import moment from 'moment-timezone';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { createEvent } from '../../../store/actions';
import { NewTaskForm as Form } from '../styles';

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

    console.log(startDate, endDate);

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

  // schema for form validation yup:
  const formSchema = Yup.object().shape({
    title: Yup
      .string()
      .required("Must include title"),
    start_date: Yup
      .string()
      .required("Must include start date"),
    end_date: Yup
      .string()
      .required("Must include end date"),
    event_text: Yup
    .string()
    .required("Please describe an event"),
  });

  // State for error messages:
  // we will use this for form validation:
  const [errors, setErrors] = useState({
    title: "",
    event_text: "",
    start_date: "",
    end_date: "",
  });

  /* Each time the form value state is updated, check to see if it is valid per our schema. 
  This will allow us to enable/disable the submit button.*/
  useEffect(() => {
    /* We pass the entire state into the entire schema, no need to use reach here. 
    We want to make sure it is all valid before we allow a user to submit
    isValid comes from Yup directly */
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

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
                name="start_date"
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
                name="end_date"
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
