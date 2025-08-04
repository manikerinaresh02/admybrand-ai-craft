/**
 * useScrollAnimation Hook
 * 
 * A custom React hook that detects when an element enters the viewport
 * and triggers animations based on scroll position. Uses the Intersection Observer API
 * for optimal performance.
 * 
 * @param threshold - The percentage of the element that must be visible (0.0 to 1.0)
 * @returns [ref, isVisible] - A ref to attach to the element and a boolean indicating visibility
 * 
 * Usage:
 * const [ref, isVisible] = useScrollAnimation(0.1);
 * 
 * <div ref={ref} className={`transition-all duration-1000 ${
 *   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
 * }`}>
 *   Content that animates in when visible
 * </div>
 */

import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  // State to track whether the element is currently visible in viewport
  const [isVisible, setIsVisible] = useState(false);
  
  // Ref to attach to the DOM element we want to observe
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Create Intersection Observer to watch for element visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element intersects with viewport, mark it as visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold } // Trigger when specified percentage of element is visible
    );

    // Start observing the element if ref is available
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup: disconnect observer when component unmounts
    return () => observer.disconnect();
  }, [threshold]);

  // Return ref and visibility state for use in components
  return [ref, isVisible] as const;
};