/**
 * GlassButton Component
 * 
 * A modern, glassmorphism-styled button component with advanced hover effects
 * and magnetic interaction. Built with class-variance-authority for flexible
 * styling and Radix UI Slot for composition.
 * 
 * Features:
 * - Glassmorphism design with backdrop blur effects
 * - Magnetic hover effect that follows mouse movement
 * - Multiple variants for different use cases
 * - Responsive sizing options
 * - Accessibility features (focus states, keyboard navigation)
 * - Smooth animations and transitions
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button Variants Configuration
 * 
 * Defines all available button styles using class-variance-authority.
 * Each variant has specific styling for different contexts and interactions.
 */
const glassButtonVariants = cva(
  // Base styles applied to all button variants
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        // Primary button - Main call-to-action with gradient background
        primary: "bg-gradient-cta text-white shadow-card hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        
        // Secondary button - Glassmorphism effect with subtle hover
        secondary: "glass-card text-foreground hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        
        // Accent button - Highlighted action with accent colors
        accent: "bg-accent text-accent-foreground shadow-card hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        
        // Ghost button - Minimal styling with hover background
        ghost: "hover:bg-muted/50 hover:text-foreground transition-all duration-200",
        
        // Outline button - Bordered style with hover effects
        outline: "border border-border bg-background hover:bg-muted/30 hover:border-primary/50 transition-all duration-200",
        
        // Hero button - Special variant for hero sections with shimmer effect
        hero: "bg-gradient-cta text-white shadow-glow hover:shadow-elegant hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:animate-shimmer transition-all duration-200"
      },
      size: {
        // Small button for compact spaces
        sm: "h-9 px-3 text-xs",
        // Default size for most use cases
        default: "h-11 px-6 py-2",
        // Large button for prominent actions
        lg: "h-12 px-8 text-base",
        // Extra large for hero sections
        xl: "h-14 px-10 text-lg",
        // Icon-only button (square)
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

/**
 * GlassButton Props Interface
 * 
 * Extends standard button props with variant configuration and
 * optional child component rendering via Radix UI Slot.
 */
export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean; // Allows rendering as different element via Slot
}

/**
 * GlassButton Component Implementation
 * 
 * Forwarded ref component with magnetic hover effect and
 * flexible rendering options.
 */
const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Use Slot for composition or default to button element
    const Comp = asChild ? Slot : "button";
    
    // State for magnetic hover effect
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    /**
     * Handle mouse movement for magnetic effect
     * Calculates the distance from center and applies subtle transform
     */
    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        // Apply subtle movement (10% of mouse distance)
        setPosition({ x: x * 0.1, y: y * 0.1 });
      }
    };

    /**
     * Reset position when mouse leaves button
     */
    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    return (
      <Comp
        ref={buttonRef}
        className={cn(glassButtonVariants({ variant, size, className }))}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        {...props}
      />
    );
  }
);

// Set display name for React DevTools
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };