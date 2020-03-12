import React, { useState } from "react";

import { connect } from "react-redux";
import { createEvent } from "../../actions/index";

const initialValues = {
    title : "",
    start : "",
    end : "",
    allDay : true,
    resource : ""
}

const CreateEventForm = props => {
    const [newEvent, setNewEvent] = useState(initialValues);


    const handleChange = e => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
        };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newEvent)
        props.createEvent(newEvent);
    };

    return(<div>
        <form onSubmit={handleSubmit}>
            <input 
                name = "title"
                placeholder = "title"
                value = {newEvent.title}
                onChange = {handleChange}
            />

            <input 
                name = "start"
                placeholder = "start date"
                value = {newEvent.start}
                onChange = {handleChange}
            />     

            <input 
                name = "end"
                placeholder = "end date"
                value = {newEvent.end}
                onChange = {handleChange}
            />
            <label>
                All Day
            <input 
                name = "allDay"
                type = "checkbox"
                checked = {newEvent.allDay}
                // value = {newEvent.allDay}
                onChange = {handleChange}
            />
            </label>

            <input 
                name = "resource"
                placeholder = "other info"
                value = {newEvent.resource}
                onChange = {handleChange}
            />

            <button onSubmit = {handleSubmit}>Submit</button>
        </form>
    </div>);
}

export default connect(
    state => {
        return {
            eventData: state.eventData,
            isFetching: state.isFetching,
            error: state.error
        }
    },
    {createEvent}
)(CreateEventForm)