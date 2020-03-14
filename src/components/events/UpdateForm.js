import React, { useState } from "react";
import { connect } from "react-redux";
import { updateEvent } from "../actions/actions";

const initialValues = {
  title: "",
  start: "",
  end: "",
  allDay: true,
  resource: ""
};

const UpdateEventForm = props => {
  const [updateEvent, setUpdateEvent] = useState(initialValues);

  const handleChange = event => {
    setUpdateEvent({ ...updateEvent, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.updateEvent(updateEvent, props.match.params.id);
  };

  return (
    <div>
      <h1>Update Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Title: </label>

            <input
              name="title"
              placeholder="title Name"
              value={updateEvent.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Start: </label>
            <input
              name="start"
              placeholder="start"
              value={updateEvent.start}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>City: </label>
            <input
              name="end"
              placeholder="end"
              value={updateEvent.end}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>All Day </label>
            <input
              name="allDay"
              type="checkbox"
              checked={updateEvent.allDay}
              // value = {newEvent.allDay}
              onChange={handleChange}
            />
            <label>Resource </label>
            <input
              name="resource"
              placeholder="resource"
              value={updateEvent.resource}
              onChange={handleChange}
            />
          </div>
        </div>

        <button>Submit Changes</button>
      </form>
    </div>
  );
};

export default connect(
  state => {
    return {
      eventData: state.eventData,
      isFetching: state.isFetching,
      error: state.error
    };
  },
  { updateEvent }
)(UpdateEventForm);
