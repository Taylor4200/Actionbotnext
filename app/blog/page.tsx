"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";

export default function Blog() {
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
            <p className="text-xl text-gray-400">
              Stay up-to-date with the latest news, articles, and insights from ActionBot
            </p>
          </motion.div>

          {/* Blog posts go here */}
          <div className="max-w-4xl mx-auto">
            {/* Example blog post structure */}
            {/* 
            <div className="bg-[#171717] rounded-xl p-6 mb-8 border border-gray-800">
              <h2 className="text-2xl font-semibold text-white mb-2">Blog Post Title</h2>
              <p className="text-gray-400 text-sm mb-4">Date | Author</p>
              <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
              <a href="#" className="mt-4 inline-block text-purple-400 hover:underline">Read More &rarr;</a>
            </div>
            */}
             {placeholderBlogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#171717] rounded-xl p-6 mb-8 border border-gray-800 hover:border-gray-700 transition-colors duration-300"
              >
                <h2 className="text-2xl font-semibold text-white mb-2">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{post.date} | {post.author}</p>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <a href={post.href} className="mt-2 inline-block text-purple-400 hover:underline">Read More &rarr;</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Example data for blog posts
const placeholderBlogPosts = [
  {
    title: "The Future of Automation with ActionBot",
    date: "May 20, 2024",
    author: "ActionBot Team",
    excerpt: "Discover how ActionBot is revolutionizing task automation with cutting-edge AI.",
    href: "#"
  },
  {
    title: "5 Ways ActionBot Can Boost Your Productivity",
    date: "May 15, 2024",
    author: "ActionBot Team",
    excerpt: "Explore practical tips and use cases to maximize your efficiency.",
    href: "#"
  },
  {
    title: "Integrating ActionBot with Your Workflow",
    date: "May 10, 2024",
    author: "ActionBot Team",
    excerpt: "A step-by-step guide to connecting ActionBot with your favorite tools.",
    href: "#"
  }
]; 