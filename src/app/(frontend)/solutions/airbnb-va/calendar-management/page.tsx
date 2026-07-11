import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/airbnb-va/calendar-management'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Calendar Management' })
}

export default async function CalendarManagementPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Calendar Management',
              description:
                seoDoc?.meta?.description ??
                'Airbnb calendar management for UK hosts, reducing gaps and keeping availability synced across platforms.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Airbnb Virtual Assistant', href: '/solutions/airbnb-va' },
              { name: 'Calendar Management', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Airbnb Virtual Assistant', href: '/solutions/airbnb-va' },
          { name: 'Calendar Management', href: `/${slug}` },
        ]}
        eyebrow="Airbnb Virtual Assistant · Calendar Management"
        title="Calendar Management That Keeps Bookings Consistent"
        subhead="Active, ongoing availability management across every platform you list on — reducing gaps instead of just reacting to them."
        overview={[
          "Your calendar isn't passive. It controls when guests can book, how long they can stay, and how your pricing behaves — and left unmanaged, it works against you rather than for you.",
          'We manage calendars as an ongoing process: identifying upcoming gaps, adjusting minimum-night rules where needed, and keeping availability synced across every platform you list on, so double bookings and unnecessary empty nights don’t happen.',
        ]}
        problems={[
          {
            title: 'Availability set once and never revisited',
            body: 'Configuration from initial setup accumulates problems as bookings and seasons change.',
          },
          {
            title: 'Rigid minimum-night rules',
            body: 'Fixed stay-length requirements create short gaps that no booking can fill.',
          },
          {
            title: 'Platforms falling out of sync',
            body: 'Disconnected calendars create conflicts, double bookings and missed availability.',
          },
          {
            title: 'No regular review cycle',
            body: 'Without ongoing monitoring, small gaps compound before anyone notices.',
          },
        ]}
        whatsIncluded={[
          { title: 'Availability Control', body: 'Dates opened, blocked and adjusted deliberately, not left on autopilot.' },
          { title: 'Gap Identification', body: 'Short gaps between bookings spotted and addressed before they go unfilled.' },
          { title: 'Minimum Night Strategy', body: 'Stay-length rules adjusted to balance flexibility with occupancy.' },
          { title: 'Multi-Platform Sync', body: 'Availability kept aligned across every platform to prevent conflicts.' },
          { title: 'Booking Window Management', body: 'How far in advance guests can book adjusted based on demand patterns.' },
          { title: 'Ongoing Monitoring', body: 'Calendars reviewed regularly, not checked in on once a month.' },
        ]}
        comparison={{
          withoutLabel: 'Unmanaged Calendar',
          withLabel: 'Actively Managed Calendar',
          without: [
            'Frequent, unaddressed empty nights',
            'Inconsistent bookings month to month',
            'Disconnected platforms and occasional conflicts',
            'Reactive fixes after gaps appear',
          ],
          with: [
            'Gaps identified and addressed proactively',
            'More stable, predictable occupancy',
            'Platforms synced in real time',
            'Strategic adjustments before problems show up',
          ],
        }}
        whoItsFor={[
          'Hosts noticing regular, unaddressed gaps in their calendar',
          'Serviced accommodation businesses needing structured, ongoing calendar oversight',
          'Operators managing calendars across multiple listings',
          'Hosts wanting more control over bookings without more day-to-day admin',
        ]}
        testimonials={[
          {
            quote: 'Our calendar used to have random one and two-night gaps everywhere. Adjusting the minimum-night rules properly closed most of them.',
            name: 'Louise G.',
            role: 'Host, Leeds',
          },
          {
            quote: 'Having someone actively watch the calendar rather than just set it up once has made occupancy far more consistent.',
            name: 'Tariq H.',
            role: 'SA Operator, London',
          },
        ]}
        faqs={[
          {
            q: 'How often do you manage calendars?',
            a: 'On an ongoing basis — calendar management is an active process, not a one-time setup.',
          },
          {
            q: 'Can you reduce booking gaps?',
            a: 'Yes, gap reduction is core to the service — we identify short gaps and adjust rules to improve the chance of them being filled.',
          },
          {
            q: 'Do you sync across platforms?',
            a: 'Yes, availability is aligned across every platform you list on to prevent conflicts and double bookings.',
          },
          {
            q: 'Can you manage multiple listings?',
            a: "Yes — we apply consistent strategies while adapting to each property's individual performance.",
          },
        ]}
        ctaHeading="Ready to Take Control of Your Calendar?"
        ctaBody="Book a free call and we'll show you where your calendar is leaking bookings."
      />
    </>
  )
}
