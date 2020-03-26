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
        //this.calendarComponentRef = React.createRef();
        this. state = {        
            calendarWeekends: true,
            calendarEvents: eventsList
         
            }
        }
    
    render() {
      return (
        <div className="calendar-app" style={{ height: 700, width: 800 }}>
          <div className="calendar-app-top">
            <button onClick={this.toggleWeekends}>toggle weekends</button>&nbsp;
            <button onClick={this.gotoPast}>go to a date in the past</button>
            &nbsp; (also, click a date/time to add an event)
          </div>
          <div className="calendar-app-calendar">
            <FullCalendar
              defaultView="dayGridMonth"
              header={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
              }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              //ref={this.calendarComponentRef}
              weekends={this.state.calendarWeekends}
              events={this.state.calendarEvents}
              dateClick={this.handleDateClick}
            />
          </div>
        </div>
      );
    }
  
    toggleWeekends = () => {
      this.setState({
         
        calendarWeekends: !this.state.calendarWeekends
      });
    };
  
    gotoPast = () => {
      let calendarApi = this.calendarComponentRef.current.getApi();
      calendarApi.gotoDate("2000-01-01"); 
    };
  
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
  
