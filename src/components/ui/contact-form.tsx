/**
 * ContactForm Component
 * 
 * A comprehensive contact form component with validation, error handling,
 * and submission feedback. Built with React Hook Form and Zod validation.
 * 
 * Features:
 * - Form validation with Zod schema
 * - Real-time error display
 * - Loading states during submission
 * - Responsive design with glassmorphism styling
 * - Accessible form controls with proper labels
 * - Success/error feedback to users
 * 
 * Form Fields:
 * - Full Name (required, min 2 characters)
 * - Email Address (required, valid email format)
 * - Phone Number (optional)
 * - Message (required, min 10 characters)
 */

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from "./glass-card";
import { GlassButton } from "./glass-button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Label } from "./label";
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";

/**
 * Zod Schema for Form Validation
 * 
 * Defines validation rules for each form field:
 * - name: Required, minimum 2 characters
 * - email: Required, valid email format
 * - phone: Optional field
 * - message: Required, minimum 10 characters
 */
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// TypeScript type derived from the Zod schema
type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * ContactForm Component Implementation
 * 
 * Renders a contact form with validation, error handling, and submission logic.
 * Uses React Hook Form for form state management and Zod for validation.
 */
export const ContactForm = () => {
  // React Hook Form setup with Zod validation
  const {
    register,           // Function to register form fields
    handleSubmit,       // Function to handle form submission
    formState: { errors, isSubmitting }, // Form state including errors and loading
    reset,              // Function to reset form after successful submission
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema), // Use Zod for validation
  });

  /**
   * Form submission handler
   * 
   * Processes form data and simulates API call.
   * Shows success/error feedback to user.
   */
  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call with 1-second delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log form data (in production, send to API)
      console.log("Form submitted:", data);
      
      // Reset form to initial state
      reset();
      
      // Show success message to user
      alert("Thank you! Your message has been sent successfully.");
    } catch (error) {
      // Log error for debugging
      console.error("Error submitting form:", error);
      
      // Show error message to user
      alert("Sorry, there was an error sending your message. Please try again.");
    }
  };

  return (
    // Main form container with glassmorphism styling
    <GlassCard className="max-w-2xl mx-auto">
      {/* Form Header */}
      <GlassCardHeader>
        <GlassCardTitle className="text-2xl sm:text-3xl font-bold text-center">
          Get in Touch
        </GlassCardTitle>
        <p className="text-center text-foreground/80">
          Ready to transform your marketing? Let's discuss how ADmyBRAND AI can help your business grow.
        </p>
      </GlassCardHeader>
      
      {/* Form Content */}
      <GlassCardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name and Email Fields - Side by side on larger screens */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Full Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Enter your full name"
                className={errors.name ? "border-destructive" : ""}
              />
              {/* Error message display */}
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>
            
            {/* Email Address Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className={errors.email ? "border-destructive" : ""}
              />
              {/* Error message display */}
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>
          
          {/* Phone Number Field - Optional */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number (Optional)
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="Enter your phone number"
            />
          </div>
          
          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Message *
            </Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Tell us about your marketing needs..."
              rows={5}
              className={errors.message ? "border-destructive" : ""}
            />
            {/* Error message display */}
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>
          
          {/* Submit Button with Loading State */}
          <GlassButton
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? (
              // Loading state with spinner
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              // Default state with send icon
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </div>
            )}
          </GlassButton>
        </form>
      </GlassCardContent>
    </GlassCard>
  );
}; 