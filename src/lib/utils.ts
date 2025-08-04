/**
 * Utility Functions
 * 
 * This file contains common utility functions used throughout the application.
 * These utilities help with common tasks like class name management and data formatting.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn (className) Utility Function
 * 
 * A utility function that combines clsx and tailwind-merge to safely merge
 * class names while handling Tailwind CSS conflicts and conditional classes.
 * 
 * @param inputs - Array of class values (strings, objects, arrays, or undefined)
 * @returns Merged and deduplicated class string
 * 
 * Usage:
 * cn("base-class", condition && "conditional-class", { "object-class": true })
 * 
 * Benefits:
 * - Safely merges Tailwind classes without conflicts
 * - Handles conditional classes elegantly
 * - Removes duplicate classes automatically
 * - Type-safe with TypeScript
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
