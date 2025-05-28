"use client";

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import GlowCard from '@/components/ui/GlowCard';
import MinimalHeader from '@/components/layout/MinimalHeader';
import GlowButton from '@/components/ui/GlowButton';
import { cn } from '@/lib/utils';

function EmailCodeContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get('email') || 'your email'; // Get email from query params
    const planQueryParam = searchParams.get('plan');
    const [code, setCode] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleVerifyCode = async () => {
        setError(null);
        setSuccess(null);
        setIsVerifying(true);

        // --- Placeholder for Server-Side Code Verification ---
        // In a real application, send the email and code to your backend
        // to verify against the stored code for that email.
        // Example (conceptual):
        // const isValid = await verifyEmailCodeApi({ email, code });
        // if (isValid) {
        //   // Proceed with signup finalization or mark email as verified
        //   setSuccess('Email verified successfully!');
        //   // After verification, check the plan and redirect
        //   if (planQueryParam) {
        //     router.push('/dashboard');
        //   } else {
        //     router.push('/select-plan');
        //   }
        // } else {
        //   setError('Invalid or expired code. Please try again.');
        // }
        // --------------------------------------------------------

        // Simulate API call delay and verification result
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock verification logic:
        if (code === '123456') { // Use a mock code for now
            setSuccess('Email verified successfully!');
            // Redirect based on plan query parameter
            console.log('Email verified. Redirecting to select-plan.');
            router.push('/select-plan');
        } else {
            setError('Invalid or expired code. Please try again.');
        }

        setIsVerifying(false);
    };

    const handleResendCode = async () => {
        setError(null);
        setSuccess(null);
        setIsResending(true);

         // --- Placeholder for Server-Side Code Resending ---
        // In a real application, send a request to your backend
        // to generate and send a new verification code to the email.
        // Example (conceptual):
        // await resendEmailCodeApi({ email });
        // setSuccess('New code sent. Please check your email.');
        // --------------------------------------------------------

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSuccess('New code sent. Please check your email.'); // Mock success message
        setIsResending(false);
    };

    return (
         <div className="min-h-screen flex flex-col">
            <MinimalHeader showBackLink={true} backLinkHref="/signup"/> {/* Link back to signup */}
            
            <div className="flex-grow flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }}
                    className="w-full max-w-md space-y-6">
                    
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-white mb-2">Verify your email</h1>
                        <p className="text-gray-400">We sent a code to <span className="text-purple-400 font-medium">{email}</span>. Enter the code below to continue.</p>
                    </div>

                    <GlowCard>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="code" className="block text-sm font-medium text-gray-300 mb-2">Verification Code</label>
                                <input
                                    type="text"
                                    id="code"
                                    required
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    className={cn(
                                        "w-full bg-[#171717] border rounded-lg px-4 py-2.5 text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent",
                                        error ? "border-red-500" : "border-gray-800"
                                    )}
                                    disabled={isVerifying || isResending}
                                    maxLength={6} // Assuming a 6-digit code
                                />
                                {error && (
                                    <p className="mt-1 text-sm text-red-500 text-center">{error}</p>
                                )}
                                {success && (
                                    <p className="mt-1 text-sm text-green-500 text-center">{success}</p>
                                )}
                            </div>
                            
                            <GlowButton onClick={handleVerifyCode} fullWidth disabled={isVerifying || isResending || code.length !== 6}>
                                {isVerifying ? 'Verifying...' : 'Verify Code'}
                            </GlowButton>

                            <div className="text-center text-sm text-gray-400 mt-4">
                                Didn't receive the code?{' '}
                                <button
                                    onClick={handleResendCode}
                                    disabled={isResending || isVerifying}
                                    className="text-purple-400 hover:underline disabled:text-gray-600 disabled:hover:no-underline"
                                >
                                    {isResending ? 'Resending...' : 'Resend Code'}
                                </button>
                            </div>
                        </div>
                    </GlowCard>
                </motion.div>
            </div>
        </div>
    );
}

export default function EmailCodePage() {
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
            <EmailCodeContent />
        </Suspense>
    );
} 