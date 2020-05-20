export const filterTasksByCategory = (tasks, sortStatus) => {
    return tasks.filter((task) =>
        sortStatus === 3 ? true : task.category === sortStatus
    );
};
