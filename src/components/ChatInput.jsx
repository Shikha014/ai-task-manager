
function ChatInput({ message, setMessage, sendMessage }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && message.trim()) {
      sendMessage();
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Ask AI anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={sendMessage}
        disabled={!message.trim()}
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;