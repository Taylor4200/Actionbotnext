"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility
import GlowButton from "@/components/ui/GlowButton";
// Assuming shadcn/ui components if needed, e.g., Input, Label
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

interface Plan {
  id: "free" | "pro" | "teams";
  name: string;
  price: string;
  benefits: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: "free",
    name: "Free Plan",
    price: "$0/month",
    benefits: [
      "5 automations/month",
      "3 connected services",
      "Basic reporting",
      "Community support",
      "Pre-built templates only",
    ],
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: "$19/month",
    benefits: [
      "Unlimited automations",
      "15 connected services",
      "Advanced reporting & analytics",
      "Priority support",
      "Custom workflow builder",
      "API access",
      "Webhook triggers",
    ],
    popular: true,
  },
  {
    id: "teams",
    name: "Teams Plan",
    price: "$49/month",
    benefits: [
      "Everything in Pro",
      "Unlimited connected services",
      "Team collaboration features",
      "Shared workflow templates",
      "Advanced scheduling",
      "Custom integrations",
      "Team analytics dashboard",
    ],
  },
];

interface SignupFormProps {
  initialPlan?: "free" | "pro" | "teams";
  onSubmit: (data: { email: string; password: string; plan: "free" | "pro" | "teams" }) => void;
}

export default function SignupForm({
  initialPlan = "free",
  onSubmit,
}: SignupFormProps) {
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Placeholder for validation state
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation placeholder
    const newErrors: { email?: string; password?: string } = {};
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit({ email, password, plan: selectedPlan });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-8">
      {/* Plan Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            className={cn(
              "relative p-6 rounded-lg border cursor-pointer transition-all duration-200 space-y-4", // Added space-y-4 for benefit list spacing
              "bg-[#171717]",
              selectedPlan === plan.id
                ? "border-purple-500 ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/20"
                : "border-gray-700 hover:border-gray-600"
            )}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {plan.popular && (
              <span className="absolute top-0 right-0 -mt-3 mr-3 px-3 py-1 text-xs font-bold text-purple-800 bg-purple-200 rounded-full shadow-md">
                Most Popular
              </span>
            )}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="text-2xl font-bold text-purple-400">{plan.price}</p>
              <ul className="text-gray-400 text-sm space-y-1">
                {plan.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    {/* Placeholder for check icon - Adjusted alignment */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check text-teal-400 mt-1"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="flex-1">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              "w-full bg-[#171717] border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent",
              errors.email ? "border-red-500" : "border-gray-800"
            )}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={cn(
              "w-full bg-[#171717] border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent",
              errors.password ? "border-red-500" : "border-gray-800"
            )}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>
        <GlowButton type="submit" fullWidth>
          Get Started
        </GlowButton>
      </form>
    </div>
  );
} 