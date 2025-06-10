"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Server,
  Cpu,
  HardDrive,
  Activity,
  Wifi,
  Database,
  Settings,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Zap,
  Shield,
  Globe,
  Users,
  BarChart3,
  Download,
  Upload,
  Save,
  Trash2,
  Plus,
  Edit,
} from "lucide-react";

// Mock system data
const mockSystemData = {
  serverStatus: {
    cpu: { usage: 45, cores: 8, temperature: 65 },
    memory: { used: 62, total: 128, available: 48 },
    disk: { used: 78, total: 1000, available: 220 },
    network: { in: 23, out: 15, connections: 156 }
  },
  services: [
    { name: "API Server", status: "healthy", uptime: "15d 8h 32m", response: 45 },
    { name: "Database", status: "healthy", uptime: "15d 8h 32m", response: 12 },
    { name: "Redis Cache", status: "warning", uptime: "2d 14h 8m", response: 8 },
    { name: "Email Service", status: "healthy", uptime: "15d 8h 32m", response: 120 },
    { name: "File Storage", status: "healthy", uptime: "15d 8h 32m", response: 89 },
    { name: "Analytics", status: "error", uptime: "0h 15m", response: 2500 }
  ],
  logs: [
    { id: 1, level: "error", message: "Database connection timeout", timestamp: "2024-01-20 14:32:15", service: "Database" },
    { id: 2, level: "warning", message: "High memory usage detected", timestamp: "2024-01-20 14:30:22", service: "System" },
    { id: 3, level: "info", message: "Backup completed successfully", timestamp: "2024-01-20 14:28:45", service: "Backup" },
    { id: 4, level: "error", message: "API rate limit exceeded", timestamp: "2024-01-20 14:25:18", service: "API" },
    { id: 5, level: "info", message: "New user registration", timestamp: "2024-01-20 14:22:33", service: "Auth" }
  ],
  configurations: [
    { name: "Database", lastModified: "2024-01-18", status: "active", type: "config" },
    { name: "API Settings", lastModified: "2024-01-17", status: "active", type: "config" },
    { name: "Email Configuration", lastModified: "2024-01-16", status: "active", type: "config" },
    { name: "Security Policies", lastModified: "2024-01-15", status: "active", type: "config" }
  ]
};

// System metric component
function SystemMetric({ title, value, unit, icon: Icon, color = "blue", trend = null }: {
  title: string;
  value: number;
  unit: string;
  icon: any;
  color?: string;
  trend?: { value: number; isPositive: boolean } | null;
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
          <p className="text-2xl font-bold text-white">{value}{unit}</p>
          {trend && (
            <div className="flex items-center mt-2">
              <span className={`text-sm ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {trend.isPositive ? '+' : ''}{trend.value}%
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

// Service status component
function ServiceStatus({ service }: { service: any }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy": return "text-green-500";
      case "warning": return "text-yellow-500";
      case "error": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "healthy": return CheckCircle;
      case "warning": return AlertTriangle;
      case "error": return XCircle;
      default: return Clock;
    }
  };

  const StatusIcon = getStatusIcon(service.status);

  return (
    <div className="flex items-center justify-between p-4 bg-[#262626] rounded-lg">
      <div className="flex items-center space-x-3">
        <StatusIcon className={`w-5 h-5 ${getStatusColor(service.status)}`} />
        <div>
          <h4 className="text-white font-medium">{service.name}</h4>
          <p className="text-sm text-gray-400">Uptime: {service.uptime}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-white font-medium">{service.response}ms</p>
        <p className="text-sm text-gray-400">Response</p>
      </div>
    </div>
  );
}

// Log entry component
function LogEntry({ log }: { log: any }) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "error": return "text-red-500 bg-red-500/10";
      case "warning": return "text-yellow-500 bg-yellow-500/10";
      case "info": return "text-blue-500 bg-blue-500/10";
      default: return "text-gray-500 bg-gray-500/10";
    }
  };

  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-[#262626] rounded-lg transition-colors">
      <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(log.level)}`}>
        {log.level.toUpperCase()}
      </span>
      <div className="flex-1">
        <p className="text-sm text-gray-300">{log.message}</p>
        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
          <span>{log.timestamp}</span>
          <span>{log.service}</span>
        </div>
      </div>
    </div>
  );
}

export default function SystemPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "services" | "logs" | "config">("overview");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "services", label: "Services", icon: Server },
    { id: "logs", label: "Logs", icon: Activity },
    { id: "config", label: "Configuration", icon: Settings }
  ];

  const refreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(refreshData, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">System Administration</h1>
          <p className="text-gray-400 mt-1">Monitor and manage your system infrastructure</p>
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="rounded border-gray-600 bg-[#262626] text-purple-600 focus:ring-purple-500"
            />
            <span className="text-gray-400">Auto-refresh</span>
          </label>
          <button
            onClick={refreshData}
            disabled={isRefreshing}
            className="bg-[#262626] hover:bg-[#333333] text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-[#262626] rounded-lg p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-[#333333]"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content based on active tab */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* System Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SystemMetric
              title="CPU Usage"
              value={mockSystemData.serverStatus.cpu.usage}
              unit="%"
              icon={Cpu}
              color="blue"
              trend={{ value: 2.1, isPositive: false }}
            />
            <SystemMetric
              title="Memory Usage"
              value={mockSystemData.serverStatus.memory.used}
              unit="GB"
              icon={HardDrive}
              color="green"
              trend={{ value: 1.5, isPositive: false }}
            />
            <SystemMetric
              title="Disk Usage"
              value={mockSystemData.serverStatus.disk.used}
              unit="GB"
              icon={Activity}
              color="purple"
              trend={{ value: 0.8, isPositive: false }}
            />
            <SystemMetric
              title="Network"
              value={mockSystemData.serverStatus.network.connections}
              unit=" connections"
              icon={Wifi}
              color="indigo"
              trend={{ value: 5.2, isPositive: true }}
            />
          </div>

          {/* System Health */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#171717] rounded-xl p-6 border border-gray-800"
          >
            <h3 className="text-lg font-semibold text-white mb-4">System Health</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">CPU Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cores:</span>
                    <span className="text-white">{mockSystemData.serverStatus.cpu.cores}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Temperature:</span>
                    <span className="text-white">{mockSystemData.serverStatus.cpu.temperature}°C</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Memory Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total:</span>
                    <span className="text-white">{mockSystemData.serverStatus.memory.total}GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Available:</span>
                    <span className="text-white">{mockSystemData.serverStatus.memory.available}GB</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {activeTab === "services" && (
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#171717] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Service Status</h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">
                  {mockSystemData.services.filter(s => s.status === "healthy").length} of {mockSystemData.services.length} healthy
                </span>
              </div>
            </div>
            <div className="space-y-3">
              {mockSystemData.services.map((service, index) => (
                <ServiceStatus key={index} service={service} />
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {activeTab === "logs" && (
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#171717] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">System Logs</h3>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#262626] transition-colors">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#262626] transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {mockSystemData.logs.map((log) => (
                <LogEntry key={log.id} log={log} />
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {activeTab === "config" && (
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#171717] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Configuration Files</h3>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>New Config</span>
              </button>
            </div>
            <div className="space-y-3">
              {mockSystemData.configurations.map((config, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#262626] rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-purple-500" />
                    <div>
                      <h4 className="text-white font-medium">{config.name}</h4>
                      <p className="text-sm text-gray-400">Last modified: {config.lastModified}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      {config.status}
                    </span>
                    <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#333333] transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#333333] transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
} 