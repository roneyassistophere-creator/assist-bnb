import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/systems-building/str-business-setup'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'STR Business Setup' })
}

export default async function STRBusinessSetupPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'STR Business Setup',
              description:
                seoDoc?.meta?.description ??
                'Structured STR business setup for UK hosts — listings, systems, pricing, and workflows built correctly from day one.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Systems Building', href: '/solutions/systems-building' },
              { name: 'STR Business Setup', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Systems Building', href: '/solutions/systems-building' },
          { name: 'STR Business Setup', href: `/${slug}` },
        ]}
        eyebrow="Systems Building · STR Business Setup"
        title="Start Your STR Business With the Right Setup From Day One"
        subhead="Structured systems, workflows, and listings built in from the start — so your business launches ready to operate, not just ready to go live."
        overview={[
          'Most new hosts focus on getting a property and putting a listing online. That gets you visible, but a proper launch also needs systems, pricing structure, and defined processes behind it — and skipping that step creates problems that surface almost immediately.',
          'We set up new STR businesses properly: listings built to convert, a pricing and calendar strategy from day one, and the operational workflows that mean the business runs on process rather than on your memory from the very first booking.',
        ]}
        problems={[
          {
            title: 'No operational structure',
            body: 'The business launches with no defined processes for check-in, cleaning, or guest communication.',
          },
          {
            title: 'Poor listing setup',
            body: 'Listings go live incomplete or inconsistent across platforms, hurting conversion from the start.',
          },
          {
            title: 'No pricing strategy',
            body: 'Rates are set arbitrarily with no structure or review process behind them.',
          },
          {
            title: 'Reliance on manual work',
            body: 'Everything requires the host personally, which makes scaling from one property nearly impossible.',
          },
        ]}
        whatsIncluded={[
          { title: 'Listing Creation', body: 'Optimised, conversion-ready listings set up across every relevant platform.' },
          { title: 'System Setup', body: 'Workflows for daily operations and communication structured from the outset.' },
          { title: 'Pricing & Calendar', body: 'An initial pricing strategy and availability rules built in from day one.' },
          { title: 'Process Creation', body: 'Check-in, check-out, cleaning, and maintenance handling all defined upfront.' },
          { title: 'Tool & Platform Setup', body: 'Systems organised and connected so everything works together, not in silos.' },
          { title: 'Growth-Ready Foundation', body: 'Everything designed to scale, not just to launch a single property.' },
        ]}
        comparison={{
          withoutLabel: 'Basic Setup',
          withLabel: 'Structured Setup',
          without: [
            'Quick launch with no clear process behind it',
            'No systems in place',
            'Reactive operations from the first booking',
            'Limited ability to add properties later',
          ],
          with: [
            'A planned launch backed by structure',
            'Full operational systems in place',
            'Controlled, predictable operations',
            'A scalable foundation ready for growth',
          ],
        }}
        whoItsFor={[
          'New hosts starting their first short-term rental and wanting to do it properly',
          'SA startups entering serviced accommodation who need structure from day one',
          'Property investors launching their first or next property professionally',
          'Expanding operators who need a scalable setup for each new property',
        ]}
        testimonials={[
          {
            quote: 'I had no idea where to start. They mapped everything out and set it all up properly — I launched with confidence instead of confusion.',
            name: 'Natalie B.',
            role: 'New STR Host, Manchester',
          },
          {
            quote: 'The setup saved me months of trial and error. Everything was structured from day one and it made a huge difference.',
            name: 'Ryan O.',
            role: 'SA Startup, Birmingham',
          },
        ]}
        faqs={[
          {
            q: 'Can you help from scratch, with no listing at all?',
            a: 'Yes. We work with hosts starting from zero — no existing listing, no systems, no tools in place — and handle the full setup from the ground up.',
          },
          {
            q: 'What do I need before starting?',
            a: 'Very little. You need a property and a clear goal. We map out what needs to be built and how everything should be structured before anything goes live.',
          },
          {
            q: 'How long does setup take?',
            a: 'A single-property setup typically takes a few weeks. More complex setups involving multiple listings or specific platform integrations take longer, depending on scope.',
          },
          {
            q: 'Can this scale later as I add properties?',
            a: 'Yes — that is specifically how we build it. Every system is designed with growth in mind, so adding properties or team members does not require rebuilding from scratch.',
          },
        ]}
        ctaHeading="Ready to Start Your STR Business Properly?"
        ctaBody="Book a free call and we'll walk through exactly what a proper setup would look like for your property."
      />
    </>
  )
}
