"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: { available: boolean; text: string }[];
  cta: string;
  isPopular?: boolean;
  delay: number;
  icon: React.ReactNode;
  // Added onClick handler for selection
  onClick?: () => void;
  isSelected?: boolean;
  // Added mode prop to determine behavior
  mode?: 'select' | 'direct';
}

export default function PricingTier({ 
  name, 
  price, 
  description, 
  features, 
  cta, 
  isPopular, 
  delay, 
  icon,
  onClick,
  isSelected,
  mode = 'direct' // Default to direct mode for backward compatibility
}: PricingTierProps) {
  // Determine the href based on mode and plan name
  const getHref = () => {
    if (mode === 'select') return null; // No href in select mode
    if (name === 'Teams') return '/contact?intent=enterprise';
    return `/signup?plan=${name.toLowerCase()}`;
  };

  // Determine if we should use onClick or href
  const isSelectMode = mode === 'select';
  const href = getHref();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: isSelected ? 0 : -3, // No lift effect if already selected
        scale: isSelected ? 1.02 : 1.02, // Maintain consistent slight scale
        transition: { type: "spring", stiffness: 500, damping: 18 }
      }}
      // Added ring and border based on isSelected, combined with isPopular
      className={cn(`bg-[#0f0f0f] rounded-2xl p-8 border transition-all duration-150 hover:border-purple-600 hover:shadow-lg will-change-transform relative`, 
        isSelected ? 'border-purple-600 ring-2 ring-purple-500/50 shadow-lg shadow-purple-900/10' : 
        (isPopular ? 'border-purple-600 shadow-lg shadow-purple-900/10' : 'border-gray-800'),
        isPopular ? 'md:-translate-y-4' : '',
        isSelectMode && onClick ? 'cursor-pointer' : '' // Only add cursor-pointer in select mode
      )}
      // Use onClick prop if provided
      onClick={isSelectMode ? onClick : undefined} // Only use onClick in select mode
    >
      {/* Popular badge - placed higher to prevent overlap with gradient */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold py-1 px-4 rounded-full z-10">
          Most Popular
        </div>
      )}
      
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-purple-600/0 via-purple-600 to-purple-600/0 rounded-t-2xl"></div>
      
      {/* Icon and Title */}
      <div className="mb-6 flex items-center">
        <div className={cn(`w-12 h-12 rounded-xl flex items-center justify-center mr-3`, isPopular ? 'bg-purple-600/20' : 'bg-[#262626]')}>
          <div className={cn(isPopular ? 'text-purple-500' : 'text-gray-400')}>
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3> {/* Ensured text is white */}
          <div>
            <span className="text-3xl font-bold text-purple-400">{price}</span> {/* Price color */}
            <span className="text-gray-400">/month</span>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-gray-400 text-sm mb-6">{description}</p>
      
      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: delay + (index * 0.05), // Adjusted delay slightly
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {feature.available ? (
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 600 }}
                className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
              >
                <Check className="w-5 h-5" />
              </motion.div>
            ) : (
              <X className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
            )}
            <span className={cn(feature.available ? 'text-gray-300' : 'text-gray-500', 'leading-relaxed')}> {/* Added leading-relaxed */}
              {feature.text}
            </span>
          </motion.li>
        ))}
      </ul>
      
      {/* CTA Button - Handle both modes */}
      {name === 'Teams' && mode === 'direct' ? (
        <motion.a 
          href={href}
          whileHover={{ scale: 1.03, backgroundColor: "#1e1e1e" }}
          whileTap={{ scale: 0.98 }}
          className="block w-full py-3 text-center bg-[#262626] text-white font-semibold rounded-xl transition duration-300 border border-gray-800"
        >
          Talk to Sales
        </motion.a>
      ) : (
        <GlowButton 
          href={isSelectMode ? null : href} 
          onClick={isSelectMode ? onClick : undefined}
          fullWidth 
          constantAnimation={isPopular}
          disabled={isSelectMode && !isSelected && !onClick}
        >
          {isSelectMode && isSelected ? 'Selected' : cta}
        </GlowButton>
      )}
    </motion.div>
  );
} 