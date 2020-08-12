/** @jsx jsx */
import { jsx } from 'theme-ui';
import AddTaskButton from './AddTaskButton.js';

const Footer = () => {
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
      <AddTaskButton />
    </footer>
  );
};

export default Footer;
