"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import Pricing from "@/components/Pricing";
import { Check, X, Zap, Shield, Clock, Sparkles, Star, Users, ArrowRight } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

const PricingPage = () => {
  const faqItems = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated."
    },
    {
      question: "What's included in the free trial?",
      answer: "The free trial includes all Pro features for 14 days. No credit card required to start."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees. You only pay for the plan you choose, with transparent pricing and no hidden costs."
    }
  ];

  const comparisonFeatures = [
    {
      feature: "AI-powered automation",
      free: true,
      pro: true,
      teams: true
    },
    {
      feature: "Email automation",
      free: true,
      pro: true,
      teams: true
    },
    {
      feature: "Calendar scheduling",
      free: true,
      pro: true,
      teams: true
    },
    {
      feature: "API integrations",
      free: "5 integrations",
      pro: "Unlimited",
      teams: "Unlimited"
    },
    {
      feature: "Custom workflows",
      free: false,
      pro: true,
      teams: true
    },
    {
      feature: "Priority support",
      free: false,
      pro: true,
      teams: true
    },
    {
      feature: "Team collaboration",
      free: false,
      pro: false,
      teams: true
    },
    {
      feature: "Advanced analytics",
      free: false,
      pro: false,
      teams: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      <DropdownNavbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-900/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto text-gray-300 space-y-8 text-center"
          >
            <p className="text-lg leading-relaxed">
              Choose the plan that fits your needs. Whether you're just getting started with automation or running a large team, we have a plan for you. All plans include our core AI features with different levels of advanced capabilities.
            </p>
            <p className="text-lg leading-relaxed">
              Start with our free plan to explore ActionBot's capabilities, then upgrade when you're ready to unlock more powerful features and integrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <Pricing />

      {/* Feature Comparison Section */}
      <section className="py-24 bg-[#0f0f0f] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8 rounded-full"
            />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
            >
              Feature Comparison
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Compare features across all plans to find the perfect fit for your needs.
            </motion.p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#171717] rounded-2xl border border-gray-800 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 p-6 bg-[#1a1a1a] border-b border-gray-800">
                <div className="text-left">
                  <h3 className="font-semibold text-white">Feature</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-400">Free</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-purple-400">Pro</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-indigo-400">Teams</h3>
                </div>
              </div>
              
              {/* Features */}
              <div className="divide-y divide-gray-800">
                {comparisonFeatures.map((item, index) => (
                  <motion.div
                    key={item.feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-4 gap-4 p-6 hover:bg-[#1a1a1a] transition-colors duration-200"
                  >
                    <div className="text-left">
                      <span className="text-gray-300">{item.feature}</span>
                    </div>
                    <div className="text-center">
                      {typeof item.free === 'boolean' ? (
                        item.free ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-400 text-sm">{item.free}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {typeof item.pro === 'boolean' ? (
                        item.pro ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-400 text-sm">{item.pro}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {typeof item.teams === 'boolean' ? (
                        item.teams ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-400 text-sm">{item.teams}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#171717] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-900/5 blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-900/5 blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
            >
              Frequently Asked Questions
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Everything you need to know about our pricing and plans.
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-indigo-900/10 blur-3xl" style={{animationDuration: "7s", animationName: "pulse-slow"}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8 rounded-full"
              />
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
              >
                Ready to Get Started?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg mb-8"
              >
                Start your free trial today and experience the power of AI-powered automation.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <GlowButton href="/signup" size="lg">
                Start Free Trial
              </GlowButton>
              <motion.a 
                href="/features"
                whileHover={{ scale: 1.03, backgroundColor: "rgba(38, 38, 38, 1)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-[#171717] border border-gray-700 text-white font-semibold px-8 py-4 rounded-xl transition duration-300 hover:bg-[#262626] hover:border-gray-600 flex items-center justify-center"
              >
                Explore Features
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage; 