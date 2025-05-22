"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  constantAnimation?: boolean;
}

export default function GlowButton({ 
  children, 
  href = "#", 
  onClick, 
  fullWidth = false,
  size = "md",
  constantAnimation = false
}: GlowButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-4",
    lg: "px-10 py-5 text-lg"
  };

  const buttonContent = (
    <motion.span 
      className={`relative z-10 overflow-hidden inline-block bg-[#171717] text-white font-semibold rounded-xl transition duration-300 ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''}`}
      whileHover={{ scale: constantAnimation ? 1.05 : 1.03 }}
      whileTap={{ scale: 0.98 }}
      animate={constantAnimation ? { scale: [1, 1.03, 1] } : {}}
      transition={constantAnimation ? { 
        repeat: Infinity, 
        duration: 2,
        repeatType: "reverse" 
      } : { duration: 0.3 }}
    >
      <span className="relative z-10">{children}</span>
      <span 
        className="absolute inset-0 bg-gradient-to-r from-purple-700 via-indigo-600 to-teal-700 bg-size-200 animate-gradient-shift -z-10"
        style={{ 
          backgroundSize: "200% 200%",
          animation: "gradient-shift 8s ease infinite"
        }}
      ></span>
    </motion.span>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={`${fullWidth ? 'w-full' : ''}`}>
        {buttonContent}
      </button>
    );
  }

  return (
    <a href={href} className={`${fullWidth ? 'w-full' : ''} inline-block`}>
      {buttonContent}
    </a>
  );
}
