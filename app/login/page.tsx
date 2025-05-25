"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";
import GlowButton from "@/components/ui/GlowButton";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Placeholder for checking auth status and redirecting
    const isAuthenticated = false; // Replace with actual auth check
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    console.log("Logging in with:", { email, password });
    // Redirect to dashboard on successful mock login
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
        <GlowCard>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Log In
            </h1>
            <p className="text-gray-400">
              Welcome back! Please log in to your account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
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
              <div className="text-right mt-1">
                <Link href="#" className="text-sm text-gray-400 hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>
            <GlowButton type="submit" fullWidth>
              Log In
            </GlowButton>
          </form>

          <div className="text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link href="/signup" className="text-purple-400 hover:underline">
              Sign Up
            </Link>
          </div>
        </GlowCard>
      </motion.div>
    </div>
  );
} 