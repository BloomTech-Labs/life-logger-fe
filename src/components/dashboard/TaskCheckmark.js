/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const TaskCheckmark = ({ toggleComplete, isChecked, handleEnterKeyPress }) => {
  const label = isChecked ? 'Task marked complete' : 'Task not complete';

  return (
    <button
      onKeyPress={handleEnterKeyPress}
      aria-label={label}
      sx={{
        cursor: 'pointer',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        display: 'block',
        background: 'none',
        border: 'none',
        padding: '0',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
        onClick={toggleComplete}
        aria-label={label}
        sx={{
          cursor: 'pointer',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          display: 'block',
          strokeWidth: '6',
          stroke: 'background',
          strokeMiterlimit: '10',
          boxShadow: 'inset 0px 0px 0px #78B721',
          animation: isChecked
            ? `fill 0.4s ease-in-out forwards,
                            scale 0.3s ease-in-out 0.1s both`
            : 'none',

          '@keyframes scale': {
            '0%, 100%': {
              transform: 'none',
            },
            '50%': {
              transform: 'scale3d(1.1, 1.1, 1)',
            },
          },

          '@keyframes fill': {
            '100%': {
              boxShadow: 'inset 0px 0px 0px 30px #78B721',
            },
          },
        }}
      >
        <circle
          cx="26"
          cy="26"
          r="25"
          fill="none"
          sx={{
            strokeDasharray: '166',
            strokeDashoffset: '166',
            strokeWidth: '10',
            strokeMiterlimit: '10',
            stroke: '#78B721',
            fill: 'none',
            animation: `stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.2s forwards`,

            '@keyframes stroke': {
              '100%': {
                strokeDashoffset: '0',
              },
            },
          }}
        />
        <path
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
          sx={{
            transformOrigin: '50% 50%',
            strokeDasharray: '48',
            strokeDashoffset: '48',
            animation: `stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.5s forwards`,

            '@keyframes stroke': {
              '100%': {
                strokeDashoffset: '0',
              },
            },
          }}
        />
      </svg>
    </button>
  );
};

TaskCheckmark.propTypes = {
  toggleComplete: PropTypes.func,
  handleEnterKeyPress: PropTypes.func,
  isChecked: PropTypes.bool,
};

export default TaskCheckmark;
