import Message from "./Message";
import LoadingCard from "./LoadingCard";
import ErrorCard from "./ErrorCard";
import EmptyState from "./EmptyState";
import RetryButton from "./RetryButton";

function ChatBox({ chat, isTyping, error, onRetry }) {
  if (error) {
    return <ErrorCard message={error} />;
  }

  if (chat.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="chat-box">
      {chat.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}

      {isTyping && <LoadingCard />}

      <RetryButton onRetry={onRetry} />
    </div>
  );
}

export default ChatBox;