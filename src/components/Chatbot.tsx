import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User } from "lucide-react";

type Msg = { role: "user" | "model"; content: string };

// Get the API URL from environment variable or use the deployed backend URL
const API_URL = import.meta.env.VITE_API_URL || 'https://portfolio-backend-7p1gecg9q-dame-aberas-projects.vercel.app/api/chat';

export default function Chatbot() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "model", content: "Hi! I'm your AI assistant. Ask me anything about this developer." },
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
      const res = await axios.post(API_URL, {
        messages: [...msgs, userMsg],
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      });

      const text =
        res.data.reply?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ No response from AI";

      setMsgs((m) => [...m, { role: "model", content: text }]);
    } catch (err: any) {
      console.error("❌ Error in send function:", err);
      let errorMessage = "❌ Something went wrong.";
      
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errorMessage = `❌ Server error: ${err.response.data?.error || err.response.statusText}`;
      } else if (err.request) {
        // The request was made but no response was received
        errorMessage = "❌ No response from server. Please check your connection.";
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage = `❌ Error: ${err.message}`;
      }
      
      setMsgs((m) => [...m, { role: "model", content: errorMessage }]);
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
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-8 px-4 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <Bot className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            AI Assistant
          </h2>
        </div>
      </div>

      <div
        ref={containerRef}
        className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg h-[400px] overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600"
      >
        <AnimatePresence>
          {msgs.map((m, i) => {
            const isUser = m.role === "user";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex ${isUser ? "justify-end" : "justify-start"} gap-2`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={`${
                    isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                  } p-4 rounded-2xl max-w-[80%] shadow-sm`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {isUser ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                    <span className="text-sm font-medium capitalize">
                      {m.role}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">{m.content}</p>
                </div>
                {isUser && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center"
          >
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
          </motion.div>
        )}
      </div>

      <div className="flex gap-3">
        <input
          className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && send()}
          placeholder="Ask me anything..."
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={send}
          disabled={loading}
          className="bg-black dark:bg-black hover:bg-gray-900 dark:hover:bg-gray-900 text-white px-6 py-3 rounded-lg disabled:opacity-50 transition-colors flex items-center gap-2 shadow-md"
        >
          <Send className="h-5 w-5" />
          <span className="font-medium">Send</span>
        </motion.button>
      </div>
    </motion.section>
  );
}
