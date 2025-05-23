"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  ShoppingBag, 
  CreditCard, 
  MessageSquare, 
  CheckSquare, 
  Users, 
  MessageCircle,
  Zap 
} from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

interface PlatformCardProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  delay: number;
}

function PlatformCard({ name, icon, description, color, delay }: PlatformCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -3,
        scale: 1.02,
        transition: { type: "spring", stiffness: 500 }
      }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        type: "spring",
        stiffness: 400
      }}
      viewport={{ once: true }}
      className={`group relative w-full h-32 md:h-40 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4 border border-gray-800 transition-all duration-150 overflow-hidden will-change-transform`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 z-0"></div>
      
      <div className={`z-10 mb-2 w-12 h-12 bg-[#262626] rounded-full flex items-center justify-center border border-gray-700 group-hover:border-${color}-500 transition-all duration-150`}>
        <div className={`text-${color}-500`}>
          {icon}
        </div>
      </div>
      
      <h3 className="z-10 font-semibold text-white mb-1 group-hover:text-white transition-colors duration-150">{name}</h3>
      
      <div className="absolute inset-0 flex items-center justify-center bg-[#171717]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
        <p className="text-sm text-gray-300 text-center px-4">
          <span className="text-purple-400 font-medium">➤</span> {description}
        </p>
      </div>
      
      <div className={`absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-${color}-600 to-${color === "purple" ? "indigo" : color === "indigo" ? "teal" : "purple"}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left`}></div>
    </motion.div>
  );
}

export default function Brands() {
  const platforms = [
    { 
      name: "Shopify", 
      icon: <ShoppingBag className="w-6 h-6" />, 
      description: "Manage orders, inventory, and reply to customer chats automatically.", 
      color: "purple" 
    },
    { 
      name: "Instagram", 
      icon: <MessageSquare className="w-6 h-6" />, 
      description: "Auto-generate and schedule posts. Reply to DMs and comments using AI.", 
      color: "indigo" 
    },
    { 
      name: "Google Calendar", 
      icon: <Calendar className="w-6 h-6" />, 
      description: "Automatically schedule meetings, send invites, and reschedule conflicts.", 
      color: "teal" 
    },
    { 
      name: "Stripe", 
      icon: <CreditCard className="w-6 h-6" />, 
      description: "Monitor payments, send invoices, and receive revenue updates via chat.", 
      color: "purple" 
    },
    { 
      name: "Asana", 
      icon: <CheckSquare className="w-6 h-6" />, 
      description: "Create, update, and complete tasks with natural language commands.", 
      color: "indigo" 
    },
    { 
      name: "HubSpot", 
      icon: <Users className="w-6 h-6" />, 
      description: "Follow up with leads, update your CRM, and automate sales outreach.", 
      color: "teal" 
    },
    { 
      name: "Intercom", 
      icon: <MessageCircle className="w-6 h-6" />, 
      description: "Triage support tickets and reply to users instantly using ActionBot.", 
      color: "purple" 
    },
    { 
      name: "Zapier", 
      icon: <Zap className="w-6 h-6" />, 
      description: "Connect to 5,000+ apps and build no-code workflows triggered by voice or chat.", 
      color: "indigo" 
    }
  ];

  return (
    <section id="platforms" className="py-16 bg-[#171717]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
        >
          Connects with your favorite platforms
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          ActionBot seamlessly integrates with the tools you already use, automating workflows across your entire tech stack.
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={platform.name}
              name={platform.name}
              icon={platform.icon}
              description={platform.description}
              color={platform.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <GlowButton href="#how-it-works" size="md">
              See what ActionBot can automate for you →
            </GlowButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
