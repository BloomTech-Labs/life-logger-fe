/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useContext, Fragment } from 'react';
import TaskContext from '../../../context/TaskContext';
import PropTypes from 'prop-types';

import EditTask from '../../forms/EditTask';
import DeleteTask from '../../forms/DeleteTask';
import ViewTask from '../../ViewTask';
import TaskCheckmark from './TaskCheckmark';
import Card from './Card';
import TaskCardContents from './TaskCardContents';
import HiddenIcons from '../HiddenIcons';
import Modal from '../Modal';

const Task = ({ task }) => {
  const { editTask } = useContext(TaskContext);
  const [isComplete, setIsComplete] = useState(task.is_complete);
  const [isNotInitial, setIsNotInitial] = useState(false); // state to prevent "unstrike" keyframe animation from running on mount
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewTaskOpen, setIsViewTaskOpen] = useState(false);

  const toggleComplete = () => {
    // make PUT request to backend to update `is_complete` for this task
    // need to pass in task id
    editTask(localStorage.getItem('userId'), task.id, {
      id: task.id,
      is_complete: !isComplete,
    });

    setIsComplete(!isComplete);
    setIsNotInitial(true); // allows "unstrike" animation to run now whenever a task is marked incomplete
  };

  const toggleViewTask = () => {
    setIsViewTaskOpen(!isViewTaskOpen);
  };
  const toggleIsEditModalOpen = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleIsDeleteModalOpen = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };
  const detailsButton = {
    display: 'inline-block',
    borderRadius: '4px',
    backgroundColor: '#6db755',
    border: 'none',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: '14px',
    padding: '10px',
    width: '75px',
    transition: 'all 0.5s',
    cursor: 'pointer',
    margin: '5px',
  };
  return (
    <Fragment>
      <div
        sx={{
          position: `relative`,
        }}
      >
        <Card>
          <TaskCheckmark
            toggleComplete={toggleComplete}
            isChecked={isComplete}
            id={task.id}
          />
          <TaskCardContents
            task={task}
            isComplete={isComplete}
            isNotInitial={isNotInitial}
          />
        </Card>
        <button style={detailsButton} type="details" onClick={toggleViewTask}>
          Details
        </button>
        <HiddenIcons
          toggleIsEditModalOpen={toggleIsEditModalOpen}
          toggleIsDeleteModalOpen={toggleIsDeleteModalOpen}
          task={task}
        />
      </div>
      {isViewTaskOpen && (
        <Modal onClose={() => setIsViewTaskOpen(!isViewTaskOpen)}>
          <ViewTask task={task} />
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal onClose={() => setIsEditModalOpen(!isEditModalOpen)}>
          <EditTask key={task.id} task={task} />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal onClose={() => setIsDeleteModalOpen(!isDeleteModalOpen)}>
          <div>
            <DeleteTask key={task.id} task={task} />
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

// for eslint props validation
Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
