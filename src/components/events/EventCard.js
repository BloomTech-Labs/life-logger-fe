import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  deleteEvent,
  fetchEventsByUserId,
} from "../../actions/index";
import UpdateEventForm from "./UpdateForm";

const EventCard = props => {
  useEffect(() => {
    FetchUser();
  }, []);

  function FetchUser() {
    props.fetchEventsByUserId(props.userData.user_id);
  }

  return (
    <div>
      <h1>Card</h1>
      {props.eventData.map((event, key) => {
        return (
          <div key={event.id}>
            <div>
              <div>{event.title}</div>
              <button onClick={() => props.deleteEvent(event.id)}>
                Delete event
              </button>
              <button> Update Event</button>
              <div>
                <UpdateEventForm />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default connect(
  state => {
    return {
      eventData: state.events.eventData,
      userData: state.users.userData,
      isFetching: state.isFetching,
      error: state.error
    };
  },
  { fetchEventsByUserId, deleteEvent }
)(EventCard);
