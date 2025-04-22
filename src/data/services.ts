import { ServiceCategory } from '../types';

export const services: ServiceCategory[] = [
  {
    title: 'Google Business Profile Solutions',
    problem: 'Struggling to show up on Google Maps or get more calls?',
    solution: 'Let our team fully optimize and manage your Google Business Profile so you rank higher, look trustworthy, and get more local customers—24/7 support included.',
    ctaText: 'Boost My Google Ranking',
    ctaLink: '#google-boost',
    themeColor: 'blue',
    services: [
      {
        title: 'Cleanup & Boost',
        price: '€60 (One-Time)',
        description: 'Make a powerful first impression and climb Google Maps. We audit, clean, and supercharge your profile for local visibility—photos, details, and credibility, all done-for-you.',
        benefits: [
          'Show up higher on local search',
          'Earn instant trust from new clients',
          'Outrank sloppy competitors'
        ]
      },
      {
        title: 'Done-For-You Management',
        price: '€240/year',
        description: 'Updates, photo uploads, business hours, and reputation—all managed 24/7. You message, we do it. Instant updates and daily monitoring for ongoing peace of mind.',
        benefits: [
          'Unlimited changes—on call, always',
          'Never miss an update or opportunity',
          'Dominate local search, stay ahead'
        ]
      }
    ]
  },
  {
    title: 'Meta (Instagram & Facebook) Presence',
    problem: 'Is your Instagram or Facebook profile holding back your brand?',
    solution: 'We transform your Meta presence—revamp your visuals, bio, highlights, and even handle your posting strategy, so you can turn scrollers into real clients.',
    ctaText: 'Upgrade My Socials',
    ctaLink: '#meta-upgrade',
    themeColor: 'purple',
    services: [
      {
        title: 'Social Brand Glow-Up',
        price: '€170 (One-Time)',
        description: 'Full profile makeover—photos, bios, highlights, and layout—so your social brand actually attracts & converts.',
        benefits: [
          'Consistent, credible, and compelling',
          'Offers & CTAs your audience can\'t miss',
          'End the confusion, boost engagement'
        ]
      },
      {
        title: 'Fully Managed Social Media',
        price: 'from €25/post or €700/mo (Unlimited)',
        description: 'No more content stress. We plan, create, post, and manage—tailored to your brand strategy, audience, and goals. Choose pay-per-post or full-service monthly.',
        benefits: [
          'Hands-off content & growth',
          'Professional, persuasive posts',
          'Inbox, comments, and audience engagement handled'
        ]
      },
      {
        title: 'Meta Ads Management (Add-On)',
        price: 'Custom',
        description: 'Unlock local leads with laser-focused ad campaigns. We craft the message, build the creative, handle the budget, and send you the results—no guesswork.',
        benefits: [
          'Target the right locals',
          'Campaigns designed for ROI',
          'Stress-free traffic & leads'
        ]
      }
    ]
  },
  {
    title: 'Landing Pages that Convert',
    problem: 'Missing out on leads because your site isn\'t converting?',
    solution: 'Get a professionally designed, high-converting landing page—custom built and delivered fast, ready to turn visitors into buyers.',
    ctaText: 'Get My High-Converting Page',
    ctaLink: '#landing-page',
    themeColor: 'green',
    services: [
      {
        title: 'Lightning-Fast Landing Page',
        price: '€379',
        description: 'Custom-built, mobile-first landing pages, delivered in 24-72h. Built to sell and integrate seamlessly with your socials and Google profile.',
        benefits: [
          'Loads lightning-fast, looks stunning',
          'SEO and sales copy included',
          'Ready for ads, bookings, and calls'
        ]
      }
    ]
  }
];