export const streamResponse = async (userMessage, onUpdate) => {
  const input = userMessage.toLowerCase().trim();

  let response = "";

  if (
    input.includes("hello") ||
    input.includes("hi") ||
    input.includes("hey")
  ) {
    response =
      "Hello! 👋 I'm your AI Task Assistant. I can help you stay organized, suggest productivity tips, and answer simple questions.";
  } else if (input.includes("task")) {
    response =
      "Here are a few productivity ideas:\n\n• Break large tasks into smaller ones.\n• Prioritize the most important task first.\n• Set realistic deadlines.\n• Review your completed tasks at the end of the day.";
  } else if (input.includes("study")) {
    response =
      "📚 Study Tip:\nUse the Pomodoro Technique—study for 25 minutes, take a 5-minute break, and repeat. Consistency beats long study sessions.";
  } else if (input.includes("time")) {
    response =
      `The current time is ${new Date().toLocaleTimeString()}.`;
  } else if (input.includes("motivate")) {
    response =
      "💪 Success comes from small consistent efforts repeated every day. Keep going—you are making progress!";
  } else if (input.includes("react")) {
    response =
      "React is a JavaScript library for building user interfaces using reusable components and state management.";
  } else {
    response =
      `You said: "${userMessage}".\n\nThis is a simulated streaming AI response. In a real application, this response would come from an AI model such as OpenAI, Gemini, Claude, or another LLM through an API.`;
  }

  let currentText = "";

  for (let i = 0; i < response.length; i++) {
    currentText += response[i];

    onUpdate(currentText);

    await new Promise((resolve) =>
      setTimeout(resolve, 20)
    );
  }
};