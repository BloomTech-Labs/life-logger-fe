import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dates from 'react-big-calendar/lib/utils/dates';

import eventsList from "./CalendarItem";
moment.locale("en");
const thelocalizer = momentLocalizer(moment);
const myEventsList = eventsList;



function CalenderApp() {

  console.log("Events List: ", myEventsList);
  
  return (
    <div className="CalenderApp" style={{ height: 700, width: 800 }}>
      <br></br><br></br><br></br>
      <Calendar
        selectable
        step={5}
        timeslots={3}
        localizer={thelocalizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        //view={"month"}
        views={["month"]}
        
      />
    </div>
  );
}

export default CalenderApp;