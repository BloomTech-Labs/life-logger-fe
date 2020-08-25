/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

export default function FloatingActionButtons({ toggleCreateTaskForm }) {
  return (
    <button
      onClick={() => toggleCreateTaskForm()}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50px',
        borderRadius: '100%',
        height: '50px',
        fontSize: '2rem',
        bg: 'primary',
        border: 'none',
        textDecoration: 'none',
        color: 'text',
      }}
    >
      +
    </button>
  );
}

FloatingActionButtons.propTypes = {
  toggleCreateTaskForm: PropTypes.func,
};
