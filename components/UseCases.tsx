"use client";

import { motion } from "framer-motion";
import {
  Receipt, // Using Receipt for Admin Tasks
  Megaphone, // Using Megaphone for Marketing
  Wrench, // Using Wrench for DevOps
  ShoppingCart, // Using ShoppingCart for eCommerce
  BotMessageSquare // Using BotMessageSquare for Custom AI Flows
} from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function UseCaseCard({ icon, title, description, delay }: UseCaseCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="bg-[#262626] p-3 rounded-lg text-purple-400 w-fit mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function UseCases() {
  const useCases = [
    {
      icon: <Receipt className="w-6 h-6" />,
      title: "Admin Tasks",
      description: "Automate calendar invites, emails, reminders."
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Marketing",
      description: "Schedule posts, pull reports, update CRM entries."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "DevOps",
      description: "Create tickets, monitor uptime, manage deployments."
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "eCommerce",
      description: "Handle orders, customer questions, fulfillment."
    },
    {
      icon: <BotMessageSquare className="w-6 h-6" />,
      title: "Custom AI Flows",
      description: "Chain multiple tasks via voice or prompt."
    },
  ];

  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Built for Every Workflow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Discover how ActionBot can streamline tasks across various domains.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={useCase.title}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <GlowButton href="#" size="md">
              See Example Workflows
            </GlowButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 