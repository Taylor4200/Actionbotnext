"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { Users, Calendar, MessageSquare, BookOpen, Award, Star, ChevronRight, Search, Filter, ArrowRight } from "lucide-react";
import React, { useState } from 'react';

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("forums");

  const upcomingEvents = [
    {
      title: "ActionBot Community Meetup: San Francisco",
      date: "March 25, 2024",
      time: "6:00 PM PST",
      location: "San Francisco, CA",
      type: "In-Person",
      attendees: 45
    },
    {
      title: "Webinar: Advanced Automation Techniques",
      date: "March 28, 2024",
      time: "11:00 AM PST",
      location: "Virtual",
      type: "Online",
      attendees: 120
    },
    {
      title: "ActionBot User Conference 2024",
      date: "April 15-16, 2024",
      time: "9:00 AM PST",
      location: "San Francisco, CA",
      type: "Conference",
      attendees: 300
    }
  ];

  const forumTopics = [
    {
      title: "Best practices for implementing ActionBot in large organizations",
      category: "Implementation",
      author: "Sarah Chen",
      replies: 24,
      views: 156,
      lastActivity: "2 hours ago",
      isHot: true
    },
    {
      title: "New feature request: Custom workflow templates",
      category: "Feature Requests",
      author: "Michael Rodriguez",
      replies: 18,
      views: 98,
      lastActivity: "5 hours ago",
      isHot: true
    },
    {
      title: "Troubleshooting: Integration with Salesforce",
      category: "Support",
      author: "Emily Thompson",
      replies: 12,
      views: 87,
      lastActivity: "1 day ago",
      isHot: false
    },
    {
      title: "Success Story: How we automated our entire HR process",
      category: "Success Stories",
      author: "David Kim",
      replies: 15,
      views: 134,
      lastActivity: "2 days ago",
      isHot: true
    }
  ];

  const resources = [
    {
      title: "ActionBot Community Guidelines",
      description: "Learn about our community standards and best practices for engagement.",
      icon: BookOpen,
      type: "Guide"
    },
    {
      title: "Community Leader Program",
      description: "Join our community leaders and help shape the future of ActionBot.",
      icon: Award,
      type: "Program"
    },
    {
      title: "Community Showcase",
      description: "Explore innovative ways our community members are using ActionBot.",
      icon: Star,
      type: "Showcase"
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
              Community
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Join our vibrant community of automation enthusiasts, share knowledge, and grow together
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search community discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#171717] text-white px-6 py-4 pl-12 rounded-xl border border-gray-800 focus:border-purple-500/50 focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex space-x-4 border-b border-gray-800">
            {[
              { id: "forums", label: "Forums", icon: MessageSquare },
              { id: "events", label: "Events", icon: Calendar },
              { id: "resources", label: "Resources", icon: BookOpen }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-purple-500 text-purple-400"
                    : "border-transparent text-gray-400 hover:text-gray-300"
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Forums Section */}
          {activeTab === "forums" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold">Popular Discussions</h2>
                <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter
                </button>
              </div>

              <div className="space-y-4">
                {forumTopics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                            {topic.category}
                          </span>
                          {topic.isHot && (
                            <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm">
                              Hot
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold">{topic.title}</h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <span>Posted by {topic.author}</span>
                          <span className="mx-2">•</span>
                          <span>{topic.lastActivity}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-400">
                        <div className="text-center">
                          <div className="font-semibold text-white">{topic.replies}</div>
                          <div>Replies</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-white">{topic.views}</div>
                          <div>Views</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors">
                  View All Discussions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Events Section */}
          {activeTab === "events" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold">Upcoming Events</h2>
                <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  <Calendar className="w-5 h-5 mr-2" />
                  Add to Calendar
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          event.type === "In-Person"
                            ? "bg-blue-500/10 text-blue-400"
                            : event.type === "Online"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-purple-500/10 text-purple-400"
                        }`}>
                          {event.type}
                        </span>
                        <span className="text-sm text-gray-400">
                          {event.attendees} attending
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <div className="space-y-2 text-sm text-gray-400">
                        <p className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date} at {event.time}
                        </p>
                        <p className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {event.location}
                        </p>
                      </div>
                      <button className="w-full mt-4 px-4 py-2 rounded-lg bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors">
                        Register Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors">
                  View All Events
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Resources Section */}
          {activeTab === "resources" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold">Community Resources</h2>
                <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <resource.icon className="w-6 h-6 text-purple-400" />
                        <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                          {resource.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold">{resource.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{resource.description}</p>
                      <button className="w-full mt-4 px-4 py-2 rounded-lg bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-[#171717] rounded-xl p-8 border border-gray-800 mt-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Become a Community Leader</h3>
                    <p className="text-gray-400">
                      Join our community leaders program and help shape the future of ActionBot.
                    </p>
                  </div>
                  <button className="px-6 py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CommunityPage; 