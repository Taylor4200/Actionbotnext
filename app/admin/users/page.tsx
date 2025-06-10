"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
  Mail,
  Phone,
  Calendar,
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  DollarSign,
  Zap,
  User,
  UserCheck,
  UserX,
  UserPlus,
  Download,
  Upload,
  RefreshCw,
  Settings,
  Key,
  Lock,
  Unlock,
  Ban,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  SortAsc,
  SortDesc,
} from "lucide-react";

// Mock user data
const mockUsers = [
  {
    id: 1,
    email: "john.doe@example.com",
    name: "John Doe",
    plan: "Pro",
    status: "active",
    lastActive: "2 hours ago",
    integrations: 5,
    createdAt: "2024-01-15",
    revenue: 29,
    location: "New York, NY",
    phone: "+1 (555) 123-4567"
  },
  {
    id: 2,
    email: "sarah.smith@example.com",
    name: "Sarah Smith",
    plan: "Teams",
    status: "active",
    lastActive: "1 day ago",
    integrations: 12,
    createdAt: "2024-01-10",
    revenue: 99,
    location: "San Francisco, CA",
    phone: "+1 (555) 987-6543"
  },
  {
    id: 3,
    email: "mike.johnson@example.com",
    name: "Mike Johnson",
    plan: "Free",
    status: "inactive",
    lastActive: "1 week ago",
    integrations: 2,
    createdAt: "2024-01-05",
    revenue: 0,
    location: "Chicago, IL",
    phone: "+1 (555) 456-7890"
  },
  {
    id: 4,
    email: "lisa.wang@example.com",
    name: "Lisa Wang",
    plan: "Pro",
    status: "suspended",
    lastActive: "3 days ago",
    integrations: 8,
    createdAt: "2024-01-20",
    revenue: 29,
    location: "Seattle, WA",
    phone: "+1 (555) 321-0987"
  },
  {
    id: 5,
    email: "david.brown@example.com",
    name: "David Brown",
    plan: "Teams",
    status: "active",
    lastActive: "30 minutes ago",
    integrations: 15,
    createdAt: "2024-01-12",
    revenue: 99,
    location: "Austin, TX",
    phone: "+1 (555) 654-3210"
  }
];

// User status component
function UserStatus({ status }: { status: string }) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "active":
        return { color: "bg-green-500", text: "text-green-500", icon: CheckCircle };
      case "inactive":
        return { color: "bg-gray-500", text: "text-gray-500", icon: Clock };
      case "suspended":
        return { color: "bg-red-500", text: "text-red-500", icon: XCircle };
      default:
        return { color: "bg-gray-500", text: "text-gray-500", icon: AlertTriangle };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  return (
    <div className={`flex items-center space-x-2 ${config.text}`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium capitalize">{status}</span>
    </div>
  );
}

// Plan badge component
function PlanBadge({ plan }: { plan: string }) {
  const getPlanConfig = (plan: string) => {
    switch (plan) {
      case "Pro":
        return { color: "bg-purple-500/20 text-purple-400 border-purple-500/30" };
      case "Teams":
        return { color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" };
      case "Free":
        return { color: "bg-gray-500/20 text-gray-400 border-gray-500/30" };
      default:
        return { color: "bg-gray-500/20 text-gray-400 border-gray-500/30" };
    }
  };

  const config = getPlanConfig(plan);

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${config.color}`}>
      {plan}
    </span>
  );
}

export default function UsersPage() {
  const [users, setUsers] = useState(mockUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [planFilter, setPlanFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort users
  const filteredUsers = users
    .filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "all" || user.status === statusFilter;
      const matchesPlan = planFilter === "all" || user.plan === planFilter;
      return matchesSearch && matchesStatus && matchesPlan;
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

  const handleSelectUser = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">User Management</h1>
          <p className="text-gray-400 mt-1">Manage your ActionBot users and subscriptions</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add User</span>
          </button>
          <button className="bg-[#262626] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
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
                placeholder="Search users by name or email..."
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
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Plan</label>
                <select
                  value={planFilter}
                  onChange={(e) => setPlanFilter(e.target.value)}
                  className="w-full bg-[#262626] border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <option value="all">All Plans</option>
                  <option value="Free">Free</option>
                  <option value="Pro">Pro</option>
                  <option value="Teams">Teams</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setStatusFilter("all");
                    setPlanFilter("all");
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

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400">
          Showing {filteredUsers.length} of {users.length} users
        </p>
        {selectedUsers.length > 0 && (
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">
              {selectedUsers.length} selected
            </span>
            <button className="text-red-400 hover:text-red-300 text-sm">
              Delete Selected
            </button>
            <button className="text-blue-400 hover:text-blue-300 text-sm">
              Export Selected
            </button>
          </div>
        )}
      </div>

      {/* Users Table */}
      <div className="bg-[#171717] rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#1a1a1a] border-b border-gray-800">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-600 bg-[#262626] text-purple-600 focus:ring-purple-500"
                  />
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-300"
                  onClick={() => handleSort("name")}
                >
                  <div className="flex items-center space-x-1">
                    <span>User</span>
                    {sortBy === "name" && (
                      sortOrder === "asc" ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />
                    )}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-300"
                  onClick={() => handleSort("plan")}
                >
                  <div className="flex items-center space-x-1">
                    <span>Plan</span>
                    {sortBy === "plan" && (
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
                  onClick={() => handleSort("revenue")}
                >
                  <div className="flex items-center space-x-1">
                    <span>Revenue</span>
                    {sortBy === "revenue" && (
                      sortOrder === "asc" ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />
                    )}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-300"
                  onClick={() => handleSort("lastActive")}
                >
                  <div className="flex items-center space-x-1">
                    <span>Last Active</span>
                    {sortBy === "lastActive" && (
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
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-[#1a1a1a] transition-colors">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                      className="rounded border-gray-600 bg-[#262626] text-purple-600 focus:ring-purple-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{user.name}</div>
                        <div className="text-sm text-gray-400">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <PlanBadge plan={user.plan} />
                  </td>
                  <td className="px-6 py-4">
                    <UserStatus status={user.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-white">
                      ${user.revenue}/month
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-400">{user.lastActive}</div>
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
          Showing 1 to {filteredUsers.length} of {users.length} results
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