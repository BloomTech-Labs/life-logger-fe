/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import TaskCheckmark from './TaskCheckmark';
import PropTypes from 'prop-types';
import Card from './Card';

const pStyles = {
  margin: `0`,
};

const Task = ({ task }) => {
  const [isComplete, setIsComplete] = useState(task.is_complete);
  const [isNotInitial, setIsNotInitial] = useState(false); // state to prevent "unstrike" keyframe animation from running on mount

  const taskDueDateObj = new Date(task.due_date);
  const dueDate = taskDueDateObj.toLocaleDateString();

  // adapted from https://codepen.io/EdenSG/pen/jPENoE
  // any text that you want to be crossed out with an animation
  // inside of your p tag, wrap the text in a span tag
  // and give the span these stylings to be triggered
  // when `isComplete` is toggled
  const strikeThroughStyles = {
    display: `inline-block`,
    position: `relative`,
    transition: `all 0.5s cubic-bezier(.55, 0, .1, 1)`,

    '&:after': {
      content: `''`,
      position: `absolute`,
      display: `block`,
      opacity: `0`,
      width: `100%`,
      height: `2px`,
      boxShadow: `0 1px rgba(255,255,255,0.6)`,
      marginTop: `-0.7em`,
      background: `#9B9B9B`,
      transformOrigin: isComplete ? `center left` : `center right`,
      animation: isComplete
        ? `strikethrough 0.5s cubic-bezier(.55, 0, .1, 1) 1 forwards`
        : `unstrike 0.5s cubic-bezier(.55, 0, .1, 1) 1 forwards`,
      transform: `scaleX(0)`,
      transition: `transform 0.5s cubic-bezier(.55, 0, .1, 1)`,
    },

    '@keyframes strikethrough': {
      '0%': {
        transform: `scaleX(0)`,
        opacity: `0`,
      },
      '25%': {
        opacity: `1`,
      },
      '100%': {
        transform: `scaleX(1)`,
        opacity: `1`,
      },
    },

    '@keyframes unstrike': {
      '0%': {
        transform: `scaleX(1)`,
        opacity: isNotInitial ? `1` : `0`, // kind of hacky, but prevents unstrike animation from being "visible" when component mounts
      },
      '75%': {
        opacity: isNotInitial ? `1` : `0`, // kind of hacky, but prevents unstrike animation from being "visible" when component mounts
      },
      '100%': {
        transform: `scaleX(0)`,
        opacity: `0`,
      },
    },
  };

  const toggleComplete = () => {
    setIsComplete(!isComplete);
    setIsNotInitial(true); // allows "unstrike" animation to run now whenever a task is marked incomplete

    // make PUT request to backend to update `is_complete` for this task
  };

  // for accessibility for "hidden" checkbox in `TaskCheckmark`
  // the checkbox is "tabbable", so we need to allow the user to
  // check the box when they press "Enter"
  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      toggleComplete();
    }
  };

  return (
    <Card>
      <TaskCheckmark
        toggleComplete={toggleComplete}
        isChecked={isComplete}
        handleEnterKeyPress={handleEnterKeyPress}
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
              color: isComplete ? `#9B9B9B` : 'text',
              textDecoration: isComplete ? 'line-through' : 'none',
              transition: isComplete
                ? 'color 0.1s cubic-bezier(.55, 0, .1, 1)'
                : 'none',
            }}
          >
            <span sx={strikeThroughStyles}>I am a task</span>
          </p>
          {/* <p sx={{ ...pStyles, fontWeight: 700 }}>{task.task_name}</p> */}
          <p sx={pStyles}>{'>'}</p>
        </div>

        <p
          sx={{
            ...pStyles,
            color: `#9B9B9B`,
          }}
        >
          <span sx={strikeThroughStyles}>{dueDate}</span>
        </p>
      </div>
    </Card>
  );
};

// for eslint props validation
Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
