import React from 'react';
import { useHistory } from 'react-router-dom';
import { ListContainer, ListItem } from '../styles';

const TaskList = props => {
  const history = useHistory();

  const handleClick = eventID => {
    history.push(`/task/${eventID}`);
  };

  return (
    <ListContainer>
      {props.events.map(event => {
        return (
          <ListItem onClick={() => handleClick(event.id)}>
            <div>
              {event.title}
            </div>
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default TaskList;
