import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsByUserId } from '../../../store/actions';
import Loading from '../../UI/Loading';
import { Container } from '../styles';
import Calendaritems from './Calendar';

const CalendarApp = () => {
  const dispatch = useDispatch();
  const { isFetching } = useSelector(state => state.users);
  const { userData } = useSelector(state => state.users);
  const { eventData } = useSelector(state => state.events);

  const tempUserDataId = localStorage.getItem("id")


  useEffect(
    () => {
      
      dispatch(fetchEventsByUserId(tempUserDataId));
    },
    [userData, dispatch, tempUserDataId]
  );



  return (
      <Container>
        {isFetching ? <Loading />
        : (<> 
        <Calendaritems events={eventData} /> </>)}
      </Container>
  );
};

export default CalendarApp;

