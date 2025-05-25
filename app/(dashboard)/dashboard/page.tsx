"use client";

import { motion } from "framer-motion";
import { Plus, MessageSquare, Link as LinkIcon, Clock } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import GlowCard from "@/components/ui/GlowCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
};

const quickActions = [
  {
    title: "Create Task",
    description: "Start a new automation task",
    icon: Plus,
    href: "/chat",
    glowColor: "purple" as const,
  },
  {
    title: "New Chat",
    description: "Start a conversation with ActionBot",
    icon: MessageSquare,
    href: "/chat",
    glowColor: "indigo" as const,
  },
  {
    title: "Connect Integration",
    description: "Link a new service",
    icon: LinkIcon,
    href: "/integrations",
    glowColor: "teal" as const,
  },
];

const recentActivity = [
  {
    title: "Created Task",
    description: "Automated email response system",
    time: "2 hours ago",
    icon: Plus,
  },
  {
    title: "Connected Integration",
    description: "Linked Gmail account",
    time: "5 hours ago",
    icon: LinkIcon,
  },
  {
    title: "Chat Session",
    description: "Discussed task automation",
    time: "1 day ago",
    icon: MessageSquare,
  },
];

export default function DashboardPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Welcome Header */}
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Welcome back, User!
        </h1>
        <p className="text-gray-400">
          Here's what's happening with your ActionBot today.
        </p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <GlowCard
              key={action.title}
              href={action.href}
              glowColor={action.glowColor}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                <action.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-1">{action.title}</h3>
              <p className="text-sm text-gray-400">{action.description}</p>
            </GlowCard>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <GlowButton
            variant="ghost"
            size="sm"
            icon={<Clock className="w-4 h-4" />}
          >
            View All
          </GlowButton>
        </div>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <GlowCard
              key={activity.title}
              glowColor="purple"
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                <activity.icon className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-medium">{activity.title}</h3>
                  <span className="text-sm text-gray-400">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  {activity.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
} 