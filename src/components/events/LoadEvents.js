import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import {fetchEventsByUserId } from "../../actions/index";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import Body from "../dashboard/Body";
import EventCard from "./EventCard"

const LoadEvents = props => {

return(<div>
    <Body/>
    <EventCard/>
    </div>
)
}


export default connect(
    state => {
        return {
            eventData: state.eventData,
            userData: state.userData,
            isFetching: state.isFetching,
            error: state.eroor
        }
    },
    { fetchEventsByUserId }
)(LoadEvents);