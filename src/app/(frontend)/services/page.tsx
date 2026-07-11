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
  const seoDoc = await getPageSEO('services').catch(() => null)
  return generatePageMeta({ slug: 'services', seoDoc, fallbackTitle: 'Services' })
}

const services = [
  {
    title: 'Airbnb Virtual Assistant',
    slug: 'airbnb-va',
    description:
      'A full remote operations team for your day-to-day: guest communication, guest vetting, check-in/out, cleaning coordination, calendar management, pricing, listings, photography, and monthly finance reporting.',
    highlights: [
      'Guest communication & vetting',
      'Cleaning & maintenance coordination',
      'Listing creation & pricing optimisation',
      'Monthly finance reporting',
    ],
  },
  {
    title: 'Direct Booking Engine',
    slug: 'direct-booking-engine',
    description:
      'A booking website and integrated payment system of your own — so growth does not depend entirely on platform commission.',
    highlights: [
      'Direct booking website design',
      'Booking engine & payment integration',
      'SEO & organic growth',
      'Google Ads management',
    ],
  },
  {
    title: 'Lead Generation',
    slug: 'lead-generation',
    description:
      'A consistent, structured pipeline of opportunities — landlords to onboard and guests to book direct, outside of platform commission.',
    highlights: ['Landlord lead generation', 'Direct guest lead generation'],
  },
  {
    title: 'Social Media Management',
    slug: 'social-media-management',
    description:
      'Content, scheduling, and community engagement that builds a brand — not just a listing that disappears in the algorithm.',
    highlights: [
      'Content creation & strategy',
      'Posting & scheduling',
      'Community engagement',
      'Multi-platform management',
    ],
  },
  {
    title: 'Systems Building',
    slug: 'systems-building',
    description:
      'The operational infrastructure — SOPs, automation, and team structuring — that lets your STR business run without depending entirely on you.',
    highlights: [
      'STR business setup',
      'Operations automation',
      'SOP creation',
      'Team structuring',
    ],
  },
]

export default async function ServicesPage() {
  const seoDoc = await getPageSEO('services').catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Services',
              description:
                seoDoc?.meta?.description ??
                `Every service ${siteConfig.name} offers UK Airbnb and short-term rental hosts.`,
              url: `${siteConfig.url}/services`,
              type: 'WebPage',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
            ]),
          ]),
        }}
      />

      {/* Header */}
      <section className="py-24 bg-muted text-center px-4">
        <div className="container max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Every Service Your STR Business Needs</h1>
          <p className="text-lg text-muted-foreground">
            We work as your backend operations team — not just a task-completion service. Explore
            each area below, or{' '}
            <Link href="/roi-performance" className="text-primary hover:underline">
              see our Growth &amp; ROI services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Services listing */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="flex flex-col gap-16">
            {services.map((service, i) => (
              <div
                key={service.slug}
                className={`grid md:grid-cols-2 gap-10 items-start ${i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Explore {service.title}
                  </Link>
                </div>
                <ul className="rounded-lg border border-border divide-y divide-border">
                  {service.highlights.map((item) => (
                    <li key={item} className="px-5 py-3 text-sm flex items-center gap-2">
                      <span className="text-primary">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Not sure where to start?</h2>
          <p className="mb-8 opacity-90">
            Book a free discovery call. We will listen, ask the right questions, and recommend the
            best path forward.
          </p>
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
