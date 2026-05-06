import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Header from "@/components/ui/Landing/Header";
import Hero from "@/components/ui/Landing/Hero";
import HowItWorks from "@/components/ui/Landing/HowItWorks";
import WhatToAsk from "@/components/ui/Landing/WhatToAsk";
import PricingSection from "@/components/ui/Landing/PricingSection";
import CTA from "@/components/ui/Landing/CTA";
import Footer from "@/components/ui/Landing/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <PricingSection />
      <CTA />
      <Footer />
    </div>
    
  );
}
