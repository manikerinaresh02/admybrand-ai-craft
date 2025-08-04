/**
 * Hero Section Component
 * 
 * The main landing section that introduces ADmyBRAND AI Suite to visitors.
 * Features a compelling headline, value proposition, call-to-action buttons,
 * and social proof elements with advanced animations and visual effects.
 * 
 * Key Features:
 * - Animated background with floating particles
 * - Gradient text effects and glassmorphism
 * - Responsive design for all screen sizes
 * - Interactive hover effects and animations
 * - Social proof with user avatars and statistics
 */

import React from "react";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard } from "@/components/ui/glass-card";
import { Play, Sparkles, Zap, TrendingUp } from "lucide-react";
import basepointCrmDashboard from "@/assets/basepoint-crm-dashboard.jpg";

export const HeroSection = () => {
  return (
    // Main hero section with full viewport height and centered content
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-12 sm:pt-16">
      {/* Enhanced Background Effects - Multiple layers for depth */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute inset-0 animated-gradient opacity-10" />
      
      {/* Floating Background Elements - Create visual interest */}
      <div className="absolute top-16 sm:top-32 -left-16 sm:-left-32 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-16 sm:bottom-32 -right-16 sm:-right-32 w-40 h-40 sm:w-80 sm:h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}} />
      
      {/* Floating Particles - Dynamic background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 sm:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-start max-w-7xl mx-auto">
          {/* Left Column - Content and CTAs */}
          <div className="text-center lg:text-left space-y-8 sm:space-y-10 lg:space-y-12 animate-fade-in-up order-2 lg:order-1 min-w-0 py-4">
            {/* Badge - Highlights AI technology */}
            <div className="inline-flex items-center gap-2 sm:gap-3 glass-card px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-foreground">Powered by Advanced AI</span>
            </div>

            {/* Headline Section - Main value proposition */}
            <div className="space-y-8 sm:space-y-10">
              {/* Main Headline with gradient text effect */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.2] sm:leading-[1.2] md:leading-[1.2] lg:leading-[1.2] xl:leading-[1.2] break-words">
                Transform Your
                <span className="gradient-text block">Marketing</span>
                with AI Intelligence
              </h1>
              
              {/* Subtitle - Explains the value proposition */}
              <p className="text-sm sm:text-base lg:text-lg text-foreground/90 max-w-2xl mx-auto lg:mx-0 leading-[1.8] sm:leading-[1.8] md:leading-[1.8] lg:leading-[1.8] xl:leading-[1.8] break-words">
                ADmyBRAND AI Suite revolutionizes digital marketing with intelligent automation, 
                data-driven insights, and personalized campaigns that deliver exceptional ROI.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              {/* Primary CTA - Start Free Trial */}
              <GlassButton variant="hero" size="lg" className="text-sm sm:text-base px-6 sm:px-8 lg:px-10 py-3 sm:py-4 relative overflow-hidden group">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="relative z-10">Start Free Trial</span>
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 ml-2 relative z-10" />
              </GlassButton>
              
              {/* Secondary CTA - Watch Demo */}
              <GlassButton variant="outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8 lg:px-10 py-3 sm:py-4">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Watch Demo
              </GlassButton>
            </div>

            {/* Social Proof Section - Builds trust and credibility */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12 pt-8 sm:pt-12">
              {/* User Avatars and Trust Indicator */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex -space-x-2 sm:-space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-cta flex items-center justify-center text-white text-xs sm:text-sm font-bold border-2 border-background shadow-card">
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-foreground/85 font-medium">
                  Trusted by 2,500+ marketers
                </span>
              </div>
              
              {/* Customer Satisfaction Rating */}
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-xs sm:text-sm font-medium text-foreground">98% Customer Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image with Floating Elements */}
          <div className="relative animate-fade-in-up order-1 lg:order-2" style={{animationDelay: "0.2s"}}>
            <div className="relative">
              {/* Main Hero Image - CRM Dashboard */}
              <img
                src={basepointCrmDashboard}
                alt="ADmyBRAND AI Basepoint CRM Dashboard"
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-elegant animate-float"
              />
              
              {/* Floating Cards - Hidden on mobile for better UX */}
              <GlassCard variant="glow" padding="sm" className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 animate-float shadow-glow hidden sm:block z-10">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold text-foreground">Live Data</span>
                </div>
              </GlassCard>
              
              <GlassCard variant="glow" padding="sm" className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 animate-float shadow-glow hidden sm:block z-10" style={{animationDelay: "1s"}}>
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-bold text-accent">+247%</div>
                  <div className="text-xs text-foreground/70">ROI Increase</div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};