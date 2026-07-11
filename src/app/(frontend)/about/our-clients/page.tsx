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
  const seoDoc = await getPageSEO('our-clients').catch(() => null)
  return generatePageMeta({ slug: 'about/our-clients', seoDoc, fallbackTitle: 'Our Clients' })
}

const clients = [
  { name: 'Coastal Stays', type: 'SA Operator', location: 'Brighton, UK', services: 'SOP creation, team structuring' },
  { name: 'Northside Lets', type: 'Property Investor', location: 'Manchester, UK', services: 'Airbnb VA, pricing optimisation' },
  { name: 'Riverside Retreats', type: 'Individual Host', location: 'Bristol, UK', services: 'Guest communication, cleaning coordination' },
  { name: 'Highland Host Co.', type: 'Letting Agent', location: 'Edinburgh, UK', services: 'Direct booking engine, SEO' },
  { name: 'Metro Serviced Apartments', type: 'Property Management', location: 'Birmingham, UK', services: 'Systems building, automation' },
  { name: 'Garden City Getaways', type: 'SA Operator', location: 'Leeds, UK', services: 'Social media management, lead generation' },
]

const reasons = [
  { title: 'Systems That Work', body: 'We build the operational infrastructure so results are repeatable, not lucky.' },
  { title: 'Real Results', body: 'Our clients see measurable improvements in occupancy, revenue, and time back in their day.' },
  { title: 'Long-Term Partnership', body: 'We are structured to grow with a portfolio, not just complete a one-off task.' },
]

export default async function OurClientsPage() {
  const seoDoc = await getPageSEO('our-clients').catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Our Clients',
              description:
                seoDoc?.meta?.description ??
                'The UK property businesses that trust Assist BNB to run their STR operations.',
              url: `${siteConfig.url}/about/our-clients`,
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Our Clients', href: '/about/our-clients' },
            ]),
          ]),
        }}
      />

      {/* Hero */}
      <section className="py-24 bg-muted text-center px-4">
        <div className="container max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Clients We Work With</h1>
          <p className="text-lg text-muted-foreground">
            From individual hosts to scaling SA operators — we work with UK property businesses
            who want systems, results, and a team they can rely on.
          </p>
        </div>
      </section>

      {/* Clients grid */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <div key={client.name} className="rounded-lg border border-border p-6">
                <h3 className="font-semibold mb-1">{client.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                  {client.type} · {client.location}
                </p>
                <p className="text-sm text-muted-foreground">{client.services}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why clients choose us */}
      <section className="py-24 bg-muted">
        <div className="container">
          <h2 className="text-2xl font-bold mb-12 text-center">Why Clients Choose Assist BNB</h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-lg border border-border p-6 bg-background">
                <h3 className="font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Client List?</h2>
          <p className="mb-8 opacity-90">Book a free call to talk through your properties.</p>
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
