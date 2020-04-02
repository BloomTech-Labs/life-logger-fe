import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import Swal from 'sweetalert2';

import { fetchEventsByUserId } from '../../../store/actions';
import Loading from '../../UI/Loading';
import NewTaskForm from './NewTaskForm';
import { Container } from '../styles';

const Calendar = () => {
  const dispatch = useDispatch();
  const tempUserDataId = localStorage.getItem('id');
  const [events, setEvents] = useState([]);
  const { eventData, isFetching, error } = useSelector(state => state.events);

  const history = useHistory();

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
            text: event.event_text,
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

  const handleClick = e => {
    console.log('event', e.event)
    Swal.fire({
      title: e.event.title,
      icon: 'info',
      text: e.event.extendedProps.text,
      showCancelButton: true,
      cancelButtonText: "Close",
      confirmButtonText: "View"
    }).then(result => {
      if (result.value){
        history.push(`/task/${e.event.id}`);
      }
    })
    // if (window.confirm('Would you like to modify this event?')) {
    //   history.push(`/task/${e.event.id}`);
    // }
  };

  const handleDateClick = arg => {
    const date = moment(arg.dateStr).format('MM/DD/YYYY');
    Swal.fire({
      title: `Would you like to add an event to ${date}?`,
      icon: 'question',
      // text: e.event.extendedProps.text,
      showCancelButton: true,
      cancelButtonText: "Nope",
      confirmButtonText: "Yeah"
    }).then(result => {
      if (result.value){
        console.log('wooohoooo!!')
        history.push(`/`, {date, visible: true});
      }
    })
  };

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
            eventClick={handleClick}
            dateClick={handleDateClick}
          />
        </div>
      </div>
    </Container>
  );
};

export default Calendar;
