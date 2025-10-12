import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User } from "lucide-react";

type Msg = { role: "user" | "model"; content: string };

const API_URL = import.meta.env.VITE_API_URL || 'https://portfolio-backend-r7sq26khk-dame-aberas-projects.vercel.app';

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
      const res = await axios.post(`${API_URL}/api/chat`, {
        messages: [...msgs, userMsg],
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const text =
        res.data.reply?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ No response from AI";

      setMsgs((m) => [...m, { role: "model", content: text }]);
    } catch (err: any) {
      console.error("❌ Error in send function:", err);
      let errorMessage = "❌ Something went wrong.";
      if (err.response) {
        errorMessage = `❌ Server error: ${err.response.data?.error || err.response.statusText}`;
      } else if (err.request) {
        errorMessage = "❌ No response from server. Please check your connection.";
      } else {
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
      className="py-12 px-4 max-w-2xl mx-auto bg-card dark:bg-card rounded-xl shadow-2xl border border-border"
    >
      <div className="flex items-center gap-3 mb-8">
        <Bot className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          AI Assistant
        </h2>
      </div>

      <div
        ref={containerRef}
        className="bg-background dark:bg-background/80 p-4 rounded-lg h-[400px] overflow-y-auto mb-6 space-y-4 scrollbar-thin scrollbar-thumb-border dark:scrollbar-thumb-border"
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
                      : "bg-card dark:bg-card/80 text-foreground dark:text-foreground"
                  } p-4 rounded-2xl max-w-[80%] shadow-sm border border-border`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {isUser ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                    <span className="text-xs font-semibold capitalize opacity-70">
                      {isUser ? "You" : "AI"}
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

      <form
        className="flex gap-3"
        onSubmit={e => {
          e.preventDefault();
          send();
        }}
      >
        <input
          className="flex-1 p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background dark:bg-background text-foreground dark:text-foreground placeholder-muted-foreground dark:placeholder-muted-foreground"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={loading}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg disabled:opacity-50 transition-colors flex items-center gap-2 shadow-md border border-border font-semibold"
        >
          <Send className="h-5 w-5" />
          <span>Send</span>
        </motion.button>
      </form>
    </motion.section>
  );
}