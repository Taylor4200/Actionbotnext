"use client";

import { motion } from "framer-motion";
import DropdownNavbar from "@/components/DropdownNavbar";
import { Scale, AlertCircle, FileText, Shield, Lock, ChevronRight, Users, CreditCard, Globe, AlertTriangle } from "lucide-react";
import React, { useState } from 'react';

const TermsPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: "agreement",
      title: "Agreement to Terms",
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            By accessing or using ActionBot's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
          </p>
          <p className="text-gray-300">
            These Terms of Service constitute a legally binding agreement between you and ActionBot regarding your use of our platform and services.
          </p>
          <p className="text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      )
    },
    {
      id: "definitions",
      title: "Definitions",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><span className="font-semibold">"Service"</span> refers to the ActionBot platform, website, and all related services.</li>
            <li><span className="font-semibold">"User"</span> refers to any individual or entity that accesses or uses our Service.</li>
            <li><span className="font-semibold">"Content"</span> refers to any information, data, text, software, graphics, or other materials uploaded, downloaded, or appearing on the Service.</li>
            <li><span className="font-semibold">"Account"</span> refers to a User's registration with the Service.</li>
            <li><span className="font-semibold">"Subscription"</span> refers to a paid plan that provides access to premium features of the Service.</li>
          </ul>
        </div>
      )
    },
    {
      id: "accounts",
      title: "User Accounts",
      icon: Users,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            To access certain features of the Service, you must register for an account. You agree to:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Promptly update any changes to your information</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorized use</li>
          </ul>
          <p className="text-gray-300 mt-4">
            We reserve the right to suspend or terminate accounts that violate these terms or for any other reason at our sole discretion.
          </p>
        </div>
      )
    },
    {
      id: "subscriptions",
      title: "Subscriptions and Payments",
      icon: CreditCard,
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Subscription Terms</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Subscriptions are billed in advance on a monthly or annual basis</li>
            <li>Prices are subject to change with notice</li>
            <li>Refunds are handled on a case-by-case basis</li>
            <li>You may cancel your subscription at any time</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mt-6">Payment Terms</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>All payments are processed securely through our payment providers</li>
            <li>You must provide valid payment information</li>
            <li>Failed payments may result in service interruption</li>
            <li>Taxes are not included unless specified</li>
          </ul>
        </div>
      )
    },
    {
      id: "usage",
      title: "Acceptable Use",
      icon: AlertCircle,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            You agree not to use the Service to:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Violate any laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Distribute malware or harmful code</li>
            <li>Attempt to gain unauthorized access</li>
            <li>Interfere with the Service's operation</li>
            <li>Harass or abuse other users</li>
            <li>Collect or harvest user data</li>
            <li>Engage in any fraudulent activity</li>
          </ul>
        </div>
      )
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The Service and its original content, features, and functionality are owned by ActionBot and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
          <p className="text-gray-300 mt-4">
            You retain ownership of any content you submit to the Service, but grant us a license to use, modify, and display such content in connection with providing the Service.
          </p>
        </div>
      )
    },
    {
      id: "limitations",
      title: "Limitations of Liability",
      icon: AlertTriangle,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            To the maximum extent permitted by law, ActionBot shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
          <p className="text-gray-300 mt-4">
            Our total liability for any claims related to the Service shall not exceed the amount paid by you, if any, for accessing the Service during the twelve (12) months preceding the claim.
          </p>
        </div>
      )
    },
    {
      id: "warranty",
      title: "Warranty Disclaimer",
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Accuracy or reliability</li>
            <li>Availability or uptime</li>
          </ul>
        </div>
      )
    },
    {
      id: "termination",
      title: "Termination",
      icon: AlertCircle,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
          </p>
          <p className="text-gray-300 mt-4">
            Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
          </p>
        </div>
      )
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: Globe,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
          </p>
          <p className="text-gray-300 mt-4">
            Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in San Francisco County, California.
          </p>
        </div>
      )
    },
    {
      id: "changes",
      title: "Changes to Terms",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
          </p>
          <p className="text-gray-300 mt-4">
            By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
          </p>
        </div>
      )
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: AlertCircle,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="bg-[#1a1a1a] p-4 rounded-lg">
            <p className="text-gray-300">
              Email: legal@actionbot.com<br />
              Address: 123 Innovation Street, San Francisco, CA 94105<br />
              Phone: +1 (555) 0123
            </p>
          </div>
        </div>
      )
    }
  ];

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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-400">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full bg-[#171717] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <section.icon className="w-6 h-6 text-purple-400 mr-4" />
                  <h2 className="text-xl font-semibold text-left">{section.title}</h2>
                </div>
                <ChevronRight
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    activeSection === section.id ? 'transform rotate-90' : ''
                  }`}
                />
              </button>
              
              {activeSection === section.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#171717] p-6 rounded-b-xl border-x border-b border-gray-800 mt-1"
                >
                  {section.content}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TermsPage; 