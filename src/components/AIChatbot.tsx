import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, User, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "ai" | "user";
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I am the MYRUGS AI Concierge. How can I assist you with our artisanal rugs today?",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let aiResponseText =
        "I'm here to help you find the perfect rug. Could you provide a bit more detail about what you're looking for?";
      const lowerInput = userMsg.text.toLowerCase();

      if (lowerInput.includes("price") || lowerInput.includes("cost")) {
        aiResponseText =
          "Our rugs range from $299 to $2,500 depending on the material, size, and craftsmanship. You can sort by price in our Shop section.";
      } else if (
        lowerInput.includes("shipping") ||
        lowerInput.includes("delivery")
      ) {
        aiResponseText =
          "We offer free worldwide shipping on all orders over $500. Standard delivery takes 5-7 business days.";
      } else if (lowerInput.includes("custom") || lowerInput.includes("size")) {
        aiResponseText =
          "Yes, we accept custom size orders for most of our hand-knotted Persian and Modern rugs! Please reach out to us on WhatsApp for a quote.";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        aiResponseText =
          "Hi there! Feel free to ask me about our rug collections, shipping, or any custom requests.";
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), text: aiResponseText, sender: "ai" },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-[6.5rem] right-6 z-[190] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-teal-950 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] mb-4 w-[calc(100vw-3rem)] sm:w-[300px] h-[400px] max-h-[calc(100vh-9rem)] overflow-hidden origin-bottom-right border-t border-l border-teal-600 border-b border-r border-black flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-400 to-yellow-600 p-4 flex justify-between items-center text-teal-950 border-b border-yellow-800 z-10 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-950 rounded-full flex items-center justify-center border border-amber-200 shadow-inner">
                  <MessageCircle size={20} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-black text-sm tracking-widest uppercase">
                    AI Concierge
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse border border-teal-900"></span>
                    <p className="text-[10px] font-bold text-teal-900/80 uppercase tracking-wider">
                      Online
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-teal-950 hover:bg-white/20 p-1.5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 min-h-0 p-4 overflow-y-auto bg-teal-900/50 flex flex-col gap-4 relative">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex gap-3 max-w-[85%] relative z-10 ${msg.sender === "user" ? "ml-auto flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border shadow-sm ${msg.sender === "user" ? "bg-teal-800 border-teal-600" : "bg-gradient-to-br from-amber-400 to-yellow-600 border-amber-200"}`}
                  >
                    {msg.sender === "user" ? (
                      <User size={14} className="text-emerald-100" />
                    ) : (
                      <MessageCircle size={14} className="text-teal-950" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-2xl text-sm shadow-md leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-teal-800 text-emerald-50 rounded-tr-sm border-t border-l border-teal-600 border-b border-r border-black"
                        : "bg-white text-teal-950 rounded-tl-sm border-t border-l border-amber-100 border-b border-r border-slate-300 font-medium"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3 max-w-[80%] relative z-10"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 border border-amber-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Bot size={14} className="text-teal-950" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-sm border border-slate-200 shadow-sm flex items-center gap-1.5 h-[42px]">
                    <span
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-teal-950 border-t border-teal-800 relative z-10 shadow-[0_-5px_15px_rgba(0,0,0,0.3)]">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="w-full bg-teal-900 text-emerald-50 placeholder-emerald-100/40 rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none border-t border-l border-black border-b border-r border-teal-700 focus:border-amber-400 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5)] transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 p-2 bg-amber-400 text-teal-950 rounded-lg hover:bg-amber-300 disabled:opacity-50 disabled:hover:bg-amber-400 transition-colors shadow-[2px_2px_5px_rgba(0,0,0,0.3)] active:shadow-[inset_1px_1px_3px_rgba(0,0,0,0.4)]"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-center text-[9px] text-teal-700 font-bold uppercase tracking-widest mt-2">
                Powered by KALIRUGS AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-[5px_5px_20px_rgba(0,0,0,0.6),_inset_2px_2px_5px_rgba(255,255,255,0.5)] flex items-center justify-center text-teal-950 transition-all duration-300 z-50 group"
        aria-label={isOpen ? "Close AI Concierge" : "Open AI Concierge"}
      >
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-teal-950 shadow-[0_2px_5px_rgba(0,0,0,0.5)] animate-[pulse_2s_ease-in-out_infinite]"></span>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X
                size={28}
                className="drop-shadow-[0_2px_2px_rgba(255,255,255,0.4)]"
              />
            </motion.div>
          ) : (
            <motion.div
              key="ai"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <MessageCircle
                size={30}
                className="drop-shadow-[0_2px_2px_rgba(255,255,255,0.4)]"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default AIChatbot;
