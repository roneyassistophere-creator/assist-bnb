import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import { RoiCalculator } from '@/components/RoiCalculator'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'roi-performance/roi-calculator'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Airbnb ROI Calculator' })
}

export default async function RoiCalculatorPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Airbnb ROI Calculator',
              description:
                seoDoc?.meta?.description ??
                'A UK Airbnb ROI calculator that estimates potential revenue, profit, and returns from occupancy, pricing, and running costs.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Growth & ROI', href: '/roi-performance' },
              { name: 'ROI Calculator', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Growth & ROI', href: '/roi-performance' },
          { name: 'ROI Calculator', href: `/${slug}` },
        ]}
        eyebrow="Growth & ROI · ROI Calculator"
        title="Airbnb ROI Calculator for UK Short-Term Rentals"
        subhead="Estimate the potential revenue, profit, and return on investment of a UK short-term rental based on nightly rate, occupancy, and running costs."
        overview={[
          'Before investing in or scaling a short-term rental, you need a realistic picture of what it can actually return — not a hopeful guess based on the best month a friend once had.',
          'This calculator uses the same simple maths behind every serious ROI model: nightly rate times occupancy gives revenue, revenue minus costs gives profit, and profit against your investment gives ROI. Enter your own numbers below and see it update instantly.',
        ]}
        problems={[
          {
            title: 'Occupancy assumptions are too optimistic',
            body: 'Many estimates assume 80–90% occupancy. Most well-managed UK properties realistically land in the 65–75% range.',
          },
          {
            title: 'Running costs get underestimated',
            body: 'Cleaning, laundry, platform fees, and maintenance can quietly consume a large share of gross revenue.',
          },
          {
            title: 'A flat nightly rate leaves money on the table',
            body: 'Without adjusting for demand and seasonality, peak-period revenue is routinely left uncaptured.',
          },
          {
            title: 'No way to see which lever matters most',
            body: 'Without a model, it is hard to tell whether pricing, occupancy, or costs would move your returns the most.',
          },
        ]}
        whatsIncluded={[
          { title: 'Interactive ROI Calculator', body: 'Enter your nightly rate, occupancy, costs, and availability to see live results.' },
          { title: 'Monthly Revenue Estimate', body: 'A clear projection of gross monthly revenue based on your inputs.' },
          { title: 'Monthly & Annual Profit', body: 'Costs are subtracted automatically to show a realistic profit figure.' },
          { title: 'Estimated Annual ROI', body: 'A percentage return based on an illustrative property investment.' },
          { title: 'UK Market Framing', body: 'Guidance notes reflect typical UK occupancy ranges and cost structures.' },
          { title: 'A Starting Point for a Real Conversation', body: 'Use your results as the basis for a free call about your specific property.' },
        ]}
        extra={
          <section className="py-20 bg-background">
            <div className="container max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                Estimate Your Potential Returns
              </h2>
              <p className="text-sm text-muted-foreground mb-10 text-center">
                Enter your property&apos;s numbers below — the calculator updates in real time.
              </p>
              <RoiCalculator />
            </div>
          </section>
        }
        comparison={{
          withoutLabel: 'Estimated Off the Cuff',
          withLabel: 'Modelled Properly',
          without: [
            'Occupancy and revenue based on assumptions',
            'Running costs guessed or ignored',
            'No visibility into which factor matters most',
            'Decisions made without a clear number to test against',
          ],
          with: [
            'Occupancy and revenue modelled from your inputs',
            'Costs accounted for in the profit calculation',
            'Clear view of how rate, occupancy, and costs interact',
            'A concrete figure to sense-check against real performance',
          ],
        }}
        whoItsFor={[
          'People weighing up whether a UK Airbnb property is worth investing in',
          'Hosts comparing a potential new property against their existing portfolio',
          'Serviced accommodation operators modelling scenarios across units',
          'Anyone who wants a number-based starting point before a strategy call',
        ]}
        testimonials={[
          {
            quote: 'I ran a few different occupancy scenarios before making an offer on a flat. It gave me the confidence to negotiate properly.',
            name: 'Raj K.',
            role: 'STR Investor, Manchester',
          },
          {
            quote: 'I had never actually subtracted my real costs from revenue before. Seeing the profit number was a wake-up call in a good way.',
            name: 'Sophie H.',
            role: 'SA Operator, London',
          },
        ]}
        faqs={[
          {
            q: 'How accurate is this calculator?',
            a: 'It is a directional estimate based on the numbers you enter. Accuracy depends on how realistic your occupancy and cost inputs are — treat it as a useful starting point, not a substitute for a full property analysis.',
          },
          {
            q: 'What costs should I include?',
            a: 'Include cleaning, laundry, consumables, platform fees, management costs if applicable, mortgage or rent, utilities, insurance, and an allowance for maintenance.',
          },
          {
            q: 'What investment figure does the ROI use?',
            a: 'The calculator uses an illustrative property investment figure to translate profit into a percentage return, so you can compare scenarios on a like-for-like basis.',
          },
          {
            q: 'Can you help me improve on these numbers?',
            a: 'Yes. We work with UK hosts on pricing strategy, listing optimisation, and operations — all of which directly affect the real-world version of the numbers above. Book a free call to go through your specific situation.',
          },
        ]}
        ctaHeading="Want a More Accurate Breakdown of Your Numbers?"
        ctaBody="Book a free call and we'll go through your property's real numbers and build a strategy around them."
      />
    </>
  )
}
