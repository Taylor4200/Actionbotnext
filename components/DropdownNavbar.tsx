"use client";

import { useState, useRef } from "react";
import { Menu, X, Zap, ChevronDown, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

// Dropdown menu component
function DropdownMenu({
  label,
  items,
  isOpen,
  setOpen,
  isMobile = false,
  onMouseEnterTrigger,
  onMouseLeaveTrigger,
}: {
  label: string;
  items: Array<{ label: string; href: string; description?: string }>;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  isMobile?: boolean;
  onMouseEnterTrigger?: () => void;
  onMouseLeaveTrigger?: () => void;
}) {
  const content = (
    <div className={cn(
      "absolute top-full left-0 mt-2 w-64 rounded-xl bg-[#171717] border border-gray-800 shadow-xl",
      "transform origin-top transition-all duration-200",
      isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
      isMobile && "static w-full mt-1 border-none shadow-none"
    )}>
      <div className="p-2 space-y-1">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "block px-4 py-2 rounded-lg text-sm",
              "text-gray-400 hover:text-white hover:bg-[#262626]",
              "transition-colors duration-200"
            )}
          >
            <div className="font-medium">{item.label}</div>
            {item.description && (
              <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
            )}
          </a>
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm",
            "text-gray-400 hover:text-white hover:bg-[#262626]",
            "transition-colors duration-200"
          )}
        >
          <span>{label}</span>
          <ChevronDown className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )} />
        </button>
        {isOpen && content}
      </div>
    );
  }

  // Desktop hover behavior
  return (
    <div 
      className="relative group"
      onMouseEnter={onMouseEnterTrigger}
      onMouseLeave={onMouseLeaveTrigger}
    >
      <div
        className={cn(
          "flex items-center space-x-1 px-3 py-2 rounded-lg text-sm cursor-pointer",
          "text-gray-400 group-hover:text-white group-hover:bg-[#262626]",
          "transition-colors duration-200"
        )}
      >
        <span>{label}</span>
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isOpen && "transform rotate-180"
        )} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DropdownNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // Increased delay to allow hovering over dropdown content
  };

  const navigation = {
    product: {
      label: "Product",
      items: [
        { label: "Features", href: "/features", description: "Key capabilities" },
        { label: "Pricing", href: "/pricing", description: "Choose your plan" },
        { label: "Integrations", href: "/integrations", description: "Connect your tools" },
        { label: "Changelog", href: "/changelog", description: "See what's new" },
        { label: "Roadmap", href: "/roadmap", description: "Our future plans" },
        { label: "Beta Program", href: "/beta", description: "Get early access" }
      ]
    },
    resources: {
      label: "Resources",
      items: [
        { label: "Documentation", href: "/documentation", description: "API docs and guides" },
        { label: "API Reference", href: "/documentation/api", description: "Detailed API documentation" },
        { label: "Tutorials", href: "/tutorials", description: "Step-by-step guides" },
        { label: "Blog", href: "/blog", description: "Latest news and updates" },
        { label: "Community", href: "/community", description: "Join our community" },
        { label: "Help Center", href: "/help", description: "Get support" }
      ]
    },
    company: {
      label: "Company",
      items: [
        { label: "About Us", href: "/about", description: "Learn about our mission" },
        { label: "Careers", href: "/careers", description: "Join our team" },
        { label: "Contact", href: "/contact", description: "Get in touch" },
        { label: "Press Kit", href: "/press", description: "Media resources" }
      ]
    },
    legal: {
      label: "Legal",
      items: [
        { label: "Privacy Policy", href: "/privacy", description: "Your data privacy" },
        { label: "Terms of Service", href: "/terms", description: "Using our service" }
      ]
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and home link */}
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

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {Object.entries(navigation).map(([key, section]) => (
              <DropdownMenu
                key={key}
                label={section.label}
                items={section.items}
                isOpen={openDropdown === section.label}
                setOpen={(isOpen) => setOpenDropdown(isOpen ? section.label : null)}
                onMouseEnterTrigger={() => handleMouseEnter(section.label)}
                onMouseLeaveTrigger={handleMouseLeave}
              />
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#171717] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-2"
          >
            {Object.entries(navigation).map(([key, section]) => (
              <DropdownMenu
                key={key}
                label={section.label}
                items={section.items}
                isOpen={openDropdown === section.label}
                setOpen={(isOpen) => setOpenDropdown(isOpen ? section.label : null)}
                isMobile
                onMouseEnterTrigger={() => handleMouseEnter(section.label)}
                onMouseLeaveTrigger={handleMouseLeave}
              />
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
} 