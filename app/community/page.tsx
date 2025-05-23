"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { ArrowRight, Users, MessageSquare, Zap } from "lucide-react";

export default function Community() {
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
              Community
            </h1>
            <p className="text-xl text-gray-400">
              Join the ActionBot community to connect with other users, get support, and share your projects
            </p>
          </motion.div>

          {/* Community content goes here */}
          <div className="max-w-4xl mx-auto text-center text-gray-400">
            <p>Community features and links coming soon!</p>
            {/* Example community links/sections */}
            {/* 
            <div className="mt-8 space-y-4">
              <a href="#" className="block text-purple-400 hover:underline">Join our Discord &rarr;</a>
              <a href="#" className="block text-purple-400 hover:underline">Visit the forums &rarr;</a>
              <a href="#" className="block text-purple-400 hover:underline">Explore community projects &rarr;</a>
            </div>
            */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 space-y-6"
            >
              <p className="text-xl text-white font-semibold">Connect with the ActionBot Community</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-colors"
                >
                  Join our Discord <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-[#171717] text-white font-medium hover:bg-[#262626] transition-colors"
                >
                  Visit the Forums <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-6">Follow us on social media:</p>
              <div className="flex justify-center gap-6 text-gray-400">
                <a href="#" className="hover:text-purple-400 transition-colors"><Users className="w-6 h-6" /></a>
                <a href="#" className="hover:text-purple-400 transition-colors"><MessageSquare className="w-6 h-6" /></a>
                <a href="#" className="hover:text-purple-400 transition-colors"><Zap className="w-6 h-6" /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 