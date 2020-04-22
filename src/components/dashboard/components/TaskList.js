import moment from "moment-timezone";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ListContainer, ListHeader, ListItem, SortListButton } from "../styles";

const TaskList = (props) => {
  const history = useHistory();

  const handleClick = (eventID) => {
    history.push(`/task/${eventID}`);
  };

  const [sortStatus, setSortStatus] = useState("all");

  const handleAllSort = () => {
    setSortStatus("all");
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
            handleAllSort();
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
      {props.events
        .filter((event) =>
          sortStatus === "all" ? true : event.category === sortStatus
        )
        .map((event) => {
          return (
            <ListItem onClick={() => handleClick(event.id)} key={event.id}>
              {/* <div>{event.category}</div> */}
              <div className="task-title">{event.title}</div>
              <div className="task-due-date">
                <span>{moment(event.event_et_tm).format("MM/DD/YYYY")}</span>
                <span>{moment(event.event_et_tm).format("hh:mm A")}</span>
              </div>
            </ListItem>
          );
        })}
    </ListContainer>
  );
};

export default TaskList;
