import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/airbnb-va/property-maintenance'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Property Maintenance' })
}

export default async function PropertyMaintenancePage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Property Maintenance',
              description:
                seoDoc?.meta?.description ??
                'Property maintenance coordination for UK short-term rental hosts, from issue logging to contractor management.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Airbnb VA', href: '/solutions/airbnb-va' },
              { name: 'Property Maintenance', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Airbnb VA', href: '/solutions/airbnb-va' },
          { name: 'Property Maintenance', href: `/${slug}` },
        ]}
        eyebrow="Airbnb VA · Property Maintenance"
        title="Property Maintenance Coordination That Keeps Issues Under Control"
        subhead="Every issue logged, prioritised and tracked to resolution, with contractors coordinated on your behalf — so nothing sits unresolved and no one needs chasing."
        overview={[
          "Maintenance issues that aren't tracked properly don't go away — they resurface, usually at the worst possible time, mid-stay, with a guest waiting on a fix.",
          "We log every reported issue, prioritise it correctly, and coordinate the right contractor to resolve it — managing communication end to end so you're not the one chasing tradespeople between bookings.",
        ]}
        problems={[
          {
            title: 'Issues reported but never tracked',
            body: 'Without a system, problems get mentioned once and then forgotten until they resurface.',
          },
          {
            title: 'No clear priority order',
            body: 'Urgent, guest-affecting issues get treated the same as minor cosmetic ones.',
          },
          {
            title: 'Contractors left to chase',
            body: "Coordinating multiple trades yourself eats time you don't have between bookings.",
          },
          {
            title: 'No pattern tracking',
            body: "The same fault keeps recurring because nobody is looking at it across stays.",
          },
        ]}
        whatsIncluded={[
          { title: 'Issue Logging & Tracking', body: "Every reported problem recorded and monitored until it's resolved." },
          { title: 'Contractor Coordination', body: 'The right trades contacted, scheduled and managed around your booking calendar.' },
          { title: 'Priority Management', body: 'Urgent, guest-affecting issues separated from routine ones and escalated appropriately.' },
          { title: 'Guest Impact Handling', body: 'Guest expectations managed clearly if an issue arises mid-stay.' },
          { title: 'Preventative Pattern Tracking', body: 'Recurring issues flagged across properties before they become expensive.' },
          { title: 'Multi-Property Coordination', body: 'Issues tracked individually per property, without overlap or confusion.' },
        ]}
        comparison={{
          withoutLabel: 'Untracked Maintenance',
          withLabel: 'Coordinated Maintenance',
          without: [
            'Issues reported but never followed up',
            "No clear sense of what's urgent",
            'You chasing contractors yourself',
            'Recurring faults going unnoticed',
          ],
          with: [
            'Every issue logged from report to resolution',
            'Urgent issues escalated immediately',
            'Contractors coordinated on your behalf',
            'Recurring problems flagged before they escalate',
          ],
        }}
        whoItsFor={[
          'Hosts tired of chasing contractors between bookings',
          'Serviced accommodation businesses needing a proper issue-tracking process',
          'Operators managing maintenance across multiple properties',
          "Hosts who've had a mid-stay issue turn into a bad review",
        ]}
        testimonials={[
          {
            quote: 'We had a recurring boiler issue at one flat that kept getting patched instead of properly fixed. Once it was tracked properly, the pattern was obvious and we finally sorted it.',
            name: 'Katie N.',
            role: 'Host, Sheffield',
          },
          {
            quote: "I don't call plumbers or electricians myself anymore. It just gets handled and I hear about it once it's done.",
            name: 'Devon R.',
            role: 'SA Operator, Liverpool',
          },
        ]}
        faqs={[
          {
            q: 'How quickly are issues handled?',
            a: "Urgent issues affecting a guest's stay are escalated immediately; non-urgent items are logged and scheduled before they become a problem.",
          },
          {
            q: 'Do you coordinate contractors?',
            a: "Yes, we contact the relevant trades, schedule repairs, and manage all communication so you don't need to chase anyone.",
          },
          {
            q: 'Can you manage maintenance across multiple properties?',
            a: 'Yes, issues are tracked individually per property without overlap or confusion.',
          },
          {
            q: "What happens if an issue comes up during a guest's stay?",
            a: 'We manage guest communication to set expectations and coordinate a response with minimal disruption to their stay.',
          },
        ]}
        ctaHeading="Ready to Stop Chasing Contractors Yourself?"
        ctaBody="Book a free call and we'll show you how we'd track and coordinate maintenance across your properties."
      />
    </>
  )
}
