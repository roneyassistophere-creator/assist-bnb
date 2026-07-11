import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/airbnb-va/multi-platform-listing'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Multi-Platform Listing' })
}

export default async function MultiPlatformListingPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Multi-Platform Listing',
              description:
                seoDoc?.meta?.description ??
                'Multi-platform listing management across Airbnb, Booking.com and Vrbo for UK short-term rental hosts.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Airbnb Virtual Assistant', href: '/solutions/airbnb-va' },
              { name: 'Multi-Platform Listing', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Airbnb Virtual Assistant', href: '/solutions/airbnb-va' },
          { name: 'Multi-Platform Listing', href: `/${slug}` },
        ]}
        eyebrow="Airbnb Virtual Assistant · Multi-Platform Listing"
        title="Multi-Platform Listing Management for Airbnb, Booking.com and Vrbo"
        subhead="One coordinated system across every platform you list on — synced calendars, aligned pricing, and consistent presentation, so more channels means more bookings, not more chaos."
        overview={[
          'Adding platforms sounds simple: list on Airbnb, then Booking.com, then Vrbo, and watch the bookings roll in. In practice, every extra platform adds another calendar to sync, another rate to align, and another guest inbox to monitor — and without structure, that complexity works against you.',
          'We manage your presence across every platform as one coordinated system, not a set of disconnected accounts. Calendars stay in sync, pricing stays aligned, and your listing content is adapted to how each platform actually ranks and displays properties.',
        ]}
        problems={[
          {
            title: 'Calendars fall out of sync',
            body: 'Manually updating multiple platforms after every booking is exactly how double bookings happen.',
          },
          {
            title: 'One-size-fits-all listings underperform',
            body: 'Copy-pasting the same listing to every platform ignores how differently each one ranks and displays properties.',
          },
          {
            title: 'Pricing becomes inconsistent',
            body: 'Different fee structures and guest expectations per platform mean a flat rate rarely works everywhere.',
          },
          {
            title: 'No one is watching all the channels',
            body: 'Extra platforms without extra oversight just means extra places for things to quietly go wrong.',
          },
        ]}
        whatsIncluded={[
          { title: 'Platform Setup', body: 'Listings created and structured correctly for each platform from day one.' },
          { title: 'Real-Time Calendar Sync', body: 'A booking on one platform blocks the same dates everywhere else, instantly.' },
          { title: 'Per-Platform Listing Optimisation', body: "Content and structure adjusted per platform's ranking behaviour, not copy-pasted." },
          { title: 'Pricing Alignment', body: 'Rates kept consistent and fair across every channel, accounting for fee differences.' },
          { title: 'Guest Messaging Coverage', body: 'Enquiries and bookings from every platform answered under one consistent process.' },
          { title: 'Ongoing Performance Monitoring', body: 'Each platform tracked so we know where to focus attention as things change.' },
        ]}
        comparison={{
          withoutLabel: 'Single Platform / DIY Multi-Listing',
          withLabel: 'Assist BNB',
          without: [
            'Manually juggling calendars across apps',
            'Same listing copy-pasted everywhere',
            'Double bookings a matter of time',
            'No visibility into per-platform performance',
          ],
          with: [
            'Calendars synced in real time, no manual updates',
            'Listings adapted to how each platform ranks and displays',
            'Availability blocked instantly the moment a booking lands',
            'Clear visibility into which platforms are driving results',
          ],
        }}
        whoItsFor={[
          'Hosts performing well on Airbnb who want to expand without extra admin',
          'Serviced accommodation operators running multiple channels already',
          "Hosts who've had a double booking and never want another one",
          'Anyone wanting more bookings without adding more platforms to personally manage',
        ]}
        testimonials={[
          {
            quote: 'Adding Booking.com used to feel like a risk. Now it just runs alongside Airbnb without me touching anything.',
            name: 'Emma R.',
            role: 'Host, Leeds',
          },
          {
            quote: 'Every platform is synced properly now — no more frantically checking three apps before confirming a stay.',
            name: 'Callum D.',
            role: 'SA Operator, Glasgow',
          },
        ]}
        faqs={[
          {
            q: 'Which platforms do you support?',
            a: 'Airbnb, Booking.com and Vrbo primarily, alongside direct booking sites where relevant — we can advise on which combination suits your property and location.',
          },
          {
            q: 'How do you stop double bookings?',
            a: 'Every platform is connected through a proper channel management setup, so a booking on one instantly blocks the same dates everywhere else.',
          },
          {
            q: 'Will this actually increase bookings?',
            a: 'More platforms means more visibility to different guest types, and when calendars and pricing stay aligned, that visibility converts into more consistent bookings.',
          },
          {
            q: 'Can I start with just one extra platform?',
            a: "Yes — we can add platforms one at a time and expand the setup as you're comfortable with the results.",
          },
        ]}
        ctaHeading="Ready to List Beyond One Platform, Properly?"
        ctaBody="Book a free call and we'll map out which platforms make sense for your property and how we'd manage them together."
      />
    </>
  )
}
