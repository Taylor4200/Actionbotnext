"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";

export default function HelpCenter() {
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
            <p className="text-xl text-gray-400">
              Find answers to your questions and get support for ActionBot
            </p>
          </motion.div>

          {/* Help Center content goes here */}
          <div className="max-w-4xl mx-auto text-center text-gray-400">
            <p>Help Center content and support resources coming soon!</p>
            {/* Example help center sections/links */}
            {/* 
            <div className="mt-8 space-y-4">
              <a href="#" className="block text-purple-400 hover:underline">Frequently Asked Questions &rarr;</a>
              <a href="#" className="block text-purple-400 hover:underline">Troubleshooting Guides &rarr;</a>
              <a href="#" className="block text-purple-400 hover:underline">Contact Support &rarr;</a>
            </div>
            */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 space-y-6"
            >
              <p className="text-xl text-white font-semibold">How Can We Help?</p>
              <p className="text-gray-400">Choose a category or search for your question.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="#"
                  className="block px-6 py-4 rounded-lg bg-[#171717] text-white font-medium hover:bg-[#262626] transition-colors"
                >
                  FAQs
                </a>
                <a
                  href="#"
                  className="block px-6 py-4 rounded-lg bg-[#171717] text-white font-medium hover:bg-[#262626] transition-colors"
                >
                  Troubleshooting
                </a>
                <a
                  href="#"
                  className="block px-6 py-4 rounded-lg bg-[#171717] text-white font-medium hover:bg-[#262626] transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 