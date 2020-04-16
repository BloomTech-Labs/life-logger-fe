import moment from 'moment-timezone';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { withFormik, Form as FormikForm, Field } from 'formik';
import * as Yup from 'yup';

import { createEvent } from '../../../store/actions';
import { NewTaskForm as Form } from '../styles';

const TaskForm = props => {
  const history = useHistory();
  // this variable indicates if user is coming from calendar view:
  const fromCalendar = history.location.state;

  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.users);

  
  // open form by default if coming from calendar
  const [toggleForm, setToggleForm] = useState(fromCalendar ? true : false);
  // console.log('history state:', fromCalendar);
  // console.log('props: ', props.values);


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

      <FormikForm>
        {toggleForm &&
        <>
          <div className="task-input-title">
            <Field
              type="text"
              name="title"
              placeholder= "Add a task..."
              style={{marginTop: "30px"}}
            />
          </div>
           <div className="error">
            {props.touched.title && props.errors.title && (
              <p>{props.errors.title}</p>
            )}
          </div>
          
            <div className="task-input-info">
              <div>
                <span>Start Date:</span>
                <Field
                  // needs to be type 'text' to fill the form picked from calendar view. Otherwise 'date'
                  type={history.location.state ? "text" : "date"}
                  name="start_date"
                  />
                <span>Start Time:</span>
                <Field
                  type="time"
                  name="start_time"
                  />
              </div>
              <div>
                <span>End Date:</span>
                <Field
                  // needs to be type 'text' to fill the form picked from calendar view. Otherwise 'date'
                  type={history.location.state ? "text" : "date"}
                  name="end_date"
                  />
                <span>End Time:</span>
                <Field
                  type="time"
                  name="end_time"
                  />
              </div>
              <div>
                <span>Category:</span>
                <br/>
                <Field
                  component="select"
                  name="category"
                  >
                  <option>Select a category</option>
                  <option value={0}>Work</option>
                  <option value={1}>Home</option>
                  <option value={2}>Family</option>
                  <option value={3}>Uncategorized</option>
                </Field>
                <span>Location:</span>
                <Field
                  type="text"
                  name="location"
                  />
              </div>
            </div>
            <span>Event Notes:</span>
            <Field
              component="textarea"
              name="event_text"
              placeholder="describe an event"
            />
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
                >
                Confirm
              </button>
            </div>
        </>}
      </FormikForm>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    title: "",
    start_date: '',
    start_time: '',
    end_date: '',
    end_time: '',
    category: '',
    location: '',
    event_text: '',
  }),
  validationSchema: Yup.object().shape({
    title: Yup
      .string()
      .required("Please name your Task"),
    start_date: Yup
      .string()
      .required("Enter start date"),
    end_date: Yup
      .string()
      .required("Yo! I think your task is not endless"),
    event_text: Yup
      .string()
      .required("Describe your task"),
  }),
  handleSubmit: (values, { resetForm }) => {
    console.log(values);
    resetForm();
  }
})(TaskForm);
