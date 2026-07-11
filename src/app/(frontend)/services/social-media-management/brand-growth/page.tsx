import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/social-media-management/brand-growth'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Brand Growth' })
}

export default async function BrandGrowthPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Brand Growth',
              description:
                seoDoc?.meta?.description ??
                'Brand growth support for UK short-term rental businesses, building recognition and trust beyond any single listing.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Social Media Management', href: '/services/social-media-management' },
              { name: 'Brand Growth', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Social Media Management', href: '/services/social-media-management' },
          { name: 'Brand Growth', href: `/${slug}` },
        ]}
        eyebrow="Social Media Management · Brand Growth"
        title="Build a Brand That Goes Beyond Just Listings"
        subhead="Listings get bookings. Brands build businesses. We help you become a recognisable, trusted name — not just another property on a platform."
        overview={[
          'Most STR businesses have no defined identity beyond a property address: no consistent visuals, no clear message, nothing for guests to remember or recommend.',
          'We build brand growth into your social media over the long term — consistent visuals, clear positioning, and content that compounds into real recognition and trust.',
        ]}
        problems={[
          {
            title: 'No clear identity',
            body: 'No name, visuals, or voice beyond the listing means there’s nothing to recognise or remember.',
          },
          {
            title: 'Inconsistent visuals',
            body: 'Photos and posts that vary by season or platform quietly destroy the trust brand building depends on.',
          },
          {
            title: 'Reliance on Airbnb alone',
            body: 'No direct relationship with guests leaves you exposed to platform and algorithm changes.',
          },
          {
            title: 'No audience of your own',
            body: 'Without an owned channel, every booking starts from zero with a stranger on a platform.',
          },
        ]}
        whatsIncluded={[
          { title: 'Brand Positioning', body: 'A clear definition of who you are, who you serve, and what sets you apart.' },
          { title: 'Visual Identity', body: 'A consistent look across content, listings, and communications.' },
          { title: 'Messaging Alignment', body: 'A consistent voice that tells guests why to choose you.' },
          { title: 'Platform Presence', body: 'Sustained, visible activity that steadily builds recognition.' },
          { title: 'Content Alignment', body: 'Every post reinforcing your identity, not just filling a schedule.' },
          { title: 'Direct Booking Support', body: 'Brand trust that makes guests comfortable booking outside Airbnb.' },
        ]}
        comparison={{
          withoutLabel: 'Listing-Based',
          withLabel: 'Brand-Based',
          without: [
            'Growth entirely dependent on platforms',
            'Low recognition — guests forget who you are',
            'Inconsistent, one-off content with no through-line',
            'Growth capped by what one listing can achieve',
          ],
          with: [
            'A brand that drives its own growth',
            'A recognisable identity guests remember',
            'Structured content that builds over time',
            'A brand that scales as you add properties',
          ],
        }}
        whoItsFor={[
          'Hosts wanting to reduce reliance on Airbnb and grow direct bookings',
          'Serviced accommodation businesses wanting a professional, established presence',
          'Operators scaling a portfolio who need a brand that scales with them',
          'Hosts thinking long term about the value of a recognisable name',
        ]}
        testimonials={[
          {
            quote: 'Before this, I was just a listing. Now I have a brand people recognise, and guests message me directly to book.',
            name: 'Claire L.',
            role: 'STR Host, Bath',
          },
          {
            quote: 'Everything is aligned now — social, website, listings. It looks like a real business.',
            name: 'James P.',
            role: 'SA Operator, Birmingham',
          },
        ]}
        faqs={[
          {
            q: 'How long does brand growth take?',
            a: 'It’s a long-term investment — most hosts see meaningful recognition and enquiry growth within three to six months of consistent activity.',
          },
          {
            q: 'Can you work with our current brand?',
            a: 'Yes — we build on whatever assets exist already, whether that’s a logo, colours, or just a property name, rather than starting from scratch unless a rebrand is genuinely needed.',
          },
          {
            q: 'Does this help with direct bookings?',
            a: 'Yes. A recognised, trusted brand is what gives guests the confidence to book outside Airbnb — it’s the asset that makes direct booking sustainable.',
          },
          {
            q: 'Is this only about social media?',
            a: 'No. Brand growth extends across your social presence, listing photos, website, and guest communications — social is simply the primary channel for building visibility.',
          },
        ]}
        ctaHeading="Ready to Build a Brand That Grows Your STR Business?"
        ctaBody="Book a free call and we'll show you how we'd approach your brand."
      />
    </>
  )
}
