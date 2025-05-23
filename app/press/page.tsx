"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { Download, Mail, Globe, Image as ImageIcon, FileText, Newspaper, Users, Award, ChevronRight } from "lucide-react";
import React, { useState } from 'react';

const PressPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: "press-kit",
      title: "Press Kit",
      icon: FileText,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Company Overview</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Download our comprehensive company overview, including our mission, vision, and key milestones.
              </p>
              <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Team Bios</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Get to know our leadership team and key personnel with detailed biographies and photos.
              </p>
              <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Awards & Recognition</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                View our achievements, awards, and industry recognition.
              </p>
              <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <Newspaper className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Recent Press Releases</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Access our latest press releases and media announcements.
              </p>
              <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: "brand-assets",
      title: "Brand Assets",
      icon: ImageIcon,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <ImageIcon className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Logo Package</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Download our logo in various formats (PNG, SVG, EPS) and color variations.
              </p>
              <div className="space-y-2">
                <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Primary Logo (PNG)
                </button>
                <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Logo Package (ZIP)
                </button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <ImageIcon className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Brand Guidelines</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Access our comprehensive brand guidelines, including color palette, typography, and usage rules.
              </p>
              <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <ImageIcon className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Product Screenshots</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                High-resolution screenshots of our platform and key features.
              </p>
              <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download ZIP
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <ImageIcon className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Social Media Assets</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Profile pictures, cover images, and social media templates.
              </p>
              <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download ZIP
              </button>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: "media-coverage",
      title: "Media Coverage",
      icon: Newspaper,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {[{
                title: "ActionBot Raises $50M Series B to Scale AI-Powered Automation Platform",
                source: "TechCrunch",
                date: "March 15, 2024",
                excerpt: "ActionBot, the leading AI-powered automation platform, has secured $50 million in Series B funding to expand its enterprise capabilities...",
                 url: "#"
              },
              {
                title: "How ActionBot is Revolutionizing Business Process Automation",
                source: "Forbes",
                date: "February 28, 2024",
                excerpt: "In an exclusive interview, ActionBot's CEO discusses how the company is transforming the way businesses handle repetitive tasks...",
                 url: "#"
              },
              {
                title: "ActionBot Named Top 10 AI Companies to Watch in 2024",
                source: "AI Business Review",
                date: "January 10, 2024",
                excerpt: "ActionBot has been recognized as one of the most innovative AI companies, leading the charge in intelligent automation...",
                 url: "#"
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-2 text-white">{article.title}</h3>
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span>{article.source}</span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{article.excerpt}</p>
                <a href={article.url} className="mt-4 text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center">
                  Read Full Article →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "contact",
      title: "Press Contact",
      icon: Mail,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Press Inquiries</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                For press inquiries, interview requests, or media opportunities, please contact our press team.
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Email:</span> press@actionbot.com
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Phone:</span> +1 (555) 0123
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Stay updated with our latest news and announcements through our social media channels.
              </p>
              <div className="space-y-2">
                <a href="#" className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Twitter
                </a>
                <a href="#" className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  YouTube
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      )
    }
  ];

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
              Press & Media
            </h1>
            <p className="text-xl text-gray-400">
              Access our press kit, brand assets, and latest media coverage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Content */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-6"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full bg-[#171717] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <section.icon className="w-6 h-6 text-purple-400 mr-4" />
                  <h2 className="text-xl font-semibold text-left text-white">{section.title}</h2>
                </div>
                <ChevronRight
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    activeSection === section.id ? 'transform rotate-90' : ''
                  }`}
                />
              </button>
              
              {activeSection === section.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#171717] p-6 rounded-b-xl border-x border-b border-gray-800 mt-1"
                >
                  {section.content}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PressPage; 