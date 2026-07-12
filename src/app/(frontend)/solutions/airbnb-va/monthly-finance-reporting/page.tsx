import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/airbnb-va/monthly-finance-reporting'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Monthly Finance Reporting' })
}

export default async function MonthlyFinanceReportingPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Monthly Finance Reporting',
              description:
                seoDoc?.meta?.description ??
                'Monthly financial and performance reporting for UK short-term rental hosts, covering bookings, revenue and occupancy.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Airbnb VA', href: '/solutions/airbnb-va' },
              { name: 'Monthly Finance Reporting', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Airbnb VA', href: '/solutions/airbnb-va' },
          { name: 'Monthly Finance Reporting', href: `/${slug}` },
        ]}
        eyebrow="Airbnb VA · Monthly Finance Reporting"
        title="Monthly Finance Reporting That Shows You What's Actually Happening"
        subhead="A clear, consistent monthly snapshot of bookings, revenue and occupancy across every property — so decisions are based on data, not guesswork."
        overview={[
          'Most hosts have no structured view of how their properties are actually performing month to month — just a sense of whether things feel busy or quiet, and a scattered set of numbers across different platforms.',
          'We provide a consistent monthly report covering bookings, revenue, occupancy and platform performance for every property, with plain-language observations so you can see what’s working and what needs attention.',
        ]}
        problems={[
          {
            title: 'No performance visibility',
            body: 'Without structured reporting, most operators have no clear view of monthly performance.',
          },
          {
            title: 'Decisions made on gut feel',
            body: 'Pricing and platform changes get made without data behind them.',
          },
          {
            title: 'Revenue gaps go unnoticed',
            body: 'Underperforming properties or platforms stay invisible without consistent tracking.',
          },
          {
            title: 'Hours lost to manual analysis',
            body: "Pulling data from multiple platforms into something usable takes time you don't have.",
          },
        ]}
        whatsIncluded={[
          { title: 'Booking Performance Summary', body: 'Total bookings and patterns tracked with month-on-month comparison.' },
          { title: 'Revenue Overview', body: 'Total and per-property revenue breakdown, so you know where money is actually coming from.' },
          { title: 'Occupancy Insights', body: 'Occupancy rates and gap analysis per property, tracked over time.' },
          { title: 'Platform Analysis', body: "Performance broken down by platform, so you know what's driving results." },
          { title: 'Key Observations', body: "Plain-language takeaways on what's working and what needs attention." },
          { title: 'Consistent Monthly Delivery', body: 'A structured report delivered every month, without you needing to ask.' },
        ]}
        comparison={{
          withoutLabel: 'No Structured Reporting',
          withLabel: 'Monthly Reporting',
          without: [
            'No clear view of monthly performance',
            'Decisions made on gut feel',
            'Revenue gaps invisible until they add up',
            'Hours spent pulling data manually',
          ],
          with: [
            'A clear monthly snapshot across every property',
            'Decisions grounded in structured data',
            'Underperformance flagged early',
            'Reports delivered consistently, no manual work required',
          ],
        }}
        whoItsFor={[
          'Multi-property operators needing portfolio-level visibility',
          'Hosts wanting to make pricing and platform decisions based on data',
          'Operators scaling a portfolio who need consistent tracking as they grow',
          'Owners who want structured reporting without building it themselves',
        ]}
        testimonials={[
          {
            quote: "I finally know which of our four properties is actually pulling its weight, instead of just guessing.",
            name: 'Amelia S.',
            role: 'SA Operator, London',
          },
          {
            quote: 'The monthly report takes ten minutes to read and tells me more than an afternoon of digging through platform dashboards ever did.',
            name: 'Connor P.',
            role: 'Host, Glasgow',
          },
        ]}
        faqs={[
          {
            q: 'What does the report include?',
            a: 'Total bookings, revenue, occupancy rates, average nightly rate, platform breakdown, and key observations for the month.',
          },
          {
            q: 'How often do you provide reports?',
            a: 'Monthly, covering the previous calendar month, so you can track trends over time.',
          },
          {
            q: 'Is it easy to understand without financial expertise?',
            a: 'Yes, reports are structured for clarity — key metrics are highlighted and observations are written in plain language.',
          },
          {
            q: 'Can this actually help improve performance?',
            a: "Yes, seeing what's working by property and platform puts you in a much stronger position to make changes that improve bookings and revenue.",
          },
        ]}
        ctaHeading="Ready to See What's Actually Happening in Your Portfolio?"
        ctaBody="Book a free call and we'll show you what a monthly report for your properties would look like."
      />
    </>
  )
}
