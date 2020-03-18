import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateEvent, fetchEvent } from "../../actions/index";

const UpdateEventForm = props => {
  const [updateEventObject, setUpdateEventObject] = useState({
    title: props.eventData[0].title,
  event_text: props.eventData[0].event_text,
  location: props.eventData[0].location,
  category: props.eventData[0].category,
  event_ct_tm: props.eventData[0].event_ct_tm,
  event_st_tm: props.eventData[0].event_st_tm,
  event_et_tm: props.eventData[0].event_et_tm,
  all_day: props.eventData[0].all_day,
  event_resource: props.eventData[0].event_resource
  });

  const handleChange = event => {
    setUpdateEventObject({
      ...updateEventObject,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = asdf => {
    asdf.preventDefault();
    
    props.updateEvent(updateEventObject, props.eventData[0].id);
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
              value={updateEventObject.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Event Text: </label>
            <input
              name=" event_text"
              placeholder="event_text"
              value={updateEventObject.event_text}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              name="location"
              placeholder="location"
              value={updateEventObject.location}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Category:</label>
            <input
              name="category"
              placeholder="category"
              value={updateEventObject.category}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Start: </label>
            <input
              name="start"
              placeholder="start"
              value={updateEventObject.event_st_tm}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>End: </label>
            <input
              name="end"
              placeholder="end"
              value={updateEventObject.event_et_tm}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>All Day </label>
            <input
              name="allDay"
              type="checkbox"
              checked={updateEventObject.allDay}
              // value = {newEvent.allDay}
              onChange={handleChange}
            />
            <label>Resource </label>
            <input
              name="resource"
              placeholder="resource"
              value={updateEventObject.resource}
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
      eventData: state.events.eventData,
      isFetching: state.isFetching,
      error: state.error
    };
  },
  { updateEvent, fetchEvent }
)(UpdateEventForm);
