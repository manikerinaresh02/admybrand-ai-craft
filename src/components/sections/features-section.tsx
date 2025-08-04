import React from "react";
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Clock,
  Sparkles,
  TrendingUp 
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Advanced machine learning algorithms analyze your data to provide actionable insights and predict campaign performance.",
    color: "text-blue-500"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Identify and reach your ideal customers with laser-focused targeting based on behavior, demographics, and preferences.",
    color: "text-purple-500"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor campaign performance with comprehensive dashboards and real-time metrics that matter to your business.",
    color: "text-green-500"
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "Streamline your marketing workflows with intelligent automation that adapts to customer behavior and market trends.",
    color: "text-yellow-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance, end-to-end encryption, and robust data protection protocols.",
    color: "text-red-500"
  },
  {
    icon: Clock,
    title: "24/7 Optimization",
    description: "Continuous optimization algorithms work around the clock to improve your campaigns and maximize ROI automatically.",
    color: "text-cyan-500"
  }
];

export const FeaturesSection = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);
  
  return (
    <section 
      ref={sectionRef}
      id="features" 
      className={`py-20 sm:py-24 lg:py-32 relative overflow-hidden transition-all duration-1000 ${
        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium">Powerful Features</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Everything You Need to
            <span className="gradient-text block">Dominate Your Market</span>
          </h2>
          
          <p className="text-base sm:text-lg text-foreground/90">
            Our comprehensive AI suite provides all the tools and insights you need 
            to create, optimize, and scale successful marketing campaigns.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <GlassCard 
              key={feature.title}
              variant="feature"
              className={`group transition-all duration-700 ${
                isSectionVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <GlassCardContent className="space-y-4">
                {/* Icon */}
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-background/50 to-background/20 border ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color}`} />
                  </div>
                  <div className={`absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${feature.color.replace('text-', 'bg-').replace('-500', '-500/20')} blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="flex items-center text-xs sm:text-sm text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>Learn more</span>
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </div>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-foreground/85 mb-4 sm:mb-6">
            Ready to see these features in action?
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-hero flex items-center justify-center text-white text-xs font-bold border-2 border-background">
                  ★
                </div>
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium">
              Join 2,500+ satisfied customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};