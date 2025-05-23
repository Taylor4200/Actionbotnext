"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-400">
              Please read these terms carefully
            </p>
          </motion.div>

          {/* Terms of Service content goes here */}
          <div className="max-w-4xl mx-auto text-gray-400 space-y-8 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Welcome to ActionBot. These Terms of Service govern your use of our website and services. By accessing or using ActionBot, you agree to be bound by these Terms.
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              Acceptance of Terms
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              By accessing or using ActionBot, you affirm that you are of legal age to enter into these Terms or have obtained parental or guardian consent. If you do not agree to these Terms, please do not use our website or services.
            </motion.p>

             <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              Use of Service
            </motion.h2>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              You agree to use ActionBot only for lawful purposes and in accordance with these Terms. You are prohibited from using our service in any way that could damage, disable, overburden, or impair our servers or networks.
            </motion.p>

             <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              Intellectual Property
            </motion.h2>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
            >
              The content on ActionBot, including text, graphics, logos, and software, is the property of ActionBot and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </motion.p>

             <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              Disclaimer of Warranties
            </motion.h2>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              viewport={{ once: true }}
            >
              ActionBot is provided "as is" and "as available" without any warranties of any kind, express or implied. We do not warrant that the service will be uninterrupted, error-free, or free of viruses or other harmful components.
            </motion.p>

             <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              Limitation of Liability
            </motion.h2>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              viewport={{ once: true }}
            >
              In no event shall ActionBot be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the service.
            </motion.p>

             <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              Changes to Terms
            </motion.h2>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              viewport={{ once: true }}
            >
              We reserve the right to modify these Terms at any time. Your continued use of ActionBot after any changes indicates your acceptance of the new Terms.
            </motion.p>

             <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              Contact Information
            </motion.h2>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              viewport={{ once: true }}
            >
              If you have any questions about these Terms of Service, please contact us at support@actionbot.com (Placeholder).
            </motion.p>

          </div>
        </div>
      </section>
    </div>
  );
} 