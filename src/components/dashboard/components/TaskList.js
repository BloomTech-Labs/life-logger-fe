import moment from 'moment-timezone';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteEvent } from '../../../store/actions';
import { ListContainer, ListHeader, ListItem } from '../styles';

import { filterTasksByCategory } from '../../../utils/filterTasksByCategory';

import trashBin from '../../../assets/img/trash.png';
import tag from '../../../assets/img/tag.png';

const TaskList = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (eventID) => {
        history.push(`/task/${eventID}`);
    };

    const [sortStatus, setSortStatus] = useState(3);

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
                {filterTasksByCategory(props.events, sortStatus).map(
                    (event) => {
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
                                <div
                                    className="task-title"
                                    onClick={() => handleClick(event.id)}
                                >
                                    {event.title}
                                </div>
                                <div className="task-due-date">
                                    <span
                                        onClick={() =>
                                            history.push('/calendar')
                                        }
                                    >
                                        {moment(event.event_et_tm).format(
                                            'MM/DD/YYYY'
                                        )}
                                    </span>
                                    <span>
                                        {moment(event.event_et_tm).format(
                                            'hh:mm A'
                                        )}
                                    </span>
                                    <div
                                        onClick={(e) =>
                                            handleDelete(event.id, e)
                                        }
                                    >
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
                    }
                )}
            </div>
        </ListContainer>
    );
};

export default TaskList;
