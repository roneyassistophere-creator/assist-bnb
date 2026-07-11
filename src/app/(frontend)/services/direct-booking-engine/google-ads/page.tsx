import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/direct-booking-engine/google-ads'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMeta({
    slug,
    seoDoc: await getPageSEO(slug).catch(() => null),
    fallbackTitle: 'Google Ads',
  })
}

export default async function GoogleAdsPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Google Ads',
              description:
                seoDoc?.meta?.description ??
                'Google Ads campaigns for UK short-term rental direct bookings, filling calendar gaps and driving demand on your own booking system.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
              { name: 'Google Ads', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
          { name: 'Google Ads', href: `/${slug}` },
        ]}
        eyebrow="Direct Booking Engine · Google Ads"
        title="Google Ads Campaigns That Fill Your Calendar, Not Just Traffic"
        subhead="Paid search campaigns built around bookings — targeting the guests actively searching for a place to stay, and sending them to a booking-ready page."
        overview={[
          'SEO takes time, and platforms depend on algorithms you don’t control. Neither gives you a lever for demand right now. Google Ads is the one channel that can put your direct booking website in front of guests immediately.',
          'We build campaigns around booking intent, not vanity clicks — targeting the right keywords, aligning ad copy with your properties, and sending traffic to a page that’s actually ready to convert it.',
        ]}
        problems={[
          {
            title: 'Empty calendar gaps',
            body: 'Unfilled dates cost revenue with no fast way to fix them through organic channels alone.',
          },
          {
            title: 'Targeting the wrong keywords',
            body: 'Broad, low-intent searches burn budget on traffic that was never going to book.',
          },
          {
            title: 'Sending traffic to poor pages',
            body: 'A slow or confusing landing page kills conversion no matter how good the ad is.',
          },
          {
            title: 'No ongoing optimisation',
            body: 'Campaigns left to run unattended waste spend and miss clear improvement opportunities.',
          },
        ]}
        whatsIncluded={[
          { title: 'Campaign Setup', body: 'Keyword targeting and structure built around real booking intent.' },
          { title: 'Ad Creation', body: 'Clear, conversion-focused copy aligned with your listings and brand.' },
          { title: 'Landing Page Alignment', body: 'Clicks sent to booking-ready pages, not a generic homepage.' },
          { title: 'Budget & Bid Management', body: 'Spend controlled and directed toward cost-per-booking, not just clicks.' },
          { title: 'Performance Monitoring', body: 'Tracking and adjustments so campaigns improve as data comes in.' },
          { title: 'Full-Funnel Review', body: 'Checking your website and booking engine are ready before spending.' },
        ]}
        comparison={{
          withoutLabel: 'Unmanaged Ads',
          withLabel: 'Managed Campaigns',
          without: [
            'Traffic-only goals, not bookings',
            'Broad or poorly targeted keywords',
            'No funnel behind the campaign',
            'Budget easy to waste on the wrong clicks',
          ],
          with: [
            'Campaigns built around bookings',
            'Intent-based, targeted keywords',
            'A full funnel aligned before launch',
            'Budget managed for efficiency',
          ],
        }}
        whoItsFor={[
          'Hosts with empty calendar gaps needing bookings now',
          'Serviced accommodation businesses with a booking-ready site needing traffic',
          'Operators with a direct booking system who now need demand',
          'Hosts wanting a faster lever alongside their longer-term SEO work',
        ]}
        testimonials={[
          {
            quote: 'Filled a slow month within days of the campaign going live.',
            name: 'Ben T.',
            role: 'Host, York',
          },
          {
            quote: 'We finally know exactly where our ad spend is going and what it’s bringing back.',
            name: 'Sana Q.',
            role: 'SA Operator, Southampton',
          },
        ]}
        faqs={[
          {
            q: 'How quickly can ads bring bookings?',
            a: 'Unlike SEO, Google Ads can generate traffic and bookings almost immediately once a campaign is live, though results depend on budget, targeting, and how ready your booking system is.',
          },
          {
            q: 'What budget is needed?',
            a: 'There’s no fixed minimum, but we typically recommend enough to gather real data — often a few hundred pounds a month — and guide you on what’s realistic for your market.',
          },
          {
            q: 'Do I need a website first?',
            a: 'Yes — ads need somewhere to send traffic. A booking-ready website with a clear journey is essential; we can help build that first if you don’t have one.',
          },
          {
            q: 'Can ads work with multiple properties?',
            a: 'Yes — we can structure campaigns to cover multiple properties or locations as separate ad groups or dedicated campaigns depending on your portfolio.',
          },
        ]}
        ctaHeading="Ready to Drive Bookings on Demand?"
        ctaBody="Book a free call and we'll map out a Google Ads campaign built around your properties and calendar."
      />
    </>
  )
}
