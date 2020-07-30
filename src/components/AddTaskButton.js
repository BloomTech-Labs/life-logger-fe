/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'react-router-dom';

export default function FloatingActionButtons() {
  return (
    <Link
      to="/createtask"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center', // for some reason having this makes the text move lower and not look vertically centered
        fontFamily: 'initial', // our font family also seems to lower the text, but if we override it back to the initial font family, it seems to vertically center better
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
    </Link>
  );
}
