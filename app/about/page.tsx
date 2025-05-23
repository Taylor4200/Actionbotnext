"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { Users, Rocket, Eye } from "lucide-react";

export default function AboutUs() {
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
              About Us
            </h1>
            <p className="text-xl text-gray-400">
              Learn about our mission, vision, and the team behind ActionBot
            </p>
          </motion.div>

          {/* About Us content goes here */}
          <div className="max-w-4xl mx-auto text-gray-400 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed"
            >
              ActionBot was founded with a simple goal: to empower everyone to automate their tasks effortlessly using the power of AI. We believe that automation should be accessible, intuitive, and powerful enough to handle real-world complexities. Our team is dedicated to building a platform that connects your favorite apps and executes tasks seamlessly, freeing you up to focus on what matters most.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12"
            >
              <div>
                <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
                <p>To make AI-powered automation accessible and easy for individuals and businesses alike.</p>
              </div>
              <div>
                <Eye className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
                <p>To be the leading platform for intelligent automation that adapts to your needs.</p>
              </div>
              <div>
                <Users className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Our Team</h3>
                <p>A passionate group of engineers, designers, and AI enthusiasts dedicated to innovation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 