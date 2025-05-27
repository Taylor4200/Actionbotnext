export interface Plan {
  id: "free" | "pro" | "teams";
  name: string;
  price: string;
  description: string;
  features: { available: boolean; text: string }[];
  cta: string;
  isPopular?: boolean;
  icon: React.ReactNode; // Note: ReactNode might need client component context or serialization if not used carefully
}

export const tiers: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    description: "Perfect for trying out ActionBot for personal or small projects.",
    features: [
      { available: true, text: "5 automations/month" },
      { available: true, text: "3 connected services" },
      { available: true, text: "Basic reporting" },
      { available: true, text: "Community support" },
      { available: true, text: "Pre-built templates only" },
    ],
    cta: "Get Started",
    isPopular: false,
    // Placeholder icon - replace with actual Lucide icons if needed outside of React components
    icon: null // Icons will be handled in the component where they are rendered
  },
  {
    id: "pro",
    name: "Pro",
    price: "$19",
    description: "For professionals and teams who need more automations and integrations.",
    features: [
      { available: true, text: "Unlimited automations" },
      { available: true, text: "15 connected services" },
      { available: true, text: "Advanced reporting & analytics" },
      { available: true, text: "Priority support" },
      { available: true, text: "Custom workflow builder" },
      { available: true, text: "API access" },
      { available: true, text: "Webhook triggers" },
    ],
    cta: "Get Started",
    isPopular: true,
     icon: null // Icons will be handled in the component where they are rendered
  },
  {
    id: "teams",
    name: "Teams",
    price: "$49",
    description: "For teams requiring enterprise features and dedicated support.",
    features: [
      { available: true, text: "Everything in Pro" },
      { available: true, text: "Unlimited connected services" },
      { available: true, text: "Team collaboration features" },
      { available: true, text: "Shared workflow templates" },
      { available: true, text: "Advanced scheduling" },
      { available: true, text: "Custom integrations" },
      { available: true, text: "Team analytics dashboard" },
    ],
    cta: "Get Started",
    isPopular: false,
     icon: null // Icons will be handled in the component where they are rendered
  }
];

// Note: Icons are defined with JSX in the component where used (Pricing.tsx). 
// If icons need to be part of the data, they should be represented as strings 
// (e.g., "Clock", "Sparkles") and the component should map the string to the actual icon component.
// For simplicity within this task, I've set icons to null in the data array 
// and will add them directly in the components rendering the tiers. 