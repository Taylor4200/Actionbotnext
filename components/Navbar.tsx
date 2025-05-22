"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ["home", "features", "how-it-works", "platforms", "pricing", "testimonials"];
      const currentPosition = window.scrollY + 300;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (currentPosition >= offsetTop && currentPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to check if link is active
  const isActive = (section: string) => {
    return activeSection === section;
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? "blur-navbar shadow-md shadow-black/10" : ""} transition-all duration-300`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="flex items-center" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative h-10 w-10 mr-3 rounded-xl bg-gradient-to-br from-purple-700 to-indigo-600 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
            <motion.span 
              className="text-white font-bold text-xl"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "mirror"
              }}
            >
              A
            </motion.span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-700/50 to-indigo-600/50 opacity-70 blur-[10px] group-hover:opacity-100"></div>
          </div>
          <div>
            <span className="text-white font-bold text-xl">ActionBot</span>
            <div className="hidden sm:flex items-center mt-0.5 text-xs text-purple-400">
              <Zap className="w-3 h-3 mr-1" />
              <span>AI-powered automation</span>
            </div>
          </div>
        </motion.a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a 
            href="#features" 
            className={`text-sm font-medium relative px-1 py-2 transition duration-200 
              ${isActive("features") ? "text-white" : "text-gray-400 hover:text-white"}`}
          >
            Features
            {isActive("features") && (
              <motion.div 
                layoutId="navIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </a>
          <a 
            href="#how-it-works" 
            className={`text-sm font-medium relative px-1 py-2 transition duration-200 
              ${isActive("how-it-works") ? "text-white" : "text-gray-400 hover:text-white"}`}
          >
            How It Works
            {isActive("how-it-works") && (
              <motion.div 
                layoutId="navIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </a>
          <a 
            href="#platforms" 
            className={`text-sm font-medium relative px-1 py-2 transition duration-200 
              ${isActive("platforms") ? "text-white" : "text-gray-400 hover:text-white"}`}
          >
            Integrations
            {isActive("platforms") && (
              <motion.div 
                layoutId="navIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </a>
          <a 
            href="#pricing" 
            className={`text-sm font-medium relative px-1 py-2 transition duration-200 
              ${isActive("pricing") ? "text-white" : "text-gray-400 hover:text-white"}`}
          >
            Pricing
            {isActive("pricing") && (
              <motion.div 
                layoutId="navIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </a>
        </div>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <GlowButton href="#" size="sm">
            Try Free
          </GlowButton>
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-gray-300 hover:text-white relative z-50 bg-[#171717] p-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, height: "100vh", backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, height: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/80 z-40 flex flex-col"
          >
            <div className="h-16"></div> {/* Spacer for navbar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center justify-center flex-1 space-y-6 px-6"
            >
              <a 
                href="#features" 
                className={`text-2xl font-semibold ${isActive("features") ? "text-white" : "text-gray-300"}`}
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className={`text-2xl font-semibold ${isActive("how-it-works") ? "text-white" : "text-gray-300"}`}
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#platforms" 
                className={`text-2xl font-semibold ${isActive("platforms") ? "text-white" : "text-gray-300"}`}
                onClick={() => setIsOpen(false)}
              >
                Integrations
              </a>
              <a 
                href="#pricing" 
                className={`text-2xl font-semibold ${isActive("pricing") ? "text-white" : "text-gray-300"}`}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className={`text-2xl font-semibold ${isActive("testimonials") ? "text-white" : "text-gray-300"}`}
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <div className="pt-6 w-full max-w-xs">
                <GlowButton href="#" fullWidth onClick={() => setIsOpen(false)} size="lg">
                  Try Free
                </GlowButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
