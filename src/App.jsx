import { useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";

import { getTaskSummary } from "./utils/tools";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        title: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userInput = message;

    setChat((prev) => [
      ...prev,
      {
        sender: "You",
        text: userInput,
      },
    ]);

    setMessage("");

    // Tool Call
    if (userInput.toLowerCase().includes("summary")) {
      setChat((prev) => [
        ...prev,
        {
          type: "loading",
        },
      ]);

      try {
        const summary = await getTaskSummary(tasks);

        setChat((prev) => {
          const updated = [...prev];
          updated.pop();

          updated.push({
            type: "summary",
            data: summary,
          });

          return updated;
        });
      } catch (err) {
        setChat((prev) => {
          const updated = [...prev];
          updated.pop();

          updated.push({
            type: "error",
            text: err,
          });

          return updated;
        });
      }

      return;
    }

    setChat((prev) => [
      ...prev,
      {
        sender: "AI",
        text: "Try typing 'show task summary' to use the Task Summary tool.",
      },
    ]);
  };

  return (
    <div className="app">
      <div className="task-panel">
        <h1> AI Task Manager</h1>

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
        <h2>✨ AI Assistant</h2>

        <ChatBox chat={chat} />

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