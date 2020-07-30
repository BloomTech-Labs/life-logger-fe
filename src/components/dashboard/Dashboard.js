/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import TaskList from './TaskList';
import Footer from '../Footer';
import Filter from "./Filter";

const Dashboard = () => {
  return (
    <Fragment>
      <Filter />
      <div
        sx={{
          width: `100%`,
          padding: `0 1rem`,
        }}
      >
        <TaskList />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Dashboard;
