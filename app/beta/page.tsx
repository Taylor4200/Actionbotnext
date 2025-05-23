"use client";

import { motion } from "framer-motion";
import { Zap, Star, Rocket, Shield, MessageSquare, ArrowRight, CheckCircle2, Users, Sparkles, Home, Menu, X, Award, Settings } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import DropdownNavbar from "@/components/DropdownNavbar";

// Feature card component
function FeatureCard({ 
  icon, 
  title, 
  description,
  delay = 0
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  delay?: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10 group-hover:to-indigo-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      <div className="relative z-10">
        <div className="bg-[#262626] p-3 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors w-fit mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// Beta feature card component
function BetaFeatureCard({ 
  title, 
  description, 
  status,
  delay = 0
}: { 
  title: string, 
  description: string,
  status: "active" | "coming-soon",
  delay?: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10 group-hover:to-indigo-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
            {title}
          </h3>
          <span className={cn(
            "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
            status === "active" 
              ? "text-green-400 bg-green-400/10"
              : "text-blue-400 bg-blue-400/10"
          )}>
            {status === "active" ? "Active" : "Coming Soon"}
          </span>
        </div>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Beta() {
  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Early Access",
      description: "Be the first to try new features and shape the future of ActionBot"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Direct Feedback",
      description: "Share your thoughts directly with our development team"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Exclusive Community",
      description: "Join a community of power users and automation enthusiasts"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Priority Support",
      description: "Get dedicated support for beta features and quick responses"
    }
  ];

  const betaFeatures = [
    {
      title: "Advanced AI Model Integration",
      description: "Test our new GPT-4 and Claude 3 integration for enhanced natural language understanding",
      status: "active" as const
    },
    {
      title: "Custom Action Builder",
      description: "Try our visual interface for creating custom automation actions without coding",
      status: "active" as const
    },
    {
      title: "Mobile App",
      description: "Early access to our iOS and Android apps for managing automations on the go",
      status: "coming-soon" as const
    },
    {
      title: "Enterprise SSO",
      description: "Test SAML and OAuth integration for enterprise customers",
      status: "coming-soon" as const
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
              Join the Beta Program
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Get early access to new features and help shape the future of ActionBot
            </p>
            <motion.a
              href="https://github.com/Taylor4200/Actionbotnext/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Star className="w-5 h-5 mr-2" />
              Apply for Beta Access
            </motion.a>
          </motion.div>

          {/* Benefits section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">Program Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <FeatureCard
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Current beta features */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">Current Beta Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {betaFeatures.map((feature, index) => (
                <BetaFeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  status={feature.status}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Feedback section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Ready to Join?</h2>
            <p className="text-gray-400 mb-8">
              Help us build the future of automation. Apply now to get early access to new features!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://github.com/Taylor4200/Actionbotnext/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Star className="w-5 h-5 mr-2" />
                Apply for Beta Access
              </motion.a>
              <motion.a
                href="https://github.com/Taylor4200/Actionbotnext/discussions/categories/feedback"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#171717] text-white font-medium hover:bg-[#262626] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Submit Feedback
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 