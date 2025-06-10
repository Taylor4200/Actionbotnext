"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Activity,
  Calendar,
  Download,
  Filter,
  RefreshCw,
} from "lucide-react";

// Mock analytics data
const mockAnalyticsData = {
  userGrowth: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    data: [120, 180, 250, 320, 450, 580],
    growth: 23.4
  },
  revenue: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    data: [8500, 12000, 18000, 22000, 28000, 35000],
    growth: 18.7
  },
  engagement: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [65, 72, 68, 74, 80, 85, 78],
    avg: 74.6
  },
  topFeatures: [
    { name: "AI Chat", usage: 45, growth: 12.3 },
    { name: "Integrations", usage: 38, growth: 8.7 },
    { name: "Automation", usage: 32, growth: 15.2 },
    { name: "Analytics", usage: 28, growth: 6.4 },
    { name: "Templates", usage: 22, growth: 9.1 }
  ],
  userSegments: [
    { segment: "Free Users", count: 892, percentage: 65 },
    { segment: "Pro Users", count: 234, percentage: 17 },
    { segment: "Teams", count: 89, percentage: 6 },
    { segment: "Enterprise", count: 32, percentage: 2 },
    { segment: "Inactive", count: 120, percentage: 10 }
  ],
  geographicData: [
    { country: "United States", users: 456, revenue: 28000 },
    { country: "United Kingdom", users: 234, revenue: 15000 },
    { country: "Canada", users: 189, revenue: 12000 },
    { country: "Germany", users: 156, revenue: 9800 },
    { country: "Australia", users: 134, revenue: 8500 }
  ]
};

// Chart component placeholder (you can integrate with Chart.js, Recharts, etc.)
function ChartPlaceholder({ title, data, type = "line" }: {
  title: string;
  data: any;
  type?: "line" | "bar" | "pie";
}) {
  return (
    <div className="bg-[#171717] rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#262626] transition-colors">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="h-64 bg-[#262626] rounded-lg flex items-center justify-center">
        <div className="text-center">
          <BarChart3 className="w-12 h-12 text-gray-500 mx-auto mb-2" />
          <p className="text-gray-400 text-sm">Chart visualization would go here</p>
          <p className="text-gray-500 text-xs mt-1">Data: {JSON.stringify(data).slice(0, 50)}...</p>
        </div>
      </div>
    </div>
  );
}

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

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d");
  const [isLoading, setIsLoading] = useState(false);

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Analytics</h1>
          <p className="text-gray-400 mt-1">Advanced analytics and insights for your platform</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-[#262626] border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button
            onClick={refreshData}
            disabled={isLoading}
            className="bg-[#262626] hover:bg-[#333333] text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Users"
          value={mockAnalyticsData.userGrowth.data[mockAnalyticsData.userGrowth.data.length - 1].toLocaleString()}
          change={{ value: mockAnalyticsData.userGrowth.growth, isPositive: true }}
          icon={Users}
          color="blue"
        />
        <MetricCard
          title="Monthly Revenue"
          value={`$${mockAnalyticsData.revenue.data[mockAnalyticsData.revenue.data.length - 1].toLocaleString()}`}
          change={{ value: mockAnalyticsData.revenue.growth, isPositive: true }}
          icon={DollarSign}
          color="green"
        />
        <MetricCard
          title="Avg. Engagement"
          value={`${mockAnalyticsData.engagement.avg}%`}
          change={{ value: 5.2, isPositive: true }}
          icon={Activity}
          color="purple"
        />
        <MetricCard
          title="Active Sessions"
          value="1,247"
          change={{ value: -2.1, isPositive: false }}
          icon={BarChart3}
          color="indigo"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartPlaceholder
          title="User Growth"
          data={mockAnalyticsData.userGrowth}
          type="line"
        />
        <ChartPlaceholder
          title="Revenue Trends"
          data={mockAnalyticsData.revenue}
          type="line"
        />
        <ChartPlaceholder
          title="Weekly Engagement"
          data={mockAnalyticsData.engagement}
          type="bar"
        />
        <ChartPlaceholder
          title="User Segments"
          data={mockAnalyticsData.userSegments}
          type="pie"
        />
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Features Usage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#171717] rounded-xl p-6 border border-gray-800"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Top Features Usage</h3>
          <div className="space-y-4">
            {mockAnalyticsData.topFeatures.map((feature, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-gray-300">{feature.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-white font-medium">{feature.usage}%</span>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-500 text-sm">{feature.growth}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#171717] rounded-xl p-6 border border-gray-800"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Geographic Distribution</h3>
          <div className="space-y-4">
            {mockAnalyticsData.geographicData.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-gray-300">{country.country}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-white font-medium">{country.users}</span>
                  <span className="text-gray-400 text-sm">${country.revenue.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Real-time Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-[#171717] rounded-xl p-6 border border-gray-800"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Real-time Activity</h3>
          <div className="flex items-center space-x-2 text-green-500">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm">Live</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-[#262626] rounded-lg">
            <p className="text-2xl font-bold text-white">23</p>
            <p className="text-gray-400 text-sm">Active Sessions</p>
          </div>
          <div className="p-4 bg-[#262626] rounded-lg">
            <p className="text-2xl font-bold text-white">8</p>
            <p className="text-gray-400 text-sm">New Users Today</p>
          </div>
          <div className="p-4 bg-[#262626] rounded-lg">
            <p className="text-2xl font-bold text-white">156</p>
            <p className="text-gray-400 text-sm">API Calls/min</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 