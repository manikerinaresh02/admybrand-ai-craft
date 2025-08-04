/**
 * AnimatedCounter Component
 * 
 * A component that animates counting from 0 to a target number when it becomes
 * visible in the viewport. Uses requestAnimationFrame for smooth animations
 * and integrates with the useScrollAnimation hook for scroll-triggered effects.
 * 
 * Features:
 * - Smooth counting animation with configurable duration
 * - Scroll-triggered animation using Intersection Observer
 * - Customizable suffix (%, +, etc.)
 * - Performance optimized with requestAnimationFrame
 * - Responsive and accessible
 * 
 * Usage:
 * <AnimatedCounter end={1000} duration={2000} suffix="+" className="text-2xl font-bold" />
 */

import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

/**
 * Props interface for AnimatedCounter component
 */
interface AnimatedCounterProps {
  /** The target number to count up to */
  end: number;
  /** Animation duration in milliseconds (default: 2000ms) */
  duration?: number;
  /** Additional CSS classes for styling */
  className?: string;
  /** Suffix to append after the number (e.g., "+", "%", "k") */
  suffix?: string;
}

/**
 * AnimatedCounter Component Implementation
 * 
 * Renders a span element that animates from 0 to the target number
 * when it becomes visible in the viewport.
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2000, 
  className = "",
  suffix = ""
}) => {
  // Current count state that will be animated
  const [count, setCount] = useState(0);
  
  // Use scroll animation hook to detect when element is visible
  const [ref, isVisible] = useScrollAnimation(0.1);

  useEffect(() => {
    // Only start animation when element becomes visible
    if (isVisible) {
      let startTime: number | null = null;
      
      /**
       * Animation function using requestAnimationFrame
       * Calculates progress and updates count based on elapsed time
       */
      const animate = (currentTime: number) => {
        // Initialize start time on first frame
        if (!startTime) startTime = currentTime;
        
        // Calculate animation progress (0 to 1)
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Update count based on progress
        setCount(Math.floor(progress * end));
        
        // Continue animation if not complete
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      // Start the animation loop
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}; 