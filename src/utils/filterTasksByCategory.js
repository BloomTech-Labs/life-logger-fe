export const filterTasksByCategory = (tasks, sortStatus, filterMonth) => {
  // if filtering by task category, sortStatus is an integer
  if (typeof sortStatus === 'number') {
    return tasks.filter((task) =>
      sortStatus === 3 ? true : task.category === sortStatus
    );
  } else if (sortStatus === 'dueDate') {
    // if filtering by month, sortStatus is the string "dueDate"
    const filteredTasks = tasks.filter((task) => {
      const taskDateObj = new Date(task.event_et_tm);
      const taskMonth = taskDateObj.getMonth() + 1; // Date.getMonth starts at 0 for January

      if (taskMonth === filterMonth || filterMonth === 'all') {
        return task;
      }
    });

    return filteredTasks;
  }
};
