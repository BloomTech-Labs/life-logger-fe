import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; 
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import eventsList from "./TestData";
import moment from 'moment-timezone';
import { Container } from '../styles';
import { useDispatch, useSelector } from 'react-redux';

const CalendarApp = () => {


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
                weekends={this.state.calendarWeekends}
                events={this.state.calendarEvents}
                dateClick={this.handleDateClick}
                eventClick={this.handleEventClick}
              />
            </div>
          </div>
          
          </Container>
        
      );


};

export default CalendarApp;