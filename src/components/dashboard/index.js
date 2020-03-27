import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsByUserId } from '../../store/actions';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import { Container, ListHeader } from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { isFetching } = useSelector(state => state.users);
  const { userData } = useSelector(state => state.users);
  const { eventData } = useSelector(state => state.events);

  const tempUserDataId = localStorage.getItem("id")
  console.log("here", tempUserDataId)

  useEffect(
    () => {
      // dispatch(fetchEventsByUserId(userData.user_id));
      dispatch(fetchEventsByUserId(tempUserDataId));
    },
    [userData, dispatch]
  );
  // console.log('is fetching from dashboard: ', isFetching )
  console.log('userData dashboard: ', userData);


  return (
    <Container>
      <NewTaskForm />
      <TaskList events={eventData} />
    </Container>
  );
};

export default Dashboard;
