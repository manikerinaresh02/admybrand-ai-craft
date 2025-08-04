import * as React from "react";
import { cn } from "@/lib/utils";
import { GlassButton } from "./glass-button";
import { Menu, X } from "lucide-react";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <nav
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] glass-card border-b border-border/50 transition-all duration-300 backdrop-blur-xl",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-xl sm:text-2xl font-bold gradient-text">
                ADmyBRAND
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground ml-1 sm:ml-2 font-medium hidden sm:inline">AI Suite</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-6 lg:ml-10 flex items-baseline space-x-6 lg:space-x-12">
                {[
                  { href: "#features", label: "Features" },
                  { href: "#pricing", label: "Pricing" },
                  { href: "#testimonials", label: "Reviews" },
                  { href: "#faq", label: "FAQ" }
                ].map((item) => (
                  <a 
                    key={item.href}
                    href={item.href} 
                    className="relative group text-sm lg:text-base text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
              <GlassButton variant="ghost" size="sm" className="text-sm lg:text-base">
                Sign In
              </GlassButton>
              <GlassButton variant="primary" size="sm" className="text-sm lg:text-base">
                Start Free Trial
              </GlassButton>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <GlassButton
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </GlassButton>
            </div>
          </div>

          {/* Mobile Navigation - Enhanced with brighter background and better visibility */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 z-[200]">
              {/* Backdrop for better contrast */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
              
              {/* Menu container with enhanced glassmorphism */}
              <div className="relative px-2 pt-2 pb-3 space-y-1 sm:px-3 mx-4 mt-2 rounded-xl overflow-hidden">
                {/* Enhanced glassmorphism background with brighter appearance */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-xl border border-white/30 rounded-xl shadow-elegant" />
                
                {/* Menu items with proper contrast */}
                <div className="relative z-10 space-y-1">
                  <a
                    href="#features"
                    className="block px-3 py-3 text-sm font-semibold text-foreground hover:text-primary hover:bg-white/20 rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Features
                  </a>
                  <a
                    href="#pricing"
                    className="block px-3 py-3 text-sm font-semibold text-foreground hover:text-primary hover:bg-white/20 rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </a>
                  <a
                    href="#testimonials"
                    className="block px-3 py-3 text-sm font-semibold text-foreground hover:text-primary hover:bg-white/20 rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Reviews
                  </a>
                  <a
                    href="#faq"
                    className="block px-3 py-3 text-sm font-semibold text-foreground hover:text-primary hover:bg-white/20 rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    FAQ
                  </a>
                  
                  {/* CTA buttons with better styling */}
                  <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
                    <GlassButton 
                      variant="ghost" 
                      size="sm" 
                      className="w-full justify-center text-sm font-semibold"
                    >
                      Sign In
                    </GlassButton>
                    <GlassButton 
                      variant="primary" 
                      size="sm" 
                      className="w-full justify-center text-sm font-semibold"
                    >
                      Start Free Trial
                    </GlassButton>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
);
Navbar.displayName = "Navbar";

export { Navbar };