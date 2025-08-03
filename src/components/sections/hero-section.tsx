import React from "react";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard } from "@/components/ui/glass-card";
import { Play, Sparkles, Zap, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute top-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 -right-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}} />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="text-center lg:text-left space-y-12 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Powered by Advanced AI</span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-heading-md sm:text-heading-lg lg:text-heading-xl font-bold text-foreground leading-tight">
                Transform Your
                <span className="gradient-text block">Marketing</span>
                with AI Intelligence
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                ADmyBRAND AI Suite revolutionizes digital marketing with intelligent automation, 
                data-driven insights, and personalized campaigns that deliver exceptional ROI.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <GlassButton variant="hero" size="xl" className="text-body-lg px-10 py-4">
                Start Free Trial
                <Zap className="w-5 h-5 ml-2" />
              </GlassButton>
              <GlassButton variant="outline" size="xl" className="text-body-lg px-10 py-4">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </GlassButton>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-12 pt-12">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center text-white text-sm font-bold border-2 border-background shadow-card">
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  Trusted by 2,500+ marketers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground">98% Customer Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            <div className="relative">
              <img
                src={heroImage}
                alt="ADmyBRAND AI Dashboard"
                className="w-full h-auto rounded-2xl shadow-elegant animate-float"
              />
              
              {/* Floating Cards */}
              <GlassCard variant="glow" padding="sm" className="absolute -top-6 -left-6 animate-float shadow-glow">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">AI Active</span>
                </div>
              </GlassCard>

              <GlassCard variant="glow" padding="sm" className="absolute -bottom-6 -right-6 animate-float shadow-glow" style={{animationDelay: "1s"}}>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-foreground">+347% ROI</span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-cta rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};