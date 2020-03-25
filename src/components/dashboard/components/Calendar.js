import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import eventsList from "./CalendarItem";
moment.locale("en-US");
const thelocalizer = momentLocalizer(moment);
const myEventsList = eventsList;
 

function CalenderApp() {
  return (
    <div className="CalenderApp">
      <Calendar
        localizer={thelocalizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}

export default CalenderApp;