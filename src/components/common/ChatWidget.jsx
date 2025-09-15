import React, { useState } from "react";
import { FiSend, FiSmile, FiPaperclip } from "react-icons/fi";

const ChatWidget = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "👋 Hi there! How can I help?" },
    { id: 2, sender: "user", text: "What makes your platform different from other real estate services?" },
    {
      id: 3,
      sender: "bot",
      text: "A: We combine verified listings, expert market insights, and seamless transaction support to provide a secure, reliable, and efficient property experience.",
      source: "From Proppix Documentation",
    },
    { id: 4, sender: "user", text: "That helped! Can you do it just for me?" },
  ]);

  const [typing, setTyping] = useState(true);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { id: Date.now(), sender: "user", text: input }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: "bot", text: "🤖 Thinking... (this is just a demo bot reply)" },
      ]);
      setTyping(false);
    }, 2000);
  };

  return (
<div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 max-w-[300px] md:max-w-lg border rounded-xl shadow-lg flex flex-col h-[600px] overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-primary text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
        <img src="/assets/chatlogo.png" className="w-10 h-10 object-cover" alt="" />
        <div>
        <h2 className="font-semibold">Property</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-white text-primary px-2 py-1 rounded-md">AI</span> 
          Bot
        </div>
        </div>
        </div>
        <button onClick={onClose}>✖</button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
        {messages.map((msg) =>
          msg.sender === "bot" ? (
            <div className="flex items-end justify-between gap-4">
                <img src="/assets/chatdark.png" className="w-10 h-10 object-cover" alt="" />
            <div key={msg.id} className="flex flex-col items-start space-y-1">
              <div className="bg-gray-100 px-4 py-2 rounded-xl shadow-sm text-gray-800 max-w-xs">
                {msg.text}
                {msg.source && (
                  <div className="mt-2 text-sm text-gray-600 border-t pt-2">
                    <p className="font-semibold">Source</p>
                    <p className="text-xs text-gray-500">{msg.source}</p>
                  </div>
                )}
                              <span className="text-xs text-gray-400 flex items-center gap-1">🤖 AI Answer</span>

              </div>
            </div>
            </div>
          ) : (
            <div key={msg.id} className="flex justify-end">
              <div className="bg-[#00B7C4] text-white px-4 py-2 rounded-xl max-w-xs shadow-md">
                {msg.text}
              </div>
            </div>
          )
        )}

        {/* Typing Indicator */}
        {typing && (
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <div className="animate-bounce">●</div>
            <div className="animate-bounce delay-200">●</div>
            <div className="animate-bounce delay-400">●</div>
            <span>Thinking...</span>
          </div>
        )}
      </div>

      {/* Input (Intercom Style) */}
      <form
        onSubmit={sendMessage}
        className="border-t p-3 flex items-center gap-3 bg-white"
      >
        <input
          type="text"
          placeholder="Type a reply..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border-none outline-none text-sm"
        />
        <div className="flex items-center gap-2 text-gray-500">
          <span className="text-xs border rounded px-1">GIF</span>
          <FiSmile className="cursor-pointer" />
          <FiPaperclip className="cursor-pointer" />
          <button type="submit" className="text-[#00B7C4]">
            <FiSend size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWidget;
