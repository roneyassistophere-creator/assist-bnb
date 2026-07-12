import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/airbnb-va/guest-check-in-check-out'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Guest Check-In & Check-Out' })
}

export default async function GuestCheckInCheckOutPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Guest Check-In & Check-Out',
              description:
                seoDoc?.meta?.description ??
                'Guest check-in and check-out management for UK short-term rental hosts, from arrival to cleaner handover.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Airbnb VA', href: '/solutions/airbnb-va' },
              { name: 'Guest Check-In & Check-Out', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Airbnb VA', href: '/solutions/airbnb-va' },
          { name: 'Guest Check-In & Check-Out', href: `/${slug}` },
        ]}
        eyebrow="Airbnb VA · Guest Check-In & Check-Out"
        title="Guest Check-In and Check-Out Management That Removes the Stress"
        subhead="Clear instructions, coordinated timing, and a smooth handover to your cleaning team — every arrival and departure managed end to end."
        overview={[
          "Most guest experience problems trace back to check-in: unclear instructions, late arrivals, or a property that isn't quite ready. This is where a stay starts well — or starts to go wrong.",
          'We manage the full guest flow from pre-arrival messaging through to check-out and cleaner handover, so instructions go out on time, access issues get resolved immediately, and turnovers start without delay.',
        ]}
        problems={[
          {
            title: 'Instructions sent too late',
            body: 'Guests arrive confused because access details came the night before, or the day of.',
          },
          {
            title: 'No arrival window coordination',
            body: 'Without a confirmed window, the property may not be ready when guests turn up.',
          },
          {
            title: 'Cleaners notified late',
            body: "Turnovers start behind schedule when cleaning teams aren't told at the right moment.",
          },
          {
            title: 'No check-out reminders',
            body: "Guests without a nudge overstay, pushing the whole day's schedule back.",
          },
        ]}
        whatsIncluded={[
          { title: 'Pre-Arrival Messaging', body: 'Clear instructions and arrival details sent well ahead of time, every stay.' },
          { title: 'Check-In Support', body: 'Guest entry guided and access issues resolved immediately, whatever the arrival time.' },
          { title: 'Mid-Stay Monitoring', body: 'Guest queries during the stay answered promptly and appropriately.' },
          { title: 'Check-Out Reminders', body: 'Departure reminders sent on schedule so timing stays predictable.' },
          { title: 'Cleaner Handover', body: 'Cleaning teams notified at check-out so turnovers begin without delay.' },
          { title: 'End-to-End Tracking', body: 'Every step from booking confirmation to turnover completion followed through.' },
        ]}
        comparison={{
          withoutLabel: 'Unstructured Handovers',
          withLabel: 'Managed Guest Flow',
          without: [
            'Instructions sent late or unclear',
            'No confirmed arrival window',
            'Cleaners notified after the fact',
            'Guests overstaying with no reminder',
          ],
          with: [
            'Instructions sent early and clearly, every time',
            'Arrivals coordinated and access issues resolved fast',
            'Cleaners notified the moment check-out happens',
            'Predictable timing across every turnover',
          ],
        }}
        whoItsFor={[
          'Hosts managing multiple check-ins on the same day',
          'Serviced accommodation businesses needing a professional, repeatable guest flow',
          'Operators with frequent turnovers and little margin for error',
          'Hosts whose reviews mention confusing or delayed arrivals',
        ]}
        testimonials={[
          {
            quote: 'Guests used to call me directly over access issues. Now that’s resolved before it ever reaches me.',
            name: 'Fiona A.',
            role: 'Host, Sheffield',
          },
          {
            quote: 'Turnovers run so much tighter now that cleaners are notified the second a guest checks out.',
            name: 'Marcus B.',
            role: 'SA Operator, Birmingham',
          },
        ]}
        faqs={[
          {
            q: 'Do you handle late check-ins?',
            a: 'Yes — guest communication and check-in support cover the full arrival window, including late arrivals.',
          },
          {
            q: 'Can you coordinate with our existing cleaners?',
            a: 'Yes, cleaning teams are notified at check-out and turnover timing is aligned with your schedule.',
          },
          {
            q: "What happens if a guest can't get in?",
            a: 'We resolve access issues directly and immediately, escalating to you only when genuinely necessary.',
          },
          {
            q: 'Are reminders sent automatically?',
            a: 'Yes — pre-arrival messages, check-in instructions and check-out reminders all go out on schedule.',
          },
        ]}
        ctaHeading="Ready for Smoother Arrivals and Departures?"
        ctaBody="Book a free call and we'll show you how we'd manage your guest flow end to end."
      />
    </>
  )
}
