"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  Link as LinkIcon,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Navigation items
const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Integrations",
    href: "/integrations",
    icon: LinkIcon,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Handle responsive sidebar
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSidebarOpen(window.innerWidth >= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0f0f0f]/70 border-t border-gray-800">
        <nav className="flex justify-around items-center h-16 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors",
                  isActive
                    ? "text-purple-400"
                    : "text-gray-400 hover:text-gray-200"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className={cn(
              "fixed top-0 left-0 z-40 h-screen w-64 bg-[#171717] border-r border-gray-800",
              "backdrop-blur-md bg-[#171717]/70",
              isMobile ? "w-full" : ""
            )}
          >
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <Link href="/dashboard" className="flex items-center gap-2">
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    ActionBot
                  </span>
                </Link>
                {!isMobile && (
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Sidebar Navigation */}
              <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                        isActive
                          ? "bg-purple-500/10 text-purple-400"
                          : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Sidebar Footer */}
              <div className="p-4 border-t border-gray-800">
                <div className="flex items-center gap-3 px-3 py-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-sm font-medium">U</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">User Name</p>
                    <p className="text-xs text-gray-400 truncate">user@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main
        className={cn(
          "transition-all duration-300",
          isSidebarOpen ? "md:ml-64" : "md:ml-0",
          "min-h-screen pt-16 md:pt-0 pb-16 md:pb-0"
        )}
      >
        {/* Sidebar Toggle Button (Desktop) */}
        {!isSidebarOpen && !isMobile && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed top-4 left-4 z-30 p-2 rounded-lg bg-[#171717] border border-gray-800 hover:bg-gray-800 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        {/* Mobile Header */}
        {isMobile && (
          <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#171717]/70 border-b border-gray-800">
            <div className="flex items-center justify-between h-16 px-4">
              <Link href="/dashboard" className="flex items-center gap-2">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  ActionBot
                </span>
              </Link>
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                {isSidebarOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </header>
        )}

        {/* Page Content */}
        <div className="container mx-auto px-4 py-6">
          {children}
        </div>
      </main>
    </div>
  );
} 