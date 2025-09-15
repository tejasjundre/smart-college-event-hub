import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages([...messages, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("/api/chat", { message: userMsg.text });
      setMessages((prev) => [...prev, { from: "bot", text: res.data.reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { from: "bot", text: "Error, try again." }]);
    }
    setLoading(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="chatbot-container">
      <div className="bg-blue-600 text-white p-4 font-semibold text-lg">College Event Chatbot</div>
      <div className="flex-1 p-3 space-y-3 h-96 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} message`}>
            <div className={`px-4 py-2 rounded-lg max-w-xs break-words ${msg.from === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-2 rounded-lg max-w-xs bg-gray-200 text-gray-800 animate-pulse">Typing...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex border-t p-2">
        <input
          type="text"
          className="flex-1 border rounded-lg p-2 focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
