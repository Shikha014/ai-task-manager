export const getTaskSummary = (tasks) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const total = tasks.length;

        const completed = tasks.filter(
          (task) => task.completed
        ).length;

        const pending = total - completed;

        resolve({
          total,
          completed,
          pending,
        });
      } catch (error) {
        reject("Unable to fetch task summary.");
      }
    }, 1500);
  });
};