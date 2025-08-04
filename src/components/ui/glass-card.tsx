/**
 * GlassCard Component System
 * 
 * A comprehensive card component system built with glassmorphism design principles.
 * Features multiple variants, hover effects, and sub-components for flexible layouts.
 * 
 * Features:
 * - Glassmorphism effects with backdrop blur and transparency
 * - Multiple variants for different use cases
 * - Hover animations and transitions
 * - Sub-components for structured content layout
 * - Responsive design with flexible padding options
 * - Enhanced visual effects with gradient overlays
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * GlassCard Variants Configuration
 * 
 * Defines all available card styles using class-variance-authority.
 * Each variant has specific styling and hover effects for different contexts.
 */
const glassCardVariants = cva(
  // Base styles applied to all card variants
  "rounded-2xl border transition-all duration-500 relative overflow-hidden group",
  {
    variants: {
      variant: {
        // Default variant - Standard glassmorphism with subtle hover
        default: "glass-card hover:shadow-glow hover:scale-105 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5",
        
        // Elevated variant - Prominent shadow with lift effect
        elevated: "glass-card shadow-elegant hover:shadow-glow hover:-translate-y-1 hover:scale-105",
        
        // Flat variant - Minimal styling with subtle background
        flat: "bg-background/80 backdrop-blur-sm border-border hover:bg-background/90 hover:scale-105",
        
        // Glow variant - Animated glow effect for special content
        glow: "glass-card shadow-glow hover:shadow-elegant animate-glow hover:scale-105",
        
        // Pricing variant - Optimized for pricing cards with cursor pointer
        pricing: "glass-card hover:shadow-glow hover:scale-[1.02] hover:-translate-y-2 cursor-pointer hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5",
        
        // Feature variant - Enhanced shadow for feature highlights
        feature: "glass-card hover:shadow-card-elegant hover:-translate-y-1 hover:scale-105"
      },
      padding: {
        // No padding for custom layouts
        none: "p-0",
        // Small padding for compact content
        sm: "p-4",
        // Default padding for most use cases
        default: "p-6",
        // Large padding for spacious layouts
        lg: "p-8",
        // Extra large padding for hero content
        xl: "p-10"
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "default"
    }
  }
);

/**
 * GlassCard Props Interface
 * 
 * Extends standard div props with variant configuration and
 * requires children for content rendering.
 */
export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  children: React.ReactNode;
}

/**
 * Main GlassCard Component
 * 
 * Forwarded ref component with glassmorphism effects and
 * enhanced hover overlays for visual depth.
 */
const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, padding, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(glassCardVariants({ variant, padding, className }))}
        {...props}
      >
        {/* Enhanced glassmorphism overlay - Top gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Enhanced glassmorphism overlay - Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content wrapper with proper z-index */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";

/**
 * GlassCardHeader Component
 * 
 * Header section for card content with consistent spacing and typography.
 * Used for titles, badges, and introductory content.
 */
const GlassCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
GlassCardHeader.displayName = "GlassCardHeader";

/**
 * GlassCardTitle Component
 * 
 * Title element for card headers with consistent typography styling.
 * Renders as an h3 element for proper semantic structure.
 */
const GlassCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
GlassCardTitle.displayName = "GlassCardTitle";

/**
 * GlassCardDescription Component
 * 
 * Description text component with muted styling for secondary content.
 * Used for subtitles, captions, and explanatory text.
 */
const GlassCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
GlassCardDescription.displayName = "GlassCardDescription";

/**
 * GlassCardContent Component
 * 
 * Main content area with consistent padding and spacing.
 * Removes top padding to avoid double spacing with header.
 */
const GlassCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
GlassCardContent.displayName = "GlassCardContent";

/**
 * GlassCardFooter Component
 * 
 * Footer section for actions, buttons, and bottom content.
 * Removes top padding to avoid double spacing with content.
 */
const GlassCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
GlassCardFooter.displayName = "GlassCardFooter";

export {
  GlassCard,
  GlassCardHeader,
  GlassCardFooter,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  glassCardVariants
};