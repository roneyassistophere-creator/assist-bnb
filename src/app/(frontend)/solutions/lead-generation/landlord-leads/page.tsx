import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/lead-generation/landlord-leads'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Landlord Leads' })
}

export default async function LandlordLeadsPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Landlord Leads',
              description:
                seoDoc?.meta?.description ??
                'Targeted landlord lead generation for UK co-hosts and property managers looking to grow their managed portfolio.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Lead Generation', href: '/solutions/lead-generation' },
              { name: 'Landlord Leads', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Lead Generation', href: '/solutions/lead-generation' },
          { name: 'Landlord Leads', href: `/${slug}` },
        ]}
        eyebrow="Lead Generation · Landlord Leads"
        title="A Consistent Flow of Qualified Landlords to Onboard"
        subhead="Targeted lead generation for co-hosts and property managers — so you always have a pipeline of landlords ready to bring into your managed portfolio."
        overview={[
          'Growing a managed portfolio usually comes down to who you happen to know. That works while your network is small, but it caps your growth exactly where referrals run out. Landlord lead generation replaces that with a structured system built around your target area.',
          'We identify property owners who fit your criteria, reach out on your behalf, and qualify each one before it reaches you — so every conversation you have is with a landlord who is genuinely worth pursuing.',
        ]}
        problems={[
          {
            title: 'No consistent pipeline',
            body: 'Most operators rely on word of mouth, so growth is unpredictable and slow.',
          },
          {
            title: 'Time lost on cold outreach',
            body: 'Manually researching and contacting landlords eats hours with little to show for it.',
          },
          {
            title: 'Low-quality enquiries',
            body: 'Generic advertising attracts anyone — without qualification, you waste time on the wrong fit.',
          },
          {
            title: 'No visibility into what works',
            body: 'Without tracking, you never learn which outreach or messaging is actually converting.',
          },
        ]}
        whatsIncluded={[
          { title: 'Targeted Prospecting', body: 'Identifying property owners in your target area and filtering by suitability.' },
          { title: 'Outreach Campaigns', body: 'Personalised, multi-channel outreach with structured follow-up sequences.' },
          { title: 'Lead Qualification', body: 'Filtering out unqualified enquiries before they reach your inbox.' },
          { title: 'Pipeline Reporting', body: 'Lead volume, source, and conversion tracking with regular updates.' },
          { title: 'Exclusive Delivery', body: 'Every lead generated is exclusive to your business, never shared.' },
          { title: 'Ongoing Optimisation', body: 'Targeting and messaging refined over time based on what converts.' },
        ]}
        comparison={{
          withoutLabel: 'No Lead Gen',
          withLabel: 'With Our System',
          without: [
            'No structured system — growth relies on word of mouth',
            'Random enquiries with no pre-qualification',
            'Hours spent on manual research and cold outreach',
            'No idea which channels or messages are working',
          ],
          with: [
            'Consistent flow of qualified landlord prospects',
            'Leads screened for property type, location, and intent',
            'Your team only speaks to warm, ready-to-talk prospects',
            'Full pipeline reporting with source and conversion data',
          ],
        }}
        whoItsFor={[
          'Co-hosts and property managers looking to grow their portfolio of managed properties',
          'STR operators wanting a scalable, consistent flow of new landlord clients',
          'Airbnb management companies that need a structured acquisition pipeline',
          'Anyone tired of relying on referrals and wanting predictable growth',
        ]}
        testimonials={[
          {
            quote: 'Within three months of having a proper lead gen system running, we onboarded four new properties — all from the pipeline they built.',
            name: 'Marcus D.',
            role: 'Property Management Company, Manchester',
          },
          {
            quote: 'I expected a list of names. Instead I got pre-qualified prospects who had already expressed interest in STR management.',
            name: 'Sophie W.',
            role: 'Co-Host, London',
          },
        ]}
        faqs={[
          {
            q: 'What is landlord lead generation?',
            a: 'It is the process of identifying and reaching property owners considering the short-term rental market — through Airbnb, Booking.com, or a direct booking setup — and connecting them with your services before they find someone else.',
          },
          {
            q: 'How do you find landlord leads?',
            a: 'We use a combination of targeted outreach, digital research, and structured prospecting to identify landlords open to STR or SA arrangements. Every lead is qualified before it enters your pipeline.',
          },
          {
            q: 'Are the leads exclusive?',
            a: 'Yes — leads generated for your business are exclusive and are not shared with other operators or service providers.',
          },
          {
            q: 'What areas do you cover?',
            a: 'We currently focus on the UK market and tailor the strategy to your specific city or region for better targeting and conversion.',
          },
        ]}
        ctaHeading="Ready to Build a Reliable Landlord Pipeline?"
        ctaBody="Stop waiting for referrals. Book a free call and we'll show you how a structured landlord lead generation system would work for your business."
      />
    </>
  )
}
