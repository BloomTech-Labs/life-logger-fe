import moment from 'moment-timezone';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ListContainer, ListHeader, ListItem } from '../styles';

const TaskList = props => {
  const history = useHistory();

  const handleClick = eventID => {
    history.push(`/task/${eventID}`);
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
              <span onClick={() => { history.push('/calendar') }}>
                {moment(event.event_et_tm).format('MM/DD/YYYY')}
              </span>
              <span>
                {moment(event.event_et_tm).format('hh:mm A')}
              </span>
              <div onClick={() => alert('here!')}>
                  del
              </div>
            </div>
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default TaskList;
