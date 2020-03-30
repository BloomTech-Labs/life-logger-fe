import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsByUserId } from '../../../store/actions';
import { Container } from '../../dashboard/styles';
import CalendarApp from './Calendar';

const Calendarlist = () => {
  const dispatch = useDispatch();
  const tempUserDataId = localStorage.getItem('id');
  // const { userData } = useSelector(state => state.users);
  const { eventData } = useSelector(state => state.events);

  useEffect(
    () => {
      dispatch(fetchEventsByUserId(tempUserDataId));
    },
    [tempUserDataId, dispatch]
  );

  return (
    <Container>
      <CalendarApp events={eventData} />
    </Container>
  );
};

export default Calendarlist;
