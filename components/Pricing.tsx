"use client";

import { motion } from "framer-motion";
import { Check, X, Zap, Shield, Clock, Sparkles } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import PricingTier from "@/components/pricing/PricingTier";
import { tiers } from "@/lib/pricingData";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const icons = {
    Free: <Clock className="w-6 h-6" />,
    Pro: <Sparkles className="w-6 h-6" />,
    Teams: <Shield className="w-6 h-6" />,
  };

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
            Start free, scale as you grow.
          </motion.p>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingTier
              key={tier.id}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              cta={tier.cta}
              isPopular={tier.isPopular}
              icon={icons[tier.name as keyof typeof icons]}
              delay={index * 0.2}
              mode="direct"
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
