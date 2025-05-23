"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { Briefcase, ArrowRight } from "lucide-react";
import React from 'react';

const CareersPage = () => {
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

      {/* Introduction Section */}
      <section className="mb-16 text-center">
        <p className="text-lg leading-relaxed mb-8">
          Join our team and help us [restate company mission or key impact]. We are looking for talented individuals who are passionate about [mention key industry or values].
        </p>
        {/* Placeholder for a hero image or video showcasing company culture */}
        <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
          [Culture Image/Video Placeholder]
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Current Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Job Posting 1 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">[Job Title]</h3>
            <p className="text-md text-gray-400 mb-4">[Location] | [Department]</p>
            <p className="text-md leading-relaxed text-gray-300 mb-4">
              [Brief description of the role and key responsibilities.]
            </p>
            <a href="#" className="text-blue-400 hover:underline">Learn More & Apply</a>
          </div>
          {/* Job Posting 2 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">[Job Title]</h3>
            <p className="text-md text-gray-400 mb-4">[Location] | [Department]</p>
            <p className="text-md leading-relaxed text-gray-300 mb-4">
              [Brief description of the role and key responsibilities.]
            </p>
            <a href="#" className="text-blue-400 hover:underline">Learn More & Apply</a>
          </div>
          {/* Add more job postings as needed */}
        </div>
        {/* Call to Action for speculative applications */}
        <div className="text-center mt-12">
          <p className="text-lg leading-relaxed mb-4">Don't see a role that fits? Send us your resume anyway!</p>
          <a href="mailto:[your_email@example.com]" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Submit Your Resume</a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            {/* Placeholder for icon */}
            <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400">[Icon]</div>
            <h3 className="text-xl font-bold mb-3">[Benefit Title]</h3>
            <p className="text-md leading-relaxed text-gray-300">
              [Brief description of the benefit.]
            </p>
          </div>
          {/* Benefit 2 */}
          <div className="bg-gray-800 p-6 rounded-lg text-center">
             {/* Placeholder for icon */}
             <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400">[Icon]</div>
            <h3 className="text-xl font-bold mb-3">[Benefit Title]</h3>
            <p className="text-md leading-relaxed text-gray-300">
              [Brief description of the benefit.]
            </p>
          </div>
          {/* Benefit 3 */}
          <div className="bg-gray-800 p-6 rounded-lg text-center">
             {/* Placeholder for icon */}
             <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400">[Icon]</div>
            <h3 className="text-xl font-bold mb-3">[Benefit Title]</h3>
            <p className="text-md leading-relaxed text-gray-300">
              [Brief description of the benefit.]
            </p>
          </div>
          {/* Add more benefits as needed */}
        </div>
      </section>

      {/* Company Culture Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">Our Culture</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed mb-4">
              [Describe your company culture here. What is it like to work at your company? Focus on values, collaboration, work-life balance, growth opportunities, etc.]
            </p>
            <p className="text-lg leading-relaxed">
              [Add another paragraph if needed to further elaborate on culture or employee testimonials.]
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            {/* Placeholder for Culture related image or gallery */}
            <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
              [Culture Image/Gallery Placeholder]
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage; 