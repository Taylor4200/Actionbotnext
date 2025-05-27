"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility
import GlowButton from "@/components/ui/GlowButton";
import { Eye, EyeOff } from 'lucide-react'; // Import icons
import zxcvbn from 'zxcvbn'; // Import zxcvbn (install with `npm install zxcvbn`)
import ConfettiExplosion from 'react-confetti-explosion'; // You might need to install this library (e.g., npm install react-confetti-explosion)

// Assuming shadcn/ui components if needed, e.g., Input, Label
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

interface SignupFormProps {
  onSubmit: (data: { email: string; password: string; plan: "free" | "pro" | "teams" }) => void;
}

export default function SignupForm({
  onSubmit,
}: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrengthScore, setPasswordStrengthScore] = useState(0);
  const [passwordFeedback, setPasswordFeedback] = useState<string | undefined>(undefined);
  const [showConfetti, setShowConfetti] = useState(false);

  // Basic email format validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    return emailRegex.test(email);
  };

  // Strong password complexity validation
  const validatePasswordComplexity = (password: string): boolean => {
    // Must be at least 8 characters
    if (password.length < 8) return false;
    // Must contain at least one lowercase letter
    if (!/[a-z]/.test(password)) return false;
    // Must contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) return false;
    // Must contain at least one number
    if (!/[0-9]/.test(password)) return false;
    // Must contain at least one special character (using a common set)
    if (!/[!@#$%^&*()_+\[\]{};':"\\|,.<>?~`-]/.test(password)) return false; // Escape special regex characters
    return true;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword) {
      const result = zxcvbn(newPassword);
      setPasswordStrengthScore(result.score);
      // Combine feedback from zxcvbn
      let feedback = result.feedback.suggestions.join(' ');
       if (result.feedback.warning) {
         feedback = result.feedback.warning + (feedback ? ' ' + feedback : '');
       }
       setPasswordFeedback(feedback || undefined); // Use undefined if no feedback
    } else {
      setPasswordStrengthScore(0);
      setPasswordFeedback(undefined);
    }

    // Clear password-related errors when typing
    if (errors.password) {
        setErrors(prev => ({ ...prev, password: undefined }));
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Basic validation
    const newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    // Password validation
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (!validatePasswordComplexity(password)) {
      newErrors.password = "Password must be at least 8 characters and include lowercase, uppercase, number, and special character.";
    } else if (passwordStrengthScore < 3) {
        newErrors.password = "Password is too weak. Please choose a stronger password.";
    } else {
      // --- Placeholder for Server-Side HaveIBeenPwned Check ---
      // In a real application, you would send the password hash (SHA-1 prefix) 
      // to your backend here. The backend would query the HIBP API 
      // and return whether the password was found in a breach.
      // Example (conceptual): 
      // const isPwned = await checkPasswordAgainstHIBP(password);
      // if (isPwned) {
      //   newErrors.password = "⚠️ Try a different password — this one has appeared in a known data breach.";
      // }
      // --------------------------------------------------------
      // For this client-side mock, we'll assume it passes if complexity/zxcvbn checks pass
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    setErrors({}); // Clear errors if validation passes

    try {
      // Call onSubmit with the form data (simulated async)
      // Note: In a real flow, this would trigger sending email verification code first.
      await onSubmit({ email, password, plan: "free" });
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({ email: "An error occurred during signup." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Trigger confetti on score 4
  useEffect(() => {
    if (passwordStrengthScore === 4) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 2000); // Show confetti for 2 seconds
      return () => clearTimeout(timer);
    }
  }, [passwordStrengthScore]);

  // Map zxcvbn score to color and label
  const strengthColor = [
    'bg-gray-500', // 0
    'bg-red-500',  // 1
    'bg-orange-500', // 2
    'bg-yellow-500', // 3
    'bg-green-500' // 4
  ][passwordStrengthScore];

  const strengthLabel = [
    'Too weak', 
    'Weak', 
    'Good', 
    'Strong', 
    'Very strong'
  ][passwordStrengthScore];

  return (
    <div className="w-full max-w-md mx-auto space-y-8"> {/* Adjusted max-width and spacing */}
      {/* Removed Pricing Section */}

      {/* Signup Form */}
      <form className="space-y-6" noValidate>
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
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          {showConfetti && (
             <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
                <ConfettiExplosion
                   force={0.6}
                   duration={2500}
                   particleCount={50}
                   width={1000}
                   colors={['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF']}
                />
             </div>
          )}
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={password}
              onChange={handlePasswordChange}
              className={cn(
                "w-full bg-[#171717] border rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent",
                errors.password ? "border-red-500" : "border-gray-800"
              )}
              disabled={isSubmitting}
            />
             <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
             >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
             </button>
          </div>

          {/* Password Strength Bar */}
          <div className="mt-2">
            <div className="flex items-center justify-between mb-1">
               <span className="text-xs font-medium text-gray-400">
                  Password Strength:
               </span>
               {passwordStrengthScore >= 3 && (
                  <motion.span
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.3 }}
                     className="text-xs font-semibold text-green-400"
                  >
                     Ready!
                  </motion.span>
               )}
            </div>
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${(passwordStrengthScore + 1) * 20}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={cn(
                  "h-full",
                  passwordStrengthScore === 0 && "bg-gray-500 opacity-50", // Faint for score 0
                  passwordStrengthScore === 1 && "bg-red-500",
                  passwordStrengthScore === 2 && "bg-orange-500",
                  passwordStrengthScore === 3 && "bg-yellow-500 glow-yellow", // Add glow class
                  passwordStrengthScore === 4 && "bg-green-500 glow-green" // Add glow class
                )}
              >
              </motion.div>
            </div>
             {passwordFeedback && ( // Show feedback text if available
                 <p className={cn("mt-1 text-sm", passwordStrengthScore < 2 ? 'text-red-400' : passwordStrengthScore < 4 ? 'text-yellow-400' : 'text-green-400')}>
                     {passwordFeedback}
                 </p>
             )}
          </div>

          {errors.password && !passwordFeedback && ( // Show password error only if no strength feedback is shown
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>
        <GlowButton onClick={handleSubmit} fullWidth disabled={isSubmitting || passwordStrengthScore < 3}>
          {isSubmitting ? "Creating account..." : "Get Started"}
        </GlowButton>
      </form>
    </div>
  );
} 