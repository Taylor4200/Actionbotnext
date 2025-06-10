"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  BarChart3,
  Link as LinkIcon,
  FileText,
  Shield,
  Bell,
  Search,
  Menu,
  X,
  User,
  ChevronDown,
  Plus,
  Download,
  Upload,
} from "lucide-react";

// Admin navigation items
const adminNavItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
    description: "Overview and analytics"
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
    description: "User management"
  },
  {
    title: "Billing",
    href: "/admin/billing",
    icon: CreditCard,
    description: "Subscriptions and payments"
  },
  {
    title: "Integrations",
    href: "/admin/integrations",
    icon: LinkIcon,
    description: "Integration management"
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
    description: "Advanced analytics"
  },
  {
    title: "Content",
    href: "/admin/content",
    icon: FileText,
    description: "Content management"
  },
  {
    title: "System",
    href: "/admin/system",
    icon: Settings,
    description: "System administration"
  },
  {
    title: "Security",
    href: "/admin/security",
    icon: Shield,
    description: "Security and compliance"
  }
];

// Mock data for notifications
const notifications = [
  { id: 1, type: "warning", message: "High CPU usage detected", time: "2 min ago" },
  { id: 2, type: "info", message: "New user registration", time: "5 min ago" },
  { id: 3, type: "success", message: "Integration sync completed", time: "10 min ago" },
  { id: 4, type: "error", message: "Payment failed for user #1234", time: "15 min ago" }
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
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

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#171717] border-b border-gray-800">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#262626] transition-colors"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-600 flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-semibold text-lg">ActionBot Admin</span>
            </div>
          </div>

          {/* Center section - Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users, integrations, or settings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#262626] border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#262626] transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  4
                </span>
              </button>

              {/* Notifications dropdown */}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-2 w-80 bg-[#171717] border border-gray-800 rounded-xl shadow-xl z-50"
                  >
                    <div className="p-4">
                      <h3 className="text-sm font-semibold mb-3">Notifications</h3>
                      <div className="space-y-3">
                        {notifications.map((notification) => (
                          <div key={notification.id} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-[#262626] transition-colors">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              notification.type === 'error' ? 'bg-red-500' :
                              notification.type === 'warning' ? 'bg-yellow-500' :
                              notification.type === 'success' ? 'bg-green-500' :
                              'bg-blue-500'
                            }`} />
                            <div className="flex-1">
                              <p className="text-sm text-gray-300">{notification.message}</p>
                              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Admin profile */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-400">Super Admin</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed left-0 top-16 h-full bg-[#171717] border-r border-gray-800 transition-all duration-300 z-40 ${
        isSidebarOpen ? 'w-64' : 'w-16'
      }`}>
        <div className="p-4">
          <nav className="space-y-2">
            {adminNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 group ${
                    isActive(item.href)
                      ? 'bg-purple-600/20 text-purple-400 border border-purple-600/30'
                      : 'text-gray-400 hover:text-white hover:bg-[#262626]'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {isSidebarOpen && (
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.title}</p>
                      <p className="text-xs text-gray-500 truncate">{item.description}</p>
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions */}
          {isSidebarOpen && (
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#262626] transition-colors">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm">Add User</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#262626] transition-colors">
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">Import Data</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#262626] transition-colors">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">Export Report</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <div className="pt-16 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
} 