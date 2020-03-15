import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteEvent, fetchEventsByUserId } from "../../actions/index";

const EventCard = props => {
  useEffect(() => {
    props.fetchEventsByUserId(props.userData.user_id);
  }, [props.userData.user_id]);

  return (
    <div>
      <h1>Card</h1>
      {console.log("Event Data", props)}
      {props.eventData.map((event, key) => {
        return (
          <div key={event.id}>
            <div>
              <div>{event.title}</div>
              <button onClick={()=>props.deleteEvent(event.id)}>Delete event</button>
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
