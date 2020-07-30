/** @jsx jsx */
import { jsx } from 'theme-ui';

export default function FloatingActionButtons() {
  return (
    <button
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '50px',
        borderRadius: '100%',
        height: '50px',
        fontSize: '2rem',
        bg: 'primary',
        border: 'none',
      }}
    >
      +
    </button>
  );
}
