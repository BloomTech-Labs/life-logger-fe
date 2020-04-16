import moment from 'moment-timezone';
import React, { useState, useReducer, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent } from '../../../store/actions';
import { NewTaskForm as Form } from '../styles';
import { useHistory } from 'react-router-dom';
import  * as Yup from "yup";


function reducer(state, action) {
  switch (action.type) {
    case 'SET_ERRORS': 
    return {
      ...state,
      errors: action.payload
    };
    
    case 'SET_FIELD_TOUCHED': 
    return {
      ...state,
      touched: {
        ...state.touched,
        ...action.payload.touched
      },
        values: {
          ...state.values,
          ...action.payload.values
        }
    };
    default:
      return state;
  }

}

function useFormik(props){
  const [state, dispatch] = useReducer(reducer, {
    values: props.initialValues,
    touched: {},
    errors: {}
  });

  useEffect(() => {
      if (props.validate) {
        const errors = props.validate(state.values)
        dispatch({type: 'SET_ERRORS', payload: errors})
      }
    },[state.values]
  )

  const handleBlur = e => {
    e.persist();
    dispatch({
      type: 'SET_FIELD_TOUCHED',
      payload: { 
        touched: {[e.target.name]: true}, 
        values: {[e.target.name]: e.target.value}
      }
    })
  }

  return { handleBlur, ...state }
}

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

  const handleChange = e => {
    e.persist()
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    });
  };

  const formik = useFormik({
    initialValues: {...newTask, startDate, startTime, endDate, endTime},
    // validationSchema: Yup.object().shape({
    //   title: Yup.string()
    //     .max(15, 'Must be 15 characters or less')
    //     .required('Required')
    // }),
    validate: values => {
      let errors = {};
      Object.entries(values).map(([key, value])=> {
        if(key.includes('event_')){
        } else {
          if (!value) {
            errors[key] = "required"
          }
        }
      })
      return errors
    }
  });

  let { handleBlur, touched, errors} = formik;

  const handleSubmit = e => {
    if (Object.keys(errors).length !== 0) {
      
      e.preventDefault();
      alert('all required fields MUST be filled in');

    } else {
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
      setToggleForm(false);

      // reroute back if coming from calendar 
      if (fromCalendar) history.goBack();
    }
  };
  console.log(errors)

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
              onBlur={handleBlur}
              onChange={handleChange}
              value={newTask.title}
              placeholder="Add a task..."
              style={{marginTop: "30px"}}
            />
          </div>
          {touched.title && errors.title && (<div style={{color: 'red', marginTop: -25, marginBottom: 5, fontStyle: "italic", fontSize: 10}}>{errors.startDate}</div>)}
          <div className="task-input-info">
            <div>
              <span>Start Date:</span>
              <input
                // needs to be type 'text' to fill the form picked from calendar view. Otherwise 'date'
                type={history.location.state ? "text" : "date"}
                name="startDate"
                value={startDate}
                onBlur={handleBlur}
                onChange={e => setStartDate(e.target.value)}
              />
              {touched.startDate && errors.startDate && (<div style={{color: 'red', marginTop: -20, marginBottom: 5, fontStyle: "italic", fontSize: 10}}>{errors.startDate}</div>)}
              <span>Start Time:</span>
              <input
                name="startTime"
                type="time"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
                onBlur={handleBlur}
              />
              {touched.startTime && errors.startTime && (<div style={{color: 'red', marginTop: -20, marginBottom: 5, fontStyle: "italic", fontSize: 10}}>{errors.startTime}</div>)}
            </div>
            <div>
              <span>End Date:</span>
              <input
                // needs to be type 'text' to fill the form picked from calendar view. Otherwise 'date'
                type={history.location.state ? "text" : "date"}
                name="endDate"
                value={endDate}
                onBlur={handleBlur}
                onChange={e => setEndDate(e.target.value)}
              />
              {touched.endDate && errors.endDate && (<div style={{color: 'red', marginTop: -20, marginBottom: 5, fontStyle: "italic", fontSize: 10}}>{errors.endDate}</div>)}
              <span>End Time:</span>
              <input
                name="endTime"
                type="time"
                value={endTime}
                onBlur={handleBlur}
                onChange={e => setEndTime(e.target.value)}
              />
              {touched.endTime && errors.endTime && (<div style={{color: 'red', marginTop: -20, marginBottom: 5, fontStyle: "italic", fontSize: 10}}>{errors.endTime}</div>)}
            </div>
            <div>
              <span>Category</span>
              <br/>
              <select
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
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
                onBlur={handleBlur}
              />
            </div>
          </div>
          <span>Event Notes:</span>
        <textarea name="event_text" value={newTask.event_text} onChange={handleChange} onBlur={handleBlur}/>
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
