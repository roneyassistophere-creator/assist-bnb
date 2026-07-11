import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'roi-performance/enter-airbnb-market'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Enter the Airbnb Market' })
}

export default async function EnterAirbnbMarketPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Enter the Airbnb Market',
              description:
                seoDoc?.meta?.description ??
                'Guidance for entering the UK Airbnb and short-term rental market properly — property selection, listing setup, and systems from day one.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Growth & ROI', href: '/roi-performance' },
              { name: 'Enter the Airbnb Market', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Growth & ROI', href: '/roi-performance' },
          { name: 'Enter the Airbnb Market', href: `/${slug}` },
        ]}
        eyebrow="Growth & ROI · Enter the Airbnb Market"
        title="Enter the UK Airbnb Market With a Clear Strategy"
        subhead="Starting a short-term rental business is more than buying a property and listing it. We help UK hosts set up properly from day one — property, listings, pricing, and systems."
        overview={[
          'Most people assume the process is simple: get a property, list it online, start earning. In practice, entering the market properly means getting property selection, listing setup, pricing, and operational systems right before the first guest ever arrives.',
          'We guide UK investors and first-time hosts through every stage of entry, so the business is built to perform from the outset rather than fixed retroactively after a rocky first few months.',
        ]}
        problems={[
          {
            title: 'The wrong property gets chosen',
            body: 'Location and property type set a ceiling on performance — a poor choice can mean months of underperformance.',
          },
          {
            title: 'Listings launch without proper setup',
            body: 'Weak photography, thin descriptions, and no reviews suppress visibility right when it matters most.',
          },
          {
            title: 'No pricing or systems plan exists',
            body: 'Flat pricing and ad-hoc processes leave revenue on the table and create chaos as soon as bookings arrive.',
          },
          {
            title: 'Expectations are set unrealistically',
            body: 'New hosts often expect strong returns from week one, without allowing for the 60–90 days it typically takes to build visibility.',
          },
        ]}
        whatsIncluded={[
          { title: 'Market & Property Guidance', body: 'Evaluating locations and property types against real demand data, not guesswork.' },
          { title: 'Launch-Ready Listing Setup', body: 'Listings configured with proper content and photography across relevant platforms.' },
          { title: 'Pricing & Calendar Configuration', body: 'Availability windows, minimum stays, and pricing rules set up from day one.' },
          { title: 'Operational Systems', body: 'Guest communication, cleaning, and maintenance workflows built before your first booking.' },
          { title: 'Growth Planning', body: 'A view of how your first property sets the foundation for adding more.' },
          { title: 'Post-Launch Support', body: 'Guidance in the weeks after launch as real bookings and data start to come in.' },
        ]}
        comparison={{
          withoutLabel: 'Unstructured Entry',
          withLabel: 'Strategic Entry',
          without: [
            'Property chosen without demand data',
            'Listing launched without proper setup',
            'No pricing or systems plan in place',
            'Every stay handled from scratch, manually',
          ],
          with: [
            'Property choice grounded in real market data',
            'Listing launch-ready across relevant platforms',
            'Pricing and calendar configured before launch',
            'Systems in place before the first booking arrives',
          ],
        }}
        whoItsFor={[
          'New STR investors wanting to enter with a proper plan, not trial and error',
          'First-time hosts listing a property for the first time',
          'Property owners considering converting a spare property into an STR',
          'Operators moving into short-term rental from another property model',
        ]}
        testimonials={[
          {
            quote: 'I had no idea where to start. Having every step — property setup, listing, pricing, systems — walked through properly meant I launched with confidence instead of guessing.',
            name: 'Natasha P.',
            role: 'First-Time Host, Leeds',
          },
          {
            quote: 'I nearly rushed into the wrong property. The market analysis helped me understand what would actually perform, and my first booking came in within the first week.',
            name: 'James O.',
            role: 'STR Investor, Birmingham',
          },
        ]}
        faqs={[
          {
            q: 'How much do I need to start?',
            a: 'It depends on whether you own the property or are taking on a rental-arbitrage arrangement, and the standard of setup you want. We help you model the costs clearly before you commit.',
          },
          {
            q: 'Is Airbnb still worth entering in the UK?',
            a: 'For the right property and location, yes — but it depends heavily on location, pricing strategy, and how well the operation is run. We help you check whether a specific opportunity actually stacks up before you invest.',
          },
          {
            q: 'How long before I see results?',
            a: 'Most properties take roughly 60–90 days to build review volume and platform visibility as an illustrative guide. Getting pricing and listing setup right from day one meaningfully speeds this up.',
          },
          {
            q: 'Can you guide me through every step?',
            a: 'Yes. We work through market analysis, property readiness, listing setup, pricing, and systems together, so nothing is left for you to figure out alone.',
          },
        ]}
        ctaHeading="Ready to Enter the Airbnb Market Properly?"
        ctaBody="Book a free call and we'll build a clear entry strategy around your property and goals."
      />
    </>
  )
}
