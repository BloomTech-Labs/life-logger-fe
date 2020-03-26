import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; 
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import eventsList from "./TestData";

export default class CalendarApp extends Component {
     
    constructor(props) {
        super(props);
      
        this. state = {        
            calendarWeekends: true,
            calendarEvents: eventsList
         
            }
        }
    
    render() {
      return (
        <div className="calendar-app" style={{ height: 600, width: 800, marginTop:100 }}>
          
          <div className="calendar-app-calendar">
            <FullCalendar
              defaultView="dayGridMonth"
              header={{
                left: "prev,next",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
              }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              weekends={this.state.calendarWeekends}
              events={this.state.calendarEvents}
              dateClick={this.handleDateClick}
            />
          </div>
        </div>
      );
    }
  
  
    handleDateClick = arg => {
      if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
        this.setState({
           
          calendarEvents: this.state.calendarEvents.concat({
            
            title: "New Event",
            start: arg.date,
            allDay: arg.allDay
          })
        });
      }
    }}
  
