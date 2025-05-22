"use client";

import { Twitter, Linkedin, Github, Mail, Instagram, Lock, FileText, Zap } from "lucide-react";
import { motion } from "framer-motion";

// Social icon component with animation
function SocialIcon({ icon, href, color }: { icon: React.ReactNode, href: string, color: string }) {
  return (
    <motion.a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#171717] border border-gray-800 hover:border-${color}-500 hover:text-${color}-400 text-gray-400 transition-colors duration-200 group relative`}
      whileHover={{ 
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 10 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <motion.span 
        className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-${color}-500/10 blur-sm transition-opacity duration-300`}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
}

// Footer link component with animation
function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <motion.a 
        href={href} 
        className="text-gray-400 hover:text-white inline-flex items-center transition-all duration-200 relative group"
        whileHover={{ x: 3 }}
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Zap className="w-3 h-3 text-purple-500" />
        </span>
        {children}
      </motion.a>
    </li>
  );
}

// Column header with animated underline
function ColumnHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mb-6">
      <h4 className="text-lg font-semibold mb-2 text-white">{children}</h4>
      <div className="w-12 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
        animate={{ 
          width: ["0%", "100%", "0%"], 
          left: ["0%", "0%", "100%"] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="py-16 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-800/50 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-900/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center mb-4">
                <div className="relative h-10 w-10 mr-3 rounded-xl bg-gradient-to-br from-purple-700 to-indigo-600 flex items-center justify-center overflow-hidden">
                  <motion.span 
                    className="text-white font-bold text-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "mirror"
                    }}
                  >
                    A
                  </motion.span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-700/50 to-indigo-600/50 opacity-70 blur-[10px]"></div>
                </div>
                <span className="text-white font-bold text-xl">ActionBot</span>
              </div>
              <p className="text-gray-300 mb-6">Automate your work with AI that takes real-world actions. Connect to 100+ services and execute tasks with natural language.</p>
              
              {/* Newsletter signup */}
              <div className="bg-[#171717] p-4 rounded-xl border border-gray-800 mb-6">
                <p className="text-sm text-gray-300 mb-3">Get AI automation tips in your inbox</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 bg-[#262626] text-white text-sm rounded-l-lg px-3 py-2 border border-gray-700 focus:outline-none focus:border-purple-500"
                  />
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium px-3 py-2 rounded-r-lg hover:from-purple-500 hover:to-indigo-500 transition">
                    Subscribe
                  </button>
                </div>
              </div>
              
              {/* Social icons */}
              <div className="flex flex-wrap gap-3">
                <SocialIcon icon={<Twitter className="w-5 h-5" />} href="#" color="purple" />
                <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="#" color="indigo" />
                <SocialIcon icon={<Github className="w-5 h-5" />} href="#" color="purple" />
                <SocialIcon icon={<Instagram className="w-5 h-5" />} href="#" color="indigo" />
                <SocialIcon icon={<Mail className="w-5 h-5" />} href="#" color="purple" />
              </div>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ColumnHeader>Product</ColumnHeader>
            <ul className="space-y-3">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#platforms">Integrations</FooterLink>
              <FooterLink href="#">Changelog</FooterLink>
              <FooterLink href="#">Roadmap</FooterLink>
              <FooterLink href="#">Beta Program</FooterLink>
            </ul>
          </motion.div>
          
          {/* Resources */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ColumnHeader>Resources</ColumnHeader>
            <ul className="space-y-3">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">API Reference</FooterLink>
              <FooterLink href="#">Tutorials</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Community</FooterLink>
              <FooterLink href="#">Help Center</FooterLink>
            </ul>
          </motion.div>
          
          {/* Company & Legal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ColumnHeader>Company</ColumnHeader>
            <ul className="space-y-3 mb-8">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Press Kit</FooterLink>
            </ul>
            
            <ColumnHeader>Legal</ColumnHeader>
            <ul className="space-y-3">
              <FooterLink href="#">
                <Lock className="w-3.5 h-3.5 mr-1.5" />
                Privacy Policy
              </FooterLink>
              <FooterLink href="#">
                <FileText className="w-3.5 h-3.5 mr-1.5" />
                Terms of Service
              </FooterLink>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 ActionBot. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Status</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Security</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
