import React from "react";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard } from "@/components/ui/glass-card";
import { Play, Sparkles, Zap, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Powered by Advanced AI</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Transform Your
                <span className="gradient-text block">Marketing</span>
                with AI Intelligence
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                ADmyBRAND AI Suite revolutionizes digital marketing with intelligent automation, 
                data-driven insights, and personalized campaigns that deliver exceptional ROI.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <GlassButton variant="hero" size="lg" className="text-lg px-8">
                Start Free Trial
                <Zap className="w-5 h-5 ml-2" />
              </GlassButton>
              <GlassButton variant="secondary" size="lg" className="text-lg px-8">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </GlassButton>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center text-white text-xs font-bold border-2 border-background">
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Trusted by 2,500+ marketers
                </span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">98% Customer Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            <div className="relative">
              <img
                src={heroImage}
                alt="ADmyBRAND AI Dashboard"
                className="w-full h-auto rounded-3xl shadow-elegant animate-float"
              />
              
              {/* Floating Cards */}
              <GlassCard variant="glow" padding="sm" className="absolute -top-4 -left-4 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="text-xs font-medium">AI Active</span>
                </div>
              </GlassCard>

              <GlassCard variant="glow" padding="sm" className="absolute -bottom-4 -right-4 animate-float" style={{animationDelay: "1s"}}>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-medium">+347% ROI</span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-hero rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};