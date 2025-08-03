import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Phone,
  Sparkles,
  ArrowRight 
} from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API Documentation", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Changelog", href: "#" }
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "Contact", href: "#" }
  ],
  Resources: [
    { name: "Help Center", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Webinars", href: "#" },
    { name: "Status Page", href: "#" }
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Security", href: "#" },
    { name: "Compliance", href: "#" }
  ]
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" }
];

export const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <GlassCard variant="glow" className="mb-16">
          <div className="p-8 lg:p-12 text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Stay ahead with
                <span className="gradient-text"> AI insights</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get the latest marketing AI trends, tips, and exclusive insights delivered to your inbox. 
                Join 10,000+ marketers who trust our newsletter.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-accent focus:outline-none transition-colors duration-300"
                />
              </div>
              <GlassButton variant="accent">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </GlassButton>
            </div>
            
            <p className="text-xs text-muted-foreground">
              No spam, unsubscribe at any time. Read our{" "}
              <a href="#" className="text-accent hover:underline">Privacy Policy</a>
            </p>
          </div>
        </GlassCard>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 lg:gap-12 pb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold gradient-text">ADmyBRAND</span>
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Transforming marketing with AI intelligence. 
                Helping businesses achieve extraordinary results through 
                data-driven insights and automated optimization.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span>hello@admybrand.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg glass hover:bg-accent/10 transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-semibold text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 ADmyBRAND AI Suite. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>All systems operational</span>
              </div>
              <span>•</span>
              <span>SOC 2 Compliant</span>
              <span>•</span>
              <span>GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};