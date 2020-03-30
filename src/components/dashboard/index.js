import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsByUserId } from '../../store/actions';
import Loading from '../UI/Loading';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import { Container } from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { isFetching, eventData } = useSelector(state => state.events);

  const tempUserDataId = localStorage.getItem('id');

  useEffect(
    () => {
      dispatch(fetchEventsByUserId(tempUserDataId));
    },
    [tempUserDataId, dispatch]
  );

  if (isFetching) {
    return <Loading />;
  }

  return (
    <Container>
      <NewTaskForm />
      <TaskList events={eventData} />
    </Container>
  );
};

export default Dashboard;
