import React, { Component } from "react";
//import { render } from "react-dom";
import events from "./CalendarItem";
import {Calendar} from "react-big-calendar";
//import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

//moment.locale("en");
//Calendar.momentLocalizer(moment);

class CalenderApp extends Component {
    state = {
      view: "day",
      date: new Date(2015, 3, 12),
      width: 500
    };
  
    componentDidMount() {
      window.addEventListener("resize", () => {
      
      });
    }
  
    render() {
      return (
        <div style={{ height: 700 }}>
          <button onClick={() => this.setState({ view: "day" })}>Day</button>
          <button onClick={() => this.setState({ view: "month" })}>Month</button>
          <Calendar
            style={{ height: 500, width: this.state.width }}
            toolbar={false}
            events={events}
            step={60}
            //views={allViews}
            view={this.state.view}
            onView={() => {}}
            date={this.state.date}
            onNavigate={date => this.setState({ date })}
          />
        </div>
      );
    }
  }
  
  export default CalenderApp;
