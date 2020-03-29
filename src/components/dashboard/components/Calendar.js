import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; 
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
//import moment from 'moment-timezone';
//import eventsList from "./TestData";

const Calendaritems = props => {
  
  const history = useHistory(); 
  
    // Grab All of the events for the logged in user.  
    const theEvents = props.events.map(AllEvents => { return{id: AllEvents.id,title: AllEvents.title,start: AllEvents.event_st_tm,end: AllEvents.event_et_tm };
           
    }); 
    
    //Update an event
    const handleEventClick = eventID => {

      console.log("AllEvents:" + theEvents);
      
      console.log("event id: " + eventID)
          if (window.confirm("Would you like to modify this event?")) {
        history.push(`/task/${eventID}`); 
    }};

    
    return (           
          
          <div className="calendar-app" style={{ marginTop:100, marginBottom:50 }}>
          
            <div className="calendar-app-calendar">
              <FullCalendar
                height= {600}
                width = {700} 
                defaultView="dayGridMonth"
                editable= {true}
                header={{
                  left: "prev,next",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                  
                }}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                events={theEvents} 
                eventClick={() => handleEventClick(66)}
                //eventClick={() => handleEventClick(theEvents.id)}          
              />
            </div>
          </div>          
        
      );
};

export default Calendaritems;