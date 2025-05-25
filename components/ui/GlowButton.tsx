"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg" | "icon";
  variant?: "default" | "ghost" | "outline";
  constantAnimation?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: ReactNode;
}

export default function GlowButton({ 
  children, 
  href = "#", 
  onClick, 
  fullWidth = false,
  size = "md",
  variant = "default",
  constantAnimation = false,
  className,
  type,
  disabled = false,
  icon
}: GlowButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-4",
    lg: "px-10 py-5 text-lg",
    icon: "w-10 h-10 p-2 flex items-center justify-center"
  };

  const variantClasses = {
    default: "bg-[#171717] text-white",
    ghost: "bg-transparent hover:bg-[#171717]/10",
    outline: "bg-transparent border border-gray-800 hover:border-gray-700"
  };

  const buttonContent = (
    <motion.span 
      className={`relative z-10 overflow-hidden inline-flex items-center gap-2 font-semibold rounded-xl transition duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className || ''}`}
      whileHover={disabled ? {} : { scale: constantAnimation ? 1.05 : 1.03 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      animate={disabled ? {} : (constantAnimation ? { scale: [1, 1.03, 1] } : {})}
      transition={constantAnimation ? { 
        repeat: Infinity, 
        duration: 2,
        repeatType: "reverse" 
      } : { duration: 0.3 }}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {variant === "default" && !disabled && (
        <span 
          className="absolute inset-0 bg-gradient-to-r from-purple-700 via-indigo-600 to-teal-700 bg-size-200 animate-gradient-shift -z-10"
          style={{ 
            backgroundSize: "200% 200%",
            animation: "gradient-shift 8s ease infinite"
          }}
        ></span>
      )}
    </motion.span>
  );

  if (onClick) {
    return (
      <button 
        onClick={disabled ? undefined : onClick} 
        className={`${fullWidth ? 'w-full' : ''} ${type || ''}`}
        disabled={disabled}
      >
        {buttonContent}
      </button>
    );
  }

  return (
    <a 
      href={disabled ? undefined : href} 
      className={`${fullWidth ? 'w-full' : ''} inline-block ${disabled ? 'pointer-events-none' : ''}`}
      aria-disabled={disabled}
    >
      {buttonContent}
    </a>
  );
}
