import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

const faqs = [
  {
    question: "How quickly can I see results with ADmyBRAND AI Suite?",
    answer: "Most customers see measurable improvements within the first 2-3 weeks of implementation. Our AI algorithms start learning your audience patterns immediately, with significant optimization gains typically visible within 30 days. Some clients have reported ROI increases of over 200% in their first quarter."
  },
  {
    question: "Do I need technical expertise to use the platform?",
    answer: "Not at all! ADmyBRAND AI Suite is designed for marketers, not engineers. Our intuitive interface guides you through setup, and our AI handles the complex technical aspects automatically. We also provide comprehensive onboarding, training resources, and 24/7 support to ensure your success."
  },
  {
    question: "How does the AI learn and improve my campaigns?",
    answer: "Our AI uses advanced machine learning algorithms to analyze your campaign data, audience behavior, market trends, and competitive landscape. It continuously tests different approaches, learns from performance data, and automatically optimizes targeting, timing, messaging, and budget allocation to maximize your ROI."
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. We maintain SOC 2 Type II compliance and use bank-level encryption (AES-256) for all data. Your information is never shared with third parties, and we follow strict data privacy regulations including GDPR and CCPA. You maintain full ownership and control of your data at all times."
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer: "Yes! We offer native integrations with 100+ popular marketing tools including Salesforce, HubSpot, Google Ads, Facebook Ads, Mailchimp, Shopify, and more. Our API also allows custom integrations. Our team can help set up integrations during onboarding to ensure seamless workflow continuity."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including 24/7 chat and email support, detailed documentation, video tutorials, live webinars, and one-on-one onboarding sessions. Professional and Enterprise plans include priority support and dedicated account managers. Our average response time is under 2 hours."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no cancellation fees or penalties. We also offer a 30-day money-back guarantee if you're not completely satisfied. When you cancel, you'll retain access to your account until the end of your current billing period, and you can export all your data."
  },
  {
    question: "How does pricing work for team accounts?",
    answer: "Our pricing is based on features and contact limits, not team size. You can invite unlimited team members to collaborate on your account at no extra cost. Each plan includes role-based permissions so you can control access levels. Enterprise plans include advanced team management and admin controls."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">FAQ</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Frequently Asked
            <span className="gradient-text block">Questions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <GlassCard variant="elevated" className="overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/30">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5 transition-colors duration-300">
                    <span className="text-left font-medium text-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16">
          <GlassCard variant="glow" className="max-w-2xl mx-auto">
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground">
                  Our expert support team is here to help you succeed. 
                  Get personalized assistance and detailed answers to your specific questions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton variant="primary">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </GlassButton>
                <GlassButton variant="secondary">
                  Schedule a Demo
                </GlassButton>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                <div>📧 Average response: 2 hours</div>
                <div>💬 24/7 chat support</div>
                <div>📞 Phone support (Pro+)</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};