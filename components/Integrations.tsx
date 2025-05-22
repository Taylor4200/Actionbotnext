"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, Slack, Trello, Github, MoreHorizontal } from "lucide-react";

interface IntegrationProps {
  icon: React.ReactNode;
  name: string;
  delay: number;
}

function Integration({ icon, name, delay }: IntegrationProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, borderColor: "#6d28d9" }}
      className="bg-[#171717] rounded-xl p-4 flex items-center justify-center h-24 border border-gray-800 transition duration-300"
    >
      <div className="text-center">
        <div className="w-8 h-8 text-gray-400 mx-auto mb-2">{icon}</div>
        <span className="text-sm text-gray-400">{name}</span>
      </div>
    </motion.div>
  );
}

export default function Integrations() {
  const integrations = [
    { icon: <Mail />, name: "Gmail" },
    { icon: <Calendar />, name: "Calendar" },
    { icon: <Slack />, name: "Slack" },
    { icon: <Trello />, name: "Trello" },
    { icon: <Github />, name: "GitHub" },
    { icon: <MoreHorizontal />, name: "More" },
  ];

  return (
    <section id="integrations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Connected Platforms
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            ActionBot works with all your favorite tools and services.
          </motion.p>
        </div>
        
        {/* Automation workflow illustration */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mb-16 max-w-4xl mx-auto"
        >
          <div className="w-full h-64 md:h-80 rounded-2xl bg-[#171717] opacity-60 overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#0f0f0f]/70 backdrop-blur-sm rounded-xl p-4 max-w-md text-center">
                <h3 className="text-xl font-semibold mb-2">100+ Integrations</h3>
                <p className="text-gray-300">Connect your entire tech stack with our growing library of integrations.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <Integration
              key={integration.name}
              icon={integration.icon}
              name={integration.name}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
