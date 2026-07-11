import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/direct-booking-engine/booking-engine-integration'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMeta({
    slug,
    seoDoc: await getPageSEO(slug).catch(() => null),
    fallbackTitle: 'Booking Engine Integration',
  })
}

export default async function BookingEngineIntegrationPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Booking Engine Integration',
              description:
                seoDoc?.meta?.description ??
                'Booking engine integration for UK short-term rental websites, connecting availability, payments, and platform syncing.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
              { name: 'Booking Engine Integration', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
          { name: 'Booking Engine Integration', href: `/${slug}` },
        ]}
        eyebrow="Direct Booking Engine · Booking Engine Integration"
        title="Booking Engine Integration That Actually Works"
        subhead="Connecting your website to real-time availability, secure payments, and platform syncing — so guests can book instantly, without double bookings or manual admin."
        overview={[
          'Many hosts build a website, but the booking process underneath doesn’t work properly. It looks good, but nothing is connected — guests hit a dead end and bounce back to Airbnb.',
          'We integrate a booking engine into your website that syncs availability across platforms, processes payments securely, and confirms bookings automatically — a system that works on its own, not one you have to babysit.',
        ]}
        problems={[
          {
            title: 'Availability not synced',
            body: 'Without proper syncing across platforms, double bookings become a real operational risk.',
          },
          {
            title: 'Manual updates required',
            body: 'Updating availability by hand across every platform costs hours every week.',
          },
          {
            title: 'Payments handled separately',
            body: 'Disconnected payment processes are messy, error-prone, and hard to reconcile.',
          },
          {
            title: 'No clear booking flow',
            body: 'Guests abandon a confusing process and simply rebook through Airbnb instead.',
          },
        ]}
        whatsIncluded={[
          { title: 'Booking Engine Setup', body: 'The right system selected and configured for your property count and setup.' },
          { title: 'Website Integration', body: 'Booking functionality embedded smoothly into your existing site.' },
          { title: 'Calendar & Availability Sync', body: 'OTA syncing with Airbnb, Booking.com, and others to avoid double bookings.' },
          { title: 'Payment Setup', body: 'Secure gateways with deposit and automated payment collection.' },
          { title: 'Booking Flow Optimisation', body: 'A simple, low-friction path from browsing to confirmed booking.' },
          { title: 'Testing Before Launch', body: 'Full QA across devices before a single guest sees it live.' },
        ]}
        comparison={{
          withoutLabel: 'Manual Setup',
          withLabel: 'Integrated System',
          without: [
            'Time-consuming manual updates',
            'Risk of double bookings and errors',
            'Disconnected tools and platforms',
            'Stressful day-to-day management',
          ],
          with: [
            'Automated availability and confirmations',
            'Accurate, synced calendars across platforms',
            'One connected system, not separate tools',
            'A smooth process that scales with you',
          ],
        }}
        whoItsFor={[
          'Hosts setting up direct bookings for the first time',
          'Serviced accommodation businesses needing volume without breaking',
          'Operators with multiple listings across several OTAs',
          'Hosts wanting bookings handled automatically, not chased manually',
        ]}
        testimonials={[
          {
            quote: 'No more double bookings since the calendars actually sync properly now.',
            name: 'Nadia P.',
            role: 'Host, Liverpool',
          },
          {
            quote: 'Guests book and pay without me touching anything. That’s the whole point.',
            name: 'Callum W.',
            role: 'SA Operator, Newcastle',
          },
        ]}
        faqs={[
          {
            q: 'Will this sync with Airbnb?',
            a: 'Yes — calendar syncing with Airbnb, Booking.com, and other OTAs is a core part of the setup, configured to prevent double bookings.',
          },
          {
            q: 'Can it handle multiple properties?',
            a: 'Yes — multi-property setups are where proper integration matters most, with individual availability, pricing, and booking flows managed from one connected system.',
          },
          {
            q: 'Is it difficult to manage after it’s set up?',
            a: 'No — that’s the point. Availability updates automatically, bookings confirm without intervention, and payments process securely with minimal manual input.',
          },
          {
            q: 'What booking systems do you work with?',
            a: 'We work with a range of STR-compatible booking engines and help you select the right one for your property count, platforms, and operational needs.',
          },
        ]}
        ctaHeading="Ready to Connect Your Booking System Properly?"
        ctaBody="Book a free call and we'll map out the integration your website and properties actually need."
      />
    </>
  )
}
