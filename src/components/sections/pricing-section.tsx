import React from "react";
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
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
    <section id="pricing" className="py-32 relative overflow-hidden bg-background">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-secondary/3" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-8">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Simple Pricing</span>
          </div>
          
          <h2 className="text-heading-md sm:text-heading-lg font-bold text-foreground">
            Choose Your
            <span className="gradient-text block">Perfect Plan</span>
          </h2>
          
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no long-term contracts. 
            Cancel anytime with our 30-day money-back guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <GlassCard
              key={plan.name}
              variant={plan.highlighted ? "glow" : "pricing"}
              className={`relative animate-fade-in-up transition-all duration-300 hover:shadow-glow hover:scale-[1.02] ${plan.highlighted ? 'scale-[1.05] border-primary/30' : ''}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-cta text-white px-6 py-2 rounded-full text-sm font-medium shadow-card">
                    {plan.badge}
                  </div>
                </div>
              )}

              <GlassCardHeader className="text-center pb-8">
                {/* Icon */}
                <div className="mx-auto mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Plan Name */}
                <GlassCardTitle className="text-2xl font-bold mb-4 text-foreground">
                  {plan.name}
                </GlassCardTitle>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-lg ml-1">
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-body-base">
                  {plan.description}
                </p>
              </GlassCardHeader>

              <GlassCardContent className="space-y-8">
                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <Check className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-body-base text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <GlassButton 
                  variant={plan.buttonVariant} 
                  className="w-full"
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </GlassButton>

                {/* Additional Info */}
                <p className="text-sm text-muted-foreground text-center">
                  {plan.name === "Enterprise" ? "Custom pricing available" : "No credit card required"}
                </p>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 space-y-6">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Need a custom solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer tailored plans for enterprises with specific requirements. 
              Contact our sales team to discuss your needs.
            </p>
            <GlassButton variant="outline">
              Schedule a Demo
            </GlassButton>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>30-day money back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};