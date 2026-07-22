function TaskForm({ task, setTask, addTask }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && task.trim()) {
      addTask();
    }
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={addTask}
        disabled={!task.trim()}
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;