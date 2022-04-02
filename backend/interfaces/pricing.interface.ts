export interface PricingData {
  pricingTiers: PricingTier;
  features: PricingFeature[];
}

export interface PricingTier {
  names: string[];
  prices: number[];
  descriptions: string[];
}

export interface PricingFeature {
  heading: string;
  features: Feature[];
}
export interface Feature {
  name: string;
  starter: boolean;
  advanced: boolean;
  enterprise: boolean;
}
