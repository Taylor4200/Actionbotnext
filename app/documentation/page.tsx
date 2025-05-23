"use client";

import { motion } from "framer-motion";
import { Book, Code, Zap, Terminal, MessageSquare, Settings, ChevronRight, Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import DropdownNavbar from "@/components/DropdownNavbar";

// Navigation component
function DocNav() {
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
            <a href="/documentation" className="text-white hover:text-purple-400 transition-colors">Docs</a>
            <a href="/changelog" className="text-gray-400 hover:text-white transition-colors">Changelog</a>
            <a href="/roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a>
            <a href="/beta" className="text-gray-400 hover:text-white transition-colors">Beta</a>
            <a href="/tutorials" className="text-gray-400 hover:text-white transition-colors">Tutorials</a>
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
            <a href="/documentation" className="block text-white hover:text-purple-400 transition-colors">Docs</a>
            <a href="/changelog" className="block text-gray-400 hover:text-white transition-colors">Changelog</a>
            <a href="/roadmap" className="block text-gray-400 hover:text-white transition-colors">Roadmap</a>
            <a href="/beta" className="block text-gray-400 hover:text-white transition-colors">Beta</a>
            <a href="/tutorials" className="block text-gray-400 hover:text-white transition-colors">Tutorials</a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

// Documentation card component
function DocCard({ 
  icon, 
  title, 
  description, 
  href,
  delay 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  href: string,
  delay: number 
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group block bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10 group-hover:to-indigo-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      <div className="relative z-10 flex items-start gap-4">
        <div className="bg-[#262626] p-3 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
              {title}
            </h3>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </div>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

// Search component
function SearchBar() {
  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <input
        type="text"
        placeholder="Search documentation..."
        className="w-full bg-[#171717] text-white px-4 py-3 pl-12 rounded-xl border border-gray-800 focus:border-purple-500 focus:outline-none transition-colors"
      />
      <Zap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>
  );
}

export default function Documentation() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "getting-started", label: "Getting Started" },
    { id: "api", label: "API" },
    { id: "integrations", label: "Integrations" },
    { id: "guides", label: "Guides" },
  ];

  const docs = [
    {
      icon: <Book className="w-6 h-6" />,
      title: "Getting Started",
      description: "Learn the basics of ActionBot and set up your first automation.",
      href: "/documentation/getting-started",
      category: "getting-started"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "API Reference",
      description: "Detailed documentation of ActionBot's API endpoints and methods.",
      href: "/documentation/api",
      category: "api"
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "CLI Guide",
      description: "Use ActionBot from your terminal with our command-line interface.",
      href: "/documentation/cli",
      category: "guides"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural Language Commands",
      description: "Learn how to interact with ActionBot using natural language.",
      href: "/documentation/natural-language",
      category: "guides"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Integrations",
      description: "Connect ActionBot with your favorite tools and services.",
      href: "/documentation/integrations",
      category: "integrations"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Start Guide",
      description: "Get up and running with ActionBot in minutes.",
      href: "/documentation/quickstart",
      category: "getting-started"
    }
  ];

  const filteredDocs = activeCategory === "all" 
    ? docs 
    : docs.filter(doc => doc.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      <DropdownNavbar />
      
      {/* Hero Section - adjusted padding-top to account for nav */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-900/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              Documentation
            </h1>
            <p className="text-xl text-gray-400">
              Everything you need to build powerful automations with ActionBot
            </p>
          </motion.div>

          <SearchBar />

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeCategory === category.id
                    ? "bg-purple-600 text-white"
                    : "bg-[#171717] text-gray-400 hover:text-white hover:bg-[#262626]"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Documentation grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc, index) => (
              <DocCard
                key={doc.title}
                icon={doc.icon}
                title={doc.title}
                description={doc.description}
                href={doc.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 