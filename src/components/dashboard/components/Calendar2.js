import React from "react";
import { render } from "react-dom";
import eventsList from "./CalendarItem";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/dist/react-big-calendar";

moment.locale("en-GB");
BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const BGCalendar = () => (
  <div style={{ height: 700 }}>
    <BigCalendar
      events={eventsList}
      step={60}
      views={allViews}
      selectable
      defaultDate={new Date(2015, 3, 1)}
    />
  </div>
);

export default BGCalendar;