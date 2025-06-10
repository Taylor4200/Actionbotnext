"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Search,
  Filter,
  Plus,
  Edit,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  BarChart3,
  PieChart,
  LineChart,
  RefreshCw,
  Settings,
  Eye,
  Trash2,
  ChevronDown,
  ChevronUp,
  SortAsc,
  SortDesc,
  Activity,
  Server,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

// Mock integrations data
const mockIntegrations = [
  {
    id: 1,
    name: "Gmail",
    category: "Communication",
    status: "healthy",
    users: 234,
    uptime: 99.9,
    lastSync: "2 minutes ago",
    apiCalls: 15420,
    errors: 0,
    responseTime: 120,
    icon: "📧"
  },
  {
    id: 2,
    name: "Slack",
    category: "Communication",
    status: "healthy",
    users: 189,
    uptime: 99.8,
    lastSync: "5 minutes ago",
    apiCalls: 12340,
    errors: 2,
    responseTime: 95,
    icon: "💬"
  },
  {
    id: 3,
    name: "Trello",
    category: "Productivity",
    status: "warning",
    users: 156,
    uptime: 98.5,
    lastSync: "15 minutes ago",
    apiCalls: 8900,
    errors: 15,
    responseTime: 250,
    icon: "📋"
  },
  {
    id: 4,
    name: "GitHub",
    category: "Development",
    status: "healthy",
    users: 134,
    uptime: 99.9,
    lastSync: "1 minute ago",
    apiCalls: 21000,
    errors: 0,
    responseTime: 85,
    icon: "🐙"
  },
  {
    id: 5,
    name: "Notion",
    category: "Productivity",
    status: "error",
    users: 98,
    uptime: 95.2,
    lastSync: "1 hour ago",
    apiCalls: 5600,
    errors: 45,
    responseTime: 500,
    icon: "📝"
  },
  {
    id: 6,
    name: "Google Calendar",
    category: "Productivity",
    status: "healthy",
    users: 167,
    uptime: 99.7,
    lastSync: "3 minutes ago",
    apiCalls: 18700,
    errors: 1,
    responseTime: 110,
    icon: "📅"
  }
];

// Integration status component
function IntegrationStatus({ status }: { status: string }) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "healthy":
        return { color: "text-green-500", icon: CheckCircle, bg: "bg-green-500/20" };
      case "warning":
        return { color: "text-yellow-500", icon: AlertTriangle, bg: "bg-yellow-500/20" };
      case "error":
        return { color: "text-red-500", icon: XCircle, bg: "bg-red-500/20" };
      case "offline":
        return { color: "text-gray-500", icon: Clock, bg: "bg-gray-500/20" };
      default:
        return { color: "text-gray-500", icon: AlertTriangle, bg: "bg-gray-500/20" };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  return (
    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${config.bg} ${config.color}`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium capitalize">{status}</span>
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

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState(mockIntegrations);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort integrations
  const filteredIntegrations = integrations
    .filter(integration => {
      const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           integration.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "all" || integration.status === statusFilter;
      const matchesCategory = categoryFilter === "all" || integration.category === categoryFilter;
      return matchesSearch && matchesStatus && matchesCategory;
    })
    .sort((a, b) => {
      let aValue: any = a[sortBy as keyof typeof a];
      let bValue: any = b[sortBy as keyof typeof b];
      
      if (typeof aValue === "string" && typeof bValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  // Calculate summary metrics
  const totalIntegrations = integrations.length;
  const healthyIntegrations = integrations.filter(i => i.status === "healthy").length;
  const totalUsers = integrations.reduce((sum, i) => sum + i.users, 0);
  const averageUptime = integrations.reduce((sum, i) => sum + i.uptime, 0) / integrations.length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Integration Management</h1>
          <p className="text-gray-400 mt-1">Monitor and manage all platform integrations</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Integration</span>
          </button>
          <button className="bg-[#262626] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh All</span>
          </button>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Integrations"
          value={totalIntegrations}
          change={{ value: 5.2, isPositive: true }}
          icon={Zap}
          color="purple"
        />
        <MetricCard
          title="Healthy Integrations"
          value={`${healthyIntegrations}/${totalIntegrations}`}
          change={{ value: 2.1, isPositive: true }}
          icon={CheckCircle}
          color="green"
        />
        <MetricCard
          title="Total Users"
          value={totalUsers.toLocaleString()}
          change={{ value: 8.7, isPositive: true }}
          icon={Activity}
          color="blue"
        />
        <MetricCard
          title="Average Uptime"
          value={`${averageUptime.toFixed(1)}%`}
          change={{ value: 0.3, isPositive: true }}
          icon={Server}
          color="indigo"
        />
      </div>

      {/* Integration Health Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Health Status Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#171717] rounded-xl p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Integration Health</h3>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#262626]">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-white">Healthy</span>
              </div>
              <span className="text-sm text-gray-400">{healthyIntegrations}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#262626]">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-sm text-white">Warning</span>
              </div>
              <span className="text-sm text-gray-400">
                {integrations.filter(i => i.status === "warning").length}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#262626]">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-sm text-white">Error</span>
              </div>
              <span className="text-sm text-gray-400">
                {integrations.filter(i => i.status === "error").length}
              </span>
            </div>
          </div>
        </motion.div>

        {/* API Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#171717] rounded-xl p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">API Performance</h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <LineChart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Chart placeholder</p>
              <p className="text-sm text-gray-500">Response times and error rates</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Search and Filters */}
      <div className="bg-[#171717] rounded-xl p-6 border border-gray-800">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search integrations by name or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#262626] border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-[#262626] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-gray-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full bg-[#262626] border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <option value="all">All Statuses</option>
                  <option value="healthy">Healthy</option>
                  <option value="warning">Warning</option>
                  <option value="error">Error</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full bg-[#262626] border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <option value="all">All Categories</option>
                  <option value="Communication">Communication</option>
                  <option value="Productivity">Productivity</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setStatusFilter("all");
                    setCategoryFilter("all");
                  }}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Integrations Table */}
      <div className="bg-[#171717] rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#1a1a1a] border-b border-gray-800">
              <tr>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-300"
                  onClick={() => handleSort("name")}
                >
                  <div className="flex items-center space-x-1">
                    <span>Integration</span>
                    {sortBy === "name" && (
                      sortOrder === "asc" ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />
                    )}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-300"
                  onClick={() => handleSort("category")}
                >
                  <div className="flex items-center space-x-1">
                    <span>Category</span>
                    {sortBy === "category" && (
                      sortOrder === "asc" ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />
                    )}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-300"
                  onClick={() => handleSort("status")}
                >
                  <div className="flex items-center space-x-1">
                    <span>Status</span>
                    {sortBy === "status" && (
                      sortOrder === "asc" ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />
                    )}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-300"
                  onClick={() => handleSort("users")}
                >
                  <div className="flex items-center space-x-1">
                    <span>Users</span>
                    {sortBy === "users" && (
                      sortOrder === "asc" ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />
                    )}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-300"
                  onClick={() => handleSort("uptime")}
                >
                  <div className="flex items-center space-x-1">
                    <span>Uptime</span>
                    {sortBy === "uptime" && (
                      sortOrder === "asc" ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />
                    )}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-300"
                  onClick={() => handleSort("responseTime")}
                >
                  <div className="flex items-center space-x-1">
                    <span>Response Time</span>
                    {sortBy === "responseTime" && (
                      sortOrder === "asc" ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />
                    )}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredIntegrations.map((integration) => (
                <tr key={integration.id} className="hover:bg-[#1a1a1a] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-[#262626] flex items-center justify-center text-xl">
                        {integration.icon}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{integration.name}</div>
                        <div className="text-sm text-gray-400">Last sync: {integration.lastSync}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-400">{integration.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <IntegrationStatus status={integration.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-white">{integration.users.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-white">{integration.uptime}%</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-white">{integration.responseTime}ms</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 rounded hover:bg-[#262626] transition-colors" title="View">
                        <Eye className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 rounded hover:bg-[#262626] transition-colors" title="Edit">
                        <Edit className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 rounded hover:bg-[#262626] transition-colors" title="More">
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">
          Showing 1 to {filteredIntegrations.length} of {integrations.length} results
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded border border-gray-700 text-gray-400 hover:bg-[#262626] transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 rounded bg-purple-600 text-white">
            1
          </button>
          <button className="px-3 py-1 rounded border border-gray-700 text-gray-400 hover:bg-[#262626] transition-colors">
            2
          </button>
          <button className="px-3 py-1 rounded border border-gray-700 text-gray-400 hover:bg-[#262626] transition-colors">
            3
          </button>
          <button className="px-3 py-1 rounded border border-gray-700 text-gray-400 hover:bg-[#262626] transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
} 