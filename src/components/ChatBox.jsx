import { useEffect, useRef } from "react";
import Message from "./Message";

function ChatBox({ chat }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat]);

  return (
    <div className="chat-box">
      {chat.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatBox;