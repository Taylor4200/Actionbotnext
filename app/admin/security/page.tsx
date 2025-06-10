"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  Key,
  Activity,
  Clock,
  Download,
  Upload,
  Settings,
  BarChart3,
  RefreshCw,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
} from "lucide-react";

// Mock security data
const mockSecurityData = {
  threats: [
    { id: 1, type: "brute_force", severity: "high", source: "192.168.1.100", timestamp: "2024-01-20 14:32:15", status: "blocked" },
    { id: 2, type: "sql_injection", severity: "medium", source: "10.0.0.50", timestamp: "2024-01-20 14:28:22", status: "blocked" },
    { id: 3, type: "suspicious_activity", severity: "low", source: "203.0.113.25", timestamp: "2024-01-20 14:25:18", status: "monitoring" },
    { id: 4, type: "ddos_attempt", severity: "high", source: "198.51.100.75", timestamp: "2024-01-20 14:20:45", status: "blocked" },
    { id: 5, type: "unauthorized_access", severity: "medium", source: "172.16.0.10", timestamp: "2024-01-20 14:15:33", status: "investigating" }
  ],
  accessLogs: [
    { id: 1, user: "admin@actionbot.com", action: "login", ip: "192.168.1.1", timestamp: "2024-01-20 14:35:12", status: "success" },
    { id: 2, user: "user@example.com", action: "failed_login", ip: "203.0.113.25", timestamp: "2024-01-20 14:32:45", status: "failed" },
    { id: 3, user: "admin@actionbot.com", action: "config_change", ip: "192.168.1.1", timestamp: "2024-01-20 14:30:18", status: "success" },
    { id: 4, user: "user@example.com", action: "login", ip: "10.0.0.50", timestamp: "2024-01-20 14:28:33", status: "success" },
    { id: 5, user: "admin@actionbot.com", action: "user_management", ip: "192.168.1.1", timestamp: "2024-01-20 14:25:55", status: "success" }
  ],
  securityPolicies: [
    { id: 1, name: "Password Policy", status: "active", lastUpdated: "2024-01-18", type: "authentication" },
    { id: 2, name: "IP Whitelist", status: "active", lastUpdated: "2024-01-17", type: "network" },
    { id: 3, name: "Rate Limiting", status: "active", lastUpdated: "2024-01-16", type: "protection" },
    { id: 4, name: "Data Encryption", status: "active", lastUpdated: "2024-01-15", type: "encryption" },
    { id: 5, name: "Session Timeout", status: "inactive", lastUpdated: "2024-01-14", type: "session" }
  ],
  compliance: {
    gdpr: { status: "compliant", lastAudit: "2024-01-15", nextAudit: "2024-04-15" },
    soc2: { status: "compliant", lastAudit: "2024-01-10", nextAudit: "2024-07-10" },
    iso27001: { status: "in_progress", lastAudit: "2024-01-05", nextAudit: "2024-06-05" },
    hipaa: { status: "not_applicable", lastAudit: "N/A", nextAudit: "N/A" }
  }
};

// Security metric component
function SecurityMetric({ title, value, icon: Icon, color = "blue", status = "normal" }: {
  title: string;
  value: string | number;
  icon: any;
  color?: string;
  status?: "normal" | "warning" | "critical";
}) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "text-red-500";
      case "warning": return "text-yellow-500";
      default: return "text-green-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">{title}</p>
          <p className={`text-2xl font-bold ${getStatusColor(status)}`}>{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-lg bg-${color}-500/20 flex items-center justify-center`}>
          <Icon className={`w-6 h-6 text-${color}-400`} />
        </div>
      </div>
    </motion.div>
  );
}

// Threat item component
function ThreatItem({ threat }: { threat: any }) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-red-500 bg-red-500/10";
      case "medium": return "text-yellow-500 bg-yellow-500/10";
      case "low": return "text-blue-500 bg-blue-500/10";
      default: return "text-gray-500 bg-gray-500/10";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "blocked": return CheckCircle;
      case "monitoring": return AlertTriangle;
      case "investigating": return Clock;
      default: return XCircle;
    }
  };

  const StatusIcon = getStatusIcon(threat.status);

  return (
    <div className="flex items-center justify-between p-4 bg-[#262626] rounded-lg">
      <div className="flex items-center space-x-3">
        <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(threat.severity)}`}>
          {threat.severity.toUpperCase()}
        </span>
        <div>
          <h4 className="text-white font-medium">{threat.type.replace('_', ' ').toUpperCase()}</h4>
          <p className="text-sm text-gray-400">Source: {threat.source}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="text-right">
          <p className="text-sm text-gray-400">{threat.timestamp}</p>
          <div className="flex items-center space-x-1">
            <StatusIcon className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-300">{threat.status}</span>
          </div>
        </div>
        <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#333333] transition-colors">
          <Eye className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Access log component
function AccessLogItem({ log }: { log: any }) {
  const getActionColor = (action: string) => {
    switch (action) {
      case "login": return "text-green-500";
      case "failed_login": return "text-red-500";
      case "config_change": return "text-yellow-500";
      case "user_management": return "text-blue-500";
      default: return "text-gray-500";
    }
  };

  return (
    <div className="flex items-center justify-between p-3 hover:bg-[#262626] rounded-lg transition-colors">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center">
          <Users className="w-4 h-4 text-gray-400" />
        </div>
        <div>
          <p className="text-sm text-gray-300">{log.user}</p>
          <p className="text-xs text-gray-500">{log.ip}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-sm font-medium ${getActionColor(log.action)}`}>
          {log.action.replace('_', ' ').toUpperCase()}
        </p>
        <p className="text-xs text-gray-500">{log.timestamp}</p>
      </div>
    </div>
  );
}

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "threats" | "access" | "policies" | "compliance">("overview");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "threats", label: "Threats", icon: AlertTriangle },
    { id: "access", label: "Access Logs", icon: Activity },
    { id: "policies", label: "Policies", icon: Shield },
    { id: "compliance", label: "Compliance", icon: CheckCircle }
  ];

  const refreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const filteredThreats = mockSecurityData.threats.filter(threat =>
    threat.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    threat.source.includes(searchQuery)
  );

  const filteredLogs = mockSecurityData.accessLogs.filter(log =>
    log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.action.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Security Administration</h1>
          <p className="text-gray-400 mt-1">Monitor security threats and manage access controls</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={refreshData}
            disabled={isRefreshing}
            className="bg-[#262626] hover:bg-[#333333] text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
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
          {/* Security Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SecurityMetric
              title="Active Threats"
              value={mockSecurityData.threats.filter(t => t.status === "monitoring").length}
              icon={AlertTriangle}
              color="red"
              status="warning"
            />
            <SecurityMetric
              title="Blocked Attacks"
              value={mockSecurityData.threats.filter(t => t.status === "blocked").length}
              icon={Shield}
              color="green"
              status="normal"
            />
            <SecurityMetric
              title="Failed Logins"
              value={mockSecurityData.accessLogs.filter(l => l.status === "failed").length}
              icon={Lock}
              color="yellow"
              status="warning"
            />
            <SecurityMetric
              title="Active Policies"
              value={mockSecurityData.securityPolicies.filter(p => p.status === "active").length}
              icon={Key}
              color="blue"
              status="normal"
            />
          </div>

          {/* Security Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#171717] rounded-xl p-6 border border-gray-800"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Security Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Recent Threats</h4>
                <div className="space-y-2">
                  {mockSecurityData.threats.slice(0, 3).map((threat) => (
                    <div key={threat.id} className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{threat.type.replace('_', ' ')}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        threat.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                        threat.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {threat.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">System Health</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Firewall:</span>
                    <span className="text-green-500">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Encryption:</span>
                    <span className="text-green-500">Enabled</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Backup:</span>
                    <span className="text-green-500">Up to date</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Updates:</span>
                    <span className="text-yellow-500">Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {activeTab === "threats" && (
        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search threats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#262626] border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
            <select className="bg-[#262626] border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50">
              <option value="all">All Severities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#171717] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Security Threats</h3>
              <span className="text-sm text-gray-400">
                {filteredThreats.length} threats found
              </span>
            </div>
            <div className="space-y-3">
              {filteredThreats.map((threat) => (
                <ThreatItem key={threat.id} threat={threat} />
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {activeTab === "access" && (
        <div className="space-y-6">
          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search access logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#262626] border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#171717] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Access Logs</h3>
              <span className="text-sm text-gray-400">
                {filteredLogs.length} entries found
              </span>
            </div>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredLogs.map((log) => (
                <AccessLogItem key={log.id} log={log} />
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {activeTab === "policies" && (
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#171717] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Security Policies</h3>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>New Policy</span>
              </button>
            </div>
            <div className="space-y-3">
              {mockSecurityData.securityPolicies.map((policy) => (
                <div key={policy.id} className="flex items-center justify-between p-4 bg-[#262626] rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-purple-500" />
                    <div>
                      <h4 className="text-white font-medium">{policy.name}</h4>
                      <p className="text-sm text-gray-400">Type: {policy.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      policy.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {policy.status}
                    </span>
                    <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#333333] transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#333333] transition-colors">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {activeTab === "compliance" && (
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#171717] rounded-xl p-6 border border-gray-800"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Compliance Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(mockSecurityData.compliance).map(([standard, data]) => (
                <div key={standard} className="p-4 bg-[#262626] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">{standard.toUpperCase()}</h4>
                    <span className={`px-2 py-1 rounded text-xs ${
                      data.status === 'compliant' ? 'bg-green-500/20 text-green-400' :
                      data.status === 'in_progress' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {data.status.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Audit:</span>
                      <span className="text-white">{data.lastAudit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Next Audit:</span>
                      <span className="text-white">{data.nextAudit}</span>
                    </div>
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