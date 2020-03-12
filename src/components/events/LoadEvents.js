import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchEvents, fetchEvent } from "../../actions/index";

const LoadEvents = props => {
    
    const [events, setEvents] = useState();

    return(
            {/* <button onClick = {setEvents(fetchEvents())}>My Events</button> */}
            events.map(event => {
                event
            })
    );
}

export default LoadEvents