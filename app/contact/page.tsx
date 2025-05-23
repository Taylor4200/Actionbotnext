"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { Mail, Phone, MapPin, Clock, Send, Building2, Globe } from "lucide-react";
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
              Get in touch with our team. We're here to help and answer any questions you may have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#171717] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
          >
            <Mail className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-400 mb-2">For general inquiries:</p>
            <a href="mailto:contact@actionbot.com" className="text-purple-400 hover:text-purple-300">
              contact@actionbot.com
            </a>
            <p className="text-gray-400 mt-4 mb-2">For support:</p>
            <a href="mailto:support@actionbot.com" className="text-purple-400 hover:text-purple-300">
              support@actionbot.com
            </a>
          </motion.div>

          {/* Contact Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#171717] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
          >
            <Phone className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-400 mb-2">Sales:</p>
            <a href="tel:+1-555-0123" className="text-purple-400 hover:text-purple-300">
              +1 (555) 0123
            </a>
            <p className="text-gray-400 mt-4 mb-2">Support:</p>
            <a href="tel:+1-555-0124" className="text-purple-400 hover:text-purple-300">
              +1 (555) 0124
            </a>
          </motion.div>

          {/* Contact Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#171717] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
          >
            <Clock className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
            <p className="text-gray-400">
              Monday - Friday: 9:00 AM - 6:00 PM EST<br />
              Saturday - Sunday: Closed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#171717] p-8 rounded-xl border border-gray-800"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-[#171717] p-8 rounded-xl border border-gray-800">
              <h2 className="text-2xl font-semibold mb-6">Our Offices</h2>
              
              {/* Office 1 */}
              <div className="mb-8 last:mb-0">
                <div className="flex items-start mb-4">
                  <Building2 className="w-6 h-6 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">Headquarters</h3>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
                <div className="flex items-start mb-2">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1 mr-3" />
                  <p className="text-gray-400">
                    123 Innovation Street<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Office 2 */}
              <div className="mb-8 last:mb-0">
                <div className="flex items-start mb-4">
                  <Building2 className="w-6 h-6 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">European Office</h3>
                    <p className="text-gray-400">London, UK</p>
                  </div>
                </div>
                <div className="flex items-start mb-2">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1 mr-3" />
                  <p className="text-gray-400">
                    45 Tech Square<br />
                    London, EC2A 4BX<br />
                    United Kingdom
                  </p>
                </div>
              </div>

              {/* Office 3 */}
              <div>
                <div className="flex items-start mb-4">
                  <Building2 className="w-6 h-6 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">Asia Pacific Office</h3>
                    <p className="text-gray-400">Singapore</p>
                  </div>
                </div>
                <div className="flex items-start mb-2">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1 mr-3" />
                  <p className="text-gray-400">
                    78 Digital Hub<br />
                    Singapore 238801<br />
                    Singapore
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media & Follow Us */}
            <div className="bg-[#171717] p-8 rounded-xl border border-gray-800">
              <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  <Globe className="w-6 h-6" />
                </a>
                {/* Add more social media icons as needed */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#171717] p-8 rounded-xl border border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">What is your typical response time?</h3>
              <p className="text-gray-400">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Do you offer 24/7 support?</h3>
              <p className="text-gray-400">
                Our standard support hours are Monday through Friday, 9 AM to 6 PM EST. Premium support plans include 24/7 coverage.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">How can I schedule a demo?</h3>
              <p className="text-gray-400">
                You can schedule a demo through our contact form, by emailing sales@actionbot.com, or by calling our sales team directly.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage; 