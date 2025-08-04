import React from "react";
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { PricingCalculator } from "@/components/ui/pricing-calculator";
import { Check, Star, Sparkles, Crown, Rocket } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses and startups",
    icon: Sparkles,
    features: [
      "Up to 5 campaigns",
      "10,000 monthly contacts",
      "Basic AI insights",
      "Email support",
      "Standard templates",
      "Basic analytics"
    ],
    highlighted: false,
    buttonVariant: "secondary" as const
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Ideal for growing businesses and teams",
    icon: Crown,
    features: [
      "Unlimited campaigns",
      "100,000 monthly contacts",
      "Advanced AI insights",
      "Priority support",
      "Custom templates",
      "Advanced analytics",
      "A/B testing",
      "API access"
    ],
    highlighted: true,
    buttonVariant: "hero" as const,
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For large organizations with custom needs",
    icon: Rocket,
    features: [
      "Everything in Professional",
      "Unlimited contacts",
      "Custom AI models",
      "24/7 phone support",
      "White-label solution",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee"
    ],
    highlighted: false,
    buttonVariant: "accent" as const
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 sm:py-28 lg:py-36 relative overflow-hidden bg-background">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-secondary/3" />
      <div className="absolute top-1/2 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 glass-card px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Simple Pricing</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Choose Your
            <span className="gradient-text block">Perfect Plan</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-foreground/90 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no long-term contracts. 
            Cancel anytime with our 30-day money-back guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto pt-4">
          {pricingPlans.map((plan, index) => (
            <GlassCard
              key={plan.name}
              variant={plan.highlighted ? "glow" : "pricing"}
              className={`relative animate-fade-in-up transition-all duration-300 hover:shadow-glow hover:scale-[1.02] ${plan.highlighted ? 'scale-[1.02] border-primary/30 mt-6 mb-6' : ''}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-cta text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-card">
                    {plan.badge}
                  </div>
                </div>
              )}

              <GlassCardHeader className="text-center pb-6 sm:pb-8">
                {/* Icon */}
                <div className="mx-auto mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50">
                    <plan.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                </div>

                {/* Plan Name */}
                <GlassCardTitle className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
                  {plan.name}
                </GlassCardTitle>

                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-foreground/85 text-base sm:text-lg ml-1">
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-foreground/85">
                  {plan.description}
                </p>
              </GlassCardHeader>

              <GlassCardContent className="space-y-6 sm:space-y-8">
                {/* Features List */}
                <ul className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <GlassButton 
                  variant={plan.buttonVariant} 
                  className="w-full"
                  size="default"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </GlassButton>

                {/* Additional Info */}
                <p className="text-xs sm:text-sm text-foreground/80 text-center">
                  {plan.name === "Enterprise" ? "Custom pricing available" : "No credit card required"}
                </p>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>

        {/* Pricing Calculator */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <PricingCalculator />
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12 sm:mt-16 space-y-6">
          <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Need a custom solution?
            </h3>
            <p className="text-sm sm:text-base text-foreground/85 mb-4 sm:mb-6">
              We offer tailored plans for enterprises with specific requirements. 
              Contact our sales team to discuss your needs.
            </p>
            <GlassButton variant="outline" size="default">
              Schedule a Demo
            </GlassButton>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-foreground/80">
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              <span>30-day money back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};