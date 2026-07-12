import {
  Home,
  Layers,
  Users,
  Mail,
  TrendingUp,
  Globe,
  Star,
  Settings,
  BarChart2,
  ArrowUpRight,
  Briefcase,
  Info,
  UserCheck,
  Building2,
  FileText,
  MessageSquare,
  ShieldCheck,
  CalendarCheck,
  Calendar,
  Sparkles,
  Package,
  Wrench,
  LayoutGrid,
  PenLine,
  SlidersHorizontal,
  Camera,
  Palette,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type NavGrandchild = {
  label: string
  href: string
}

export type NavChild = {
  label: string
  href: string
  icon?: LucideIcon
  children?: NavGrandchild[]
}

export type NavLink = {
  label: string
  href: string
  external?: boolean
  icon?: LucideIcon
  children?: NavChild[]
  /** Renders as a wide multi-column mega menu instead of the standard narrow dropdown. */
  megaMenu?: boolean
  /** Lays out this dropdown's children in a grid with this many columns instead of a single list. */
  columns?: number
}

export type FooterLinkGroup = {
  heading: string
  links: { label: string; href: string }[]
}

export type SocialLink = {
  platform: string
  href: string
  icon: 'twitter' | 'linkedin' | 'github' | 'instagram' | 'facebook' | 'youtube'
}

export type SiteConfig = {
  name: string
  tagline: string
  description: string
  url: string
  logo: {
    text: string
    imagePath?: string
  }
  seo: {
    titleTemplate: string
    defaultTitle: string
    defaultDescription: string
    defaultOgImage: string
    twitterHandle: string
    googleVerification: string
    bingVerification: string
  }
  nav: NavLink[]
  footerLinks: FooterLinkGroup[]
  contact: {
    email: string
    phone?: string
    address?: string
  }
  social: SocialLink[]
  org: {
    legalName: string
    foundingYear: number
    areaServed: string
  }
}

const siteConfig: SiteConfig = {
  // ─── Identity ──────────────────────────────────────────────────────────────
  name: 'Assist BNB',
  tagline: 'Your team for short-term rental growth.',
  description:
    'Assist BNB is a UK-based Airbnb and short-term rental operations partner — guest communication, cleaning coordination, listing optimisation, and the backend systems that keep an STR business running.',
  url: process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000',

  // ─── Logo ──────────────────────────────────────────────────────────────────
  logo: {
    text: 'Assist BNB',
    // imagePath: '/logo.svg',
  },

  // ─── SEO defaults ──────────────────────────────────────────────────────────
  seo: {
    titleTemplate: '%s | Assist BNB',
    defaultTitle: 'Assist BNB — Airbnb & Short-Term Rental Operations',
    defaultDescription:
      'Assist BNB handles guest communication, cleaning coordination, listing optimisation, and backend systems for UK Airbnb and short-term rental hosts.',
    defaultOgImage: '/website-template-OG.webp',
    twitterHandle: '@assistbnb',
    googleVerification: process.env.GOOGLE_SITE_VERIFICATION ?? '',
    bingVerification: process.env.BING_SITE_VERIFICATION ?? '',
  },

  // ─── Navigation ────────────────────────────────────────────────────────────
  nav: [
    {
      label: 'Airbnb VA',
      href: '/solutions/airbnb-va',
      icon: Home,
      columns: 2,
      children: [
        { label: 'Guest Communication', href: '/solutions/airbnb-va/guest-communication', icon: MessageSquare },
        { label: 'Guest Vetting', href: '/solutions/airbnb-va/guest-vetting', icon: ShieldCheck },
        { label: 'Guest Check-In & Check-Out', href: '/solutions/airbnb-va/guest-check-in-check-out', icon: CalendarCheck },
        { label: 'Calendar Management', href: '/solutions/airbnb-va/calendar-management', icon: Calendar },
        { label: 'Cleaning Coordination', href: '/solutions/airbnb-va/cleaning-coordination', icon: Sparkles },
        { label: 'Linen & Toiletries Management', href: '/solutions/airbnb-va/linen-toiletries', icon: Package },
        { label: 'Property Maintenance', href: '/solutions/airbnb-va/property-maintenance', icon: Wrench },
        { label: 'Multi-Platform Listing', href: '/solutions/airbnb-va/multi-platform-listing', icon: LayoutGrid },
        { label: 'Listing Creation & Optimisation', href: '/solutions/airbnb-va/listing-creation-optimisation', icon: PenLine },
        { label: 'Pricing Optimisation', href: '/solutions/airbnb-va/pricing-optimisation', icon: SlidersHorizontal },
        { label: 'Professional Photography', href: '/solutions/airbnb-va/professional-photography', icon: Camera },
        { label: 'Monthly Finance Reporting', href: '/solutions/airbnb-va/monthly-finance-reporting', icon: BarChart2 },
        { label: 'Graphical Content Creation', href: '/solutions/airbnb-va/graphical-content-creation', icon: Palette },
      ],
    },
    {
      label: 'Solutions',
      href: '/solutions',
      icon: Layers,
      megaMenu: true,
      children: [
        {
          label: 'Direct Booking Engine',
          href: '/solutions/direct-booking-engine',
          icon: Globe,
          children: [
            { label: 'Direct Booking Website', href: '/solutions/direct-booking-engine/direct-booking-website' },
            { label: 'Direct Booking Conversions', href: '/solutions/direct-booking-engine/direct-booking-conversions' },
            { label: 'Booking Engine Integration', href: '/solutions/direct-booking-engine/booking-engine-integration' },
            { label: 'Payment Setup', href: '/solutions/direct-booking-engine/payment-setup' },
            { label: 'SEO & Organic Growth', href: '/solutions/direct-booking-engine/seo-organic-growth' },
            { label: 'Google Ads', href: '/solutions/direct-booking-engine/google-ads' },
          ],
        },
        {
          label: 'Lead Generation',
          href: '/solutions/lead-generation',
          icon: TrendingUp,
          children: [
            { label: 'Landlord Leads', href: '/solutions/lead-generation/landlord-leads' },
            { label: 'Guest Leads', href: '/solutions/lead-generation/guest-leads' },
          ],
        },
        {
          label: 'Social Media Management',
          href: '/solutions/social-media-management',
          icon: Star,
          children: [
            { label: 'Content Creation', href: '/solutions/social-media-management/content-creation' },
            { label: 'Posting & Scheduling', href: '/solutions/social-media-management/posting-and-scheduling' },
            { label: 'Brand Growth', href: '/solutions/social-media-management/brand-growth' },
            { label: 'Community Engagement', href: '/solutions/social-media-management/community-engagement' },
            { label: 'Platform Management', href: '/solutions/social-media-management/platform-management' },
          ],
        },
        {
          label: 'Systems Building',
          href: '/solutions/systems-building',
          icon: Settings,
          children: [
            { label: 'STR Business Setup', href: '/solutions/systems-building/str-business-setup' },
            { label: 'STR Automation', href: '/solutions/systems-building/str-automation' },
            { label: 'SOP Creation', href: '/solutions/systems-building/sop-creation' },
            { label: 'Team Structuring', href: '/solutions/systems-building/team-structuring' },
          ],
        },
      ],
    },
    {
      label: 'Growth & ROI',
      href: '/roi-performance',
      icon: TrendingUp,
      children: [
        { label: 'ROI Calculator', href: '/roi-performance/roi-calculator', icon: BarChart2 },
        { label: 'Enter the Airbnb Market', href: '/roi-performance/enter-airbnb-market', icon: ArrowUpRight },
        { label: 'Consultancy & Training', href: '/roi-performance/consultancy-and-training', icon: Briefcase },
        { label: 'Performance Optimisation', href: '/roi-performance/performance-optimisation', icon: TrendingUp },
      ],
    },
    {
      label: 'About',
      href: '/about',
      icon: Users,
      children: [
        { label: 'About Us', href: '/about', icon: Users },
        { label: 'Why Us', href: '/about/why-us', icon: Info },
        { label: 'Our Team', href: '/about/our-team', icon: UserCheck },
        { label: 'Our Clients', href: '/about/our-clients', icon: Building2 },
        { label: 'Client Reviews', href: '/about/reviews', icon: Star },
        { label: 'Case Studies', href: '/about/case-studies', icon: FileText },
      ],
    },
    { label: 'Contact', href: '/contact', icon: Mail },
  ],

  // ─── Footer links ──────────────────────────────────────────────────────────
  footerLinks: [
    {
      heading: 'Solutions',
      links: [
        { label: 'Airbnb VA', href: '/solutions/airbnb-va' },
        { label: 'Direct Booking Engine', href: '/solutions/direct-booking-engine' },
        { label: 'Lead Generation', href: '/solutions/lead-generation' },
        { label: 'Social Media Management', href: '/solutions/social-media-management' },
        { label: 'Systems Building', href: '/solutions/systems-building' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Why Us', href: '/about/why-us' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  ],

  // ─── Contact ───────────────────────────────────────────────────────────────
  contact: {
    email: 'hello@assistbnb.com',
    phone: '+44 20 0000 0000',
    address: '86-90 Paul Street, London, EC2A 4NE, United Kingdom',
  },

  // ─── Social ────────────────────────────────────────────────────────────────
  social: [
    { platform: 'Twitter / X', href: 'https://twitter.com/assistbnb', icon: 'twitter' },
    { platform: 'LinkedIn', href: 'https://linkedin.com/company/assistbnb', icon: 'linkedin' },
    { platform: 'Instagram', href: 'https://instagram.com/assistbnb', icon: 'instagram' },
  ],

  // ─── Organization (used for JSON-LD structured data) ───────────────────────
  org: {
    legalName: 'Assist BNB Ltd',
    foundingYear: 2021,
    areaServed: 'United Kingdom',
  },
}

export default siteConfig
