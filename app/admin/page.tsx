"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  CreditCard,
  TrendingUp,
  TrendingDown,
  Activity,
  DollarSign,
  Server,
  BarChart3,
  PieChart,
  LineChart,
  Zap,
  MessageSquare,
  Download,
} from "lucide-react";

// Mock data for the dashboard
const mockData = {
  overview: {
    totalUsers: 1247,
    activeUsers: 892,
    totalRevenue: 45678,
    monthlyGrowth: 12.5,
    integrations: 156,
    activeIntegrations: 89,
    systemHealth: 99.8,
    uptime: 99.99
  },
  recentActivity: [
    { id: 1, type: "user_signup", user: "john@example.com", time: "2 min ago", status: "success" },
    { id: 2, type: "payment_failed", user: "sarah@example.com", time: "5 min ago", status: "error" },
    { id: 3, type: "integration_added", user: "mike@example.com", time: "10 min ago", status: "success" },
    { id: 4, type: "plan_upgrade", user: "lisa@example.com", time: "15 min ago", status: "success" },
    { id: 5, type: "support_ticket", user: "david@example.com", time: "20 min ago", status: "warning" }
  ],
  systemMetrics: {
    cpu: 45,
    memory: 62,
    disk: 78,
    network: 23
  },
  topIntegrations: [
    { name: "Gmail", users: 234, status: "healthy" },
    { name: "Slack", users: 189, status: "healthy" },
    { name: "Trello", users: 156, status: "warning" },
    { name: "GitHub", users: 134, status: "healthy" },
    { name: "Notion", users: 98, status: "error" }
  ]
};

// Metric card component
function MetricCard({ title, value, change, icon: Icon, color = "purple" }: {
  title: string;
  value: string | number;
  change?: { value: number; isPositive: boolean };
  icon: any;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
          {change && (
            <div className="flex items-center mt-2">
              {change.isPositive ? (
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm ${change.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {change.value}%
              </span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 rounded-lg bg-${color}-500/20 flex items-center justify-center`}>
          <Icon className={`w-6 h-6 text-${color}-400`} />
        </div>
      </div>
    </motion.div>
  );
}

// Activity item component
function ActivityItem({ activity }: { activity: any }) {
  const getIcon = (type: string) => {
    switch (type) {
      case "user_signup": return Users;
      case "payment_failed": return CreditCard;
      case "integration_added": return Zap;
      case "plan_upgrade": return TrendingUp;
      case "support_ticket": return MessageSquare;
      default: return Activity;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "text-green-500";
      case "error": return "text-red-500";
      case "warning": return "text-yellow-500";
      default: return "text-gray-500";
    }
  };

  const Icon = getIcon(activity.type);

  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#262626] transition-colors">
      <div className="w-8 h-8 rounded-lg bg-[#262626] flex items-center justify-center">
        <Icon className="w-4 h-4 text-gray-400" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-300">{activity.user}</p>
        <p className="text-xs text-gray-500">{activity.time}</p>
      </div>
      <div className={`w-2 h-2 rounded-full ${getStatusColor(activity.status)}`} />
    </div>
  );
}

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("7d");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-400 mt-1">Monitor your ActionBot platform performance</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-[#262626] border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Users"
          value={mockData.overview.totalUsers.toLocaleString()}
          change={{ value: 8.2, isPositive: true }}
          icon={Users}
          color="blue"
        />
        <MetricCard
          title="Active Users"
          value={mockData.overview.activeUsers.toLocaleString()}
          change={{ value: 12.5, isPositive: true }}
          icon={Activity}
          color="green"
        />
        <MetricCard
          title="Monthly Revenue"
          value={`$${mockData.overview.totalRevenue.toLocaleString()}`}
          change={{ value: 15.3, isPositive: true }}
          icon={DollarSign}
          color="purple"
        />
        <MetricCard
          title="System Uptime"
          value={`${mockData.overview.uptime}%`}
          change={{ value: 0.1, isPositive: true }}
          icon={Server}
          color="indigo"
        />
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#171717] rounded-xl p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">User Growth</h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <LineChart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Chart placeholder</p>
              <p className="text-sm text-gray-500">User growth over time</p>
            </div>
          </div>
        </motion.div>

        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#171717] rounded-xl p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Revenue Trends</h3>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <PieChart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Chart placeholder</p>
              <p className="text-sm text-gray-500">Revenue breakdown</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* System Health and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Health */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#171717] rounded-xl p-6 border border-gray-800"
        >
          <h3 className="text-lg font-semibold text-white mb-6">System Health</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">CPU Usage</span>
              <span className="text-white">{mockData.systemMetrics.cpu}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${mockData.systemMetrics.cpu}%` }}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Memory Usage</span>
              <span className="text-white">{mockData.systemMetrics.memory}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${mockData.systemMetrics.memory}%` }}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Disk Usage</span>
              <span className="text-white">{mockData.systemMetrics.disk}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${mockData.systemMetrics.disk}%` }}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Network</span>
              <span className="text-white">{mockData.systemMetrics.network}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${mockData.systemMetrics.network}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Top Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#171717] rounded-xl p-6 border border-gray-800"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Top Integrations</h3>
          <div className="space-y-3">
            {mockData.topIntegrations.map((integration, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#262626]">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center">
                    <Zap className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white">{integration.name}</p>
                    <p className="text-xs text-gray-500">{integration.users} users</p>
                  </div>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  integration.status === 'healthy' ? 'bg-green-500' :
                  integration.status === 'warning' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#171717] rounded-xl p-6 border border-gray-800"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-2">
            {mockData.recentActivity.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-[#171717] rounded-xl p-6 border border-gray-800"
      >
        <h3 className="text-lg font-semibold text-white mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 rounded-lg bg-[#262626] hover:bg-[#2a2a2a] transition-colors">
            <Users className="w-6 h-6 text-blue-400 mb-2" />
            <span className="text-sm text-gray-300">Add User</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg bg-[#262626] hover:bg-[#2a2a2a] transition-colors">
            <Zap className="w-6 h-6 text-purple-400 mb-2" />
            <span className="text-sm text-gray-300">New Integration</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg bg-[#262626] hover:bg-[#2a2a2a] transition-colors">
            <MessageSquare className="w-6 h-6 text-green-400 mb-2" />
            <span className="text-sm text-gray-300">Support Ticket</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg bg-[#262626] hover:bg-[#2a2a2a] transition-colors">
            <Download className="w-6 h-6 text-indigo-400 mb-2" />
            <span className="text-sm text-gray-300">Export Data</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
} 