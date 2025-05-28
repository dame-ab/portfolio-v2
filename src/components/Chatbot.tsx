import { useState, useRef, useEffect } from "react";
import axios from "axios";

type Msg = { role: "user" | "model"; content: string };

export default function Chatbot() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "user", content: "Hi! Ask me anything about this developer." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, content: input };
    setMsgs((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:4000/api/chat", {
        messages: [...msgs, userMsg],
      });

      // Extract the model's reply text safely
      const text =
        res.data.reply?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ No response from AI";

      setMsgs((m) => [...m, { role: "model", content: text }]);
    } catch (err: any) {
      console.error("❌ Error in send function:", err);
      setMsgs((m) => [...m, { role: "model", content: "❌ Something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [msgs, loading]);

  return (
    <section className="mt- p-8 max-w-2xl mx-auto bg-white rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold mb-4 text-center text-600">
        AI Assistant
      </h2>
      <div
        ref={containerRef}
        className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg h-72 overflow-y-auto mb-4 space-y-4"
      >
        {msgs.map((m, i) => {
          const isUser = m.role === "user";
          const bubbleColor = isUser ? "bg-blue-600" : "bg-gray-600";
          const cornerStyle = isUser ? "rounded-tl-none" : "rounded-tr-none";

          return (
            <div key={i} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
              <div
                className={`${bubbleColor} text-white p-4 rounded-lg max-w-[70%] ${cornerStyle}`}
              >
                <p className="text-sm font-medium capitalize">{m.role}</p>
                <p>{m.content}</p>
              </div>
            </div>
          );
        })}
        {loading && (
          <div className="flex justify-center">
            <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
          </div>
        )}
      </div>
      <div className="flex gap-3">
        <input
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button
          onClick={send}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </section>
  );
}
