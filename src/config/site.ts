import { Home, Layers, Users, BookOpen, Mail, TrendingUp, HelpCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type NavGrandchild = {
  label: string
  href: string
}

export type NavChild = {
  label: string
  href: string
  children?: NavGrandchild[]
}

export type NavLink = {
  label: string
  href: string
  external?: boolean
  icon?: LucideIcon
  children?: NavChild[]
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
    { label: 'Home', href: '/', icon: Home },
    {
      label: 'Services',
      href: '/services',
      icon: Layers,
      children: [
        { label: 'Airbnb Virtual Assistant', href: '/services/airbnb-va' },
        { label: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
        { label: 'Lead Generation', href: '/services/lead-generation' },
        { label: 'Social Media Management', href: '/services/social-media-management' },
        { label: 'Systems Building', href: '/services/systems-building' },
      ],
    },
    {
      label: 'Growth & ROI',
      href: '/roi-performance',
      icon: TrendingUp,
      children: [
        { label: 'ROI Calculator', href: '/roi-performance/roi-calculator' },
        { label: 'Enter the Airbnb Market', href: '/roi-performance/enter-airbnb-market' },
        { label: 'Consultancy & Training', href: '/roi-performance/consultancy-and-training' },
        { label: 'Performance Optimisation', href: '/roi-performance/performance-optimisation' },
      ],
    },
    {
      label: 'About',
      href: '/about',
      icon: Users,
      children: [
        { label: 'About Us', href: '/about' },
        { label: 'Why Us', href: '/about/why-us' },
        { label: 'Our Team', href: '/about/our-team' },
        { label: 'Our Clients', href: '/about/our-clients' },
        { label: 'Client Reviews', href: '/about/reviews' },
        { label: 'Case Studies', href: '/about/case-studies' },
      ],
    },
    { label: 'Blog', href: '/blog', icon: BookOpen },
    { label: 'FAQ', href: '/faq', icon: HelpCircle },
    { label: 'Contact', href: '/contact', icon: Mail },
  ],

  // ─── Footer links ──────────────────────────────────────────────────────────
  footerLinks: [
    {
      heading: 'Services',
      links: [
        { label: 'Airbnb Virtual Assistant', href: '/services/airbnb-va' },
        { label: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
        { label: 'Lead Generation', href: '/services/lead-generation' },
        { label: 'Social Media Management', href: '/services/social-media-management' },
        { label: 'Systems Building', href: '/services/systems-building' },
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
