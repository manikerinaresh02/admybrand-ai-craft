import React from "react";
import { GlassCard, GlassCardContent } from "./glass-card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { GlassButton } from "./glass-button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Marketing Director",
    company: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b422?w=150&h=150&fit=crop&crop=face",
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-4">
            <Quote className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Customer Stories</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Trusted by
            <span className="gradient-text block">Marketing Leaders</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            See how companies like yours are achieving remarkable results with our AI-powered marketing suite.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <GlassCard variant="glow" className="relative animate-fade-in-up">
            <GlassCardContent className="p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-20">
                <Quote className="w-16 h-16 text-accent" />
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">
                {/* Testimonial Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed italic">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <div className="font-semibold text-foreground">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-muted-foreground">
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
                      className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-elegant"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-10" />
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-border/50">
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
                    <ChevronLeft className="w-5 h-5" />
                  </GlassButton>
                  <GlassButton
                    variant="ghost"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </GlassButton>
                </div>
              </div>
            </GlassCardContent>
          </GlassCard>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: "2,500+", label: "Happy Customers" },
            { number: "340%", label: "Average ROI Increase" },
            { number: "98%", label: "Customer Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-2xl lg:text-3xl font-bold gradient-text">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};