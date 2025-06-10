"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import Features from "@/components/Features";
import { Calendar, Mail, Webhook, Repeat, MessageSquare, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

const FeaturesPage = () => {
  const additionalFeatures = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Lightning Fast",
      description: "Execute tasks in milliseconds with our optimized AI engine.",
      color: "yellow-500",
    },
    {
      icon: <CheckCircle className="w-7 h-7" />,
      title: "Error Handling",
      description: "Intelligent retry mechanisms and fallback strategies.",
      color: "green-500",
    },
    {
      icon: <ArrowRight className="w-7 h-7" />,
      title: "Custom Workflows",
      description: "Build complex automation chains with our visual editor.",
      color: "blue-500",
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
              Powerful Features
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              ActionBot combines powerful AI with real-world action capabilities to transform how you work.
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
              From simple task automation to complex workflow orchestration, ActionBot provides everything you need to streamline your operations. Our AI-powered platform learns your preferences and adapts to your workflow, making automation feel natural and intuitive.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're a solo entrepreneur or part of a large enterprise, our features scale with your needs. Start with basic automation and gradually build sophisticated workflows that handle your most complex business processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features Section */}
      <Features />

      {/* Additional Features Section */}
      <section className="py-24 bg-[#171717] relative overflow-hidden">
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
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
            >
              Advanced Capabilities
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Beyond the basics - discover the advanced features that set ActionBot apart.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -5,
                  scale: 1.03,
                  transition: { duration: 0.15, type: "spring", stiffness: 600 }
                }}
                className="group bg-[#171717] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-150 relative overflow-hidden will-change-transform"
              >
                {/* Background gradient */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10 group-hover:to-indigo-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    className={`bg-[#262626] w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:shadow-${feature.color.split('-')[0]}-500/30 transition-all duration-150`}
                  >
                    <motion.div 
                      className={`text-${feature.color}`}
                      whileHover={{
                        scale: 1.05,
                        rotate: 5,
                        transition: { duration: 0.2, type: "spring", stiffness: 500 }
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold mb-3 text-white"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-150">{feature.description}</p>
                  
                  {/* Animated bottom border */}
                  <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-${feature.color.split('-')[0]}-500 to-indigo-500 group-hover:w-full transition-all duration-200 ease-in-out`}></div>
                </div>
              </motion.div>
            ))}
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
                Join thousands of users who are already automating their workflows with ActionBot.
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
                href="/pricing"
                whileHover={{ scale: 1.03, backgroundColor: "rgba(38, 38, 38, 1)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-[#171717] border border-gray-700 text-white font-semibold px-8 py-4 rounded-xl transition duration-300 hover:bg-[#262626] hover:border-gray-600 flex items-center justify-center"
              >
                View Pricing
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage; 