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
    <div className="CalenderApp" style={{ height: 700 }}>
      <Calendar
        date={new Date(2020, 3, 25)}
        localizer={thelocalizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        view="month"
      />
    </div>
  );
}

export default CalenderApp;