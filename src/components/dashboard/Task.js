/** @jsx jsx */
import { jsx } from 'theme-ui';
import { darken } from '@theme-ui/color';
import { useState, useContext, Fragment } from 'react';
import TaskContext from '../../context/TaskContext';
import PropTypes from 'prop-types';

import TaskCheckmark from './TaskCheckmark';
import Card from './Card';
import AnimatedStrikethrough from './AnimatedStrikethrough';
import HiddenIcons from './HiddenIcons';
import Modal from './Modal';

const pStyles = {
  margin: `0`,
};

const Task = ({ task }) => {
  const { editTask } = useContext(TaskContext);
  const [isComplete, setIsComplete] = useState(task.is_complete);
  const [isNotInitial, setIsNotInitial] = useState(false); // state to prevent "unstrike" keyframe animation from running on mount
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const taskDueDateObj = new Date(task.due_date);
  const dueDate = taskDueDateObj.toLocaleDateString();

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

  const toggleIsEditModalOpen = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleIsDeleteModalOpen = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
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
          <div
            sx={{
              display: `grid`,
              gridTemplateColumns: `repeat(2, 1fr)`,
              gridGap: `10px`,
            }}
          >
            <div
              sx={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `space-between`,
                gridColumn: `1 / span 2`,
              }}
            >
              <p
                sx={{
                  ...pStyles,
                  fontWeight: 700,
                  color: isComplete ? darken('muted', 0.4) : 'text',
                  transition: isComplete
                    ? 'color 0.1s cubic-bezier(.55, 0, .1, 1)'
                    : 'none',
                }}
              >
                <AnimatedStrikethrough
                  stringToStrike={task.task_name}
                  isStruckOut={isComplete}
                  isNotInitial={isNotInitial}
                />
              </p>
            </div>

            <small
              sx={{
                ...pStyles,
                color: isComplete ? darken('muted', 0.4) : 'text',
                transition: isComplete
                  ? 'color 0.1s cubic-bezier(.55, 0, .1, 1)'
                  : 'none',
              }}
            >
              <AnimatedStrikethrough
                stringToStrike={dueDate}
                isStruckOut={isComplete}
                isNotInitial={isNotInitial}
              />
            </small>
          </div>
        </Card>

        <HiddenIcons
          toggleIsEditModalOpen={toggleIsEditModalOpen}
          toggleIsDeleteModalOpen={toggleIsDeleteModalOpen}
          task={task}
        />
      </div>

      {isEditModalOpen && (
        <Modal onClose={() => setIsEditModalOpen(!isEditModalOpen)}>
          <div>
            <p>I will be a form someday</p>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
              <button
                type="submit"
                onClick={() => {
                  console.log('here');
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal onClose={() => setIsDeleteModalOpen(!isDeleteModalOpen)}>
          <div>
            <p>I will be a delete confirmation someday</p>
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
