import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/social-media-management/platform-management'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Platform Management' })
}

export default async function PlatformManagementPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Platform Management',
              description:
                seoDoc?.meta?.description ??
                'Multi-platform social media account management for UK short-term rental hosts, keeping every channel active and aligned.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Social Media Management', href: '/services/social-media-management' },
              { name: 'Platform Management', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Social Media Management', href: '/services/social-media-management' },
          { name: 'Platform Management', href: `/${slug}` },
        ]}
        eyebrow="Social Media Management · Platform Management"
        title="Platform Management That Keeps Every Account Consistent"
        subhead="Running social media often means juggling several accounts with different requirements and no shared strategy. We bring every platform under one system."
        overview={[
          'Managing Instagram, Facebook, and other channels separately means inconsistent posting, mismatched branding, and accounts that quietly go quiet while you focus elsewhere.',
          'We manage every platform from one centralised system — same brand voice, same posting rhythm, adapted to fit each platform’s format.',
        ]}
        problems={[
          {
            title: 'Handling platforms manually',
            body: 'Logging into and managing each account separately is slow and easy to fall behind on.',
          },
          {
            title: 'Inconsistent activity across channels',
            body: 'Without a system, some platforms get attention while others go silent for months.',
          },
          {
            title: 'No shared strategy',
            body: 'Each platform pulling in a different direction weakens your overall brand.',
          },
          {
            title: 'Different content formats',
            body: 'Every platform has its own requirements, and adapting content properly takes time and skill.',
          },
        ]}
        whatsIncluded={[
          { title: 'Account Management', body: 'Every platform kept active and consistent from a single system.' },
          { title: 'Content Distribution', body: 'Posts adapted to fit each platform’s format while staying on-brand.' },
          { title: 'Profile Optimisation', body: 'Bios, images, and account details kept aligned and professional.' },
          { title: 'Activity Monitoring', body: 'Posting schedules tracked so no channel goes quiet.' },
          { title: 'Centralised Reporting', body: 'One clear view of what’s happening across every platform.' },
          { title: 'Cross-Platform Scheduling', body: 'A single calendar covering everywhere you have a presence.' },
        ]}
        comparison={{
          withoutLabel: 'Disconnected Platforms',
          withLabel: 'Managed Platforms',
          without: [
            'Inconsistent tone and style between accounts',
            'A confusing experience for your audience',
            'Low activity on some platforms',
            'A weak, fragmented brand overall',
          ],
          with: [
            'An aligned brand voice everywhere',
            'A structured, coherent experience for guests',
            'Active presence maintained on every platform',
            'One strong, consistent identity',
          ],
        }}
        whoItsFor={[
          'Hosts managing Instagram, Facebook, and other platforms simultaneously',
          'Serviced accommodation businesses wanting every channel to reflect the same brand',
          'Operators scaling beyond Airbnb who need a consistent multi-platform presence',
          'Anyone who’s lost track of their accounts and needs a structured approach',
        ]}
        testimonials={[
          {
            quote: 'We went from managing platforms manually to having everything centralised. The difference in consistency is night and day.',
            name: 'Sarah M.',
            role: 'STR Portfolio Owner, Manchester',
          },
          {
            quote: 'Our brand finally looks and feels the same everywhere. Guests have commented that our social media feels polished.',
            name: 'James T.',
            role: 'SA Operator, London',
          },
        ]}
        faqs={[
          {
            q: 'Which platforms do you manage?',
            a: 'We manage Instagram and Facebook as standard, with other platforms such as TikTok or LinkedIn added depending on your goals.',
          },
          {
            q: 'Do you post on all platforms?',
            a: 'Yes — content is distributed across every platform you’re active on, adapted in format while keeping the brand consistent.',
          },
          {
            q: 'Can you manage multiple accounts?',
            a: 'Yes, including across multiple properties or brands, all coordinated through one centralised system.',
          },
          {
            q: 'Do you optimise our profiles?',
            a: 'Yes — profile optimisation is included, covering bios, profile images, and account details to keep everything aligned.',
          },
        ]}
        ctaHeading="Ready to Manage All Your Platforms Properly?"
        ctaBody="Book a free call and we'll show you how we'd bring your accounts together."
      />
    </>
  )
}
