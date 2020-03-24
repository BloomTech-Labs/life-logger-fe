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
          <span>Due Date</span>
          <span>Due Time</span>
        </div>
      </ListHeader>
      {props.events.map(event => {
        return (
          <ListItem onClick={() => handleClick(event.id)}>
            <div className="task-title">
              {event.title}
            </div>
            <div className="task-due-date">
              <span>
                {moment(event.event_et_tm).format('MM/DD/YYYY')}
              </span>
              <span>
                {moment(event.event_et_tm).format('hh:mm A')}
              </span>
            </div>
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default TaskList;
