/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

import { BsPencilSquare } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';

const IconWrapperStyles = {
  width: `50%`,
  height: `100%`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  border: `none`,
  bg: `background`,
  padding: `0`,
  fontSize: `1.25rem`,
  cursor: `pointer`,
};

const HiddenIcons = ({ toggleIsEditModalOpen, toggleIsDeleteModalOpen }) => {
  return (
    <div
      sx={{
        position: `absolute`,
        top: `0`,
        right: `0`,
        width: `100px`,
        height: `100%`,
        display: `flex`,
        flexFlow: `row nowrap`,
        justifyContent: `space-evenly`,
        alignItems: `center`,
      }}
    >
      <button
        onClick={toggleIsEditModalOpen}
        sx={{
          ...IconWrapperStyles,
          position: `relative`,

          '&:after': {
            content: `''`,
            position: `absolute`,
            top: `0`,
            right: `0`,
            width: `1px`,
            height: `100%`,
            bg: `#D8D8D8`,
          },
        }}
      >
        <BsPencilSquare />
      </button>
      <button onClick={toggleIsDeleteModalOpen} sx={IconWrapperStyles}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

HiddenIcons.propTypes = {
  toggleIsEditModalOpen: PropTypes.func,
  toggleIsDeleteModalOpen: PropTypes.func,
};

export default HiddenIcons;
