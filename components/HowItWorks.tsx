"use client";

import { motion } from "framer-motion";
import { Plug, MessageSquare, CheckCircle, Play } from "lucide-react";

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

function Step({ number, icon, title, description, color, delay }: StepProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-[#0f0f0f] rounded-2xl p-8 border border-gray-800 relative"
    >
      <div className={`absolute -top-5 left-1/2 transform -translate-x-1/2 bg-${color} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg`}>
        {number}
      </div>
      <div className="text-center mb-6 pt-4">
        <div className="mx-auto w-16 h-16 mb-4 bg-[#262626] rounded-xl flex items-center justify-center">
          <div className={`text-${color} w-8 h-8`}>{icon}</div>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 text-center">{description}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: <Plug />,
      title: "Connect",
      description: "Link your accounts and services through our secure OAuth connections.",
      color: "purple-600",
    },
    {
      number: 2,
      icon: <MessageSquare />,
      title: "Request",
      description: "Tell ActionBot what you need done in plain language through chat or voice.",
      color: "indigo-600",
    },
    {
      number: 3,
      icon: <CheckCircle />,
      title: "Automate",
      description: "ActionBot executes the tasks for you and reports back when complete.",
      color: "teal-600",
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#171717]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How ActionBot Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Three simple steps to automate your daily tasks and save hours every week.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={step.title}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              color={step.color}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        {/* Demo CTA */}
        <div className="text-center mt-16" id="demo">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6"
          >
            See ActionBot in action
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-[#0f0f0f] rounded-2xl overflow-hidden border border-gray-800 shadow-lg glow-purple"
          >
            <div className="relative h-64 md:h-96">
              {/* A placeholder for a video demo with play button */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#0f0f0f]">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-purple-600 bg-opacity-20 flex items-center justify-center transition duration-300 hover:bg-opacity-30"
                >
                  <Play className="w-8 h-8 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
