import moment from "moment-timezone";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ListContainer, ListHeader, ListItem, SortListButton } from "../styles";

const TaskList = (props) => {
  const history = useHistory();

  const handleClick = (eventID) => {
    history.push(`/task/${eventID}`);
  };

  const [sortStatus, setSortStatus] = useState(null);

  const handleWorkSort = () => {
    setSortStatus(0);
    console.log(workArray);
  };
  const handleHomeSort = () => {
    setSortStatus(1);
  };

  const handleFamilySort = () => {
    setSortStatus(2);
  };

  let eventArray = props.events.map((event) => {
    return (
      <ListItem onClick={() => handleClick(event.id)} key={event.id}>
        <div>{event.category}</div>
        <div className="task-title">{event.title}</div>
        <div className="task-due-date">
          <span>{moment(event.event_et_tm).format("MM/DD/YYYY")}</span>
          <span>{moment(event.event_et_tm).format("hh:mm A")}</span>
        </div>
      </ListItem>
    );
  });

  let workArray = [];
  let homeArray = [];
  let familyArray = [];
  for (let i = 0; i < eventArray.length; i++) {
    if (eventArray[i].category === 0) {
      workArray.push(eventArray[i]);
    }
  }
  for (let i = 0; i < eventArray.length; i++) {
    if (eventArray[i].category === 1) {
      homeArray.push(eventArray[i]);
    }
  }
  for (let i = 0; i < eventArray.length; i++) {
    if (eventArray[i].category === 1) {
      familyArray.push(eventArray[i]);
    }
  }

  return (
    <ListContainer>
      <div>
        <SortListButton
          onClick={() => {
            handleWorkSort();
          }}
        >
          Work
        </SortListButton>
        <SortListButton
          onClick={() => {
            handleHomeSort();
          }}
        >
          Home
        </SortListButton>

        <SortListButton
          onClick={() => {
            handleFamilySort();
          }}
        >
          Family
        </SortListButton>
        <SortListButton
          onClick={() => {
            setSortStatus(null);
          }}
        >
          All
        </SortListButton>
      </div>
      <ListHeader>
        <div className="task-title">Task</div>
        <div className="task-due-date">
          <span>Due Date</span>
          <span>Due Time</span>
        </div>
      </ListHeader>

      {(() => {
        switch (sortStatus) {
          case 0:
            return workArray;
          case 1:
            return eventArray;
          case 2:
            return <h1>Case 2</h1>;
          default:
            return eventArray;
        }
      })()}
    </ListContainer>
  );
};

export default TaskList;
