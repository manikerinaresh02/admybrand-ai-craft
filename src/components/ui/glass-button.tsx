import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        primary: "bg-gradient-cta text-white shadow-card hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        secondary: "glass-card text-foreground hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        accent: "bg-accent text-accent-foreground shadow-card hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        ghost: "hover:bg-muted/50 hover:text-foreground transition-all duration-200",
        outline: "border border-border bg-background hover:bg-muted/30 hover:border-primary/50 transition-all duration-200",
        hero: "bg-gradient-cta text-white shadow-glow hover:shadow-elegant hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:animate-shimmer transition-all duration-200"
      },
      size: {
        sm: "h-9 px-3 text-xs",
        default: "h-11 px-6 py-2",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(glassButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };