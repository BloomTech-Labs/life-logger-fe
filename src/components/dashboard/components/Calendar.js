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
