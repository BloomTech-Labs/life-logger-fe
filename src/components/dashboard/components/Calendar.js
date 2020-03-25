import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import eventsList from "./CalendarItem";

const localizer = BigCalendar.momentLocalizer(moment);
const myEventsList = eventsList;
 

function CalenderApp() {
  return (
    <div className="App">
      <BigCalendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}

export default CalenderApp;