import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendaritems from './Calendar';
import { fetchEventsByUserId } from '../../../store/actions';
import { Container} from './styles';
import Loading from '../UI/Loading';

const CalendarApp = () => {
  const dispatch = useDispatch();
  const { isFetching } = useSelector(state => state.users);
  const { userData } = useSelector(state => state.users);
  const { eventData } = useSelector(state => state.events);

  const tempUserDataId = localStorage.getItem("id")
  console.log("here", tempUserDataId)

  useEffect(
    () => {
      
      dispatch(fetchEventsByUserId(tempUserDataId));
    },
    [userData, dispatch]
  );
  console.log('is fetching from dashboard: ', isFetching )
  console.log('userData dashboard: ', userData);


  return (
      <Container>
        {isFetching ? <Loading />
        : (<> 
        <Calendaritems events={eventData} /> </>)}
      </Container>
  );
};

export default CalendarApp;

