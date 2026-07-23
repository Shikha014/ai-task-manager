import TaskSummaryCard from "./TaskSummaryCard";
import LoadingCard from "./LoadingCard";
import ErrorCard from "./ErrorCard";

function Message({ message }) {
  if (message.type === "summary") {
    return <TaskSummaryCard summary={message.data} />;
  }

  if (message.type === "loading") {
    return <LoadingCard />;
  }

  if (message.type === "error") {
    return <ErrorCard message={message.text} />;
  }

  return (
    <div
      className={`message ${
        message.sender === "You" ? "user" : "ai"
      }`}
    >
      <strong>{message.sender}</strong>
      <br />
      {message.text}
    </div>
  );
}

export default Message;