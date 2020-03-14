import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { fetchEvents, fetchEvent } from "../../actions/index";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import Body from "../dashboard/Body";
import UpdateEventForm from "./UpdateForm";

const LoadEvents = props => {
    
    const [events, setEvents] = useState();

  

    useEffect(()=> {
        axiosWithAuth()
            .get(`https://lyfe-logger-be.herokuapp.com/api/events/byuserid/${window.localStorage.id}`)
            .then(res => { 
                console.log(res)
                setEvents(res.data)})
            .catch(err => console.log(err))
    }, [])


return(
    <div>
    <Body events={events}/>
    <UpdateEventForm/>
    </div>
)
}


export default connect(
    state => {
        return {
            eventData: state.eventData,
            isFetching: state.isFetching,
            error: state.eroor
        }
    },
    { fetchEvents }
)(LoadEvents);