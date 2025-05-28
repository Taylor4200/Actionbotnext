"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";
import GlowButton from "@/components/ui/GlowButton";
import MinimalHeader from "@/components/layout/MinimalHeader";
import { cn } from "@/lib/utils";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  useEffect(() => {
    const isAuthenticated = false;
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newErrors: { email?: string; password?: string } = {};
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
    console.log("Logging in with:", { email, password });
    router.push("/dashboard");
    return false;
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader showBackLink={true} backLinkHref="/"/>
      
      <div className="flex-grow flex items-center justify-center p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
          className="w-full max-w-md space-y-6">
          
          <div className="text-center">
             <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
             <p className="text-gray-400">Log in to your account.</p>
          </div>

          <GlowCard>
            <form onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const newErrors: { email?: string; password?: string } = {};
              if (!email) newErrors.email = "Email is required.";
              if (!password) newErrors.password = "Password is required.";
              setErrors(newErrors);
          
              if (Object.keys(newErrors).length === 0) {
                console.log("Logging in with:", { email, password });
                router.push("/dashboard");
                return false;
              }
            }} className="space-y-6">
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
                    "w-full bg-[#171717] border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent",
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
                    "w-full bg-[#171717] border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent",
                    errors.password ? "border-red-500" : "border-gray-800"
                  )}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
            </div>
            <GlowButton type="submit" fullWidth>
              Log In
            </GlowButton>
          </form>
          </GlowCard>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="flex-shrink mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          <GlowButton fullWidth variant="outline" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3 8.8 8.8 0 0 0 16 2.17c-2.3.75-4 2.5-4 4.5a6.6 6.6 0 0 0-1.94-4C7 3.34 6.18 3.5 5 3.2c-1.41 1.26-2 5-2 5.08A7.46 7.46 0 0 0 5 15c0 1.55 1.19 2.71 2.7 3.06.78.34 1.57.36 2.35.38m-1-.06h7.5"></path></svg>}>Continue with GitHub</GlowButton>
          <GlowButton fullWidth variant="outline" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-google"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M12 12h9.5M12 12H3"/></svg>}>Continue with Google</GlowButton>

          <div className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{' '}
            <Link href="/signup" className="text-purple-400 hover:underline">
              Sign Up
            </Link>
          </div>

      </motion.div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col bg-[#0f0f0f] p-4">
         <MinimalHeader />
         <div className="flex-grow flex items-center justify-center">
           <div className="w-full max-w-md">
             <GlowCard>
               <div className="animate-pulse space-y-6">
                  <div className="h-8 bg-gray-800 rounded w-3/4 mx-auto"></div>
                  <div className="h-4 bg-gray-800 rounded w-1/2 mx-auto"></div>
                  <div className="h-10 bg-gray-800 rounded"></div>
                  <div className="h-10 bg-gray-800 rounded"></div>
                  <div className="h-12 bg-gray-800 rounded"></div>
                  <div className="h-4 bg-gray-800 rounded w-1/3 mx-auto"></div>
               </div>
             </GlowCard>
           </div>
         </div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
} 