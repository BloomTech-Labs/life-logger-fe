/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, useState, useContext } from 'react';
import TaskContext from '../../context/TaskContext';

import TaskList from './TaskList';
import Filter from './Filter';
import Search from './Search';
import Modal from '../dashboard/Modal';
import FilterDropdown from '../dashboard/FilterDropdown';
import CreateTask from '../forms/CreateTask';
import Footer from '../Footer';

const Dashboard = () => {
  const { filter, editFilter } = useContext(TaskContext);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isCreateTaskFormOpen, setIsCreateTaskFormOpen] = useState(false);

  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const toggleCreateTaskForm = () => {
    setIsCreateTaskFormOpen(!isCreateTaskFormOpen);
  };

  return (
    <Fragment>
      <div
        sx={{
          width: `100%`,
          padding: `0 1rem`,
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }}
      >
        <Filter toggleFilterDropdown={toggleFilterMenu} />
        <Search />
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
            top: `120px`,
            left: `1rem`,
          }}
        >
          <FilterDropdown editFilter={editFilter} filter={filter} />
        </Modal>
      )}

      {isCreateTaskFormOpen && (
        <Modal onClose={toggleCreateTaskForm}>
          <CreateTask toggleCreateTaskForm={toggleCreateTaskForm} />
        </Modal>
      )}
      <div
        sx={{
          width: `100%`,
          padding: `0 1rem`,
        }}
      >
        <TaskList />
      </div>
      <Footer toggleCreateTaskForm={toggleCreateTaskForm} />
    </Fragment>
  );
};

export default Dashboard;
