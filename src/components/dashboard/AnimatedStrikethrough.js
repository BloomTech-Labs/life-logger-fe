/** @jsx jsx */
import { jsx } from 'theme-ui';
import { lighten } from '@theme-ui/color';
import PropTypes from 'prop-types';

const AnimatedStrikethrough = ({
  stringToStrike,
  isStruckOut,
  isNotInitial,
}) => {
  return (
    <span
      sx={{
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
          marginTop: `-0.75em`,
          bg: lighten('text', 0.5),
          transformOrigin: isStruckOut ? `center left` : `center right`,
          animation: isStruckOut
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
      }}
    >
      {stringToStrike}
    </span>
  );
};

AnimatedStrikethrough.propTypes = {
  stringToStrike: PropTypes.string,
  isStruckOut: PropTypes.bool,
  isNotInitial: PropTypes.bool,
};

export default AnimatedStrikethrough;
