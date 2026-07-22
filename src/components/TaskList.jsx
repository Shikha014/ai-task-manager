function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        📝 No tasks yet.<br />
        Add your first task to get started!
      </div>
    );
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span>{task}</span>

          <button onClick={() => deleteTask(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;