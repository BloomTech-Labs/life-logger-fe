/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, useState, useContext } from 'react';
import TaskContext from '../../context/TaskContext';

import TaskList from './TaskList';
import Filter from './Filter';
import Modal from '../dashboard/Modal';
import FilterDropdown from '../dashboard/FilterDropdown';
import Footer from '../Footer';

const Dashboard = () => {
  const { filter, editFilter } = useContext(TaskContext);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  return (
    <Fragment>
      <div
        sx={{
          width: `100%`,
          padding: `0 1rem`,
        }}
      >
        {/* search bar here */}

        <Filter toggleFilterDropdown={toggleFilterMenu} />
      </div>
      {isFilterMenuOpen && (
        <Modal
          onClose={toggleFilterMenu}
          showX={false}
          overrideStyles={{
            width: `auto`,
            height: `auto`,
            borderRadius: `5px`,
            position: `absolute`,
            top: `100px`,
            right: `1rem`,
          }}
        >
          <FilterDropdown editFilter={editFilter} filter={filter} />
        </Modal>
      )}
      <div
        sx={{
          width: `100%`,
          padding: `0 1rem`,
          marginTop: '100px',
        }}
      >
        <TaskList />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Dashboard;
