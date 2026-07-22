import { useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";

import { streamResponse } from "./utils/streamResponse";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const [isTyping, setIsTyping] = useState(false);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "You",
      text: message,
    };

    setChat((prev) => [...prev, userMessage]);

    const currentMessage = message;

    setMessage("");
    setIsTyping(true);

    await streamResponse(currentMessage, (chunk) => {
      setChat((prev) => {
        const updated = [...prev];

        if (
          updated.length &&
          updated[updated.length - 1].sender === "AI"
        ) {
          updated[updated.length - 1].text = chunk;
        } else {
          updated.push({
            sender: "AI",
            text: chunk,
          });
        }

        return [...updated];
      });
    });

    setIsTyping(false);
  };

  return (
    <div className="app">

      <div className="task-panel">

        <h1>AI Task Manager</h1>

        <TaskForm
          task={task}
          setTask={setTask}
          addTask={addTask}
        />

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
        />

      </div>

      <div className="chat-panel">

        <h2>AI Assistant</h2>

        <ChatBox
          chat={chat}
          isTyping={isTyping}
        />

        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />

      </div>

    </div>
  );
}

export default App;