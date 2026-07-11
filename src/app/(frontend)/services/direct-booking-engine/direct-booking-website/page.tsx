import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/direct-booking-engine/direct-booking-website'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMeta({
    slug,
    seoDoc: await getPageSEO(slug).catch(() => null),
    fallbackTitle: 'Direct Booking Website',
  })
}

export default async function DirectBookingWebsitePage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Direct Booking Website',
              description:
                seoDoc?.meta?.description ??
                'Direct booking website design and build for UK short-term rental hosts, focused on booking flow and conversion.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
              { name: 'Direct Booking Website', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
          { name: 'Direct Booking Website', href: `/${slug}` },
        ]}
        eyebrow="Direct Booking Engine · Direct Booking Website"
        title="Direct Booking Websites Built to Convert, Not Just Look Good"
        subhead="A property-focused website with a clear path from browsing to booking — designed for STR guests, not a generic template adapted after the fact."
        overview={[
          'Most STR websites look fine but don’t convert. Visitors land, browse, and leave without booking because the path from interest to reservation was never designed properly in the first place.',
          'We design and build direct booking websites specifically for short-term rental businesses — clear property pages, a frictionless booking journey, and a mobile-first experience, backed by a structure you can actually manage yourself.',
        ]}
        problems={[
          {
            title: 'Design without a booking flow',
            body: 'A beautiful website that doesn’t guide guests towards booking is a brochure, not a conversion tool.',
          },
          {
            title: 'Confusing navigation',
            body: 'Guests who can’t quickly find what they need leave — every extra click costs you a booking.',
          },
          {
            title: 'Poor mobile experience',
            body: 'Most STR searches and bookings happen on mobile. A site that breaks on phones loses those guests.',
          },
          {
            title: 'Hard to manage after launch',
            body: 'Sites built without a sensible backend mean you need a developer for every small update.',
          },
        ]}
        whatsIncluded={[
          { title: 'Property Pages', body: 'Clear, image-led layout with amenities, details, and a booking-focused structure.' },
          { title: 'Booking Journey Design', body: 'A landing-to-booking flow with strategic CTAs and minimal friction.' },
          { title: 'Mobile-First Build', body: 'Fully responsive, fast-loading pages designed for thumb navigation.' },
          { title: 'Backend You Can Manage', body: 'Simple content updates without needing a developer every time.' },
          { title: 'Trust & Policy Pages', body: 'Clear information, policies, and social proof that build guest confidence.' },
          { title: 'Handover Documentation', body: 'A clear guide to managing your site once it’s live.' },
        ]}
        comparison={{
          withoutLabel: 'Generic Website',
          withLabel: 'STR-Focused Website',
          without: [
            'Looks good, doesn’t convert',
            'Design-first, booking second',
            'No STR-specific thinking',
            'Hard to manage without a developer',
          ],
          with: [
            'Built around the booking journey',
            'Conversion is the priority, not just visuals',
            'Designed around real guest behaviour',
            'Structured backend you can run yourself',
          ],
        }}
        whoItsFor={[
          'Airbnb hosts ready to take bookings on their own channel',
          'Serviced accommodation businesses building a proper brand',
          'Operators with multiple listings needing one clear booking hub',
          'Hosts replacing a website that looks fine but never converts',
        ]}
        testimonials={[
          {
            quote: 'The site actually gets bookings now, not just compliments on how it looks.',
            name: 'Aisha R.',
            role: 'Host, Edinburgh',
          },
          {
            quote: 'Guests find their way to booking without me having to explain anything.',
            name: 'Tom H.',
            role: 'SA Operator, Manchester',
          },
        ]}
        faqs={[
          {
            q: 'How long does it take to build?',
            a: 'Most direct booking websites are completed within 4–8 weeks from sign-off, covering discovery, design, build, integration, and launch.',
          },
          {
            q: 'Can this integrate with my current booking system?',
            a: 'Yes — we design around what you already use, whether that’s a channel manager, PMS, or a manual setup, and connect the booking engine to fit.',
          },
          {
            q: 'Do you handle multiple properties?',
            a: 'Yes — multi-property setups are where a direct booking website is especially valuable, giving guests one place to browse and book any listing.',
          },
          {
            q: 'Is it easy to manage after launch?',
            a: 'Yes — you should be able to update availability, pricing, and content yourself. We also provide handover documentation covering how everything works.',
          },
        ]}
        ctaHeading="Ready to Build a Website That Actually Gets Bookings?"
        ctaBody="Book a free call and we'll show you exactly how we'd design and build your direct booking website."
      />
    </>
  )
}
