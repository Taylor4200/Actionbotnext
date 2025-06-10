"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import { ClientOnly } from "@/components/ui/ClientOnly";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  
  // Check if we're on the homepage
  const isHomepage = pathname === "/" || pathname === "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ["home", "integrations", "features", "how-it-works", "use-cases", "pricing", "testimonials"];
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
        } else {
          // Fallback for when element is not found, e.g., on other pages
          setActiveSection("none"); // Or some other indicator that no section is active
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
    <ClientOnly>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? "blur-navbar shadow-md shadow-black/10" : ""} transition-all duration-300`}
      >
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left section - Logo and main navigation */}
            <div className="flex items-center space-x-8">
          {/* Logo */}
          <motion.a 
                href="/" 
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
                  <div className="mt-0.5 text-xs text-purple-400 flex items-center">
                <Zap className="w-3 h-3 mr-1" />
                    <span>AI-powered automation for everyone</span>
              </div>
            </div>
          </motion.a>
          
              {/* Main navigation */}
              <div className="hidden md:flex items-center space-x-6">
            <a 
              href={isHomepage ? "/#features" : "/features"} 
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
              href={isHomepage ? "/#integrations" : "/integrations-showcase"} 
              className={`text-sm font-medium relative px-1 py-2 transition duration-200 
                ${isActive("integrations") ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              Integrations
              {isActive("integrations") && (
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
                  href="#use-cases" 
                  className={`text-sm font-medium relative px-1 py-2 transition duration-200 
                    ${isActive("use-cases") ? "text-white" : "text-gray-400 hover:text-white"}`}
                >
                  Use Cases
                  {isActive("use-cases") && (
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
              href={isHomepage ? "/#pricing" : "/pricing"} 
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
          </div>
          
            {/* Right section - Auth links */}
            <div className="hidden md:flex items-center space-x-6">
              <a 
                href="/login" 
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Login
              </a>
              <a 
                href="/signup" 
                className="text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
              >
                Sign Up
              </a>
          </div>
          
            {/* Mobile menu button */}
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
                  href={isHomepage ? "/#features" : "/features"} 
                  className={`text-2xl font-semibold ${isActive("features") ? "text-white" : "text-gray-300"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </a>
                <a 
                  href={isHomepage ? "/#integrations" : "/integrations-showcase"} 
                  className={`text-2xl font-semibold ${isActive("integrations") ? "text-white" : "text-gray-300"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Integrations
                  {isActive("integrations") && (
                    <motion.div 
                      layoutId="navIndicator-mobile"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
                <a 
                  href="#use-cases" 
                  className={`text-2xl font-semibold ${isActive("use-cases") ? "text-white" : "text-gray-300"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Use Cases
                </a>
                <a 
                  href={isHomepage ? "/#pricing" : "/pricing"} 
                  className={`text-2xl font-semibold ${isActive("pricing") ? "text-white" : "text-gray-300"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </a>
                <div className="w-full border-t border-gray-800 my-4"></div>
                <a 
                  href="/login" 
                  className="text-2xl font-semibold text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </a>
                <a 
                  href="/signup" 
                  className="text-2xl font-semibold text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </ClientOnly>
  );
}
