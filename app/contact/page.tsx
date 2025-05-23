"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-400">
              Get in touch with the ActionBot team
            </p>
          </motion.div>

          {/* Contact content goes here */}
          <div className="max-w-4xl mx-auto bg-[#171717] rounded-xl p-8 border border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
              <div className="flex items-center text-gray-400">
                <Mail className="w-6 h-6 mr-4 text-purple-400" />
                <span>support@actionbot.com (Placeholder)</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-6 h-6 mr-4 text-purple-400" />
                <span>+1 (123) 456-7890 (Placeholder)</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-6 h-6 mr-4 text-purple-400 flex-shrink-0" />
                <span>
                  123 Automation Lane <br />
                  Suite 456 <br />
                  Innovation City, CA 90210 (Placeholder)
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Send us a Message</h2>
              {/* Placeholder Contact Form */}
              <input type="text" placeholder="Name" className="w-full p-3 rounded-lg bg-[#262626] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500" />
              <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-[#262626] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded-lg bg-[#262626] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"></textarea>
              <motion.button
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-colors"
              >
                Send Message <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
} 