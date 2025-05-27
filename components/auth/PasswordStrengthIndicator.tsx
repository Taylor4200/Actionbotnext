"use client";

import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface PasswordStrengthIndicatorProps {
  password: string;
}

export default function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | undefined>();

  useEffect(() => {
    if (!password) {
      setScore(0);
      setFeedback(undefined);
      return;
    }

    // Use setTimeout to avoid blocking the main thread
    const timeoutId = setTimeout(async () => {
      try {
        // Dynamically import zxcvbn
        const { default: zxcvbn } = await import('zxcvbn');
        const result = zxcvbn(password);
        setScore(result.score);
        
        let feedbackText = result.feedback.suggestions.join(' ');
        if (result.feedback.warning) {
          feedbackText = result.feedback.warning + (feedbackText ? ' ' + feedbackText : '');
        }
        setFeedback(feedbackText || undefined);
      } catch (error) {
        console.error('Error calculating password strength:', error);
        // Fallback to basic validation if zxcvbn fails
        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[!@#$%^&*()_+\[\]{};':"\\|,.<>?~`-]/.test(password);
        const isLongEnough = password.length >= 8;
        
        const basicScore = [hasLower, hasUpper, hasNumber, hasSpecial, isLongEnough]
          .filter(Boolean).length;
        setScore(Math.min(basicScore, 4));
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [password]);

  const strengthColor = [
    'bg-gray-500', // 0
    'bg-red-500',  // 1
    'bg-orange-500', // 2
    'bg-yellow-500', // 3
    'bg-green-500' // 4
  ][score];

  const strengthLabel = [
    'Too weak', 
    'Weak', 
    'Good', 
    'Strong', 
    'Very strong'
  ][score];

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium text-gray-400">
          Password Strength: {strengthLabel}
        </span>
        {score >= 3 && (
          <span className="text-xs font-semibold text-green-400">
            Ready!
          </span>
        )}
      </div>
      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full transition-all duration-300 ease-in-out",
            strengthColor,
            score === 0 && "opacity-50",
            score >= 3 && "glow"
          )}
          style={{ width: `${(score + 1) * 20}%` }}
        />
      </div>
      {feedback && (
        <p className={cn(
          "mt-1 text-sm",
          score < 2 ? 'text-red-400' : score < 4 ? 'text-yellow-400' : 'text-green-400'
        )}>
          {feedback}
        </p>
      )}
    </div>
  );
} 