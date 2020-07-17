import { createContext } from 'react';

const TaskContext = createContext({
  tasks: [],
  getTasks: () => {},
});

export default TaskContext;
