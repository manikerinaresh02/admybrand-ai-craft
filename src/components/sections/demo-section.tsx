import React, { useState } from 'react';
import { GlassCard, GlassCardContent } from '@/components/ui/glass-card';
import { GlassButton } from '@/components/ui/glass-button';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, Zap, TrendingUp, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import businessMeetingDemo from '@/assets/business-meeting-demo.jpg';

const demoFeatures = [
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description: "Watch how our AI automatically optimizes campaigns in real-time",
    time: "0:15"
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "See comprehensive dashboards and performance insights",
    time: "0:32"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Discover how we reach your ideal customers with laser precision",
    time: "0:48"
  }
];

export const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <section 
      ref={sectionRef}
      id="demo" 
      className={`py-24 sm:py-28 lg:py-36 relative overflow-hidden transition-all duration-1000 ${
        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Product Demo</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            See ADmyBRAND AI
            <span className="gradient-text block">in Action</span>
          </h2>
          
          <p className="text-base sm:text-lg text-foreground/90">
            Watch how our AI-powered platform transforms your marketing strategy with 
            intelligent automation and data-driven insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Video Player */}
          <div className="relative">
            <GlassCard className="overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                {/* Demo Video Cover Image */}
                <img
                  src={businessMeetingDemo}
                  alt="Business Meeting Demo"
                  className="w-full h-full object-cover"
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GlassButton
                      variant="ghost"
                      size="icon"
                      onClick={togglePlay}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </GlassButton>
                    <GlassButton
                      variant="ghost"
                      size="icon"
                      onClick={toggleMute}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </GlassButton>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <GlassButton
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    >
                      <Settings className="w-4 h-4" />
                    </GlassButton>
                    <GlassButton
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    >
                      <Maximize className="w-4 h-4" />
                    </GlassButton>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            {/* Floating Stats */}
            <div className="absolute top-4 left-4 animate-float z-20">
              <GlassCard variant="glow" padding="sm" className="text-center">
                <div className="text-xs sm:text-sm font-bold text-accent">Live Demo</div>
                <div className="text-xs text-foreground/70">Real-time data</div>
              </GlassCard>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Key Features
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {demoFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 glass-card rounded-xl cursor-pointer transition-all duration-300 ${
                    currentFeature === index 
                      ? 'ring-2 ring-primary scale-105' 
                      : 'hover:scale-105'
                  }`}
                  onClick={() => setCurrentFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-background/50 to-background/20 border flex items-center justify-center ${
                        currentFeature === index ? 'text-primary' : 'text-accent'
                      }`}>
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm sm:text-base font-semibold text-foreground">
                          {feature.title}
                        </h4>
                        <span className="text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded">
                          {feature.time}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 sm:pt-6">
              <GlassButton size="lg" className="w-full sm:w-auto">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Watch Full Demo
              </GlassButton>
              <p className="text-xs sm:text-sm text-foreground/70 mt-2 text-center sm:text-left">
                15-minute comprehensive walkthrough
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 max-w-4xl mx-auto">
          {[
            { number: "15min", label: "Demo Duration" },
            { number: "3", label: "Key Features" },
            { number: "100%", label: "Interactive" },
            { number: "24/7", label: "Available" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`text-center space-y-2 transition-all duration-700 ${
                isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-foreground/85">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 