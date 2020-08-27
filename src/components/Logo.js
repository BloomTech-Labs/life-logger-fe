/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

// meant to be used inside of a square container element
// see comments on lines 20-21 about 'hasSecondaryBackground'
const Logo = ({ hasSecondaryBackground }) => {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* 'Left' L */}
      <rect width="23%" height="23%" x="15%" rx="2%" sx={{ fill: `primary` }} />
      <rect
        width="23%"
        height="23%"
        y="25%"
        x="15%"
        rx="2%"
        sx={{ fill: `primary` }}
      />
      <rect
        width="23%"
        height="23%"
        y="50%"
        x="15%"
        rx="2%"
        sx={{ fill: `primary` }}
      />
      <rect
        width="23%"
        height="23%"
        y="50%"
        x="40%"
        rx="2%"
        sx={{ fill: `primary` }}
      />

      {/* 'Right' upside down L */}
      {/* If the background color of the element Logo is inside of is the theme's 'background' color, then the squares need to be the 'secondary' color */}
      {/* If the background colof of the element Logo is inside of is the theme's 'secondary' color (like the Header), then the squares need to be the 'background' color */}
      <rect
        width="23%"
        height="23%"
        y="25%"
        x="40%"
        rx="2%"
        sx={{ fill: hasSecondaryBackground ? `#014ea9` : `background` }}
      />
      <rect
        width="23%"
        height="23%"
        y="25%"
        x="65%"
        rx="2%"
        sx={{ fill: hasSecondaryBackground ? `#014ea9` : `background` }}
      />
      <rect
        width="23%"
        height="23%"
        y="50%"
        x="65%"
        rx="2%"
        sx={{ fill: hasSecondaryBackground ? `#014ea9` : `background` }}
      />
      <rect
        width="23%"
        height="23%"
        y="75%"
        x="65%"
        rx="2%"
        sx={{ fill: hasSecondaryBackground ? `#014ea9` : `background` }}
      />
    </svg>
  );
};

Logo.propTypes = {
  hasSecondaryBackground: PropTypes.bool,
};

export default Logo;
