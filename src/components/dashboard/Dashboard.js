/** @jsx jsx */
import { jsx } from 'theme-ui';

import TaskList from './TaskList';

const Dashboard = () => {
  return (
    <div
      sx={{
        width: `100%`,
        padding: `0 1rem`,
      }}
    >
      <TaskList />
    </div>
  );
};

export default Dashboard;
