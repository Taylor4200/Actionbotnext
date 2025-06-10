"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import Integrations from "@/components/Integrations";
import { Mail, Calendar, Slack, Trello, Github, MoreHorizontal, Zap, Link, Shield, ArrowRight, CheckCircle } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

const IntegrationsShowcasePage = () => {
  const popularIntegrations = [
    { icon: <Mail className="w-8 h-8" />, name: "Gmail", description: "Email automation and management", category: "Communication" },
    { icon: <Calendar className="w-8 h-8" />, name: "Google Calendar", description: "Smart scheduling and meeting management", category: "Productivity" },
    { icon: <Slack className="w-8 h-8" />, name: "Slack", description: "Team communication and notifications", category: "Communication" },
    { icon: <Trello className="w-8 h-8" />, name: "Trello", description: "Project management and task tracking", category: "Productivity" },
    { icon: <Github className="w-8 h-8" />, name: "GitHub", description: "Code deployment and repository management", category: "Development" },
    { icon: <MoreHorizontal className="w-8 h-8" />, name: "100+ More", description: "Connect with your entire tech stack", category: "All Categories" }
  ];

  const integrationCategories = [
    {
      name: "Communication",
      description: "Email, messaging, and collaboration tools",
      integrations: ["Gmail", "Slack", "Microsoft Teams", "Discord", "Zoom"]
    },
    {
      name: "Productivity",
      description: "Project management and task tracking",
      integrations: ["Trello", "Asana", "Notion", "Monday.com", "ClickUp"]
    },
    {
      name: "Development",
      description: "Code repositories and deployment tools",
      integrations: ["GitHub", "GitLab", "Bitbucket", "Vercel", "Netlify"]
    },
    {
      name: "CRM & Sales",
      description: "Customer relationship and sales management",
      integrations: ["Salesforce", "HubSpot", "Pipedrive", "Zoho", "Freshworks"]
    },
    {
      name: "Marketing",
      description: "Social media and marketing automation",
      integrations: ["Buffer", "Hootsuite", "Mailchimp", "ConvertKit", "ActiveCampaign"]
    },
    {
      name: "Analytics",
      description: "Data analysis and reporting tools",
      integrations: ["Google Analytics", "Mixpanel", "Amplitude", "Segment", "PostHog"]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Setup",
      description: "Connect your tools in seconds with our one-click integration system."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and SOC 2 compliance for all your data."
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Universal Compatibility",
      description: "Works with any tool that has an API - no technical expertise required."
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
              Connect Your Tools
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              ActionBot works with all your favorite tools and services. Connect your entire tech stack in minutes.
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
              Stop switching between apps and start automating workflows across your entire tech stack. ActionBot connects to over 100 popular tools and services, allowing you to create powerful automation workflows that span multiple platforms.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're using Gmail for communication, Trello for project management, or GitHub for development, ActionBot can help you automate repetitive tasks and streamline your workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#171717] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center"
              >
                <div className="bg-[#262626] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Integrations Section */}
      <Integrations />

      {/* Popular Integrations Section */}
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
              Popular Integrations
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Connect with the tools you use every day to automate your workflow.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {popularIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
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
                  scale: 1.02,
                  transition: { duration: 0.15, type: "spring", stiffness: 600 }
                }}
                className="group bg-[#171717] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-150 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10 group-hover:to-indigo-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#262626] w-12 h-12 rounded-xl flex items-center justify-center mr-4 text-gray-400 group-hover:text-purple-400 transition-colors duration-200">
                      {integration.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                        {integration.name}
                      </h3>
                      <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
                        {integration.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200 mb-4">
                    {integration.description}
                  </p>
                  
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-200">
                    <span>Connect</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Categories Section */}
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
              Browse by Category
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Find the integrations you need by browsing our organized categories.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {integrationCategories.map((category, index) => (
              <motion.div
                key={category.name}
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
                  scale: 1.02,
                  transition: { duration: 0.15, type: "spring", stiffness: 600 }
                }}
                className="group bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-150 relative overflow-hidden"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-200">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  {category.integrations.slice(0, 3).map((integration, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-200">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {integration}
                    </div>
                  ))}
                  {category.integrations.length > 3 && (
                    <div className="text-sm text-gray-600 group-hover:text-gray-500 transition-colors duration-200">
                      +{category.integrations.length - 3} more integrations
                    </div>
                  )}
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
                Ready to Connect Your Tools?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg mb-8"
              >
                Start automating your workflow today with ActionBot's powerful integrations.
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

export default IntegrationsShowcasePage; 