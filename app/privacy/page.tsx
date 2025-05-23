"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400">
              Your privacy is important to us
            </p>
          </motion.div>

          {/* Privacy Policy content goes here */}
          <div className="max-w-4xl mx-auto text-gray-400 space-y-8 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              This Privacy Policy describes how ActionBot collects, uses, and discloses your personal information when you use our website and services. We are committed to protecting your privacy and being transparent about our data practices.
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              Information We Collect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We may collect personal information that you voluntarily provide to us when you register for an account, use our services, contact us, or participate in surveys or promotions. This information may include your name, email address, contact details, and any other information you choose to provide.
            </motion.p>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We may also collect certain information automatically when you visit our website or use our services, such as your IP address, browser type, operating system, referral URLs, device information, and usage data. We may use cookies and similar tracking technologies to collect this information.
            </motion.p>

             <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              How We Use Your Information
            </motion.h2>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              We use the information we collect to provide, maintain, and improve our website and services, to communicate with you, to personalize your experience, to process transactions, to send you marketing and promotional materials (with your consent), and to comply with legal obligations.
            </motion.p>

             <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              Data Sharing and Disclosure
            </motion.h2>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
            >
              We may share your personal information with third-party service providers who perform services on our behalf, such as hosting, data analysis, payment processing, and customer service. We may also disclose your information if required by law or in connection with a merger, acquisition, or sale of all or a portion of our assets.
            </motion.p>

             <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              Security
            </motion.h2>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              viewport={{ once: true }}
            >
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet or electronic storage method is 100% secure. Therefore, we cannot guarantee absolute security.
            </motion.p>

             <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              Your Choices
            </motion.h2>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              viewport={{ once: true }}
            >
              You may opt out of receiving marketing communications from us by following the instructions in those communications. You may also have certain rights regarding your personal information under applicable laws.
            </motion.p>

             <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              Changes to this Policy
            </motion.h2>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              viewport={{ once: true }}
            >
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </motion.p>

             <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mt-8 mb-4"
            >
              Contact Us
            </motion.h2>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.6 }}
              viewport={{ once: true }}
            >
              If you have any questions about this Privacy Policy, please contact us at support@actionbot.com (Placeholder).
            </motion.p>

          </div>
        </div>
      </section>
    </div>
  );
} 