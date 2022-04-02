import { PricingData, PricingFeature, PricingTier } from '../interfaces/pricing.interface';

export class Pricing {
  getData(): PricingData {
    return { pricingTiers, features };
  }
}

export const pricingTiers: PricingTier = {
  names: ['Starter', 'Advanced', 'Enterprise'],
  prices: [3, 10, 100],
  descriptions: ['Good place to start', 'For the startup with more needs', 'for big companies with big dreams']
};

export const features: PricingFeature[] = [
  {
    heading: 'Reporting',
    features: [
      {
        name: 'Detailed Reports',
        starter: false,
        advanced: true,
        enterprise: true
      },
      {
        name: 'Weekly Data Reports',
        starter: false,
        advanced: true,
        enterprise: true
      },
      {
        name: 'Create your own reports',
        starter: true,
        advanced: true,
        enterprise: true
      }
    ]
  },
  {
    heading: 'Blog',
    features: [
      {
        name: 'Create your own blog',
        starter: true,
        advanced: true,
        enterprise: true
      },
      {
        name: 'Upload images',
        starter: false,
        advanced: true,
        enterprise: true
      }
    ]
  },
  {
    heading: 'File Storage',
    features: [
      {
        name: 'Upload files',
        starter: false,
        advanced: true,
        enterprise: false
      },
      {
        name: 'Share files with team',
        starter: true,
        advanced: true,
        enterprise: true
      },
      {
        name: 'Watch videos',
        starter: false,
        advanced: false,
        enterprise: false
      }
    ]
  },
  {
    heading: 'Application Integrations',
    features: [
      {
        name: 'Install new apps',
        starter: false,
        advanced: true,
        enterprise: true
      },
      {
        name: 'Install custom apps',
        starter: true,
        advanced: false,
        enterprise: false
      }
    ]
  }
].sort((a, b) => (a.heading > b.heading ? 1 : b.heading > a.heading ? -1 : 0));
