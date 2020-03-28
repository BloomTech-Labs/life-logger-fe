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
import { Container } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsByUserId } from '../../../store/actions';

const CalendarApp = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.users);
  const { eventData } = useSelector(state => state.events);
    
  useEffect(
    () => {
      dispatch(fetchEventsByUserId(userData.user_id));
    },
    [userData, dispatch]
  );

    
    return (

        <Container>         
          
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
                events={eventData} 
                //events={eventsList} 
              />
            </div>
          </div>
          
          </Container>
        
      );


};

export default CalendarApp;