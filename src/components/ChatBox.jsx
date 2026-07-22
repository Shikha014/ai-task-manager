import { useEffect, useRef } from "react";
import Message from "./Message";

function ChatBox({ chat, isTyping }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, isTyping]);

  return (
    <div className="chat-box">

      {chat.map((msg, index) => (
        <Message
          key={index}
          sender={msg.sender}
          text={msg.text}
        />
      ))}

      {isTyping && (
        <div className="typing">
          🤖 AI is typing...
        </div>
      )}

      <div ref={bottomRef}></div>

    </div>
  );
}

export default ChatBox;