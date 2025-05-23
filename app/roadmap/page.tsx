"use client";

import { motion } from "framer-motion";
import { Zap, Star, Rocket, Calendar, CheckCircle2, Clock, ArrowRight, Home, Menu, X, CircleDot, CircleCheck, CirclePlay, MessageSquare } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import DropdownNavbar from "@/components/DropdownNavbar";

// Status badge component
function StatusBadge({ status }: { status: "planned" | "in-progress" | "completed" }) {
  const styles = {
    planned: {
      icon: <Clock className="w-4 h-4" />,
      className: "text-blue-400 bg-blue-400/10"
    },
    "in-progress": {
      icon: <Rocket className="w-4 h-4" />,
      className: "text-purple-400 bg-purple-400/10"
    },
    completed: {
      icon: <CheckCircle2 className="w-4 h-4" />,
      className: "text-green-400 bg-green-400/10"
    }
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
      styles[status].className
    )}>
      {styles[status].icon}
      <span className="ml-1.5 capitalize">{status.replace("-", " ")}</span>
    </span>
  );
}

// Roadmap item component
function RoadmapItem({ 
  title, 
  description, 
  status,
  quarter,
  year,
  delay = 0
}: { 
  title: string;
  description: string;
  status: "planned" | "in-progress" | "completed";
  quarter: string;
  year: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
    >
      {/* Background gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10 group-hover:to-indigo-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <StatusBadge status={status} />
              <span className="text-sm text-gray-400">
                {quarter} {year}
              </span>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
        </div>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Roadmap() {
  const roadmapItems = [
    {
      title: "Advanced AI Model Integration",
      description: "Implement GPT-4 and Claude 3 for enhanced natural language understanding and task execution.",
      status: "in-progress" as const,
      quarter: "Q2",
      year: "2024"
    },
    {
      title: "Enterprise SSO Support",
      description: "Add support for SAML, OAuth, and custom identity providers for enterprise customers.",
      status: "planned" as const,
      quarter: "Q2",
      year: "2024"
    },
    {
      title: "Custom Action Builder",
      description: "Visual interface for creating and managing custom automation actions without coding.",
      status: "in-progress" as const,
      quarter: "Q2",
      year: "2024"
    },
    {
      title: "Mobile App Launch",
      description: "Native iOS and Android apps for managing automations on the go.",
      status: "planned" as const,
      quarter: "Q3",
      year: "2024"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive analytics and insights for automation performance and usage patterns.",
      status: "planned" as const,
      quarter: "Q3",
      year: "2024"
    },
    {
      title: "Multi-language Support",
      description: "Expand natural language support to 20+ languages for global users.",
      status: "completed" as const,
      quarter: "Q1",
      year: "2024"
    }
  ];

  // Group items by quarter
  const groupedItems = roadmapItems.reduce((acc, item) => {
    const key = `${item.year} ${item.quarter}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, typeof roadmapItems>);

  // Sort quarters in reverse chronological order
  const sortedQuarters = Object.keys(groupedItems).sort((a, b) => {
    const [yearA, quarterA] = a.split(" ");
    const [yearB, quarterB] = b.split(" ");
    if (yearA !== yearB) return parseInt(yearB) - parseInt(yearA);
    return quarterB.localeCompare(quarterA);
  });

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
              Product Roadmap
            </h1>
            <p className="text-xl text-gray-400">
              See what's coming next for ActionBot and help shape our future
            </p>
          </motion.div>

          {/* Roadmap timeline */}
          <div className="max-w-4xl mx-auto space-y-12">
            {sortedQuarters.map((quarter, quarterIndex) => (
              <div key={quarter}>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-purple-400" />
                  <h2 className="text-2xl font-semibold text-white">{quarter}</h2>
                </div>
                <div className="grid gap-6">
                  {groupedItems[quarter].map((item, itemIndex) => (
                    <RoadmapItem
                      key={item.title}
                      {...item}
                      delay={quarterIndex * 0.1 + itemIndex * 0.1}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Feedback section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Have a feature request?</h2>
            <p className="text-gray-400 mb-8">
              We're always looking for feedback to improve ActionBot. Share your ideas with us!
            </p>
            <a
              href="https://github.com/Taylor4200/Actionbotnext/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-colors"
            >
              <Star className="w-5 h-5 mr-2" />
              Suggest a Feature
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 