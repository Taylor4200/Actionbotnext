"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";
import SignupForm from "@/components/auth/SignupForm";
import MinimalHeader from "@/components/layout/MinimalHeader";
import GlowButton from "@/components/ui/GlowButton";

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

  const handleSignupSubmit = async (data: { email: string; password: string; plan: "free" | "pro" | "teams" }) => {
    try {
      // Mock signup logic - replace with actual API call
    console.log("Signing up with:", data);

      // Simulate an API call delay (e.g., sending verification email)
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay

      // Get the original plan query parameter, if it exists
      const originalPlanQueryParam = searchParams.get('plan');

      // Redirect to email verification page, passing email and original plan
      const redirectUrl = `/email-code?email=${encodeURIComponent(data.email)}${originalPlanQueryParam ? `&plan=${encodeURIComponent(originalPlanQueryParam)}` : ''}`;
      console.log(`Signed up. Redirecting to email verification at ${redirectUrl}`);
      await router.push(redirectUrl);

    } catch (error) {
      console.error("Signup or Navigation error:", error);
      // Handle signup errors (e.g., email already exists)
      // Display an error message to the user
      // setErrors({ email: "An error occurred during signup." }); // Assuming error state in SignupForm
      throw error; // Re-throw to be handled by the form (for isSubmitting state)
    }
  };

  // Framer Motion variants
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
             <h1 className="text-2xl font-bold text-white mb-2">Create your account</h1>
             <p className="text-gray-400">Let's get you started.</p>
          </div>

        <GlowCard>
             <SignupForm onSubmit={handleSignupSubmit} />
          </GlowCard>

          <div className="text-center text-sm text-gray-500 space-y-2">
             <p>By signing up, you agree to our <Link href="/terms" className="text-purple-400 hover:underline">Terms</Link> & <Link href="/privacy" className="text-purple-400 hover:underline">Privacy Policy</Link>.</p>
          </div>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="flex-shrink mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          <GlowButton fullWidth variant="outline" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3 8.8 8.8 0 0 0 16 2.17c-2.3.75-4 2.5-4 4.5a6.6 6.6 0 0 0-1.94-4C7 3.34 6.18 3.5 5 3.2c-1.41 1.26-2 5-2 5.08A7.46 7.46 0 0 0 5 15c0 1.55 1.19 2.71 2.7 3.06.78.34 1.57.36 2.35.38m-1-.06h7.5"></path></svg>}>Continue with GitHub</GlowButton>
          <GlowButton fullWidth variant="outline" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-google"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M12 12h9.5M12 12H3"/></svg>}>Continue with Google</GlowButton>

          <div className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-purple-400 hover:underline">
              Log In
            </Link>
          </div>

      </motion.div>
      </div>
    </div>
  );
}

export default function SignupPage() {
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
      <SignupContent />
    </Suspense>
  );
} 