function Message({ sender, text }) {
  return (
    <div
      className={`message ${
        sender === "You"
          ? "user"
          : "ai"
      }`}
    >
      <strong>{sender}</strong>

      <br />

      {text}
    </div>
  );
}

export default Message;