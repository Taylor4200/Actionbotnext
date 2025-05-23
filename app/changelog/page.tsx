"use client";

import { motion } from "framer-motion";
import { Zap, Star, Bug, Wrench, Rocket, ChevronRight, Home, Menu, X, Sparkles, Lightbulb, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import DropdownNavbar from "@/components/DropdownNavbar";

// Change type component
function ChangeType({ type, children }: { type: "feature" | "fix" | "improvement" | "breaking", children: React.ReactNode }) {
  const icons = {
    feature: <Star className="w-4 h-4" />,
    fix: <Bug className="w-4 h-4" />,
    improvement: <Wrench className="w-4 h-4" />,
    breaking: <Rocket className="w-4 h-4" />
  };

  const colors = {
    feature: "text-green-400 bg-green-400/10",
    fix: "text-red-400 bg-red-400/10",
    improvement: "text-blue-400 bg-blue-400/10",
    breaking: "text-yellow-400 bg-yellow-400/10"
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
      colors[type]
    )}>
      {icons[type]}
      <span className="ml-1.5">{children}</span>
    </span>
  );
}

// Version card component
function VersionCard({ 
  version, 
  date, 
  changes,
  isLatest = false
}: { 
  version: string, 
  date: string, 
  changes: Array<{
    type: "feature" | "fix" | "improvement" | "breaking",
    description: string
  }>,
  isLatest?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Version line connector */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-800" />
      
      {/* Version dot */}
      <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>

      <div className="ml-12 pb-12">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl font-semibold text-white">
            {version}
            {isLatest && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400">
                Latest
              </span>
            )}
          </h3>
          <span className="text-sm text-gray-400">{date}</span>
        </div>

        <div className="space-y-4">
          {changes.map((change, index) => (
            <div key={index} className="flex items-start gap-3">
              <ChangeType type={change.type}>
                {change.type.charAt(0).toUpperCase() + change.type.slice(1)}
              </ChangeType>
              <p className="text-gray-300">{change.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

type ChangeType = "feature" | "fix" | "improvement" | "breaking";

interface Change {
  type: ChangeType;
  description: string;
}

interface Version {
  version: string;
  date: string;
  isLatest?: boolean;
  changes: Change[];
}

export default function Changelog() {
  const versions: Version[] = [
    {
      version: "v1.2.0",
      date: "March 15, 2024",
      isLatest: true,
      changes: [
        {
          type: "feature",
          description: "Added support for natural language commands in 10 new languages"
        },
        {
          type: "improvement",
          description: "Enhanced AI model accuracy for complex automation tasks"
        },
        {
          type: "fix",
          description: "Resolved issue with API rate limiting in high-traffic scenarios"
        }
      ]
    },
    {
      version: "v1.1.0",
      date: "February 28, 2024",
      changes: [
        {
          type: "feature",
          description: "Introduced new CLI tool for local development"
        },
        {
          type: "improvement",
          description: "Optimized performance for large-scale automations"
        },
        {
          type: "breaking",
          description: "Updated API authentication method for enhanced security"
        }
      ]
    },
    {
      version: "v1.0.0",
      date: "February 1, 2024",
      changes: [
        {
          type: "feature",
          description: "Initial release of ActionBot"
        },
        {
          type: "feature",
          description: "Core automation engine with AI-powered task execution"
        },
        {
          type: "feature",
          description: "Integration with 50+ popular services and tools"
        }
      ]
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
              Changelog
            </h1>
            <p className="text-xl text-gray-400">
              Track the latest updates and improvements to ActionBot
            </p>
          </motion.div>

          {/* Version timeline */}
          <div className="max-w-4xl mx-auto">
            {versions.map((version, index) => (
              <VersionCard
                key={version.version}
                version={version.version}
                date={version.date}
                changes={version.changes}
                isLatest={version.isLatest}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 