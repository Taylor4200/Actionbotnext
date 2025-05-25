"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User as UserIcon,
  Key,
  Bell,
  Moon,
  Sun,
  Trash2,
  Eye,
  EyeOff,
  Copy,
  CheckCircle2,
} from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import GlowCard from "@/components/ui/GlowCard";

export default function SettingsPage() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [copied, setCopied] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    updates: false,
  });

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText("sk_test_123456789");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-gray-400">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Profile Section */}
      <GlowCard className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
            <UserIcon className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Profile Information</h2>
            <p className="text-gray-400">Update your account details</p>
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              defaultValue="User Name"
              className="w-full bg-[#171717] border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              defaultValue="user@example.com"
              className="w-full bg-[#171717] border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              defaultValue="••••••••"
              className="w-full bg-[#171717] border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <GlowButton>Save Changes</GlowButton>
        </div>
      </GlowCard>

      {/* API Key Section */}
      <GlowCard className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center">
            <Key className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">API Key</h2>
            <p className="text-gray-400">Manage your API access</p>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center gap-2">
            <input
              type={showApiKey ? "text" : "password"}
              value="sk_test_123456789"
              readOnly
              className="flex-1 bg-[#171717] border border-gray-800 rounded-lg px-4 py-2 font-mono text-sm"
            />
            <GlowButton
              variant="ghost"
              size="icon"
              onClick={() => setShowApiKey(!showApiKey)}
            >
              {showApiKey ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </GlowButton>
            <GlowButton
              variant="ghost"
              size="icon"
              onClick={handleCopyApiKey}
            >
              {copied ? (
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </GlowButton>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Keep your API key secure. Never share it in public repositories or
            client-side code.
          </p>
        </div>

        <div className="flex gap-4">
          <GlowButton variant="outline" glowColor="indigo">
            Generate New Key
          </GlowButton>
          <GlowButton variant="outline" glowColor="indigo">
            View Usage
          </GlowButton>
        </div>
      </GlowCard>

      {/* Preferences Section */}
      <GlowCard className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center">
            <Bell className="w-6 h-6 text-teal-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Preferences</h2>
            <p className="text-gray-400">Customize your experience</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Theme</h3>
              <p className="text-sm text-gray-400">Choose your preferred theme</p>
            </div>
            <div className="flex items-center gap-2">
              <GlowButton
                variant="ghost"
                size="icon"
                className="bg-purple-500/20"
              >
                <Sun className="w-5 h-5 text-purple-400" />
              </GlowButton>
              <GlowButton
                variant="ghost"
                size="icon"
                className="bg-purple-500/20"
              >
                <Moon className="w-5 h-5 text-purple-400" />
              </GlowButton>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Notifications</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) =>
                    setNotifications((prev) => ({
                      ...prev,
                      email: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 rounded border-gray-800 bg-[#171717] text-purple-500 focus:ring-purple-500/50"
                />
                <span>Email Notifications</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={notifications.push}
                  onChange={(e) =>
                    setNotifications((prev) => ({
                      ...prev,
                      push: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 rounded border-gray-800 bg-[#171717] text-purple-500 focus:ring-purple-500/50"
                />
                <span>Push Notifications</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={notifications.updates}
                  onChange={(e) =>
                    setNotifications((prev) => ({
                      ...prev,
                      updates: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 rounded border-gray-800 bg-[#171717] text-purple-500 focus:ring-purple-500/50"
                />
                <span>Product Updates</span>
              </label>
            </div>
          </div>
        </div>
      </GlowCard>

      {/* Danger Zone */}
      <GlowCard className="space-y-6 border-red-500/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
            <Trash2 className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-red-400">Danger Zone</h2>
            <p className="text-gray-400">Irreversible and destructive actions</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-red-400">Delete Account</h3>
            <p className="text-sm text-gray-400">
              Permanently delete your account and all associated data. This action
              cannot be undone.
            </p>
          </div>
          <GlowButton
            variant="outline"
            className="border-red-500/50 text-red-400 hover:bg-red-500/10"
          >
            Delete Account
          </GlowButton>
        </div>
      </GlowCard>
    </div>
  );
} 