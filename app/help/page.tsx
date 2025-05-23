"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { Search, Book, MessageSquare, Video, FileText, ChevronRight, Filter, Star, Clock, Users, Zap, ArrowRight } from "lucide-react";
import React, { useState } from 'react';
import Image from 'next/image';

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("getting-started");

  const categories = [
    {
      id: "getting-started",
      title: "Getting Started",
      description: "Learn the basics and set up your ActionBot account",
      icon: Zap,
      color: "purple"
    },
    {
      id: "automation",
      title: "Automation",
      description: "Create and manage your automation workflows",
      icon: Zap,
      color: "blue"
    },
    {
      id: "integrations",
      title: "Integrations",
      description: "Connect ActionBot with your favorite tools",
      icon: Zap,
      color: "green"
    },
    {
      id: "billing",
      title: "Billing & Plans",
      description: "Manage your subscription and billing details",
      icon: Zap,
      color: "yellow"
    }
  ];

  const popularArticles = [
    {
      title: "How to create your first automation workflow",
      category: "Getting Started",
      readTime: "5 min read",
      views: 1234,
      isNew: true
    },
    {
      title: "Best practices for workflow optimization",
      category: "Automation",
      readTime: "8 min read",
      views: 987,
      isNew: false
    },
    {
      title: "Integrating with Slack and Microsoft Teams",
      category: "Integrations",
      readTime: "6 min read",
      views: 876,
      isNew: false
    },
    {
      title: "Understanding your usage and billing",
      category: "Billing & Plans",
      readTime: "4 min read",
      views: 765,
      isNew: false
    }
  ];

  const tutorials = [
    {
      title: "Getting Started with ActionBot",
      description: "Learn the basics of automation in 10 minutes",
      duration: "10:15",
      thumbnail: "https://via.placeholder.com/400x225/8b5cf6/ffffff?text=Tutorial+Thumbnail+1",
      views: 2345
    },
    {
      title: "Advanced Workflow Design",
      description: "Master complex automation scenarios",
      duration: "15:30",
      thumbnail: "https://via.placeholder.com/400x225/c084fc/ffffff?text=Tutorial+Thumbnail+2",
      views: 1876
    },
    {
      title: "Integration Deep Dive",
      description: "Connect all your tools seamlessly",
      duration: "12:45",
      thumbnail: "https://via.placeholder.com/400x225/a78bfa/ffffff?text=Tutorial+Thumbnail+3",
      views: 1543
    }
  ];

  const supportOptions = [
    {
      title: "Community Forums",
      description: "Get help from our community of experts",
      icon: Users,
      action: "Visit Forums"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      icon: MessageSquare,
      action: "Start Chat"
    },
    {
      title: "Email Support",
      description: "Get detailed help via email",
      icon: FileText,
      action: "Send Email"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      <DropdownNavbar />

      {/* Hero Section */}
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              Help Center
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Find answers, tutorials, and support for all your ActionBot needs
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#171717] text-white px-6 py-4 pl-12 rounded-xl border border-gray-800 focus:border-purple-500/50 focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-xl border transition-colors text-left ${ activeCategory === category.id ? "border-purple-500 bg-purple-500/10" : "border-gray-800 hover:border-purple-500/50 bg-[#171717]"}`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-${category.color}-500/10 flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 text-${category.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{category.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Popular Articles</h2>
            <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                        {article.category}
                      </span>
                      {article.isNew && (
                        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                          New
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                      <span className="mx-2">•</span>
                      <span>{article.views.toLocaleString()} views</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Video Tutorials</h2>
            <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
              <Video className="w-5 h-5 mr-2" />
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-[#171717] rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-colors cursor-pointer"
              >
                 <div className="relative w-full aspect-video overflow-hidden border-b border-gray-700">
                    <Image
                      src={tutorial.thumbnail}
                      alt={`${tutorial.title} thumbnail`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-12 h-12 rounded-full bg-purple-500/50 flex items-center justify-center">
                           <Video className="w-6 h-6 text-white" />
                        </div>
                     </div>
                     <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-sm text-white">
                        {tutorial.duration}
                     </div>
                 </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">{tutorial.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{tutorial.description}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    {tutorial.views.toLocaleString()} views
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Need More Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <option.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{option.description}</p>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      {option.action} <ArrowRight className="w-4 h-4 inline ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenterPage; 