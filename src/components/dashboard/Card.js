/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import { Card as ThemeCard } from '@theme-ui/components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  const [colorMode] = useColorMode();

  return (
    <motion.div drag="x" dragConstraints={{ left: 0, right: 200 }}>
      <ThemeCard
        sx={{
          bg: `primary`,
          position: `relative`,
          border: (t) => `2px solid ${t.colors.primary}`,
          zIndex: 2,
          transition: 'background 0.15s ease-in-out',

          '&:hover': {
            bg: `muted`,
            border: (t) =>
              colorMode === 'dark'
                ? `2px solid ${t.colors.primary}`
                : `2px solid ${t.colors.muted}`,
            color: `primary`,
          },
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
