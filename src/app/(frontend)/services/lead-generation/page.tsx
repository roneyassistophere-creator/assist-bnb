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

const slug = 'services/lead-generation'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({
    slug,
    seoDoc,
    fallbackTitle: 'Lead Generation',
  })
}

const subServices = [
  { title: 'Landlord Leads', href: '/services/lead-generation/landlord-leads' },
  { title: 'Guest Leads', href: '/services/lead-generation/guest-leads' },
]

export default async function LeadGenerationPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Lead Generation',
              description:
                seoDoc?.meta?.description ??
                'Lead generation for UK short-term rental operators — landlord sourcing and direct guest leads to grow your portfolio and bookings.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Lead Generation', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Lead Generation', href: `/${slug}` },
        ]}
        eyebrow="Services · Lead Generation"
        title="A Structured Pipeline of Landlords and Guests, Not Word of Mouth"
        subhead="Growth in short-term rental depends on a steady flow of new opportunities. We build the outreach, targeting, and follow-up systems that keep that flow consistent."
        overview={[
          'Most STR operators grow through referrals and chance encounters. That works until it doesn’t — and it leaves growth entirely outside your control. Whether you need new landlords to onboard or more guests booking direct, the same problem shows up: without a structured system, opportunities are inconsistent and easy to lose track of.',
          'Our lead generation service covers both sides of the business — sourcing landlords for co-hosts and property managers who want to grow their portfolio, and generating guest demand so you can fill your calendar without depending entirely on platform commission.',
        ]}
        problems={[
          {
            title: 'No structured outreach',
            body: 'Sourcing new landlords or guests happens randomly, not as a repeatable process.',
          },
          {
            title: 'Relying on referrals alone',
            body: 'Word of mouth is unpredictable — some months bring opportunities, others bring none.',
          },
          {
            title: 'No follow-up system',
            body: 'Interested landlords and guests go cold because nobody tracks or revisits them.',
          },
          {
            title: 'Full platform dependence',
            body: 'Without your own pipeline, growth and bookings are entirely at the mercy of Airbnb and Booking.com.',
          },
        ]}
        whatsIncluded={[
          { title: 'Landlord Sourcing', body: 'Targeted outreach to property owners suitable for STR or SA management.' },
          { title: 'Guest Lead Campaigns', body: 'Paid and organic campaigns that attract guests directly to you.' },
          { title: 'Lead Qualification', body: 'Every lead filtered before it reaches you, so you only speak to the right people.' },
          { title: 'Pipeline Tracking', body: 'Full visibility of every lead, from first contact to conversion.' },
          { title: 'Follow-Up Sequences', body: 'Structured, consistent follow-up so warm leads don’t go cold.' },
          { title: 'Monthly Reporting', body: 'Clear data on lead volume, source, and conversion so the system keeps improving.' },
        ]}
        comparison={{
          withoutLabel: 'Referrals & Chance',
          withLabel: 'Assist BNB',
          without: [
            'Growth depends on who you know',
            'No visibility into what is working',
            'Opportunities missed or forgotten',
            'Slow, unpredictable pipeline',
          ],
          with: [
            'A structured, repeatable acquisition system',
            'Full reporting on sources and conversion',
            'Every lead tracked and followed up',
            'A consistent, scalable pipeline',
          ],
        }}
        whoItsFor={[
          'Co-hosts and property managers looking to grow their managed portfolio',
          'Hosts wanting to reduce platform dependence with direct guest bookings',
          'STR operators who currently rely on referrals for growth',
          'Anyone who wants predictable, repeatable growth rather than luck',
        ]}
        testimonials={[
          {
            quote: 'We went from hoping landlords would find us to having an actual pipeline with new conversations every week.',
            name: 'Marcus D.',
            role: 'Property Manager, Manchester',
          },
          {
            quote: 'The guest lead campaigns filled gaps in our calendar that platform bookings never touched.',
            name: 'Claire T.',
            role: 'STR Host, Lake District',
          },
        ]}
        faqs={[
          {
            q: 'Do you handle landlord leads, guest leads, or both?',
            a: 'Both, either separately or together. Some clients only need landlord sourcing to grow their managed portfolio, others only need guest demand — we scope the engagement to what you actually need.',
          },
          {
            q: 'Are the leads exclusive to my business?',
            a: 'Yes. Every lead generated is exclusive to you and is not shared with other operators or service providers.',
          },
          {
            q: 'What areas do you cover?',
            a: 'We focus on the UK market and tailor targeting to your specific city or region for better relevance and conversion.',
          },
          {
            q: 'How quickly will we see leads coming through?',
            a: 'Timelines vary by channel — organic sourcing and SEO take longer to build, while paid campaigns can start generating leads within the first few weeks.',
          },
        ]}
        ctaHeading="Ready to Build a Pipeline That Doesn't Depend on Luck?"
        ctaBody="Book a free call and we'll map out exactly how a lead generation system would work for your business."
        extra={
          <section className="py-20 bg-muted">
            <div className="container max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                Explore Lead Generation Services
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
