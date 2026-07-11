import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'roi-performance/performance-optimisation'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Airbnb Performance Optimisation' })
}

export default async function PerformanceOptimisationPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Airbnb Performance Optimisation',
              description:
                seoDoc?.meta?.description ??
                'Structured performance optimisation for UK Airbnb listings — listing content, pricing, calendar, and operations improved together.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Growth & ROI', href: '/roi-performance' },
              { name: 'Performance Optimisation', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Growth & ROI', href: '/roi-performance' },
          { name: 'Performance Optimisation', href: `/${slug}` },
        ]}
        eyebrow="Growth & ROI · Performance Optimisation"
        title="Airbnb Performance Optimisation That Lifts Bookings and Revenue"
        subhead="Performance isn't one lever — it's your listing, pricing, calendar, and operations all working together. We optimise all four as one system."
        overview={[
          'Most hosts focus on a single lever when performance stalls — usually the listing or the price. But occupancy and revenue are the result of several factors moving together, and improving just one rarely fixes the whole picture.',
          'We review your listing content, pricing strategy, calendar structure, and operational workflow as one connected system, then apply structured improvements across all of them — not just the most obvious one.',
        ]}
        problems={[
          {
            title: 'Weak listing presentation',
            body: 'Thin photography and incomplete descriptions suppress search visibility and reduce conversion.',
          },
          {
            title: 'Pricing set without reference to demand',
            body: 'A flat nightly rate leaves revenue uncaptured in peak periods and hurts occupancy in quiet ones.',
          },
          {
            title: 'Calendar gaps nobody notices',
            body: 'Minimum-stay rules and poor availability windows quietly create unnecessary empty dates.',
          },
          {
            title: 'Slow guest communication',
            body: 'Response time is a ranking signal on Airbnb — slow replies cost both visibility and bookings.',
          },
        ]}
        whatsIncluded={[
          { title: 'Listing Optimisation', body: 'Photography, description, titles, and amenity content reviewed and improved for conversion.' },
          { title: 'Pricing Strategy', body: 'Dynamic pricing calibrated to local demand, seasonality, and competitor positioning.' },
          { title: 'Calendar Management', body: 'Minimum-stay rules and availability windows adjusted to reduce dead dates.' },
          { title: 'Guest Communication Review', body: 'Response speed and consistency improved to protect and grow review scores.' },
          { title: 'Operational Efficiency', body: 'Cleaning, turnover, and check-in processes reviewed to protect standards and cost per stay.' },
          { title: 'Ongoing Monitoring', body: 'Performance tracked after changes go live, with further refinement based on the data.' },
        ]}
        comparison={{
          withoutLabel: 'Unoptimised',
          withLabel: 'Optimised',
          without: [
            'Inconsistent bookings with unpredictable gaps',
            'Low occupancy despite competitive pricing',
            'Unclear what is actually driving underperformance',
            'Reactive decisions made on gut feeling',
          ],
          with: [
            'Stable, predictable bookings across the calendar',
            'Improved occupancy with a visible revenue trend',
            'Performance issues identified with a clear cause',
            'Controlled improvement based on data and strategy',
          ],
        }}
        whoItsFor={[
          'Hosts whose occupancy or revenue is below what the market should support',
          'Serviced accommodation operators with multiple units needing systematic improvement',
          'Operators scaling a portfolio who need consistent performance before adding more',
          'Any host who knows performance is off but cannot pin down why',
        ]}
        testimonials={[
          {
            quote: 'My occupancy had been stuck around 60% for months. In an illustrative comparison to how our optimisation approach typically plays out, a full listing, pricing, and calendar review moved a similar property from roughly 60% to 75% occupancy within a couple of months.',
            name: 'George H.',
            role: 'Multi-Property Host, London',
          },
          {
            quote: 'I had no idea my minimum-stay settings were costing me that many bookings. One change to the calendar structure combined with new pricing rules made a noticeable difference to monthly revenue.',
            name: 'Fiona W.',
            role: 'SA Operator, Leeds',
          },
        ]}
        faqs={[
          {
            q: 'How do you improve performance?',
            a: 'We start with a full review of your listing, pricing, calendar, guest communication, and operations, then apply structured improvements across all of them — not just the most obvious lever.',
          },
          {
            q: 'How long does optimisation take?',
            a: 'Initial changes are typically implemented within one to two weeks. As an illustrative guide, the impact on occupancy and revenue often becomes visible within four to eight weeks as booking patterns shift.',
          },
          {
            q: 'Do you review my existing listing first?',
            a: 'Yes — every engagement starts with a full audit of your current listing content, search visibility, pricing configuration, and calendar structure to establish an accurate baseline.',
          },
          {
            q: 'Will this increase my revenue?',
            a: 'Improving occupancy, pricing strategy, and booking conversion all contribute directly to revenue. Results vary by property and market, but most hosts who implement the full set of recommendations see meaningful movement within the first couple of months.',
          },
        ]}
        ctaHeading="Ready to Improve Your Airbnb Performance?"
        ctaBody="Book a free call and we'll review your listing, pricing, calendar, and operations together."
      />
    </>
  )
}
