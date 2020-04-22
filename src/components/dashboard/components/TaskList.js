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

  const handleDelete = (id, e) => {
    e.preventDefault();
    Swal.fire({
      title: `Are you sure you want to delete this task?`,
      icon: 'error',
      showCancelButton: true,
      cancelButtonText: "NO",
      confirmButtonText: "YES"
    }).then(result => {
      if (result.value){
        dispatch(deleteEvent(id));
      }
    })
  };
  
  let showOnce = true;
  return (
    <ListContainer>
      <ListHeader className="task-title-header">
        <div className="task-title">Task</div>
        <div className="task-due-date">
          <div>Due Date</div>
          <div style={{ marginRight: '40px' }}>Due Time</div>
        </div>
      </ListHeader>
      
      {/* bellow is content of events: */}
      <div className="listItemContainer">
      {props.events.map(event => {
        // check to see if event is upcoming or past
        const upcoming = moment().isSameOrBefore(event.event_et_tm);

        // show upcoming message once
        if (showOnce && upcoming) {
          showOnce = false;
          return (
            <div style={{textAlign: 'center', marginTop: '10px', fontSize: '1.4rem', fontStyle: 'italic'}}>
              Today: {moment().format("MMMM DD YYYY")}
            </div>
          )
        }

        return (
          <ListItem
            key={event.id}
            style={{
              borderLeft: event.iscomplete? "8px solid #53dc98" : "8px solid #ec3e61",
              borderBottom: upcoming ? "1.2px solid #53dc98" : "1px solid red",
            }}
           >
            <div
              className="task-title"
              onClick={() => handleClick(event.id)}
            >
              {event.title}
            </div>
            <div
              className="task-due-date"
            >
              <span onClick={() => history.push('/calendar') }>
                {moment(event.event_et_tm).format('MM/DD/YYYY')}
              </span>
              <span>
                {moment(event.event_et_tm).format('hh:mm A')}
              </span>
              <div onClick={e => handleDelete(event.id, e)}>
                <img alt="trash bin" src={trashBin} style={{width: '17px'}} />
              </div>
            </div>
          </ListItem>
        );
      })}
      </div>
    </ListContainer>
  );
};

export default TaskList;
