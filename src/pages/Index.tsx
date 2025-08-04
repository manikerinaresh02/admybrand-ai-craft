/**
 * Index Page - Main Landing Page
 * 
 * This component represents the primary landing page for ADmyBRAND AI Suite.
 * It orchestrates all major sections of the website in a logical flow:
 * 
 * Layout Structure:
 * 1. Navigation Bar - Fixed header with navigation links
 * 2. Hero Section - Main value proposition and call-to-action
 * 3. Features Section - Product capabilities and benefits
 * 4. Demo Section - Interactive product demonstration
 * 5. Pricing Section - Plans and pricing calculator
 * 6. Testimonials - Customer success stories and social proof
 * 7. Blog Section - Content marketing and resources
 * 8. FAQ Section - Common questions and answers
 * 9. Footer - Contact information and additional links
 */

import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { DemoSection } from "@/components/sections/demo-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { BlogSection } from "@/components/sections/blog-section";
import { FAQSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/sections/footer";

const Index = () => {
  return (
    // Main container with full viewport height and background
    <div className="min-h-screen bg-background">
      {/* Fixed navigation bar at the top */}
      <Navbar />
      
      {/* Main content sections in logical order */}
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <PricingSection />
      <TestimonialCarousel />
      <BlogSection />
      <FAQSection />
      
      {/* Footer with contact information and links */}
      <Footer />
    </div>
  );
};

export default Index;
