"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Zap, Mail, Calendar, Code, User2, Clock, Bot } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

// Animated TypeWriter for Hero Title
function TypeWriter({ text, className }: { text: string, className: string }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index, text]);
  
  return (
    <span className={className}>
      {displayText}
      {index < text.length && (
        <motion.span 
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-[2px] h-8 ml-1 bg-purple-500"
        />
      )}
    </span>
  );
}

// Interactive Console Animation
function ConsoleAnimation() {
  const conversations = [
    {
      request: "Send a follow-up email to the marketing team about our launch",
      response: "✓ Email draft created and ready to review. Scheduled for 9am tomorrow."
    },
    {
      request: "Schedule a meeting with our investors next week",
      response: "✓ I've found 3 possible time slots and sent calendar invites for review."
    },
    {
      request: "Create a social post about our new feature launch",
      response: "✓ Draft created with key points and metrics. Ready for your approval."
    }
  ];
  
  const [currentConvo, setCurrentConvo] = useState(0);
  const controls = useAnimation();
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Animate out then change conversation
      controls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 }
      }).then(() => {
        setCurrentConvo((prev) => (prev + 1) % conversations.length);
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 }
        });
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5 }}
      className="relative mx-auto w-full max-w-3xl h-80 md:h-96 rounded-2xl overflow-hidden bg-[#171717]/80 backdrop-blur-sm border border-gray-800 shadow-lg"
    >
      {/* Header */}
      <div className="bg-[#0f0f0f] border-b border-gray-800 p-4 flex items-center">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-700 to-indigo-600 flex items-center justify-center mr-3">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="font-semibold text-white">ActionBot</p>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            <span className="text-xs text-gray-400">Online</span>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="p-6 h-[calc(100%-4rem)] flex flex-col">
        <motion.div 
          key={currentConvo}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="flex-1"
        >
          {/* User request */}
          <div className="flex mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 flex-shrink-0">
              <User2 className="w-4 h-4 text-gray-400" />
            </div>
            <div className="bg-[#262626] rounded-lg py-3 px-4 max-w-[80%]">
              <p className="text-gray-200 text-sm">{conversations[currentConvo].request}</p>
            </div>
          </div>
          
          {/* Bot thinking animation */}
          <div className="flex items-center mb-4 text-xs text-gray-500">
            <Clock className="w-3 h-3 mr-2" />
            <span>ActionBot processed in 0.8s</span>
          </div>
          
          {/* Bot response */}
          <div className="flex">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-700 to-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-[#1e1e1e] rounded-lg py-3 px-4 border border-purple-900/30 max-w-[80%]">
              <p className="text-gray-200 text-sm">{conversations[currentConvo].response}</p>
            </div>
          </div>
        </motion.div>
        
        {/* Input area */}
        <div className="mt-auto">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Type a command for ActionBot..." 
              className="w-full bg-[#262626] text-white rounded-lg py-3 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-purple-600 border border-gray-800"
              disabled
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-md bg-purple-700 flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Interactive mode indicator */}
      <div className="absolute bottom-3 right-3">
        <div className="flex items-center bg-black/40 backdrop-blur-sm rounded-full text-xs px-2 py-1">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse mr-1"></div>
          <span className="text-purple-300">Live preview</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [floatingIcon, setFloatingIcon] = useState(0);
  
  // Rotate through floating icons
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingIcon((prev) => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Icons to display
  const icons = [
    <Mail className="w-5 h-5" key="mail" />,
    <Calendar className="w-5 h-5" key="calendar" />,
    <Code className="w-5 h-5" key="code" />
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <ParticlesBackground />
      
      {/* Floating icons */}
      <div className="absolute left-[5%] top-1/4 hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={floatingIcon}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              filter: "drop-shadow(0 0 8px rgba(109, 40, 217, 0.5))" 
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#262626] to-[#171717] text-purple-500 w-14 h-14 rounded-2xl flex items-center justify-center border border-gray-800"
          >
            {icons[floatingIcon]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute right-[5%] top-1/3 hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={floatingIcon}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              filter: "drop-shadow(0 0 8px rgba(79, 70, 229, 0.5))" 
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-[#262626] to-[#171717] text-indigo-500 w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-800"
          >
            {icons[(floatingIcon + 1) % 3]}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1
            }}
            className="inline-flex items-center bg-purple-900/20 text-purple-400 text-sm px-3 py-1 rounded-full mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            AI-powered automation for everyone
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring" 
            }}
            className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 leading-tight tracking-tight"
          >
            Your AI Assistant That <br />
            <span className="text-purple-500">
              <TypeWriter 
                text="Actually Does Stuff" 
                className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent"
              />
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            ActionBot connects to your favorite apps and executes real-world tasks through APIs and webhooks. Schedule meetings, send emails, and post content — all automatically.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <GlowButton href="#" size="lg">
              Try ActionBot Free
            </GlowButton>
            <motion.a 
              href="#demo"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(38, 38, 38, 1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="bg-[#171717] border border-gray-700 text-white font-semibold px-8 py-4 rounded-xl transition duration-300 hover:bg-[#262626] hover:border-gray-600 flex items-center justify-center"
            >
              Watch Demo
            </motion.a>
          </motion.div>
          
          {/* Hero Visual - Interactive Console */}
          <ConsoleAnimation />
        </div>
      </div>
    </section>
  );
}
