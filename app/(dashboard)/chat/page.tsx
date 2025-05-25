"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, Paperclip, Bot, User } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import GlowCard from "@/components/ui/GlowCard";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hello! I'm ActionBot, your AI assistant. How can I help you automate tasks today?",
    role: "assistant",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm processing your request. This is a simulated response.",
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex gap-3 max-w-[80%] ${
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    message.role === "user"
                      ? "bg-purple-500/20"
                      : "bg-indigo-500/20"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="w-4 h-4 text-purple-400" />
                  ) : (
                    <Bot className="w-4 h-4 text-indigo-400" />
                  )}
                </div>
                <GlowCard
                  glowColor={message.role === "user" ? "purple" : "indigo"}
                  className={`p-4 ${
                    message.role === "user"
                      ? "bg-purple-500/10"
                      : "bg-indigo-500/10"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <span className="text-xs text-gray-400 mt-2 block">
                    {formatTime(message.timestamp)}
                  </span>
                </GlowCard>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-gray-800 bg-[#171717]/50 backdrop-blur-md p-4"
      >
        <div className="flex items-end gap-4">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full bg-[#171717] border border-gray-800 rounded-lg px-4 py-3 pr-12 resize-none min-h-[44px] max-h-[200px] focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <button
              type="button"
              className="absolute right-3 bottom-3 p-1 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setIsRecording(!isRecording)}
            >
              <Mic
                className={`w-5 h-5 ${
                  isRecording ? "text-red-400" : "text-gray-400"
                }`}
              />
            </button>
          </div>
          <div className="flex gap-2">
            <GlowButton
              variant="ghost"
              size="icon"
              className="shrink-0"
            >
              <Paperclip className="w-5 h-5" />
            </GlowButton>
            <GlowButton
              size="icon"
              className="shrink-0"
              disabled={!input.trim()}
            >
              <Send className="w-5 h-5" />
            </GlowButton>
          </div>
        </div>
      </form>
    </div>
  );
} 