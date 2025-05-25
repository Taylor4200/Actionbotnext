"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";
import GlowButton from "@/components/ui/GlowButton";
// Assuming shadcn/ui Tabs component for plan switching
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const [plan, setPlan] = useState("free"); // Default to free

  useEffect(() => {
    // Placeholder for checking auth status and redirecting
    const isAuthenticated = false; // Replace with actual auth check
    if (isAuthenticated) {
      router.push("/dashboard");
    }

    // Read plan from URL
    const urlPlan = searchParams.get("plan");
    if (urlPlan === "pro") {
      setPlan("pro");
    } else {
      setPlan("free");
    }
  }, [searchParams, router]);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup logic
    console.log("Signing up with:", { email, password, plan });
    // Redirect to dashboard on successful mock signup
    router.push("/dashboard");
  };

  // Framer Motion variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="w-full max-w-md"
      >
        <GlowCard className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Sign Up
            </h1>
            <p className="text-gray-400">
              Signing up for the {plan === "pro" ? "Pro" : "Free"} Plan
            </p>
          </div>

          {/* Placeholder for Plan Switching Tabs */}
          {/* Uncomment and integrate shadcn/ui Tabs when available */}
          {/*
          <Tabs value={plan} onValueChange={(value) => setPlan(value as "free" | "pro")} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#171717]">
              <TabsTrigger value="free">Free Plan</TabsTrigger>
              <TabsTrigger value="pro">Pro Plan</TabsTrigger>
            </TabsList>
          </Tabs>
          */}
           <div className="flex justify-center gap-2">
             <GlowButton
               variant={plan === 'free' ? 'default' : 'outline'}
               size="sm"
               onClick={() => setPlan('free')}
             >
               Free Plan
             </GlowButton>
             <GlowButton
               variant={plan === 'pro' ? 'default' : 'outline'}
               size="sm"
               onClick={() => setPlan('pro')}
             >
               Pro Plan
             </GlowButton>
           </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#171717] border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#171717] border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              />
            </div>
            <GlowButton type="submit" fullWidth>
              Sign Up
            </GlowButton>
          </form>

          <div className="text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link href="/login" className="text-purple-400 hover:underline">
              Log In
            </Link>
          </div>
        </GlowCard>
      </motion.div>
    </div>
  );
} 