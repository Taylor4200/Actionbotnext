"use client";

import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import MinimalHeader from "@/components/layout/MinimalHeader";
import GlowButton from "@/components/ui/GlowButton";
import PricingTier from "@/components/pricing/PricingTier";
import { tiers } from "@/lib/pricingData";
import { Clock, Sparkles, Shield } from "lucide-react"; // Import icons for rendering
import GlowCard from "@/components/ui/GlowCard"; // Import GlowCard here

function SelectPlanContent() {
  const router = useRouter();
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  // Define icons here for rendering PricingTier components
  const icons = {
    Free: <Clock className="w-6 h-6" />,
    Pro: <Sparkles className="w-6 h-6" />,
    Teams: <Shield className="w-6 h-6" />,
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlanId(planId);
  };

  const handleContinue = () => {
    if (selectedPlanId) {
      // Store selected plan in sessionStorage (or context/ Zustand/ etc.)
      sessionStorage.setItem('selectedPlan', selectedPlanId);
      // Redirect to dashboard or onboarding
      router.push('/dashboard'); // Assuming /dashboard is the next step
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f]"> {/* Added background color */}
      <MinimalHeader /> {/* Use MinimalHeader */}

      <div className="flex-grow flex items-center justify-center py-12 px-4"> {/* Centered content container */}
        <div className="w-full max-w-6xl mx-auto text-center space-y-12"> {/* Container for pricing section content */}
          
          {/* Header similar to Pricing page */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8 rounded-full"
          />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
          >
            Choose your plan
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Select the plan that best fits your needs.
          </motion.p>

          {/* Pricing cards - Reusing the structure from Pricing page */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"> {/* Grid for 3 equal height cards with gap */}
            {tiers.map((tier, index) => (
              <PricingTier
                key={tier.id}
                name={tier.name}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                cta={tier.cta} // Keep original CTA text
                isPopular={tier.isPopular}
                icon={icons[tier.name as keyof typeof icons]} // Pass the correct icon
                delay={index * 0.1} // Adjusted delay for this page
                onClick={() => handlePlanSelect(tier.id)} // Add click handler
                isSelected={selectedPlanId === tier.id} // Pass selection state
                mode="select" // Add mode prop for selection behavior
              />
            ))}
          </div>
          
          {/* Continue Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: tiers.length * 0.1 + 0.2 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            {/* For Teams, the CTA within the card should route to contact. For others, use this button to continue. */}
            {selectedPlanId === 'teams' ? (
              <GlowButton href="/contact?intent=enterprise">Talk to Sales</GlowButton>
            ) : (
              <GlowButton onClick={handleContinue} disabled={selectedPlanId === null}>Continue</GlowButton>
            )}
            
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default function SelectPlanPage() {
  return (
    <Suspense fallback={/* Minimal loading fallback similar to signup */
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
      <SelectPlanContent />
    </Suspense>
  );
} 