import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsByUserId } from '../../store/actions';
import Loading from '../UI/Loading';
import NewTaskForm from './components/NewTaskForm';
import TaskForm from './components/FormikForm';
import TaskList from './components/TaskList';
import { Container } from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { users, events } = useSelector(state => {
    return state
  });
  console.log('users  events', users, events);

  useEffect(
    () => {
      dispatch(fetchEventsByUserId(users.userData.user_id));
    },
    [users, dispatch]
  );

  if (events.isFetching) {
    return <Loading />;
  }

  return (
    <Container>
      <NewTaskForm />
      {/* <TaskForm /> */}
      <TaskList events={events.eventData} />
    </Container>
  );
};

export default Dashboard;
