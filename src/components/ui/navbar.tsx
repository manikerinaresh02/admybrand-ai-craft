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
          "fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50 transition-all duration-300 backdrop-blur-xl",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold gradient-text">
                ADmyBRAND
              </span>
              <span className="text-sm text-muted-foreground ml-2 font-medium">AI Suite</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-12">
                <a href="#features" className="text-body-base text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  Features
                </a>
                <a href="#pricing" className="text-body-base text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  Pricing
                </a>
                <a href="#testimonials" className="text-body-base text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  Reviews
                </a>
                <a href="#faq" className="text-body-base text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  FAQ
                </a>
              </div>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-6">
              <GlassButton variant="ghost" className="text-body-base">
                Sign In
              </GlassButton>
              <GlassButton variant="primary" className="text-body-base">
                Start Free Trial
              </GlassButton>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <GlassButton
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </GlassButton>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-card mt-2 rounded-xl">
                <a
                  href="#features"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Reviews
                </a>
                <a
                  href="#faq"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <GlassButton variant="ghost" className="w-full">
                    Sign In
                  </GlassButton>
                  <GlassButton variant="primary" className="w-full">
                    Start Free Trial
                  </GlassButton>
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