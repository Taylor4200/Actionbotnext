"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Mail,
  MessageSquare,
  Calendar,
  FileText,
  Github,
  Slack,
  Zap,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import GlowCard from "@/components/ui/GlowCard";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  status: "connected" | "disconnected";
  glowColor: "purple" | "indigo" | "teal";
}

const integrations: Integration[] = [
  {
    id: "gmail",
    name: "Gmail",
    description: "Send and manage emails automatically",
    icon: Mail,
    status: "connected",
    glowColor: "purple",
  },
  {
    id: "discord",
    name: "Discord",
    description: "Manage Discord server and messages",
    icon: MessageSquare,
    status: "disconnected",
    glowColor: "indigo",
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    description: "Schedule and manage events",
    icon: Calendar,
    status: "disconnected",
    glowColor: "teal",
  },
  {
    id: "notion",
    name: "Notion",
    description: "Create and manage documents",
    icon: FileText,
    status: "disconnected",
    glowColor: "purple",
  },
  {
    id: "github",
    name: "GitHub",
    description: "Manage repositories and workflows",
    icon: Github,
    status: "disconnected",
    glowColor: "indigo",
  },
  {
    id: "slack",
    name: "Slack",
    description: "Send messages and manage channels",
    icon: Slack,
    status: "disconnected",
    glowColor: "teal",
  },
];

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [connectedOnly, setConnectedOnly] = useState(false);

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch = integration.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus = !connectedOnly || integration.status === "connected";
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Integrations
        </h1>
        <p className="text-gray-400">
          Connect your favorite tools and services to automate your workflow.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search integrations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#171717] border border-gray-800 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
          />
        </div>
        <GlowButton
          variant={connectedOnly ? "default" : "outline"}
          onClick={() => setConnectedOnly(!connectedOnly)}
          icon={<Zap className="w-4 h-4" />}
        >
          {connectedOnly ? "Show All" : "Connected Only"}
        </GlowButton>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredIntegrations.map((integration) => (
          <GlowCard
            key={integration.id}
            glowColor={integration.glowColor}
            className="flex flex-col"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    integration.status === "connected"
                      ? "bg-purple-500/20"
                      : "bg-gray-800"
                  }`}
                >
                  <integration.icon
                    className={`w-5 h-5 ${
                      integration.status === "connected"
                        ? "text-purple-400"
                        : "text-gray-400"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{integration.name}</h3>
                  <p className="text-sm text-gray-400">
                    {integration.description}
                  </p>
                </div>
              </div>
              {integration.status === "connected" ? (
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              ) : (
                <XCircle className="w-5 h-5 text-gray-400" />
              )}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <GlowButton
                variant={integration.status === "connected" ? "outline" : "default"}
                size="sm"
                fullWidth
                glowColor={integration.glowColor}
              >
                {integration.status === "connected"
                  ? "Disconnect"
                  : "Connect"}
              </GlowButton>
            </div>
          </GlowCard>
        ))}
      </div>

      {/* Empty State */}
      {filteredIntegrations.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No integrations found</h3>
          <p className="text-gray-400">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
} 