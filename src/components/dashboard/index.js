import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsByUserId } from '../../store/actions';
import Loading from '../UI/Loading';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import { Container } from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { users, events } = useSelector(state => {
    return state
  });

  console.log('users  events', users, events);

  const userId = users.userData.user_id

  useEffect(
    () => {
      dispatch(fetchEventsByUserId(userId));
    },
    [userId, dispatch]
  );

  if (events.isFetching) {
    return <Loading />;
  }

  return (
    <Container>
      <NewTaskForm />
      <TaskList events={events.eventData} />
    </Container>
  );
};

export default Dashboard;
