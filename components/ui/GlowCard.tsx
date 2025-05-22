"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
}

export default function GlowCard({ children }: GlowCardProps) {
  return (
    <motion.div 
      className="bg-[#171717] rounded-2xl p-6 border border-gray-800 transition-all duration-300"
      whileHover={{ 
        y: -5, 
        boxShadow: "0 0 25px 5px rgba(109, 40, 217, 0.25)",
        borderColor: "rgba(109, 40, 217, 0.5)"
      }}
    >
      {children}
    </motion.div>
  );
}
