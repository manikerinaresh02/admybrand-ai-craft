import React from "react";
import { GlassCard, GlassCardContent } from "./glass-card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { GlassButton } from "./glass-button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AnimatedCounter } from "./animated-counter";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Marketing Director",
    company: "TechFlow Inc.",
    image: "/sarah-chen.jpg", // Updated to use local image
    rating: 5,
    quote: "ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 340% increase in ROI within the first quarter. The AI insights are incredibly accurate and actionable."
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "CEO",
    company: "GrowthLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "The automation features saved us 20+ hours per week. Our team can now focus on strategy while the AI handles the heavy lifting. Best investment we've made this year."
  },
  {
    id: 3,
    name: "Emily Watson",
    title: "Digital Marketing Manager",
    company: "Innovate Co.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "The precision targeting is phenomenal. We're reaching exactly the right audience at the right time. Our conversion rates have never been higher."
  },
  {
    id: 4,
    name: "David Kim",
    title: "Marketing VP",
    company: "ScaleUp Ventures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "Customer support is outstanding, and the platform is incredibly intuitive. Even our junior marketers became power users within days."
  }
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className={`py-24 sm:py-28 lg:py-36 relative overflow-hidden transition-all duration-1000 ${
        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
                 <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-8">
          <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-2 rounded-full mb-4">
            <Quote className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium">Customer Stories</span>
          </div>
          
                     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] sm:leading-[1.2] md:leading-[1.2] lg:leading-[1.2] xl:leading-[1.2]">
             Trusted by
             <span className="gradient-text block">Marketing Leaders</span>
           </h2>
          
                     <p className="text-base sm:text-lg text-foreground/90 leading-[1.8] sm:leading-[1.8] md:leading-[1.8] lg:leading-[1.8] xl:leading-[1.8]">
             See how companies like yours are achieving remarkable results with our AI-powered marketing suite.
           </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <GlassCard 
            variant="glow" 
            className={`relative transition-all duration-700 ${
              isSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
                         <GlassCardContent className="p-8 sm:p-10 lg:p-14">
              {/* Quote Icon */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 opacity-20">
                <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-accent" />
              </div>

              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-start relative z-10">
                {/* Testimonial Content */}
                                 <div className="lg:col-span-2 space-y-6 sm:space-y-8 min-w-0 py-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                                     <blockquote className="text-base sm:text-lg lg:text-xl text-foreground leading-[1.8] sm:leading-[1.8] md:leading-[1.8] lg:leading-[1.8] xl:leading-[1.8] italic break-words">
                     "{currentTestimonial.quote}"
                   </blockquote>

                  {/* Author Info */}
                  <div>
                    <div className="font-semibold text-sm sm:text-base text-foreground">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-xs sm:text-sm text-foreground/85">
                      {currentTestimonial.title} at {currentTestimonial.company}
                    </div>
                  </div>
                </div>

                {/* Author Image */}
                <div className="lg:col-span-1 flex justify-center lg:justify-end">
                  <div className="relative">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-elegant"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-10" />
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50">
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-accent scale-125' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow Navigation */}
                <div className="flex items-center gap-2">
                  <GlassButton
                    variant="ghost"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </GlassButton>
                  <GlassButton
                    variant="ghost"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </GlassButton>
                </div>
              </div>
            </GlassCardContent>
          </GlassCard>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 max-w-4xl mx-auto">
          {[
            { number: 2500, label: "Happy Customers", suffix: "+" },
            { number: 340, label: "Average ROI Increase", suffix: "%" },
            { number: 98, label: "Customer Satisfaction", suffix: "%" },
            { number: 24, label: "Support Available", suffix: "/7" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`text-center space-y-2 transition-all duration-700 ${
                isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
                <AnimatedCounter 
                  end={stat.number} 
                  suffix={stat.suffix}
                  duration={2000}
                />
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