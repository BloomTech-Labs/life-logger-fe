/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

import { IoMdOptions } from 'react-icons/io';

const Filter = ({ toggleFilterDropdown }) => {
  return (
    <button
      sx={{
        width: `45px`,
        height: `45px`,
        fontSize: `1.75rem`,
        cursor: `pointer`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        bg: `background`,
        border: `none`,
        color: `text`,
      }}
      onClick={toggleFilterDropdown}
    >
      <IoMdOptions />
    </button>
  );
};

Filter.propTypes = {
  toggleFilterDropdown: PropTypes.func,
};

export default Filter;
