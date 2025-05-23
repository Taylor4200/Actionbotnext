"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { Download, Image as ImageIcon, PlayCircle, FileText } from "lucide-react";

export default function PressKit() {
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
              Press Kit
            </h1>
            <p className="text-xl text-gray-400">
              Resources for media and press covering ActionBot
            </p>
          </motion.div>

          {/* Press Kit content goes here */}
          <div className="max-w-4xl mx-auto bg-[#171717] rounded-xl p-8 border border-gray-800 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Brand Assets</h2>
              <p className="text-gray-400 mb-6">Download our logo and brand guidelines.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center px-4 py-2 rounded-lg bg-[#262626] text-white font-medium hover:bg-[#333] transition-colors">
                  <Download className="w-5 h-5 mr-2" /> Logo Pack
                </a>
                <a href="#" className="inline-flex items-center px-4 py-2 rounded-lg bg-[#262626] text-white font-medium hover:bg-[#333] transition-colors">
                  <FileText className="w-5 h-5 mr-2" /> Brand Guidelines
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Media Resources</h2>
              <p className="text-gray-400 mb-6">Find screenshots, videos, and press releases.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="inline-flex items-center px-4 py-2 rounded-lg bg-[#262626] text-white font-medium hover:bg-[#333] transition-colors">
                  <ImageIcon className="w-5 h-5 mr-2" /> Screenshots
                </a>
                 <a href="#" className="inline-flex items-center px-4 py-2 rounded-lg bg-[#262626] text-white font-medium hover:bg-[#333] transition-colors">
                  <PlayCircle className="w-5 h-5 mr-2" /> Product Videos
                </a>
                 <a href="#" className="inline-flex items-center px-4 py-2 rounded-lg bg-[#262626] text-white font-medium hover:bg-[#333] transition-colors">
                  <FileText className="w-5 h-5 mr-2" /> Press Releases
                </a>
              </div>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Media Contact</h2>
              <p className="text-gray-400 mb-4">For media inquiries, please contact:</p>
              <p className="text-purple-400 font-semibold">press@actionbot.com (Placeholder)</p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
} 