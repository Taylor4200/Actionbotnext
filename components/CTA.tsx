"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, ArrowRight, Zap } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

// Interactive demo component
function InteractiveDemo() {
  const [demoActive, setDemoActive] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      let botResponse = "";
      
      if (prompt.toLowerCase().includes("email") || prompt.toLowerCase().includes("message")) {
        botResponse = "✓ I'll draft an email for you based on our previous conversations and your writing style. Would you like me to schedule it to send later?";
      } else if (prompt.toLowerCase().includes("meeting") || prompt.toLowerCase().includes("schedule")) {
        botResponse = "✓ I've checked your calendar and found 3 possible time slots for next week. Would you like me to send a meeting invite for Tuesday at 2pm?";
      } else if (prompt.toLowerCase().includes("post") || prompt.toLowerCase().includes("social")) {
        botResponse = "✓ I'll prepare a social media post about your latest product update. Would you like me to include the key metrics from last quarter?";
      } else {
        botResponse = "✓ I understand you need help with that task. I can automate this for you. What specific details should I include?";
      }
      
      setResponse(botResponse);
      setIsTyping(false);
    }, 1500);
    
    setPrompt("");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: demoActive ? 1 : 0, 
        height: demoActive ? "auto" : 0 
      }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto bg-[#0f0f0f] rounded-2xl overflow-hidden border border-gray-800 mb-10 shadow-xl"
    >
      {demoActive && (
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-700 to-indigo-600 flex items-center justify-center mr-3">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-white">ActionBot Assistant</span>
          </div>
          
          <div className="w-full h-px bg-gray-800 my-4"></div>
          
          {response && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-[#171717] rounded-xl p-4 border border-gray-800"
            >
              <p className="text-gray-200">{response}</p>
            </motion.div>
          )}
          
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Type a task like 'Send an email to John about the meeting'"
              className="w-full bg-[#171717] border border-gray-800 rounded-xl py-3 px-4 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          
          {isTyping && (
            <div className="mt-4 flex items-center text-gray-400 text-sm">
              <div className="flex space-x-1 mr-2">
                <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" style={{animationDelay: "0.2s"}}></div>
                <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" style={{animationDelay: "0.4s"}}></div>
              </div>
              ActionBot is thinking...
            </div>
          )}
        </div>
      )}
      
      <div className="px-6 py-3 bg-[#171717] flex justify-center">
        <button 
          onClick={() => setDemoActive(!demoActive)} 
          className="text-gray-300 hover:text-white text-sm flex items-center transition duration-300"
        >
          {demoActive ? "Hide Demo" : "Try ActionBot Demo"} 
          <ArrowRight className={`w-4 h-4 ml-1 transition-transform duration-300 ${demoActive ? "rotate-90" : ""}`} />
        </button>
      </div>
    </motion.div>
  );
}

export default function CTA() {
  return (
    <section className="py-20 bg-[#171717] relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-indigo-900/10 blur-3xl" style={{animationDuration: "7s", animationName: "pulse-slow"}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8"
            />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white"
            >
              Ready to Automate Your Work?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg md:text-xl mb-4"
            >
              Join thousands of professionals who are saving time and focusing on what matters.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-10 text-purple-400"
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm">Start automating in minutes - no coding required</span>
            </motion.div>
          </div>
          
          {/* Interactive Demo Component */}
          <InteractiveDemo />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
          >
            <GlowButton href="#" constantAnimation size="lg">
              Launch ActionBot
            </GlowButton>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0f0f0f] border border-gray-700 text-white font-semibold px-8 py-4 rounded-xl transition duration-300 hover:bg-[#171717] hover:border-gray-600 text-center"
            >
              Schedule Demo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
