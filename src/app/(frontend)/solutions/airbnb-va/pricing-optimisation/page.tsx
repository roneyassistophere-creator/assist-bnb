import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/airbnb-va/pricing-optimisation'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Pricing Optimisation' })
}

export default async function PricingOptimisationPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Pricing Optimisation',
              description:
                seoDoc?.meta?.description ??
                'Airbnb pricing optimisation for UK hosts that balances occupancy and revenue across the calendar.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Airbnb Virtual Assistant', href: '/solutions/airbnb-va' },
              { name: 'Pricing Optimisation', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Airbnb Virtual Assistant', href: '/solutions/airbnb-va' },
          { name: 'Pricing Optimisation', href: `/${slug}` },
        ]}
        eyebrow="Airbnb Virtual Assistant · Pricing Optimisation"
        title="Pricing Optimisation That Balances Occupancy and Revenue"
        subhead="Dynamic, actively monitored pricing that responds to demand and calendar gaps — not a rate set once in January and left to drift."
        overview={[
          "Short-term rental pricing isn't a single number you set and forget. Demand, seasonality, competition and your own calendar gaps all shift week to week, and a static rate misses almost all of it.",
          'We manage pricing as an ongoing process: monitoring your calendar, adjusting for upcoming gaps, and reacting to demand — combining pricing tools with hands-on review rather than relying on automation alone.',
        ]}
        problems={[
          {
            title: 'Default tool settings left unchecked',
            body: "Pricing tools start with generic assumptions that don't reflect your property or market.",
          },
          {
            title: "Gaps go unnoticed until it's too late",
            body: 'Empty dates approaching with no price adjustment simply stay empty.',
          },
          {
            title: 'Priced too high or too low',
            body: 'Either the calendar sits empty, or bookings come in at rates that undersell the property.',
          },
          {
            title: 'No consistent strategy',
            body: 'Reacting case by case, with no rules for how pricing decisions actually get made.',
          },
        ]}
        whatsIncluded={[
          { title: 'Daily/Weekly Rate Monitoring', body: 'Regular review of pricing against calendar performance, not a monthly check-in.' },
          { title: 'Gap-Based Adjustments', body: 'Rates adjusted specifically to attract bookings into upcoming empty dates.' },
          { title: 'Demand-Based Pricing', body: 'Rates raised for peak periods and events, lowered where demand is genuinely soft.' },
          { title: 'Minimum Night Strategy', body: 'Stay-length rules adjusted to avoid creating unfillable short gaps.' },
          { title: 'Tool + Manual Oversight', body: 'Dynamic pricing tools used as one input alongside hands-on review, not the whole strategy.' },
          { title: 'Portfolio-Level Coordination', body: 'Pricing managed individually per property while keeping an eye on the portfolio as a whole.' },
        ]}
        comparison={{
          withoutLabel: 'Static Pricing',
          withLabel: 'Actively Managed Pricing',
          without: [
            'Rate set once and left alone',
            'Gaps addressed too late, if at all',
            'Automation with no human review',
            'Missed demand during peak periods',
          ],
          with: [
            'Rates reviewed and adjusted regularly',
            'Upcoming gaps targeted before they happen',
            'Tools combined with hands-on oversight',
            'Peak demand captured, not missed',
          ],
        }}
        whoItsFor={[
          'Hosts noticing recurring gaps in their calendar',
          'Properties with inconsistent bookings month to month',
          'Serviced accommodation businesses wanting pricing managed professionally, not by default settings',
          'Operators scaling a portfolio who need pricing decisions handled at scale',
        ]}
        testimonials={[
          {
            quote: 'Our calendar used to have random empty patches every month. Active pricing management closed most of that gap.',
            name: 'Harriet W.',
            role: 'Host, Bath',
          },
          {
            quote: 'I was using a pricing tool on autopilot. Having someone actually review it weekly made a visible difference to revenue.',
            name: 'Sam K.',
            role: 'SA Operator, Newcastle',
          },
        ]}
        faqs={[
          {
            q: 'Do you use pricing tools?',
            a: 'Yes, alongside manual review — the tool is one input, not the whole strategy.',
          },
          {
            q: 'How often do you adjust pricing?',
            a: 'Typically several times a week depending on the property and how active the calendar is, with particular attention to upcoming gaps.',
          },
          {
            q: 'Will this increase revenue?',
            a: 'Active pricing management improves the balance between occupancy and rate, which drives overall revenue, though results depend on the property and market.',
          },
          {
            q: 'Can you manage pricing across multiple properties?',
            a: 'Yes — each listing is managed individually while keeping an eye on the portfolio as a whole.',
          },
        ]}
        ctaHeading="Ready for Pricing That Actually Responds to Demand?"
        ctaBody="Book a free call and we'll review your current pricing setup and show you what we'd change."
      />
    </>
  )
}
