import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsByUserId } from '../../store/actions';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import { Container } from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.users);
  const { eventData } = useSelector(state => state.events);

  useEffect(
    () => {
      dispatch(fetchEventsByUserId(userData.user_id));
    },
    [userData, eventData, dispatch]
  );

  return (
    <Container>
      <NewTaskForm />
      <TaskList events={eventData} />
    </Container>
  );
};

export default Dashboard;
