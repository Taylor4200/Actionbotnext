"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, StarHalf, Quote, MessageSquare, CheckCircle, Clock } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  testimonial: string;
  avatarUrl?: string;
  rating: number;
  achievement?: string;
  delay: number;
  active: boolean;
  onClick: () => void;
}

function TestimonialCard({ 
  name, 
  role, 
  company, 
  testimonial, 
  avatarUrl, 
  rating, 
  achievement,
  delay, 
  active,
  onClick 
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring", 
        stiffness: 100 
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`group cursor-pointer bg-[#171717] rounded-2xl p-6 border transition-all duration-500 relative overflow-hidden ${active ? 'border-purple-600 shadow-lg shadow-purple-900/20' : 'border-gray-800'}`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-10 text-purple-500">
        <Quote className="w-20 h-20" />
      </div>
      
      {active && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent"
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          {/* Avatar */}
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 relative overflow-hidden ${active ? 'border-2 border-purple-500' : 'border border-gray-700'}`}>
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-700 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold">{name.charAt(0)}</span>
              </div>
            )}
          </div>
          
          <div>
            <h4 className="font-bold text-white">{name}</h4>
            <p className="text-sm text-gray-400">{role}{company ? ` · ${company}` : ''}</p>
          </div>
        </div>
        
        {/* Achievement badge */}
        {achievement && (
          <div className="inline-flex items-center bg-[#262626] text-xs px-2 py-1 rounded-full text-gray-300 mb-3 border border-gray-700">
            <CheckCircle className="w-3 h-3 mr-1 text-emerald-400" />
            {achievement}
          </div>
        )}
        
        {/* Testimonial */}
        <motion.p 
          className="text-gray-300 text-sm md:text-base mb-4 relative"
        >
          {testimonial}
        </motion.p>
        
        {/* Footer with rating */}
        <div className="flex justify-between items-center">
          <div className="flex">
            {[...Array(Math.floor(rating))].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500" fill="#eab308" />
            ))}
            {rating % 1 !== 0 && (
              <StarHalf className="w-4 h-4 text-yellow-500" fill="#eab308" />
            )}
          </div>
          
          <motion.span 
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            className="text-xs text-gray-500 flex items-center"
          >
            <Clock className="w-3 h-3 mr-1" /> Verified user
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Marketing Director",
      company: "TechGrowth Inc",
      testimonial: "\"ActionBot has saved our team countless hours on social media scheduling and reporting. It's like having a digital assistant who never sleeps.\"",
      rating: 5,
      achievement: "Reduced manual tasks by 75%"
    },
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "InnovateLabs",
      testimonial: "\"I was skeptical about AI assistants, but ActionBot actually delivers. It handles our meeting scheduling and follow-ups flawlessly.\"",
      rating: 5,
      achievement: "Saved 12+ hours weekly"
    },
    {
      name: "Michael Torres",
      role: "Freelance Developer",
      testimonial: "\"As a solo developer, ActionBot is like having a team. It manages my client communications and even helps with basic code deployments.\"",
      rating: 4.5,
    },
    {
      name: "Priya Sharma",
      role: "Marketing Specialist",
      company: "GlobalBrands",
      testimonial: "\"The email automation feature alone has transformed how we handle customer communications. Personalized responses without the repetitive work.\"",
      rating: 5,
      achievement: "Increased response rate by 34%"
    },
    {
      name: "David Wilson",
      role: "Content Creator",
      testimonial: "\"ActionBot schedules my social posts, analyzes performance, and even suggests content improvements. It's been a game-changer for my workflow.\"",
      rating: 4.5,
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-[#0f0f0f] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-900/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-indigo-900/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-purple-900/20 text-purple-400 text-sm px-3 py-1 rounded-full mb-4"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Customer Stories
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
          >
            What Our Users Say
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Join thousands of professionals who trust ActionBot to automate their work.
          </motion.p>
        </div>
        
        {/* Mobile testimonials (1 column) */}
        <div className="md:hidden space-y-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              achievement={testimonial.achievement}
              delay={index * 0.15}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        
        {/* Desktop testimonials (grid) */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              achievement={testimonial.achievement}
              delay={index * 0.15}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        
        {/* Additional testimonials row */}
        <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mt-6">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              achievement={testimonial.achievement}
              delay={(index + 3) * 0.15}
              active={activeIndex === index + 3}
              onClick={() => setActiveIndex(index + 3)}
            />
          ))}
        </div>
        
{/* Stats section removed - now only using the dedicated StatsDisplay component */}
      </div>
    </section>
  );
}
