import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsByUserId } from '../../../store/actions';
import CalendarApp from './Calendar';
import { Container } from '../../dashboard/styles';

const Calendarlist = () => {
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
            <CalendarApp events={eventData} />
    </Container>
  );
};

export default Calendarlist;
