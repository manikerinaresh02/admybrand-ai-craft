import React, { useState } from 'react';
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from './glass-card';
import { GlassButton } from './glass-button';
import { Slider } from './slider';
import { Switch } from './switch';
import { Label } from './label';
import { Users, Zap, Shield, Calculator, TrendingUp } from 'lucide-react';

interface PricingTier {
  name: string;
  basePrice: number;
  pricePerUser: number;
  features: string[];
  color: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    basePrice: 29,
    pricePerUser: 5,
    features: ['Up to 5 users', 'Basic AI insights', 'Email support'],
    color: 'text-blue-500'
  },
  {
    name: 'Professional',
    basePrice: 99,
    pricePerUser: 8,
    features: ['Up to 25 users', 'Advanced analytics', 'Priority support', 'Custom integrations'],
    color: 'text-purple-500'
  },
  {
    name: 'Enterprise',
    basePrice: 299,
    pricePerUser: 12,
    features: ['Unlimited users', 'Full AI suite', '24/7 support', 'Custom development', 'Dedicated account manager'],
    color: 'text-green-500'
  }
];

export const PricingCalculator = () => {
  const [selectedTier, setSelectedTier] = useState(1);
  const [userCount, setUserCount] = useState(10);
  const [annualBilling, setAnnualBilling] = useState(false);
  const [customFeatures, setCustomFeatures] = useState({
    advancedAnalytics: false,
    customIntegrations: false,
    dedicatedSupport: false,
    whiteLabel: false
  });

  const currentTier = pricingTiers[selectedTier];
  const basePrice = currentTier.basePrice;
  const userPrice = currentTier.pricePerUser * userCount;
  const subtotal = basePrice + userPrice;
  
  const customFeaturesCost = Object.values(customFeatures).filter(Boolean).length * 50;
  const total = subtotal + customFeaturesCost;
  const annualDiscount = annualBilling ? total * 0.2 : 0;
  const finalTotal = total - annualDiscount;

  const monthlyPrice = annualBilling ? finalTotal / 12 : finalTotal;

  return (
    <GlassCard className="max-w-4xl mx-auto">
      <GlassCardHeader>
        <GlassCardTitle className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-2">
          <Calculator className="w-6 h-6" />
          Pricing Calculator
        </GlassCardTitle>
        <p className="text-center text-foreground/80">
          Calculate your perfect plan based on your team size and needs
        </p>
      </GlassCardHeader>
      
      <GlassCardContent className="space-y-8">
        {/* Plan Selection */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold">Select Your Plan</Label>
          <div className="grid sm:grid-cols-3 gap-4">
            {pricingTiers.map((tier, index) => (
              <GlassCard
                key={tier.name}
                variant={selectedTier === index ? "glow" : "default"}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedTier === index ? 'ring-2 ring-primary' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedTier(index)}
              >
                <GlassCardContent className="p-4 text-center">
                  <h3 className={`font-bold text-lg ${tier.color}`}>{tier.name}</h3>
                  <p className="text-sm text-foreground/70 mt-1">
                    ${tier.basePrice}/month + ${tier.pricePerUser}/user
                  </p>
                </GlassCardContent>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* User Count */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-lg font-semibold flex items-center gap-2">
              <Users className="w-5 h-5" />
              Team Size: {userCount} users
            </Label>
            <span className="text-sm text-foreground/70">
              ${currentTier.pricePerUser} per user
            </span>
          </div>
          <Slider
            value={[userCount]}
            onValueChange={(value) => setUserCount(value[0])}
            max={100}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-between p-4 glass-card rounded-xl">
          <div className="space-y-1">
            <Label className="text-lg font-semibold">Annual Billing</Label>
            <p className="text-sm text-foreground/70">Save 20% with annual billing</p>
          </div>
          <Switch
            checked={annualBilling}
            onCheckedChange={setAnnualBilling}
          />
        </div>

        {/* Custom Features */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Add-on Features
          </Label>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { key: 'advancedAnalytics', label: 'Advanced Analytics', icon: TrendingUp },
              { key: 'customIntegrations', label: 'Custom Integrations', icon: Zap },
              { key: 'dedicatedSupport', label: 'Dedicated Support', icon: Shield },
              { key: 'whiteLabel', label: 'White Label Solution', icon: Shield }
            ].map((feature) => (
              <div key={feature.key} className="flex items-center justify-between p-3 glass-card rounded-lg">
                <div className="flex items-center gap-2">
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground/70">+$50/mo</span>
                  <Switch
                    checked={customFeatures[feature.key as keyof typeof customFeatures]}
                    onCheckedChange={(checked) => 
                      setCustomFeatures(prev => ({ ...prev, [feature.key]: checked }))
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-4 p-6 glass-card rounded-xl">
          <h3 className="text-lg font-semibold">Price Breakdown</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Base Plan ({currentTier.name})</span>
              <span>${basePrice}/mo</span>
            </div>
            <div className="flex justify-between">
              <span>Users ({userCount} × ${currentTier.pricePerUser})</span>
              <span>${userPrice}/mo</span>
            </div>
            {customFeaturesCost > 0 && (
              <div className="flex justify-between">
                <span>Add-on Features</span>
                <span>+${customFeaturesCost}/mo</span>
              </div>
            )}
            {annualBilling && (
              <div className="flex justify-between text-accent">
                <span>Annual Discount (20%)</span>
                <span>-${annualDiscount.toFixed(0)}/mo</span>
              </div>
            )}
            <div className="border-t pt-2 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${monthlyPrice.toFixed(0)}/mo</span>
            </div>
            {annualBilling && (
              <div className="text-xs text-foreground/70 text-center">
                Billed annually: ${finalTotal.toFixed(0)}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <GlassButton size="lg" className="px-8">
            Start Your Free Trial
          </GlassButton>
          <p className="text-sm text-foreground/70 mt-2">
            No credit card required • 14-day free trial
          </p>
        </div>
      </GlassCardContent>
    </GlassCard>
  );
}; 