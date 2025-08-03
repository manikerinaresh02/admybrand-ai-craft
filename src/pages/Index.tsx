import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { FAQSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/sections/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialCarousel />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
