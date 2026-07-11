import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/direct-booking-engine/direct-booking-conversions'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMeta({
    slug,
    seoDoc: await getPageSEO(slug).catch(() => null),
    fallbackTitle: 'Direct Booking Conversions',
  })
}

export default async function DirectBookingConversionsPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Direct Booking Conversions',
              description:
                seoDoc?.meta?.description ??
                'Conversion rate optimisation for direct booking websites, turning existing STR website traffic into completed bookings.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
              { name: 'Direct Booking Conversions', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
          { name: 'Direct Booking Conversions', href: `/${slug}` },
        ]}
        eyebrow="Direct Booking Engine · Direct Booking Conversions"
        title="Turn Your Existing Website Traffic Into Actual Bookings"
        subhead="Getting visitors isn't usually the problem — completing the booking is. We improve the flow, structure, and CTAs that decide whether a visit becomes a reservation."
        overview={[
          'Many STR websites get visitors but fail to convert them. Guests arrive, browse, and leave without booking — and the usual instinct is to chase more traffic. More often, the real issue is the booking journey itself.',
          'We audit your existing website, identify exactly where guests drop off, and make targeted improvements to flow, calls to action, and page structure — without needing a full rebuild.',
        ]}
        problems={[
          {
            title: 'Unclear booking process',
            body: 'Guests can’t work out how to actually complete a booking, so they leave and go elsewhere.',
          },
          {
            title: 'Too many steps',
            body: 'Every extra click or form field is a chance for a guest to abandon the process partway through.',
          },
          {
            title: 'Weak calls to action',
            body: 'Booking buttons that are hidden, small, or generic simply don’t drive action.',
          },
          {
            title: 'Lack of trust signals',
            body: 'Without clear policies and reassurance, guests hesitate right at the point of payment.',
          },
        ]}
        whatsIncluded={[
          { title: 'Booking Flow Optimisation', body: 'Fewer steps and less friction between landing and completed booking.' },
          { title: 'CTA Placement Strategy', body: 'Booking buttons positioned and designed to be seen and acted on.' },
          { title: 'Page Structure Improvements', body: 'Clearer hierarchy and less clutter so guests decide faster.' },
          { title: 'Mobile Optimisation', body: 'A booking flow that works as well on a phone as it does on desktop.' },
          { title: 'Trust-Building Elements', body: 'Clearer policies and social proof placed where hesitation happens.' },
          { title: 'Ongoing Review', body: 'Changes grounded in how guests actually behave on your site.' },
        ]}
        comparison={{
          withoutLabel: 'Low-Conversion Website',
          withLabel: 'Optimised Website',
          without: [
            'Confusing booking journey',
            'Low completion rate on existing traffic',
            'Weak or inconsistent CTAs',
            'High drop-off at every step',
          ],
          with: [
            'Clear, guided path to booking',
            'More of your existing traffic converts',
            'Strong, consistent calls to action',
            'Reduced drop-off at each stage',
          ],
        }}
        whoItsFor={[
          'Hosts with traffic but low booking numbers',
          'Serviced accommodation businesses wanting their site to perform, not just exist',
          'Operators with an existing direct booking website that underperforms',
          'Anyone improving overall direct booking performance, not just building from scratch',
        ]}
        testimonials={[
          {
            quote: 'Same traffic, noticeably more bookings once the flow was fixed.',
            name: 'Karan S.',
            role: 'Host, Glasgow',
          },
          {
            quote: 'We didn’t need a new website — just a much clearer path to booking.',
            name: 'Lucy F.',
            role: 'SA Operator, Bristol',
          },
        ]}
        faqs={[
          {
            q: 'How do I know my website isn’t converting?',
            a: 'The clearest sign is traffic without bookings. If visitors arrive but don’t complete a booking, something in the journey is causing drop-off, and that’s what we review.',
          },
          {
            q: 'Can you improve an existing website?',
            a: 'Yes — most of our conversion work is on existing sites. We audit the current state and make targeted improvements rather than starting from scratch.',
          },
          {
            q: 'Does this guarantee more bookings?',
            a: 'We can’t guarantee specific numbers, but removing friction from the booking journey consistently improves how much of your existing traffic converts.',
          },
          {
            q: 'Do I need traffic first?',
            a: 'Yes — this works on existing traffic. If your site gets very little traffic, building that up should come first; if you have traffic but low bookings, this is where we focus.',
          },
        ]}
        ctaHeading="Ready to Turn Visitors Into Bookings?"
        ctaBody="Book a free call and we'll show you exactly where your booking flow is losing guests."
      />
    </>
  )
}
