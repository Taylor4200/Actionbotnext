"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { Users, Rocket, Eye, Briefcase, Lightbulb, Handshake, Image as ImageIcon } from "lucide-react";
import React from 'react';
import Image from 'next/image';

const AboutUsPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of AI and automation to deliver cutting-edge solutions."
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We believe in the power of working together, both internally and with our users."
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Our goal is to empower individuals and businesses to achieve more with less effort."
    },
    // Add more values as needed
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      title: "CEO & Co-founder",
      photo: "https://via.placeholder.com/128/3b82f6/ffffff?text=SC"
    },
    {
      name: "Michael Rodriguez",
      title: "CTO & Co-founder",
      photo: "https://via.placeholder.com/128/8b5cf6/ffffff?text=MR"
    },
    {
      name: "Emily Thompson",
      title: "Head of Engineering",
      photo: "https://via.placeholder.com/128/06b6d4/ffffff?text=ET"
    },
    {
      name: "David Kim",
      title: "Head of Product",
      photo: "https://via.placeholder.com/128/a78bfa/ffffff?text=DK"
    }
    // Add more team members as needed
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      <DropdownNavbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-900/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              About ActionBot
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Learn about our mission, vision, values, and the passionate team driving the future of AI-powered automation.
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto text-gray-300 space-y-8 text-center md:text-left"
          >
            <p className="text-lg leading-relaxed">
              ActionBot was founded with a simple, yet ambitious goal: to democratize the power of automation. We envisioned a world where complex tasks could be simplified and made accessible to everyone, regardless of technical expertise. By harnessing the latest advancements in Artificial Intelligence, we've built a platform that doesn't just automate tasks, but intelligently adapts to your needs, connecting your favorite applications and streamlining workflows effortlessly.
            </p>
            <p className="text-lg leading-relaxed">
              Our journey began with a small team of dedicated engineers and designers who shared a common passion for innovation and problem-solving. Today, that passion continues to drive us as we constantly refine our platform, add new features, and support a growing community of users who are transforming their productivity with ActionBot.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
        {/* Mission */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <Rocket className="w-16 h-16 text-purple-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our mission is to empower individuals and businesses by providing an intuitive, powerful, and accessible AI-powered automation platform. We aim to free up valuable time and resources, allowing our users to focus on creativity, strategy, and growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full h-64 rounded-xl flex items-center justify-center text-gray-400 border border-gray-700"
            style={{ backgroundImage: 'url(https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Mission+Image)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* [Mission Image Placeholder] */}
          </motion.div>
        </div>

        {/* Vision */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full h-64 rounded-xl flex items-center justify-center text-gray-400 border border-gray-700 md:order-2"
             style={{ backgroundImage: 'url(https://via.placeholder.com/600x400/c084fc/ffffff?text=Vision+Image)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* [Vision Image Placeholder] */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center md:items-start text-center md:text-left md:order-1"
          >
             <Eye className="w-16 h-16 text-indigo-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              Our Vision
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We envision ActionBot becoming the global leader in intelligent automation, recognized for its innovation, reliability, and positive impact on productivity and efficiency across all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
         <div className="max-w-6xl mx-auto text-center mb-12">
             <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
            >
                Our Core Values
            </motion.h2>
             <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                 className="text-xl text-gray-400 mt-4"
            >
                Principles that guide our work and culture
            </motion.p>
         </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300 text-center space-y-4"
            >
              <value.icon className="w-10 h-10 text-purple-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
         <div className="max-w-6xl mx-auto text-center mb-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
            >
                Meet the Team
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-xl text-gray-400 mt-4"
            >
                Passionate experts dedicated to your success
            </motion.p>
         </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500/50">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={128}
                  height={128}
                  objectFit="cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-md text-gray-400">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;