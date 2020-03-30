<<<<<<< HEAD
import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; 
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import moment from 'moment-timezone';
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
    
    // Add a new event
    const handleDateClick = arg => {
      if (window.confirm("Would you like to add an event to " + moment(arg.dateStr).format('MM/DD/YYYY') + " ?")) {    
        
        history.push(`/`);

      }
    }
    
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
                dateClick={handleDateClick}
                //eventClick={() => handleEventClick(theEvents.id)}          
              />
            </div>
          </div>          
        
      );
};

export default Calendaritems;
=======
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { fetchEventsByUserId } from '../../../store/actions';
import Loading from '../../UI/Loading';
import { Container } from '../styles';

const Calendar = () => {
  const dispatch = useDispatch();
  const tempUserDataId = localStorage.getItem('id');
  const [events, setEvents] = useState([]);
  const { eventData, isFetching, error } = useSelector(state => state.events);

  useEffect(
    () => {
      dispatch(fetchEventsByUserId(tempUserDataId));
    },
    [tempUserDataId, dispatch]
  );

  useEffect(
    () => {
      if (!isFetching && !error) {
        let newEvents = [...eventData];

        newEvents = eventData.map(event => {
          return {
            id: event.id,
            title: event.title,
            allDay: event.all_day,
            start: event.event_st_tm,
            end: event.event_et_tm
          };
        });

        setEvents(newEvents);
      }
    },
    [eventData, isFetching, error]
  );

  if (isFetching) {
    return <Loading />;
  }

  return (
    <Container>
      <div
        className="calendar-app"
        style={{ marginTop: 100, marginBottom: 50 }}
      >
        <div className="calendar-app-calendar">
          <FullCalendar
            height={600}
            width={700}
            defaultView="dayGridMonth"
            editable={true}
            header={{
              left: 'prev,next',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={events}
          />
        </div>
      </div>
    </Container>
  );
};

export default Calendar;
>>>>>>> 075bb5cc718e8d974893155268565b8fdbf0659b
