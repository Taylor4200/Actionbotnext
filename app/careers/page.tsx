"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { Briefcase, ArrowRight } from "lucide-react";

export default function Careers() {
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
              Careers
            </h1>
            <p className="text-xl text-gray-400">
              Join the ActionBot team and help build the future of automation
            </p>
          </motion.div>

          {/* Careers content goes here */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#171717] rounded-xl p-6 mb-8 border border-gray-800"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Open Positions</h2>
              {/* Example Job Listing */}
              <div className="mb-6 pb-6 border-b border-gray-800 last:border-b-0 last:mb-0 last:pb-0">
                <h3 className="text-xl font-semibold text-white">Senior AI Engineer</h3>
                <p className="text-gray-400 text-sm mb-2">Full-time | Remote</p>
                <p className="text-gray-300 mb-4">Develop and implement advanced AI models for our automation platform.</p>
                <a href="#" className="inline-flex items-center text-purple-400 hover:underline">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

               <div className="mb-6 pb-6 border-b border-gray-800 last:border-b-0 last:mb-0 last:pb-0">
                <h3 className="text-xl font-semibold text-white">Product Designer</h3>
                <p className="text-gray-400 text-sm mb-2">Full-time | Remote</p>
                <p className="text-gray-300 mb-4">Design intuitive and engaging user interfaces for the ActionBot platform.</p>
                <a href="#" className="inline-flex items-center text-purple-400 hover:underline">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

               <div className="mb-6 pb-6 border-b border-gray-800 last:border-b-0 last:mb-0 last:pb-0">
                <h3 className="text-xl font-semibold text-white">Customer Success Manager</h3>
                <p className="text-gray-400 text-sm mb-2">Full-time | Remote</p>
                <p className="text-gray-300 mb-4">Help our users succeed with ActionBot and provide exceptional support.</p>
                <a href="#" className="inline-flex items-center text-purple-400 hover:underline">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

            </motion.div>
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 text-center text-gray-400"
            >
              <p>Don't see a position that fits? Send us your resume!</p>
              <a href="#" className="mt-4 inline-block text-purple-400 hover:underline">Submit Resume &rarr;</a>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
} 