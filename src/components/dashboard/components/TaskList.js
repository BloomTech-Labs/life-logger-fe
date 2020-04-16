import moment from 'moment-timezone';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { deleteEvent } from '../../../store/actions';
import { ListContainer, ListHeader, ListItem } from '../styles';
import trashBin from '../../../assets/img/trash.png'

const TaskList = props => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = eventID => {
    history.push(`/task/${eventID}`);
  };

  const handleDelete = id => {
    Swal.fire({
      title: `Are you sure you want to delete this task?`,
      icon: 'error',
      showCancelButton: true,
      cancelButtonText: "NOOOO",
      confirmButtonText: "YES"
    }).then(result => {
      if (result.value){
        dispatch(deleteEvent(id));
      }
    })
  };

  return (
    <ListContainer>
      <ListHeader>
        <div className="task-title">Task</div>
        <div className="task-due-date">
          <div>Due Date</div>
          <div style={{marginRight: '40px'}}>Due Time</div>
        </div>
      </ListHeader>
      {props.events.map(event => {
        return (
          <ListItem key={event.id}>
            <div className="task-title" onClick={() => handleClick(event.id)}>
              {event.title}
            </div>
            <div className="task-due-date">
              <span onClick={() => history.push('/calendar') }>
                {moment(event.event_et_tm).format('MM/DD/YYYY')}
              </span>
              <span>
                {moment(event.event_et_tm).format('hh:mm A')}
              </span>
              <div onClick={() => handleDelete(event.id)}>
                <img alt="trash bin" src={trashBin} style={{width: '17px'}} />
              </div>
            </div>
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default TaskList;
