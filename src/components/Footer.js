/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

import AddTaskButton from './AddTaskButton.js';

const Footer = ({ toggleCreateTaskForm }) => {
  return (
    <footer
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: `100%`,
        height: `80px`,
        padding: `0 1rem`,
        position: 'fixed',
        bottom: '0',
      }}
    >
      <AddTaskButton toggleCreateTaskForm={toggleCreateTaskForm} />
    </footer>
  );
};

Footer.propTypes = {
  toggleCreateTaskForm: PropTypes.func,
};

export default Footer;
