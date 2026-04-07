import { useState } from "react";
import axios from "axios";

export default function ChatBox() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const send = async () => {
    const res = await axios.post("http://localhost:8000/chat", {
      question: msg,
    });

    setChat([...chat, { q: msg, a: res.data.answer }]);
    setMsg("");
  };

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl mb-4">AI Study Assistant 🚀</h1>

      {chat.map((c, i) => (
        <div key={i} className="mb-2">
          <p className="text-blue-400">You: {c.q}</p>
          <p className="text-green-400">AI: {c.a}</p>
        </div>
      ))}

      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="text-black p-2"
      />
      <button onClick={send} className="ml-2 bg-blue-500 px-3 py-1">
        Send
      </button>
    </div>
  );
}