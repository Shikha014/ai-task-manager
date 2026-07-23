function TaskSummaryCard({ summary }) {
  return (
    <div className="tool-card summary-card">

      <h2>📊 Task Summary</h2>

      <div className="summary-row">
        <span>Total Tasks</span>
        <strong>{summary.total}</strong>
      </div>

      <div className="summary-row">
        <span>Completed</span>
        <strong>{summary.completed}</strong>
      </div>

      <div className="summary-row">
        <span>Pending</span>
        <strong>{summary.pending}</strong>
      </div>

    </div>
  );
}

export default TaskSummaryCard;