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
  const seoDoc = await getPageSEO('why-us').catch(() => null)
  return generatePageMeta({ slug: 'about/why-us', seoDoc, fallbackTitle: 'Why Us' })
}

const breakdown = [
  'Communication gaps appear between guests, cleaners, and you',
  'Responsibilities get unclear as the portfolio grows',
  'Issues fall through the cracks during busy weeks',
  'Everything still depends on you being available',
]

const pillars = [
  { num: '01', title: 'Consistency', body: 'The same standard of service, every guest, every booking.' },
  { num: '02', title: 'Structure', body: 'Clear processes instead of ad-hoc effort that breaks under pressure.' },
  { num: '03', title: 'Visibility', body: 'You always know what is happening across your properties.' },
  { num: '04', title: 'Scalability', body: 'Systems that hold up as you add properties, not just as you start out.' },
]

const comparisonRows = [
  { without: 'Reactive management', withUs: 'Structured operations' },
  { without: 'Constant owner involvement', withUs: 'Controlled oversight' },
  { without: 'Stressful day-to-day', withUs: 'Smooth, predictable operations' },
  { without: 'Ad-hoc task completion', withUs: 'A team that runs the backend' },
  { without: 'Growth capped by your time', withUs: 'Growth supported by systems' },
]

export default async function WhyUsPage() {
  const seoDoc = await getPageSEO('why-us').catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Why Us',
              description:
                seoDoc?.meta?.description ??
                'Why Assist BNB works differently for UK Airbnb and short-term rental hosts.',
              url: `${siteConfig.url}/about/why-us`,
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Why Us', href: '/about/why-us' },
            ]),
          ]),
        }}
      />

      {/* Hero */}
      <section className="py-24 bg-muted text-center px-4">
        <div className="container max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Assist BNB Works Differently</h1>
          <p className="text-lg text-muted-foreground">
            Most support services focus on tasks. We focus on how your entire short-term rental
            operation runs, day in and day out.
          </p>
        </div>
      </section>

      {/* Reality check */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Most STR Support Breaks Down Over Time
          </h2>
          <ul className="rounded-lg border border-border divide-y divide-border mb-6">
            {breakdown.map((line) => (
              <li key={line} className="px-5 py-4 text-sm flex items-start gap-2">
                <span className="text-destructive mt-0.5">✕</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-muted-foreground">
            That&apos;s not a support problem. That&apos;s a structure problem.
          </p>
        </div>
      </section>

      {/* Core difference */}
      <section className="py-24 bg-muted">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-6">We Don&apos;t Work Task by Task</h2>
          <div className="rounded-lg border border-primary/40 bg-background p-8">
            <p className="text-lg font-medium">
              We don&apos;t just support your business. We help it run properly.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-2xl font-bold mb-12 text-center">Four Pillars</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.num} className="rounded-lg border border-border p-6">
                <p className="text-sm font-semibold text-primary mb-2">{p.num}</p>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Without / With table */}
      <section className="py-24 bg-muted">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold mb-12 text-center">The Difference This Makes</h2>
          <div className="rounded-lg border border-border overflow-hidden bg-background">
            <div className="grid grid-cols-2 text-sm font-semibold border-b border-border">
              <div className="px-5 py-3 text-muted-foreground">Without Assist BNB</div>
              <div className="px-5 py-3 text-primary">With Assist BNB</div>
            </div>
            {comparisonRows.map((row) => (
              <div key={row.without} className="grid grid-cols-2 text-sm border-b border-border last:border-0">
                <div className="px-5 py-4 text-muted-foreground">{row.without}</div>
                <div className="px-5 py-4">{row.withUs}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this isn't for */}
      <section className="py-24 bg-background">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-6">Who This Isn&apos;t For</h2>
          <p className="text-muted-foreground mb-4">
            Hosts wanting cheap, task-only support with no interest in structure, or expecting
            instant shortcuts without putting in the work.
          </p>
          <p className="font-medium">
            If you take your STR portfolio seriously, that&apos;s exactly who we&apos;re built for.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">If You Want Things to Run Properly</h2>
          <p className="mb-8 opacity-90">Free call · No commitment · Honest conversation</p>
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
