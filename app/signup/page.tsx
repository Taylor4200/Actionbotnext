"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";
import SignupForm from "@/components/auth/SignupForm";

function SignupContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Placeholder for checking auth status and redirecting
    const isAuthenticated = false; // Replace with actual auth check
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSignupSubmit = (data: { email: string; password: string; plan: "free" | "pro" }) => {
    // Mock signup logic
    console.log("Signing up with:", data);
    // Redirect to dashboard on successful mock signup
    router.push("/dashboard");
  };

  // Framer Motion variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const initialPlan = searchParams.get("plan") === "pro" ? "pro" : "free";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="w-full max-w-md"
      >
        <GlowCard>
          <SignupForm initialPlan={initialPlan} onSubmit={handleSignupSubmit} />

          <div className="text-center text-sm text-gray-400 mt-6">
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

export default function SignupPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] p-4">
        <div className="w-full max-w-md">
          <GlowCard>
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-800 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-800 rounded w-1/2 mx-auto"></div>
              <div className="h-10 bg-gray-800 rounded"></div>
              <div className="h-10 bg-gray-800 rounded"></div>
              <div className="h-10 bg-gray-800 rounded"></div>
            </div>
          </GlowCard>
        </div>
      </div>
    }>
      <SignupContent />
    </Suspense>
  );
} 