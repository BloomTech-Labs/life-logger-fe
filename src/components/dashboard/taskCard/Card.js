/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Card as ThemeCard } from '@theme-ui/components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -100, right: 0 }}
      sx={{
        // these styles are so the task card will always be on top of the edit and trash can icons
        zIndex: `2`,
        position: `relative`,
      }}
    >
      <ThemeCard
        sx={{
          bg: 'white',
          position: `relative`,
          transition: 'background 0.15s ease-in-out',
          borderRadius: `3px`,
          boxShadow: `5px 5px 9px rgba(224, 224, 224, 0.5)`,
          display: `grid`,
          gridTemplateColumns: `45px 1fr 1.5rem`,
          gridGap: `24px`,
          alignItems: `center`,

          // for the task category color label
          // '&:after': {
          //   content: `''`,
          //   position: `absolute`,
          //   display: `inline-block`,
          //   right: `0`,
          //   width: `5px`,
          //   height: `20px`,
          //   backgroundColor: `black`, // want to change color according to category
          // },
        }}
      >
        {children}
      </ThemeCard>
    </motion.div>
  );
};

// for eslint props validation
// PropTypes.node means it can be of any type
// PropTypes.oneOfType here is saying it's either going to be a single thing of any one type OR an array of things of any type
Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Card;
