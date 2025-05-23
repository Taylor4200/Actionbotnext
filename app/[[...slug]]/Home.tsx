import Hero from "../../components/Hero";
import Brands from "../../components/Brands";
import Features from "../../components/Features";
import HowItWorks from "../../components/HowItWorks";
import StatsDisplay from "../../components/StatsDisplay";
import Integrations from "../../components/Integrations";
import Pricing from "../../components/Pricing";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <HowItWorks />
      <Integrations />
      {/* Stats section positioned between Integrations and Pricing */}
      <section className="py-16 bg-[#0f0f0f]">
        <StatsDisplay />
      </section>
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
