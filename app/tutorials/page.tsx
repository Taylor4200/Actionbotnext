"use client";

import { motion } from "framer-motion";
import { Home, Menu, X, Play, Book, Code, Zap, Terminal, MessageSquare, Users, ArrowRight, Clock, Star, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import DropdownNavbar from "@/components/DropdownNavbar";

// Navigation component (reused from other pages)
function DocNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="/"
            className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
            whileHover={{ x: 3 }}
          >
            <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-600 flex items-center justify-center">
              <Home className="w-4 h-4" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-700/50 to-indigo-600/50 opacity-70 blur-[5px]"></div>
            </div>
            <span className="font-semibold">ActionBot</span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/documentation" className="text-gray-400 hover:text-white transition-colors">Docs</a>
            <a href="/changelog" className="text-gray-400 hover:text-white transition-colors">Changelog</a>
            <a href="/roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a>
            <a href="/beta" className="text-gray-400 hover:text-white transition-colors">Beta</a>
            <a href="/tutorials" className="text-white hover:text-purple-400 transition-colors">Tutorials</a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#171717] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <a href="/documentation" className="block text-gray-400 hover:text-white transition-colors">Docs</a>
            <a href="/changelog" className="block text-gray-400 hover:text-white transition-colors">Changelog</a>
            <a href="/roadmap" className="block text-gray-400 hover:text-white transition-colors">Roadmap</a>
            <a href="/beta" className="block text-gray-400 hover:text-white transition-colors">Beta</a>
            <a href="/tutorials" className="block text-white hover:text-purple-400 transition-colors">Tutorials</a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

// Tutorial card component
function TutorialCard({ 
  icon, 
  title, 
  description, 
  duration,
  difficulty,
  href,
  delay = 0
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  duration: string,
  difficulty: "Beginner" | "Intermediate" | "Advanced",
  href: string,
  delay?: number 
}) {
  const difficultyColors = {
    Beginner: "text-green-400 bg-green-400/10",
    Intermediate: "text-blue-400 bg-blue-400/10",
    Advanced: "text-purple-400 bg-purple-400/10"
  };

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group block bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10 group-hover:to-indigo-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="bg-[#262626] p-3 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                {title}
              </h3>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-4">
              {description}
            </p>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1.5" />
                {duration}
              </span>
              <span className={cn(
                "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                difficultyColors[difficulty]
              )}>
                {difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

// Learning path component
function LearningPath({ 
  title, 
  description, 
  steps,
  delay = 0
}: { 
  title: string, 
  description: string,
  steps: Array<{ title: string, description: string }>,
  delay?: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10 group-hover:to-indigo-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-6">
          {description}
        </p>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#262626] text-purple-400 flex items-center justify-center font-semibold">
                {index + 1}
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Tutorials() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Tutorials" },
    { id: "getting-started", label: "Getting Started" },
    { id: "automation", label: "Automation" },
    { id: "integrations", label: "Integrations" },
    { id: "advanced", label: "Advanced" }
  ];

  const tutorials = [
    {
      icon: <Play className="w-6 h-6" />,
      title: "Getting Started with ActionBot",
      description: "Learn the basics of ActionBot and create your first automation in minutes",
      duration: "15 min",
      difficulty: "Beginner" as const,
      href: "/tutorials/getting-started",
      category: "getting-started"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Building Custom Actions",
      description: "Create and deploy custom automation actions using our visual builder",
      duration: "30 min",
      difficulty: "Intermediate" as const,
      href: "/tutorials/custom-actions",
      category: "automation"
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "CLI Mastery",
      description: "Master the ActionBot CLI for advanced automation workflows",
      duration: "45 min",
      difficulty: "Advanced" as const,
      href: "/tutorials/cli-mastery",
      category: "advanced"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural Language Commands",
      description: "Learn how to use natural language to control your automations",
      duration: "20 min",
      difficulty: "Beginner" as const,
      href: "/tutorials/natural-language",
      category: "getting-started"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "API Integration Guide",
      description: "Integrate ActionBot with your existing applications and services",
      duration: "40 min",
      difficulty: "Intermediate" as const,
      href: "/tutorials/api-integration",
      category: "integrations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Set up and manage automations for your entire team",
      duration: "25 min",
      difficulty: "Intermediate" as const,
      href: "/tutorials/team-collaboration",
      category: "automation"
    }
  ];

  const learningPaths = [
    {
      title: "Beginner's Journey",
      description: "Start your automation journey with these fundamental tutorials",
      steps: [
        {
          title: "Introduction to ActionBot",
          description: "Learn the core concepts and basic features"
        },
        {
          title: "Your First Automation",
          description: "Create a simple automation using natural language"
        },
        {
          title: "Basic Integrations",
          description: "Connect ActionBot with popular services"
        }
      ]
    },
    {
      title: "Power User Path",
      description: "Take your automation skills to the next level",
      steps: [
        {
          title: "Advanced Natural Language",
          description: "Master complex command structures"
        },
        {
          title: "Custom Action Development",
          description: "Build and deploy custom automation actions"
        },
        {
          title: "Workflow Optimization",
          description: "Create efficient and scalable automation workflows"
        }
      ]
    }
  ];

  const filteredTutorials = activeCategory === "all" 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      <DropdownNavbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-900/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              Tutorials
            </h1>
            <p className="text-xl text-gray-400">
              Learn how to build powerful automations with ActionBot through our step-by-step guides
            </p>
          </motion.div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeCategory === category.id
                    ? "bg-purple-600 text-white"
                    : "bg-[#171717] text-gray-400 hover:text-white hover:bg-[#262626]"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Learning paths */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">Learning Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningPaths.map((path, index) => (
                <LearningPath
                  key={path.title}
                  title={path.title}
                  description={path.description}
                  steps={path.steps}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Tutorials grid */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">Featured Tutorials</h2>
            <div className="grid gap-6">
              {filteredTutorials.map((tutorial, index) => (
                <TutorialCard
                  key={tutorial.title}
                  icon={tutorial.icon}
                  title={tutorial.title}
                  description={tutorial.description}
                  duration={tutorial.duration}
                  difficulty={tutorial.difficulty}
                  href={tutorial.href}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Community section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Share Your Knowledge</h2>
            <p className="text-gray-400 mb-8">
              Have a tutorial to share? Join our community and help others learn!
            </p>
            <motion.a
              href="https://github.com/Taylor4200/Actionbotnext/discussions/categories/tutorials"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Users className="w-5 h-5 mr-2" />
              Submit a Tutorial
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 