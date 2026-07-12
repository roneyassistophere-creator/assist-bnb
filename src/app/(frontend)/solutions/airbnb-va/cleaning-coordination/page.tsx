import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/airbnb-va/cleaning-coordination'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Cleaning Coordination' })
}

export default async function CleaningCoordinationPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Cleaning Coordination',
              description:
                seoDoc?.meta?.description ??
                'Cleaning and turnover coordination for UK short-term rental hosts, keeping every booking on schedule.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Airbnb VA', href: '/solutions/airbnb-va' },
              { name: 'Cleaning Coordination', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Airbnb VA', href: '/solutions/airbnb-va' },
          { name: 'Cleaning Coordination', href: `/${slug}` },
        ]}
        eyebrow="Airbnb VA · Cleaning Coordination"
        title="Cleaning Coordination That Keeps Every Turnover on Time"
        subhead="Cleaners scheduled, notified and tracked against your actual booking calendar — so turnovers happen on time, every time."
        overview={[
          'Cleaning issues rarely come from the cleaning itself — they come from poor coordination. Unclear schedules, late notifications and last-minute changes are what turn a routine turnover into a scramble.',
          'We coordinate cleaning around your real booking calendar: notifying teams at check-out, tracking completion, and managing changes in real time, so properties are consistently ready before the next guest arrives.',
        ]}
        problems={[
          {
            title: 'Unclear schedules',
            body: 'Without a clear timetable tied to bookings, cleaners turn up at the wrong time, or not at all.',
          },
          {
            title: 'Last-minute booking changes go uncommunicated',
            body: 'Cleaners working off outdated information miss the actual turnaround window.',
          },
          {
            title: 'No tracking of completion',
            body: 'Without visibility, you find out something went wrong only when the next guest arrives.',
          },
          {
            title: 'No backup plan',
            body: "A cancelled cleaner with no contingency can collapse an entire day's turnovers.",
          },
        ]}
        whatsIncluded={[
          { title: 'Cleaner Scheduling', body: 'Turnovers scheduled against actual check-out and check-in times, not generic slots.' },
          { title: 'Turnover Tracking', body: 'Each clean monitored from check-out confirmation through to completion.' },
          { title: 'Cleaner Communication', body: 'Clear, timely instructions sent for every turnover, with confirmations tracked.' },
          { title: 'Real-Time Change Management', body: 'Schedule adjusted immediately when bookings shift or check-outs run late.' },
          { title: 'Issue Escalation', body: 'Problems flagged and resolved before the next guest arrives, not after.' },
          { title: 'Multi-Property Coordination', body: 'Multiple teams and properties aligned and tracked from one system.' },
        ]}
        comparison={{
          withoutLabel: 'Unmanaged Cleaning',
          withLabel: 'Coordinated Cleaning',
          without: [
            'Missed or delayed cleans',
            'Manual, ad hoc communication with cleaners',
            'No visibility into turnover completion',
            'Delays cascading through the day',
          ],
          with: [
            'On-time turnovers for every booking',
            'Clear instructions and confirmations, every time',
            'Full tracking from check-out to completion',
            'Changes managed immediately, with no cascading delays',
          ],
        }}
        whoItsFor={[
          'Hosts with frequent turnovers and little room for error',
          'Serviced accommodation businesses needing professional, repeatable coordination',
          'Operators managing multiple properties and multiple cleaning teams',
          "Hosts who've had missed cleans or guest complaints about readiness",
        ]}
        testimonials={[
          {
            quote: 'We used to run everything through WhatsApp and hope for the best. Having it properly coordinated has stopped the missed cleans entirely.',
            name: 'Grace L.',
            role: 'Host, Edinburgh',
          },
          {
            quote: 'Turnovers across our three properties finally run like clockwork instead of three separate fires to put out.',
            name: 'Owen V.',
            role: 'SA Operator, Bristol',
          },
        ]}
        faqs={[
          {
            q: 'Do you manage multiple cleaners?',
            a: 'Yes, we coordinate across multiple teams and individual cleaners, assigning and scheduling correctly for every property.',
          },
          {
            q: 'What happens if a clean is delayed?',
            a: 'We monitor progress and respond proactively, managing communication and adjusting where possible to limit impact on the next arrival.',
          },
          {
            q: 'Can you handle last-minute changes?',
            a: 'Yes, schedule changes from booking updates are managed as part of the coordination process, not left to chance.',
          },
          {
            q: 'Do you track cleaning completion?',
            a: 'Yes, each turnover is tracked from check-out confirmation through to completion and property readiness.',
          },
        ]}
        ctaHeading="Ready to Fix Your Cleaning Coordination?"
        ctaBody="Book a free call and we'll show you how we'd keep every turnover on schedule."
      />
    </>
  )
}
