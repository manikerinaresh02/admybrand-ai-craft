import React from 'react';
import { GlassCard, GlassCardContent } from '@/components/ui/glass-card';
import { GlassButton } from '@/components/ui/glass-button';
import { ArrowRight, Calendar, Clock, User, BookOpen, Video, Download, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import aiDashboardImage from '@/assets/ai-dashboard-2025.jpg';

const blogPosts = [
  {
    title: "10 AI Marketing Trends That Will Dominate 2025",
    excerpt: "Discover the latest AI-powered marketing strategies that are reshaping how businesses connect with their customers.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "AI Trends",
    image: aiDashboardImage,
    featured: true
  },
  {
    title: "How to Build a Data-Driven Marketing Strategy",
    excerpt: "Learn how to leverage customer data to create personalized campaigns that drive real results.",
    author: "Marcus Rodriguez",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
  },
  {
    title: "The Complete Guide to Marketing Automation",
    excerpt: "Everything you need to know about automating your marketing workflows for maximum efficiency.",
    author: "Emily Watson",
    date: "Dec 10, 2024",
    readTime: "12 min read",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
  }
];

const resources = [
  {
    title: "Marketing ROI Calculator",
    description: "Calculate your marketing return on investment with our comprehensive tool.",
    type: "Tool",
    icon: Download,
    color: "text-blue-500"
  },
  {
    title: "AI Marketing Playbook",
    description: "A complete guide to implementing AI in your marketing strategy.",
    type: "Guide",
    icon: BookOpen,
    color: "text-purple-500"
  },
  {
    title: "Customer Journey Mapping",
    description: "Learn how to map and optimize your customer's journey for better conversions.",
    type: "Template",
    icon: ExternalLink,
    color: "text-green-500"
  },
  {
    title: "Marketing Analytics Dashboard",
    description: "Free template for tracking and visualizing your marketing metrics.",
    type: "Template",
    icon: Download,
    color: "text-orange-500"
  }
];

export const BlogSection = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);

  return (
    <section 
      ref={sectionRef}
      id="blog" 
      className={`py-24 sm:py-28 lg:py-36 relative overflow-hidden transition-all duration-1000 ${
        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Resources & Insights</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Latest Insights &
            <span className="gradient-text block">Resources</span>
          </h2>
          
          <p className="text-base sm:text-lg text-foreground/90">
            Stay ahead of the curve with expert insights, practical guides, and free resources 
            to help you master AI-powered marketing.
          </p>
        </div>

        {/* Featured Blog Post */}
        <div className="mb-12 sm:mb-16">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <GlassCard key={index} variant="glow" className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-foreground/70 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-foreground/80 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <GlassButton variant="outline" className="w-fit">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </GlassButton>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <GlassCard 
              key={index}
              className={`group transition-all duration-700 ${
                isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent text-white px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <GlassCardContent className="p-6">
                <div className="flex items-center gap-4 text-xs text-foreground/70 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <h4 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h4>
                
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <GlassButton variant="ghost" size="sm" className="p-0 h-auto">
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </GlassButton>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>

        {/* Resources Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Free Resources
            </h3>
            <p className="text-base text-foreground/80 max-w-2xl mx-auto">
              Download our free tools, templates, and guides to accelerate your marketing success.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {resources.map((resource, index) => (
              <GlassCard 
                key={index}
                className={`group cursor-pointer transition-all duration-700 ${
                  isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <GlassCardContent className="p-6 text-center space-y-4">
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-background/50 to-background/20 border flex items-center justify-center ${resource.color}`}>
                    <resource.icon className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">
                      {resource.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                      {resource.type}
                    </span>
                    <GlassButton variant="ghost" size="sm" className="p-0 h-auto">
                      <Download className="w-3 h-3" />
                    </GlassButton>
                  </div>
                </GlassCardContent>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <GlassButton size="lg" className="px-8">
            View All Resources
            <ArrowRight className="w-4 h-4 ml-2" />
          </GlassButton>
          <p className="text-sm text-foreground/70 mt-2">
            New content added weekly
          </p>
        </div>
      </div>
    </section>
  );
}; 