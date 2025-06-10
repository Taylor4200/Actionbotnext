"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Image,
  Video,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Calendar,
  Eye,
  EyeOff,
  Upload,
  Download,
  Copy,
  MoreVertical,
  Tag,
  User,
  Clock,
} from "lucide-react";

// Mock content data
const mockContentData = {
  blogPosts: [
    {
      id: 1,
      title: "How to Automate Your Workflow with ActionBot",
      excerpt: "Learn the best practices for setting up automated workflows...",
      author: "Sarah Johnson",
      status: "published",
      publishDate: "2024-01-15",
      views: 1247,
      tags: ["automation", "workflow", "tutorial"],
      featured: true
    },
    {
      id: 2,
      title: "New Integration: Slack and Discord",
      excerpt: "We've added support for Slack and Discord integrations...",
      author: "Mike Chen",
      status: "draft",
      publishDate: "2024-01-20",
      views: 0,
      tags: ["integrations", "slack", "discord"],
      featured: false
    },
    {
      id: 3,
      title: "ActionBot vs Competitors: A Complete Comparison",
      excerpt: "See how ActionBot stacks up against other automation tools...",
      author: "David Wilson",
      status: "published",
      publishDate: "2024-01-10",
      views: 892,
      tags: ["comparison", "review", "features"],
      featured: true
    }
  ],
  pages: [
    {
      id: 1,
      title: "Homepage",
      slug: "/",
      lastModified: "2024-01-18",
      status: "published",
      type: "page"
    },
    {
      id: 2,
      title: "Features",
      slug: "/features",
      lastModified: "2024-01-15",
      status: "published",
      type: "page"
    },
    {
      id: 3,
      title: "Pricing",
      slug: "/pricing",
      lastModified: "2024-01-12",
      status: "published",
      type: "page"
    }
  ],
  media: [
    {
      id: 1,
      name: "hero-image.jpg",
      type: "image",
      size: "2.4 MB",
      uploadedBy: "Sarah Johnson",
      uploadDate: "2024-01-15",
      url: "/images/hero-image.jpg"
    },
    {
      id: 2,
      name: "product-demo.mp4",
      type: "video",
      size: "15.2 MB",
      uploadedBy: "Mike Chen",
      uploadDate: "2024-01-10",
      url: "/videos/product-demo.mp4"
    },
    {
      id: 3,
      name: "logo.svg",
      type: "image",
      size: "45 KB",
      uploadedBy: "David Wilson",
      uploadDate: "2024-01-08",
      url: "/images/logo.svg"
    }
  ]
};

// Content item component
function ContentItem({ item, type, onEdit, onDelete, onToggleStatus }: {
  item: any;
  type: "blog" | "pages" | "media";
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggleStatus?: (id: number) => void;
}) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "text-green-500";
      case "draft": return "text-yellow-500";
      case "archived": return "text-gray-500";
      default: return "text-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "published": return Eye;
      case "draft": return EyeOff;
      case "archived": return Clock;
      default: return Eye;
    }
  };

  const StatusIcon = getStatusIcon(item.status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#171717] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            {item.featured && type === "blog" && (
              <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                Featured
              </span>
            )}
          </div>
          
          {type === "blog" && (
            <p className="text-gray-400 text-sm mb-3">{item.excerpt}</p>
          )}
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{item.author || item.uploadedBy}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{item.publishDate || item.uploadDate || item.lastModified}</span>
            </div>
            {type === "blog" && (
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{item.views} views</span>
              </div>
            )}
            {type === "media" && (
              <div className="flex items-center space-x-1">
                <span>{item.size}</span>
              </div>
            )}
          </div>

          {type === "blog" && item.tags && (
            <div className="flex items-center space-x-2 mt-3">
              {item.tags.map((tag: string, index: number) => (
                <span key={index} className="px-2 py-1 bg-[#262626] text-gray-400 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2 ml-4">
          {onToggleStatus && (
            <button
              onClick={() => onToggleStatus(item.id)}
              className={`p-2 rounded-lg transition-colors ${getStatusColor(item.status)} hover:bg-[#262626]`}
              title={item.status}
            >
              <StatusIcon className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => onEdit(item.id)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#262626] transition-colors"
            title="Edit"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-[#262626] transition-colors"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState<"blog" | "pages" | "media">("blog");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const tabs = [
    { id: "blog", label: "Blog Posts", icon: FileText, count: mockContentData.blogPosts.length },
    { id: "pages", label: "Pages", icon: FileText, count: mockContentData.pages.length },
    { id: "media", label: "Media", icon: Image, count: mockContentData.media.length }
  ];

  const handleEdit = (id: number) => {
    console.log(`Edit ${activeTab} item ${id}`);
    // Implement edit functionality
  };

  const handleDelete = (id: number) => {
    console.log(`Delete ${activeTab} item ${id}`);
    // Implement delete functionality
  };

  const handleToggleStatus = (id: number) => {
    console.log(`Toggle status for ${activeTab} item ${id}`);
    // Implement status toggle functionality
  };

  const filteredContent = () => {
    let content = [];
    switch (activeTab) {
      case "blog":
        content = mockContentData.blogPosts;
        break;
      case "pages":
        content = mockContentData.pages;
        break;
      case "media":
        content = mockContentData.media;
        break;
    }

    if (searchQuery) {
      content = content.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.excerpt && item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (statusFilter !== "all") {
      content = content.filter(item => item.status === statusFilter);
    }

    return content;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Content Management</h1>
          <p className="text-gray-400 mt-1">Manage your blog posts, pages, and media files</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Create New</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-[#262626] rounded-lg p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "blog" | "pages" | "media")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-[#333333]"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filters and Search */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#262626] border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#262626] border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#262626] transition-colors">
            <Upload className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#262626] transition-colors">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content List */}
      <div className="space-y-4">
        {filteredContent().length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FileText className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No {activeTab} found</h3>
            <p className="text-gray-400 mb-4">
              {searchQuery || statusFilter !== "all" 
                ? "Try adjusting your search or filters"
                : `Get started by creating your first ${activeTab.slice(0, -1)}`
              }
            </p>
            {!searchQuery && statusFilter === "all" && (
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Create New {activeTab.slice(0, -1)}
              </button>
            )}
          </motion.div>
        ) : (
          filteredContent().map((item, index) => (
            <ContentItem
              key={item.id}
              item={item}
              type={activeTab}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggleStatus={activeTab !== "media" ? handleToggleStatus : undefined}
            />
          ))
        )}
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="bg-[#171717] rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Total Posts</p>
              <p className="text-2xl font-bold text-white">{mockContentData.blogPosts.length}</p>
            </div>
            <FileText className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-[#171717] rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Published</p>
              <p className="text-2xl font-bold text-white">
                {mockContentData.blogPosts.filter(p => p.status === "published").length}
              </p>
            </div>
            <Eye className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-[#171717] rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Drafts</p>
              <p className="text-2xl font-bold text-white">
                {mockContentData.blogPosts.filter(p => p.status === "draft").length}
              </p>
            </div>
            <EyeOff className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-[#171717] rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Media Files</p>
              <p className="text-2xl font-bold text-white">{mockContentData.media.length}</p>
            </div>
            <Image className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </motion.div>
    </div>
  );
} 