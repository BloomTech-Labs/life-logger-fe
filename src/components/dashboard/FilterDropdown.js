/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

import Check from './Check';

const FilterDropdown = ({ editFilter, filter }) => {
  return (
    <div
      sx={{
        position: `relative`,
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <label
        htmlFor="incomplete"
        sx={{
          display: `grid`,
          gridTemplateColumns: `150px 1rem 1fr`,
          justifyContent: `flex-start`,
          alignItems: `center`,
        }}
      >
        Incomplete tasks
        <input
          type="radio"
          value="incomplete"
          id="incomplete"
          name="filter"
          checked={filter === 'incomplete'}
          onChange={() => editFilter('incomplete')}
          sx={{
            opacity: 0, // setting opacity to zero instead of visibility: hidden lets user still be able to use arrow keys to move through each option
          }}
        />
        {filter === 'incomplete' && <Check />}
      </label>

      <label
        htmlFor="complete"
        sx={{
          display: `grid`,
          gridTemplateColumns: `150px 1rem 1fr`,
          justifyContent: `flex-start`,
          alignItems: `center`,
        }}
      >
        Complete tasks
        <input
          type="radio"
          value="complete"
          id="complete"
          name="filter"
          checked={filter === 'complete'}
          onChange={() => editFilter('complete')}
          sx={{
            opacity: 0, // setting opacity to zero instead of visibility: hidden lets user still be able to use arrow keys to move through each option
          }}
        />
        {filter === 'complete' && <Check />}
      </label>

      <label
        htmlFor="all_tasks"
        sx={{
          display: `grid`,
          gridTemplateColumns: `150px 1rem 1fr`,
          justifyContent: `flex-start`,
          alignItems: `center`,
        }}
      >
        All tasks
        <input
          type="radio"
          value=""
          id="all_tasks"
          name="filter"
          checked={filter === null}
          onChange={() => editFilter(null)}
          sx={{
            opacity: 0, // setting opacity to zero instead of visibility: hidden lets user still be able to use arrow keys to move through each option
          }}
        />
        {filter === null && <Check />}
      </label>
    </div>
  );
};

FilterDropdown.propTypes = {
  editFilter: PropTypes.func,
  filter: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};

export default FilterDropdown;
