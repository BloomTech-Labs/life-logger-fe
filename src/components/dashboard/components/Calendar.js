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
  const AllEvents = props.events; 
  //const AllEvents = [];
    // props.events.map(event => {AllEvents});
  

     //const AllEvents = Object.entries(props.events);
     // let AllEvents2 = {};

      

     // AllEvents.forEach(([key, value]) => {
      //  console.log(key);  
       // console.log(value);  
       // Array.prototype.push.apply(AllEvents2,);
      //})
      
     console.log("AllEvents: " + AllEvents );

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
                events={AllEvents} 
                
              />
            </div>
          </div>
          
          
        
      );


};

export default Calendaritems;