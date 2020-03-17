import React from 'react';
import { ListContainer, ListItem } from '../styles';

const TaskList = props => {
  return (
    <ListContainer>
      {props.events.map(event => {
        return (
          <ListItem>
            {event.title}
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default TaskList;
