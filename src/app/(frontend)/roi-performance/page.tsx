import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO('roi-performance').catch(() => null)
  return generatePageMeta({
    slug: 'roi-performance',
    seoDoc,
    fallbackTitle: 'Growth & ROI',
  })
}

const subServices = [
  { title: 'ROI Calculator', href: '/roi-performance/roi-calculator' },
  { title: 'Enter the Airbnb Market', href: '/roi-performance/enter-airbnb-market' },
  { title: 'Consultancy & Training', href: '/roi-performance/consultancy-and-training' },
  { title: 'Performance Optimisation', href: '/roi-performance/performance-optimisation' },
]

export default async function RoiPerformancePage() {
  const seoDoc = await getPageSEO('roi-performance').catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Growth & ROI',
              description:
                seoDoc?.meta?.description ??
                'Growth and ROI services for UK Airbnb hosts — from ROI modelling to market entry, consultancy, and performance optimisation.',
              url: `${siteConfig.url}/roi-performance`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Growth & ROI', href: '/roi-performance' },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[{ name: 'Growth & ROI', href: '/roi-performance' }]}
        eyebrow="Growth & ROI"
        title="Grow Your Airbnb Returns With Structure, Not Guesswork"
        subhead="From modelling potential returns to entering the market properly, sharpening your strategy, or optimising an existing property — this is where UK hosts turn numbers into a plan."
        overview={[
          'Most hosts either fly blind on their numbers or get buried in generic advice that ignores their specific property and market. Neither approach builds a durable, growing short-term rental business.',
          'Our Growth & ROI services give you a structured way to understand and improve your returns — whether you are weighing up a first property, launching into the market, wanting expert guidance while staying hands-on, or trying to lift the performance of a property that already exists.',
        ]}
        problems={[
          {
            title: 'Numbers are guessed, not modelled',
            body: 'Occupancy and revenue assumptions are often wildly optimistic, leading to poor investment decisions.',
          },
          {
            title: 'Market entry is rushed',
            body: 'Property, listing, and systems get set up in a hurry, and the gaps show up as inconsistent early performance.',
          },
          {
            title: 'No access to expert judgement',
            body: 'Hosts make pricing and operational decisions on instinct because there is no one to sense-check them against.',
          },
          {
            title: 'Performance plateaus go unexplained',
            body: 'A property underperforms and nobody can say exactly why, so the same issues persist month after month.',
          },
        ]}
        whatsIncluded={[
          { title: 'ROI Calculator', body: 'An interactive tool to model realistic revenue, profit, and returns for a UK short-term rental.' },
          { title: 'Market Entry Support', body: 'Guidance on property selection, listing setup, and systems for hosts entering STR.' },
          { title: 'Consultancy & Training', body: 'Expert review and hands-on training for hosts who want to stay in control.' },
          { title: 'Performance Optimisation', body: 'A structured review of listing, pricing, calendar, and operations together.' },
          { title: 'UK Market Context', body: 'Guidance calibrated to UK occupancy patterns, seasonality, and platform fees.' },
          { title: 'Clear Next Steps', body: 'Every engagement ends with a concrete, prioritised plan, not vague observations.' },
        ]}
        comparison={{
          withoutLabel: 'Guesswork',
          withLabel: 'Assist BNB',
          without: [
            'Assumptions instead of modelling',
            'Market entry figured out as you go',
            'No expert sense-check on decisions',
            'Underperformance with no clear cause',
          ],
          with: [
            'Realistic numbers, modelled properly',
            'A structured, planned market entry',
            'Expert guidance whenever you need it',
            'Performance issues diagnosed and fixed',
          ],
        }}
        whoItsFor={[
          'People evaluating whether a UK Airbnb property is worth investing in',
          'New hosts about to enter the short-term rental market',
          'Self-managing hosts who want expert guidance without giving up control',
          'Existing hosts whose occupancy or revenue has plateaued',
        ]}
        testimonials={[
          {
            quote: 'I finally had real numbers instead of a spreadsheet full of guesses. That changed how I approached the whole decision.',
            name: 'Michael T.',
            role: 'Prospective Host, Leeds',
          },
          {
            quote: 'We used the calculator, then the consultancy, then optimisation — each step built on the last. It felt like one continuous plan, not separate services.',
            name: 'Anita R.',
            role: 'SA Operator, Manchester',
          },
        ]}
        faqs={[
          {
            q: 'Do I need to use all four services?',
            a: 'No. Most people start with whichever is most relevant to where they are — the calculator if you are evaluating a property, market entry if you are about to launch, consultancy if you want guidance, or optimisation if you already have a live listing.',
          },
          {
            q: 'I already have a property listed. Is this still for me?',
            a: 'Yes. Performance optimisation and consultancy are both built for hosts with an existing property who want to improve their results, not just people starting out.',
          },
          {
            q: 'Is this UK-specific?',
            a: 'Yes — all figures, guidance, and examples are calibrated to UK short-term rental regulations, seasonality, and market conditions.',
          },
          {
            q: 'Can this lead into full property management?',
            a: 'Yes. Many hosts start with a Growth & ROI service and move into our full Airbnb VA management once they are ready to hand over day-to-day operations.',
          },
        ]}
        ctaHeading="Ready to Put Real Numbers Behind Your Airbnb Plans?"
        ctaBody="Book a free call and we'll help you work out which Growth & ROI service fits where you are right now."
        extra={
          <section className="py-20 bg-muted">
            <div className="container max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                Explore Growth & ROI Solutions
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {subServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="rounded-lg border border-border p-5 bg-background hover:border-primary/50 transition-colors text-sm font-medium"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        }
      />
    </>
  )
}
