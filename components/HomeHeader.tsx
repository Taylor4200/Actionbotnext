"use client";

import { motion } from "framer-motion";
import { Home, Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import GlowButton from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

export default function HomeHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and home link */}
          <motion.a
            href="/"
            className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
            whileHover={{ x: 3 }}
          >
            <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-600 flex items-center justify-center">
              <Home className="w-4 h-4" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-700/50 to-indigo-600/50 opacity-70 blur-[5px]"></div>
            </div>
            <span className="font-semibold">ActionBot</span>
          </motion.a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#howitworks" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
            <a href="#integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
          </div>

          {/* Call to action button */}
          <div className="hidden md:block">
            <GlowButton>
              <Zap className="w-4 h-4 mr-2" /> Try Free
            </GlowButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#171717] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <a href="#features" className="block text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#howitworks" className="block text-gray-400 hover:text-white transition-colors">How It Works</a>
            <a href="#integrations" className="block text-gray-400 hover:text-white transition-colors">Integrations</a>
            <a href="#pricing" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
            <div className="mt-4">
               <GlowButton fullWidth>
                 <Zap className="w-4 h-4 mr-2" /> Try Free
               </GlowButton>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
} 