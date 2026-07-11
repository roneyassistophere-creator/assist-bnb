import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/airbnb-va/guest-vetting'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Guest Vetting' })
}

export default async function GuestVettingPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Guest Vetting',
              description:
                seoDoc?.meta?.description ??
                'Guest vetting and booking screening for UK short-term rental hosts, reducing risk before check-in.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Airbnb Virtual Assistant', href: '/services/airbnb-va' },
              { name: 'Guest Vetting', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Airbnb Virtual Assistant', href: '/services/airbnb-va' },
          { name: 'Guest Vetting', href: `/${slug}` },
        ]}
        eyebrow="Airbnb Virtual Assistant · Guest Vetting"
        title="Guest Vetting That Protects Your Property Before Check-In"
        subhead="A structured review of every booking request — not a gut feeling — so risk is filtered out before it ever reaches your door."
        overview={[
          "Not every booking is a good booking. More bookings doesn't automatically mean better outcomes, and the wrong guest can cost more than several good stays combined.",
          "We review every booking request before it's confirmed — checking details, communication, and risk signals — so you know who's staying in your property before they arrive, not after something's gone wrong.",
        ]}
        problems={[
          {
            title: 'No screening process at all',
            body: 'Every booking accepted without review is an unknown risk taken on blind.',
          },
          {
            title: 'Over-reliance on platform ratings alone',
            body: 'Reviews are useful, but new accounts and unreviewed guests are common and tell you nothing.',
          },
          {
            title: 'No clear booking criteria',
            body: 'Without defined rules, what counts as an acceptable booking is guesswork.',
          },
          {
            title: 'Rushed approvals under pressure to fill gaps',
            body: 'Fast approvals to fill a calendar gap often create slower, more expensive problems.',
          },
        ]}
        whatsIncluded={[
          { title: 'Booking Detail Review', body: "Guest count, stay purpose and duration checked against your property's suitability." },
          { title: 'Communication Assessment', body: 'Response style and clarity reviewed for red flags before confirming.' },
          { title: 'Risk Signal Checks', body: 'Last-minute requests, vague details and inconsistencies flagged before acceptance.' },
          { title: 'Clarifying Questions', body: 'Unclear bookings followed up with direct, professional questions before a decision is made.' },
          { title: 'Accept/Decline Handling', body: 'Decisions communicated clearly and in line with platform policy, protecting your standing.' },
          { title: 'Consistent Process Every Time', body: "The same structured review applied to every booking, not just the ones that feel risky." },
        ]}
        comparison={{
          withoutLabel: 'No Vetting',
          withLabel: 'Structured Vetting',
          without: [
            'Bookings accepted without review',
            'Reliant on platform ratings alone',
            'Inconsistent, gut-feel decisions',
            'Issues discovered mid-stay',
          ],
          with: [
            'Every booking reviewed before confirmation',
            'Risk signals checked beyond the platform profile',
            'A consistent process applied every time',
            'Fewer surprises once guests arrive',
          ],
        }}
        whoItsFor={[
          'Hosts concerned about property damage or unauthorised parties',
          'Serviced accommodation businesses needing professional screening, not ad hoc approvals',
          'Operators managing bookings daily who need consistency at volume',
          'Hosts wanting more control over who stays, without adding to their own workload',
        ]}
        testimonials={[
          {
            quote: 'We had a bad experience with an unvetted booking early on. Having every request reviewed properly since has been a huge relief.',
            name: 'Dominic P.',
            role: 'Host, Liverpool',
          },
          {
            quote: "A few bookings get politely declined now that wouldn't have before — and it's made every stay since noticeably smoother.",
            name: 'Nadia S.',
            role: 'SA Operator, Manchester',
          },
        ]}
        faqs={[
          {
            q: 'Do you check every booking?',
            a: 'Yes — every request is reviewed before confirmation, regardless of platform or booking type.',
          },
          {
            q: 'Can you decline risky bookings on my behalf?',
            a: "Yes, we manage declines professionally and in line with platform policy when a booking doesn't meet your criteria.",
          },
          {
            q: 'What happens if a booking looks unclear?',
            a: 'We send a clear, professional message requesting more information before making a decision.',
          },
          {
            q: 'Will vetting reduce my bookings?',
            a: 'Not meaningfully — it filters out high-risk requests, not good ones, so the right guests still book with fewer issues during their stays.',
          },
        ]}
        ctaHeading="Ready to Know Exactly Who's Staying in Your Property?"
        ctaBody="Book a free call and we'll walk through how we'd set up a vetting process around your bookings."
      />
    </>
  )
}
