"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { Search, Calendar, Tag, User, ChevronRight, Clock, Bookmark, Share2, Image as ImageIcon } from "lucide-react";
import React, { useState } from 'react';
import Image from 'next/image';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "All Posts",
    "Product Updates",
    "Engineering",
    "AI & Machine Learning",
    "Automation",
    "Best Practices",
    "Case Studies",
    "Company News"
  ];

  const featuredPost = {
    title: "Introducing ActionBot 2.0: The Future of AI-Powered Automation",
    excerpt: "We're excited to announce the launch of ActionBot 2.0, our most powerful and intelligent automation platform yet. With advanced AI capabilities, enhanced security features, and a completely redesigned user interface, ActionBot 2.0 sets a new standard for business process automation.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Product Updates",
    image: "https://via.placeholder.com/800x600/a78bfa/ffffff?text=Featured+Blog+Image"
  };

  const posts = [
    {
      title: "How AI is Transforming Business Process Automation",
      excerpt: "Explore how artificial intelligence is revolutionizing the way businesses automate their workflows and processes.",
      author: "Michael Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "AI & Machine Learning",
      image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Blog+Image+1"
    },
    {
      title: "10 Best Practices for Implementing Automation in Your Organization",
      excerpt: "Learn the key strategies and best practices for successfully implementing automation in your business.",
      author: "Emily Thompson",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Best Practices",
      image: "https://via.placeholder.com/400x300/c084fc/ffffff?text=Blog+Image+2"
    },
    {
      title: "Case Study: How Company X Increased Efficiency by 300%",
      excerpt: "Discover how one of our enterprise clients achieved remarkable efficiency gains through intelligent automation.",
      author: "David Kim",
      date: "February 28, 2024",
      readTime: "5 min read",
      category: "Case Studies",
      image: "https://via.placeholder.com/400x300/d8b4fe/ffffff?text=Blog+Image+3"
    },
    {
      title: "The Evolution of Automation: From RPA to AI-Powered Solutions",
      excerpt: "A deep dive into how automation technology has evolved and where it's heading in the future.",
      author: "Alex Morgan",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Engineering",
      image: "https://via.placeholder.com/400x300/e9d5ff/ffffff?text=Blog+Image+4"
    },
    {
      title: "ActionBot Named Top 10 AI Companies to Watch in 2024",
      excerpt: "We're honored to be recognized as one of the most innovative AI companies leading the charge in intelligent automation.",
      author: "Sarah Chen",
      date: "February 15, 2024",
      readTime: "4 min read",
      category: "Company News",
      image: "https://via.placeholder.com/400x300/f3e8ff/ffffff?text=Blog+Image+5"
    },
    {
      title: "Building Secure and Scalable Automation Solutions",
      excerpt: "Learn about our approach to building secure, scalable, and reliable automation solutions for enterprise clients.",
      author: "Michael Rodriguez",
      date: "February 10, 2024",
      readTime: "8 min read",
      category: "Engineering",
      image: "https://via.placeholder.com/400x300/c4b5fd/ffffff?text=Blog+Image+6"
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === null || selectedCategory === "All Posts" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Blog
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Insights, updates, and stories from the ActionBot team
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#171717] text-white px-6 py-4 pl-12 rounded-xl border border-gray-800 focus:border-purple-500/50 focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === "All Posts" ? null : category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  (selectedCategory === null && category === "All Posts") || selectedCategory === category
                    ? "bg-purple-500 text-white"
                    : "bg-[#171717] text-gray-300 hover:bg-[#262626]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#171717] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-3xl font-bold">{featuredPost.title}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-semibold">
                      {featuredPost.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">{featuredPost.author}</p>
                      <p className="text-sm text-gray-400">{featuredPost.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-64 rounded-xl overflow-hidden border border-gray-700">
                 <Image
                   src={featuredPost.image}
                   alt={featuredPost.title}
                   fill
                   style={{ objectFit: 'cover' }}
                 />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-[#171717] rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-colors"
              >
                 <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                 </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 text-sm font-semibold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-gray-400">{post.date}</p>
                      </div>
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 