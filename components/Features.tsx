"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, Webhook, Repeat, MessageSquare, Shield } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

function Feature({ icon, title, description, color, delay }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7, 
        delay,
        type: "spring",
        stiffness: 100 
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3, type: "spring", stiffness: 400 }
      }}
      className="group bg-[#171717] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10 group-hover:to-indigo-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <motion.div 
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
          className={`bg-[#262626] w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:shadow-${color.split('-')[0]}-500/30 transition-all duration-300`}
        >
          <motion.div 
            className={`text-${color}`}
            animate={{ 
              rotate: [0, 0, 0, 0, 0],
              scale: [1, 1.05, 1.1, 1.05, 1] 
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "mirror"
            }}
          >
            {icon}
          </motion.div>
        </motion.div>
        
        <motion.h3 
          className="text-xl font-bold mb-3 text-white"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{description}</p>
        
        {/* Animated bottom border */}
        <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-${color.split('-')[0]}-500 to-indigo-500 group-hover:w-full transition-all duration-700 ease-in-out`}></div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Smart Scheduling",
      description: "Automatically find meeting times, send invites, and reschedule when conflicts arise.",
      color: "purple-600",
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Email Automation",
      description: "Draft, review, and send emails based on your style and preferences.",
      color: "indigo-600",
    },
    {
      icon: <Webhook className="w-7 h-7" />,
      title: "API Connections",
      description: "Connect to 100+ services and execute tasks across your tech stack.",
      color: "teal-600",
    },
    {
      icon: <Repeat className="w-7 h-7" />,
      title: "Workflow Automation",
      description: "Create custom automations triggered by events or on a schedule.",
      color: "purple-600",
    },
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: "Natural Conversations",
      description: "Chat naturally to request actions instead of learning complex commands.",
      color: "indigo-600",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption and access controls.",
      color: "teal-600",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3 
      }
    }
  };

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8 rounded-full"
          />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
          >
            Powerful Features
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            ActionBot combines powerful AI with real-world action capabilities to transform how you work.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10"
        >
          {features.map((feature, index) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
