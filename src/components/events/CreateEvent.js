import React, { useState } from "react";

import { connect } from "react-redux";
import { createEvent } from "../../actions/index";

const initialValues = {
    user_id : 0,
    title : "",
    event_text : "",
    location : "",
    category : 1,
    event_ct_tm : "",
    event_st_tm : "",
    event_et_tm : "",
    all_day : true,
    event_resource : ""
}

const CreateEventForm = props => {
    const [newEvent, setNewEvent] = useState(initialValues);


    const handleChange = e => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
        };

    const handleSubmit = e => {
        e.preventDefault();
        
        newEvent.user_id = window.localStorage.id

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
                name = "event_text"
                placeholder = "Event Text"
                value = {newEvent.event_text}
                onChange = {handleChange}
            /> 

            <input 
                name = "location"
                placeholder = "Location"
                value = {newEvent.location}
                onChange = {handleChange}
            />  

            <input 
                name = "event_st_tm"
                placeholder = "start date"
                value = {newEvent.event_st_tm}
                onChange = {handleChange}
            />     

            <input 
                name = "event_et_tm"
                placeholder = "end date"
                value = {newEvent.event_et_tm}
                onChange = {handleChange}
            />

            <input 
                name = "event_ct_tm"
                placeholder = "date"
                value = {newEvent.event_ct_tm}
                onChange = {handleChange}
            />  

            <input 
                name = "category"
                placeholder = "Category"
                value = {newEvent.catergory}
                onChange = {handleChange}
            />  
            <label>
                All Day
            <input 
                name = "all_day"
                type = "checkbox"
                checked = {newEvent.all_day}
                // value = {newEvent.allDay}
                onChange = {handleChange}
            />
            </label>

            <input 
                name = "event_resource"
                placeholder = "other info"
                value = {newEvent.event_resource}
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