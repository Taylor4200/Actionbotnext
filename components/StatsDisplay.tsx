"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getStats, formatNumber, SiteStats } from "@/lib/stats";
import { ChartBar, Users, Clock, BarChart3, Star } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Animated number counter component with smooth scroll-triggered animation
function CountUpNumber({ 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "", 
  decimals = 0 
}: { 
  end: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (isInView && count < end) {
      // Calculate increment amount based on duration
      const increment = end / (duration / 50);
      const timer = setTimeout(() => {
        const nextCount = count + increment;
        setCount(nextCount > end ? end : nextCount);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [count, end, duration, isInView]);
  
  // Format the number with appropriate decimal places
  const formattedNumber = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toString();
    
  return (
    <span ref={ref} className="inline-block will-change-transform">
      {prefix}{formattedNumber}{suffix}
    </span>
  );
}

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  index: number;
}

function StatCard({ title, value, icon, prefix = "", suffix = "", decimals = 0, index }: StatCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay: 0.1 * index 
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        transition: { type: "spring", stiffness: 400 }
      }}
      className="bg-[#0f0f0f] rounded-xl p-5 border border-gray-800 relative overflow-hidden group"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-indigo-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center mb-3">
          <div className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-1">
          <CountUpNumber 
            end={value} 
            prefix={prefix} 
            suffix={suffix} 
            decimals={decimals}
          />
        </h3>
        
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </motion.div>
  );
}

export default function StatsDisplay() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['stats'],
    queryFn: getStats,
    // If we were fetching from a real API, we'd set staleTime and refetchInterval
    staleTime: 60 * 1000, // 1 minute
    refetchInterval: 5 * 60 * 1000, // 5 minutes
  });
  
  // Default stats in case data is still loading
  const defaultStats: SiteStats = {
    activeUsers: 0,
    uptime: 0,
    tasksAutomated: 0,
    averageRating: 0,
    publishedDate: new Date().toISOString()
  };
  
  const displayStats = stats || defaultStats;
  
  return (
    <div id="stats-section" className="py-10 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div className="absolute w-96 h-96 rounded-full bg-purple-900/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-800/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-800/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-6 rounded-full"
          />
          
          <h2 className="text-2xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">ActionBot by the Numbers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by thousands of professionals to automate their daily tasks
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <StatCard
            title="Active Users"
            value={displayStats.activeUsers}
            icon={<Users className="w-5 h-5" />}
            suffix="+"
            index={0}
          />
          
          <StatCard
            title="Uptime"
            value={displayStats.uptime}
            icon={<Clock className="w-5 h-5" />}
            suffix="%"
            decimals={1}
            index={1}
          />
          
          <StatCard
            title="Tasks Automated"
            value={displayStats.tasksAutomated / 1000000}
            icon={<BarChart3 className="w-5 h-5" />}
            suffix="M+"
            decimals={1}
            index={2}
          />
          
          <StatCard
            title="Average Rating"
            value={displayStats.averageRating}
            icon={<Star className="w-5 h-5" />}
            suffix="/5"
            decimals={1}
            index={3}
          />
        </div>
      </div>
    </div>
  );
}