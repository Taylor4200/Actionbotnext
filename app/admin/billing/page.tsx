"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  Calendar,
  Search,
  Filter,
  Download,
  Eye,
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
  Plus,
  Settings,
  Receipt,
  Wallet,
  Banknote,
  Coins,
  Zap,
  Shield,
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

// Mock billing data
const mockBillingData = {
  overview: {
    totalRevenue: 45678,
    monthlyGrowth: 15.3,
    activeSubscriptions: 892,
    churnRate: 2.1,
    averageRevenuePerUser: 51.2,
    totalCustomers: 1247
  },
  subscriptions: [
    {
      id: 1,
      customer: "John Doe",
      email: "john.doe@example.com",
      plan: "Pro",
      status: "active",
      amount: 29,
      billingCycle: "monthly",
      nextBilling: "2024-02-15",
      lastPayment: "2024-01-15",
      paymentMethod: "card",
      cardLast4: "4242"
    },
    {
      id: 2,
      customer: "Sarah Smith",
      email: "sarah.smith@example.com",
      plan: "Teams",
      status: "active",
      amount: 99,
      billingCycle: "monthly",
      nextBilling: "2024-02-10",
      lastPayment: "2024-01-10",
      paymentMethod: "card",
      cardLast4: "1234"
    },
    {
      id: 3,
      customer: "Mike Johnson",
      email: "mike.johnson@example.com",
      plan: "Pro",
      status: "past_due",
      amount: 29,
      billingCycle: "monthly",
      nextBilling: "2024-01-25",
      lastPayment: "2023-12-15",
      paymentMethod: "card",
      cardLast4: "5678"
    },
    {
      id: 4,
      customer: "Lisa Wang",
      email: "lisa.wang@example.com",
      plan: "Teams",
      status: "canceled",
      amount: 99,
      billingCycle: "monthly",
      nextBilling: "N/A",
      lastPayment: "2024-01-20",
      paymentMethod: "card",
      cardLast4: "9012"
    },
    {
      id: 5,
      customer: "David Brown",
      email: "david.brown@example.com",
      plan: "Pro",
      status: "active",
      amount: 29,
      billingCycle: "yearly",
      nextBilling: "2025-01-12",
      lastPayment: "2024-01-12",
      paymentMethod: "card",
      cardLast4: "3456"
    }
  ],
  revenueByPlan: [
    { plan: "Free", revenue: 0, users: 355 },
    { plan: "Pro", revenue: 25890, users: 892 },
    { plan: "Teams", revenue: 19788, users: 200 }
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

// Subscription status component
function SubscriptionStatus({ status }: { status: string }) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "active":
        return { color: "text-green-500", icon: CheckCircle };
      case "past_due":
        return { color: "text-yellow-500", icon: AlertTriangle };
      case "canceled":
        return { color: "text-red-500", icon: XCircle };
      case "trialing":
        return { color: "text-blue-500", icon: Clock };
      default:
        return { color: "text-gray-500", icon: AlertTriangle };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  return (
    <div className={`flex items-center space-x-2 ${config.color}`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium capitalize">{status.replace('_', ' ')}</span>
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

export default function BillingPage() {
  const [subscriptions, setSubscriptions] = useState(mockBillingData.subscriptions);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [planFilter, setPlanFilter] = useState("all");
  const [sortBy, setSortBy] = useState("customer");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort subscriptions
  const filteredSubscriptions = subscriptions
    .filter(sub => {
      const matchesSearch = sub.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           sub.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "all" || sub.status === statusFilter;
      const matchesPlan = planFilter === "all" || sub.plan === planFilter;
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

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Billing & Revenue</h1>
          <p className="text-gray-400 mt-1">Manage subscriptions, payments, and revenue analytics</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Subscription</span>
          </button>
          <button className="bg-[#262626] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value={`$${mockBillingData.overview.totalRevenue.toLocaleString()}`}
          change={{ value: mockBillingData.overview.monthlyGrowth, isPositive: true }}
          icon={DollarSign}
          color="green"
        />
        <MetricCard
          title="Active Subscriptions"
          value={mockBillingData.overview.activeSubscriptions.toLocaleString()}
          change={{ value: 8.2, isPositive: true }}
          icon={Users}
          color="blue"
        />
        <MetricCard
          title="Churn Rate"
          value={`${mockBillingData.overview.churnRate}%`}
          change={{ value: -0.5, isPositive: true }}
          icon={TrendingDown}
          color="red"
        />
        <MetricCard
          title="ARPU"
          value={`$${mockBillingData.overview.averageRevenuePerUser}`}
          change={{ value: 12.3, isPositive: true }}
          icon={TrendingUp}
          color="purple"
        />
      </div>

      {/* Revenue Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue by Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#171717] rounded-xl p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Revenue by Plan</h3>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {mockBillingData.revenueByPlan.map((plan, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#262626]">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <div>
                    <p className="text-sm text-white">{plan.plan}</p>
                    <p className="text-xs text-gray-400">{plan.users} users</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white">${plan.revenue.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">
                    {plan.revenue > 0 ? `${((plan.revenue / mockBillingData.overview.totalRevenue) * 100).toFixed(1)}%` : '0%'}
                  </p>
                </div>
              </div>
            ))}
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
            <LineChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Chart placeholder</p>
              <p className="text-sm text-gray-500">Monthly revenue trends</p>
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
                placeholder="Search subscriptions by customer or email..."
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
                  <option value="past_due">Past Due</option>
                  <option value="canceled">Canceled</option>
                  <option value="trialing">Trialing</option>
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

      {/* Subscriptions Table */}
      <div className="bg-[#171717] rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#1a1a1a] border-b border-gray-800">
              <tr>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-300"
                  onClick={() => handleSort("customer")}
                >
                  <div className="flex items-center space-x-1">
                    <span>Customer</span>
                    {sortBy === "customer" && (
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
                  onClick={() => handleSort("amount")}
                >
                  <div className="flex items-center space-x-1">
                    <span>Amount</span>
                    {sortBy === "amount" && (
                      sortOrder === "asc" ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />
                    )}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-300"
                  onClick={() => handleSort("nextBilling")}
                >
                  <div className="flex items-center space-x-1">
                    <span>Next Billing</span>
                    {sortBy === "nextBilling" && (
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
              {filteredSubscriptions.map((subscription) => (
                <tr key={subscription.id} className="hover:bg-[#1a1a1a] transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-white">{subscription.customer}</div>
                      <div className="text-sm text-gray-400">{subscription.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <PlanBadge plan={subscription.plan} />
                  </td>
                  <td className="px-6 py-4">
                    <SubscriptionStatus status={subscription.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-white">
                      ${subscription.amount}/{subscription.billingCycle}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-400">{subscription.nextBilling}</div>
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
          Showing 1 to {filteredSubscriptions.length} of {subscriptions.length} results
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