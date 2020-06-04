import moment from 'moment-timezone';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteEvent } from '../../../store/actions';
import { ListContainer, ListHeader, ListItem } from '../styles';

import { filterTasksByCategory } from '../../../utils/filterTasksByCategory';

import trashBin from '../../../assets/img/trash.png';
import tag from '../../../assets/img/tag.png';

const TaskList = ({ events }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (eventID) => {
    history.push(`/task/${eventID}`);
  };

  const [sortStatus, setSortStatus] = useState(3);
  const [filterMonth, setFilterMonth] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([...events]);

  // 3 is for every event, w/o sort

  const handleAllSort = () => {
    setSortStatus(3);
  };

  const handleWorkSort = () => {
    setSortStatus(0);
  };
  const handleHomeSort = () => {
    setSortStatus(1);
  };

  const handleFamilySort = () => {
    setSortStatus(2);
  };

  const handleDueDateSort = () => setSortStatus('dueDate');

  const handleMonthFilterChange = (e) => {
    let updatedMonthFilter;

    if (e.target.value !== 'all') {
      updatedMonthFilter = parseInt(e.target.value); // convert month value to a number for the filter util
    } else {
      updatedMonthFilter = e.target.value;
    }
    handleDueDateSort();
    setFilterMonth(updatedMonthFilter);
  };

  const handleDelete = (id, e) => {
    e.preventDefault();
    Swal.fire({
      title: `Are you sure you want to delete this task?`,
      icon: 'error',
      showCancelButton: true,
      cancelButtonText: 'NO',
      confirmButtonText: 'YES',
    }).then((result) => {
      if (result.value) {
        dispatch(deleteEvent(id));
      }
    });
  };

  useEffect(() => {
    const updatedTasks = filterTasksByCategory(events, sortStatus, filterMonth);

    console.log('updatedTasks: ', updatedTasks);

    setFilteredTasks(updatedTasks);
  }, [events, sortStatus, filterMonth]);

  return (
    <ListContainer>
      <div className="tags">
        <img alt="tags" src={tag} style={{ width: '20px' }} />
        Tags:
        <div
          onClick={() => {
            handleAllSort();
          }}
        >
          All
        </div>
        <div
          onClick={() => {
            handleHomeSort();
          }}
        >
          Home
        </div>
        <div
          onClick={() => {
            handleFamilySort();
          }}
        >
          Family
        </div>
        <div
          onClick={() => {
            handleWorkSort();
          }}
        >
          Work
        </div>
        <label htmlFor="monthFilter">Filter By Month</label>
        <select
          onChange={handleMonthFilterChange}
          id="monthFilter"
          name="monthFilter"
          value={filterMonth}
        >
          <option value="all">All</option>
          <option value={1}>January</option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>
      </div>
      <ListHeader>
        <div className="task-title">Task</div>
        <div className="task-due-date">
          <div>Due Date</div>
          <div style={{ marginRight: '40px' }}>Due Time</div>
        </div>
      </ListHeader>

      {/* below is content of events: */}
      <div className="listItemContainer">
        {filteredTasks.map((event) => {
          return (
            <ListItem
              key={event.id}
              style={{
                borderLeft: event.iscomplete
                  ? '8px solid #53dc98'
                  : '8px solid #ec3e61',
                borderBottom: '1px solid red',
              }}
            >
              <div className="task-title" onClick={() => handleClick(event.id)}>
                {event.title}
              </div>
              <div className="task-due-date">
                <span onClick={() => history.push('/calendar')}>
                  {moment(event.event_et_tm).format('MM/DD/YYYY')}
                </span>
                <span>{moment(event.event_et_tm).format('hh:mm A')}</span>
                <div onClick={(e) => handleDelete(event.id, e)}>
                  <img
                    alt="trash bin"
                    src={trashBin}
                    style={{
                      width: '17px',
                      marginRight: '20px',
                    }}
                  />
                </div>
              </div>
            </ListItem>
          );
        })}
      </div>
    </ListContainer>
  );
};

// for eslint props validation
TaskList.propTypes = {
  events: PropTypes.array,
};

export default TaskList;
