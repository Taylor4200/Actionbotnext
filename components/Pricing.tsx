"use client";

import { motion } from "framer-motion";
import { Check, X, Zap, Shield, Clock, Sparkles } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: { available: boolean; text: string }[];
  cta: string;
  isPopular?: boolean;
  delay: number;
  icon: React.ReactNode;
}

function PricingTier({ 
  name, 
  price, 
  description, 
  features, 
  cta, 
  isPopular, 
  delay, 
  icon 
}: PricingTierProps) {
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
        y: -3,
        scale: 1.02,
        transition: { type: "spring", stiffness: 500, damping: 18 }
      }}
      className={`bg-[#0f0f0f] rounded-2xl p-8 border ${isPopular ? 'border-purple-600 shadow-lg shadow-purple-900/10' : 'border-gray-800'} transition-all duration-150 hover:border-purple-600 hover:shadow-lg will-change-transform relative ${isPopular ? 'md:-translate-y-4' : ''}`}
    >
      {/* Popular badge - placed higher to prevent overlap with gradient */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold py-1 px-4 rounded-full z-10">
          Most Popular
        </div>
      )}
      
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-purple-600/0 via-purple-600 to-purple-600/0 rounded-t-2xl"></div>
      
      {/* Icon */}
      <div className="mb-6 flex items-center">
        <div className={`w-12 h-12 rounded-xl ${isPopular ? 'bg-purple-600/20' : 'bg-[#262626]'} flex items-center justify-center mr-3`}>
          <div className={`${isPopular ? 'text-purple-500' : 'text-gray-400'}`}>
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <div>
            <span className="text-3xl font-bold">{price}</span>
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
              delay: delay + (index * 0.1),
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
            viewport={{ once: true }}
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
            <span className={`${feature.available ? 'text-gray-300' : 'text-gray-500'}`}>
              {feature.text}
            </span>
          </motion.li>
        ))}
      </ul>
      
      {/* CTA Button */}
      {isPopular ? (
        <GlowButton href="#" fullWidth constantAnimation>
          {cta}
        </GlowButton>
      ) : (
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.03, backgroundColor: "#1e1e1e" }}
          whileTap={{ scale: 0.98 }}
          className="block w-full py-3 text-center bg-[#262626] text-white font-semibold rounded-xl transition duration-300 border border-gray-800"
        >
          {cta}
        </motion.a>
      )}
    </motion.div>
  );
}

export default function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out ActionBot for personal or small projects.",
      features: [
        { available: true, text: "10 automations/month" },
        { available: true, text: "3 connected services" },
        { available: true, text: "Basic reporting" },
        { available: true, text: "Community support" },
        { available: false, text: "Custom workflows" },
        { available: false, text: "API access" },
      ],
      cta: "Get Started",
      isPopular: false,
      icon: <Clock className="w-6 h-6" />
    },
    {
      name: "Pro",
      price: "$29",
      description: "For professionals and teams who need more automations and integrations.",
      features: [
        { available: true, text: "Unlimited automations" },
        { available: true, text: "20 connected services" },
        { available: true, text: "Advanced reporting" },
        { available: true, text: "Priority support" },
        { available: true, text: "Custom workflows" },
        { available: false, text: "API access" },
      ],
      cta: "Get Started",
      isPopular: true,
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For organizations requiring enterprise features and dedicated support.",
      features: [
        { available: true, text: "Unlimited automations" },
        { available: true, text: "Unlimited connected services" },
        { available: true, text: "Enterprise reporting" },
        { available: true, text: "Dedicated support" },
        { available: true, text: "Custom workflows" },
        { available: true, text: "API access" },
      ],
      cta: "Contact Sales",
      isPopular: false,
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#171717] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-900/5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-900/5 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8 rounded-full"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-purple-900/20 text-purple-400 text-sm px-3 py-1 rounded-full mb-4"
          >
            <Zap className="w-4 h-4 mr-2" />
            Transparent Pricing
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
          >
            Flexible Pricing
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Start free and upgrade as your automation needs grow.
          </motion.p>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingTier
              key={tier.name}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              cta={tier.cta}
              isPopular={tier.isPopular}
              icon={tier.icon}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-400 mb-4">Need more information?</p>
          <a 
            href="#" 
            className="text-purple-400 hover:text-purple-300 transition-colors font-medium inline-flex items-center"
          >
            View our complete pricing details and FAQ
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
              <path d="M4.16797 10H15.8346" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.8346 5L15.8346 10L10.8346 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
