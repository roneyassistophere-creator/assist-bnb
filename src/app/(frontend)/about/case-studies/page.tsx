import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO('case-studies').catch(() => null)
  return generatePageMeta({ slug: 'about/case-studies', seoDoc, fallbackTitle: 'Case Studies' })
}

const caseStudies = [
  {
    client: 'Coastal Stays',
    tagline: 'From 60% to 76% occupancy in six weeks',
    location: 'Brighton, UK',
    metrics: [
      { value: '+16pts', label: 'Occupancy' },
      { value: '+22%', label: 'Monthly Revenue' },
    ],
    challenge:
      'Occupancy had been stuck around 60% for months, with pricing set once and rarely revisited.',
    outcome:
      'We rebuilt the pricing strategy around real demand data and took over guest communication, lifting occupancy into the mid-70s within six weeks.',
  },
  {
    client: 'Northside Lets',
    tagline: 'Cut owner involvement without losing quality',
    location: 'Manchester, UK',
    metrics: [
      { value: '5', label: 'Properties Onboarded' },
      { value: '100%', label: 'Inbox Response Rate' },
    ],
    challenge:
      'The owner was personally answering every guest message across five properties, with no documented process for cleaners or maintenance.',
    outcome:
      'We built SOPs for guest communication, cleaning, and maintenance, then took over day-to-day execution — freeing the owner to focus on acquiring new properties.',
  },
  {
    client: 'Garden City Getaways',
    tagline: 'Built a direct booking channel from zero',
    location: 'Leeds, UK',
    metrics: [
      { value: '+18%', label: 'Direct Bookings' },
      { value: '£0', label: 'Extra Commission' },
    ],
    challenge:
      'Every booking came through platforms, with no website or way to capture repeat guests directly.',
    outcome:
      'We launched a direct booking website with integrated payments and organic SEO, converting a growing share of guests outside platform commission.',
  },
]

export default async function CaseStudiesPage() {
  const seoDoc = await getPageSEO('case-studies').catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Case Studies',
              description:
                seoDoc?.meta?.description ??
                'Real engagements, real challenges, and measurable outcomes delivered by Assist BNB.',
              url: `${siteConfig.url}/about/case-studies`,
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Case Studies', href: '/about/case-studies' },
            ]),
          ]),
        }}
      />

      {/* Hero */}
      <section className="py-24 bg-muted text-center px-4">
        <div className="container max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            Case Studies · Real Results
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Real Clients. Real Results.</h1>
          <p className="text-lg text-muted-foreground">
            Every case study below is a real engagement — with a real brief, real challenges, and
            measurable outcomes we delivered together.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl flex flex-col gap-10">
          {caseStudies.map((study) => (
            <div key={study.client} className="rounded-lg border border-border p-8">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                {study.location}
              </p>
              <h2 className="text-xl font-bold mb-1">{study.client}</h2>
              <p className="text-muted-foreground mb-6">{study.tagline}</p>
              <div className="grid grid-cols-2 gap-4 mb-6 max-w-xs">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-md border border-border p-4 text-center">
                    <p className="text-xl font-bold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold mb-1">The Challenge</h3>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">The Outcome</h3>
                  <p className="text-muted-foreground">{study.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Become the Next Case Study?</h2>
          <p className="mb-8 opacity-90">Book a free call to talk through what&apos;s possible for your properties.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-background text-foreground px-6 py-3 font-medium hover:bg-background/90 transition-colors"
          >
            Book a Free Call
          </Link>
        </div>
      </section>
    </>
  )
}
