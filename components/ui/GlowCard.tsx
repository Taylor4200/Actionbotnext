"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  glowColor?: "purple" | "indigo" | "teal";
  className?: string;
}

export default function GlowCard({ children, glowColor = "purple", className = "" }: GlowCardProps) {
  const glowClasses = {
    purple: "hover:shadow-[0_0_25px_5px_rgba(109,40,217,0.25)] hover:border-purple-500/50",
    indigo: "hover:shadow-[0_0_25px_5px_rgba(79,70,229,0.25)] hover:border-indigo-500/50",
    teal: "hover:shadow-[0_0_25px_5px_rgba(13,148,136,0.25)] hover:border-teal-500/50"
  };

  return (
    <motion.div 
      className={`bg-[#171717] rounded-2xl p-6 border border-gray-800 transition-all duration-300 ${glowClasses[glowColor]} ${className}`}
      whileHover={{ y: -5 }}
    >
      {children}
    </motion.div>
  );
}
