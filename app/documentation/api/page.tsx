"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { Code, Key, Server, Terminal, ArrowRight } from "lucide-react";

export default function ApiDocumentation() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      <DropdownNavbar />

      {/* Hero Section */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-900/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              API Documentation
            </h1>
            <p className="text-xl text-gray-400">
              Integrate ActionBot into your applications with our powerful API
            </p>
          </motion.div>

          {/* API Documentation content */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Quick Start Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#171717] rounded-xl p-8 border border-gray-800"
            >
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Terminal className="w-6 h-6 mr-3 text-purple-400" />
                Quick Start
              </h2>
              <div className="space-y-4">
                <p className="text-gray-400">Get started with the ActionBot API in minutes:</p>
                <div className="bg-[#0a0a0a] p-4 rounded-lg">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>npm install @actionbot/api</code>
                  </pre>
                </div>
                <div className="bg-[#0a0a0a] p-4 rounded-lg">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`import { ActionBot } from '@actionbot/api';

const client = new ActionBot({
  apiKey: 'your_api_key_here'
});`}</code>
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* Authentication Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#171717] rounded-xl p-8 border border-gray-800"
            >
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Key className="w-6 h-6 mr-3 text-purple-400" />
                Authentication
              </h2>
              <div className="space-y-4">
                <p className="text-gray-400">All API requests require authentication using an API key. You can find your API key in the dashboard under Settings → API Keys.</p>
                <div className="bg-[#0a0a0a] p-4 rounded-lg">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Include your API key in the Authorization header
Authorization: Bearer your_api_key_here`}</code>
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* Endpoints Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#171717] rounded-xl p-8 border border-gray-800"
            >
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Server className="w-6 h-6 mr-3 text-purple-400" />
                Endpoints
              </h2>
              
              {/* Create Automation */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Create Automation</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded mr-2">POST</span>
                    <code className="text-purple-400">/api/v1/automations</code>
                  </div>
                  <div className="bg-[#0a0a0a] p-4 rounded-lg">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{`// Request
{
  "name": "My Automation",
  "trigger": {
    "type": "webhook",
    "config": {
      "path": "/webhook/123"
    }
  },
  "actions": [
    {
      "type": "http_request",
      "config": {
        "url": "https://api.example.com/endpoint",
        "method": "POST"
      }
    }
  ]
}

// Response
{
  "id": "auto_123",
  "name": "My Automation",
  "status": "active",
  "created_at": "2024-03-20T12:00:00Z"
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* List Automations */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">List Automations</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded mr-2">GET</span>
                    <code className="text-purple-400">/api/v1/automations</code>
                  </div>
                  <div className="bg-[#0a0a0a] p-4 rounded-lg">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{`// Response
{
  "data": [
    {
      "id": "auto_123",
      "name": "My Automation",
      "status": "active",
      "created_at": "2024-03-20T12:00:00Z"
    }
  ],
  "pagination": {
    "total": 1,
    "page": 1,
    "per_page": 10
  }
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Execute Automation */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Execute Automation</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 rounded mr-2">POST</span>
                    <code className="text-purple-400">/api/v1/automations/:id/execute</code>
                  </div>
                  <div className="bg-[#0a0a0a] p-4 rounded-lg">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{`// Request
{
  "input": {
    "key": "value"
  }
}

// Response
{
  "execution_id": "exec_123",
  "status": "completed",
  "started_at": "2024-03-20T12:00:00Z",
  "completed_at": "2024-03-20T12:00:01Z",
  "result": {
    "success": true
  }
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SDK Examples Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#171717] rounded-xl p-8 border border-gray-800"
            >
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-purple-400" />
                SDK Examples
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Create and Execute an Automation</h3>
                  <div className="bg-[#0a0a0a] p-4 rounded-lg">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{`// Create a new automation
const automation = await client.automations.create({
  name: 'My Automation',
  trigger: {
    type: 'webhook',
    config: {
      path: '/webhook/123'
    }
  },
  actions: [
    {
      type: 'http_request',
      config: {
        url: 'https://api.example.com/endpoint',
        method: 'POST'
      }
    }
  ]
});

// Execute the automation
const execution = await client.automations.execute(automation.id, {
  input: {
    key: 'value'
  }
});

console.log('Execution result:', execution.result);`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rate Limits Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#171717] rounded-xl p-8 border border-gray-800"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Rate Limits</h2>
              <div className="space-y-4">
                <p className="text-gray-400">API requests are subject to the following rate limits:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>100 requests per minute for standard plans</li>
                  <li>1000 requests per minute for pro plans</li>
                  <li>Custom limits available for enterprise plans</li>
                </ul>
                <p className="text-gray-400 mt-4">Rate limit headers are included in all responses:</p>
                <div className="bg-[#0a0a0a] p-4 rounded-lg">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1616248800`}</code>
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* Support Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-gray-400 mb-4">Need help with the API?</p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-colors"
              >
                Contact Support <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 