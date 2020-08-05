/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const FilterDropdown = ({ editFilter, filter }) => {
  return (
    <div>
      <label htmlFor="incomplete">Incomplete tasks</label>
      <input
        type="radio"
        value="incomplete"
        id="incomplete"
        name="filter"
        checked={filter === 'incomplete'}
        onChange={() => editFilter('incomplete')}
      />

      <label htmlFor="complete">Complete tasks</label>
      <input
        type="radio"
        value="complete"
        id="complete"
        name="filter"
        checked={filter === 'complete'}
        onChange={() => editFilter('complete')}
      />

      <label htmlFor="all_tasks">All tasks</label>
      <input
        type="radio"
        value=""
        id="all_tasks"
        name="filter"
        checked={filter === null}
        onChange={() => editFilter(null)}
      />
    </div>
  );
};

FilterDropdown.propTypes = {
  editFilter: PropTypes.func,
  filter: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};

export default FilterDropdown;
