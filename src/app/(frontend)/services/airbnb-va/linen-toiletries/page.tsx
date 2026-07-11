import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/airbnb-va/linen-toiletries'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Linen & Toiletries Management' })
}

export default async function LinenToiletriesPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Linen & Toiletries Management',
              description:
                seoDoc?.meta?.description ??
                'Linen and toiletries supply management for UK short-term rental properties, kept consistent across every stay.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Airbnb Virtual Assistant', href: '/services/airbnb-va' },
              { name: 'Linen & Toiletries Management', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Airbnb Virtual Assistant', href: '/services/airbnb-va' },
          { name: 'Linen & Toiletries Management', href: `/${slug}` },
        ]}
        eyebrow="Airbnb Virtual Assistant · Linen & Toiletries"
        title="Linen and Toiletries Management That Keeps Every Stay Consistent"
        subhead="Stock tracked, restocking coordinated with your cleaning schedule, and every property held to the same standard — so nothing runs short before a guest arrives."
        overview={[
          'A single missing towel or an empty shampoo bottle can undo weeks of good reviews. Linen and toiletries feel like a small detail until they’re the reason a guest complains.',
          'We manage supply levels and restocking across your properties, coordinated directly with your cleaning schedule, so every guest arrives to a consistently prepared property — without you having to track stock yourself.',
        ]}
        problems={[
          {
            title: 'No stock visibility',
            body: 'Without tracking, shortages are only discovered when a guest points them out.',
          },
          {
            title: 'Restocking left reactive',
            body: 'Supplies replaced after a complaint rather than before it happens.',
          },
          {
            title: 'Inconsistent standards across properties',
            body: 'Each property drifting to a different setup makes your brand feel unreliable.',
          },
          {
            title: 'Poor coordination with cleaning',
            body: 'Linen and toiletries not aligned with turnover schedules create last-minute scrambles.',
          },
        ]}
        whatsIncluded={[
          { title: 'Linen Coordination', body: 'Fresh linen ensured for every stay, with worn stock tracked and replaced.' },
          { title: 'Toiletries Stocking', body: 'Essential guest toiletries maintained consistently across every property.' },
          { title: 'Inventory Tracking', body: 'Usage and stock levels monitored so shortages are caught before they happen.' },
          { title: 'Restocking Coordination', body: 'Refills organised ahead of turnovers, aligned with your cleaning schedule.' },
          { title: 'Consistent Standards', body: 'The same setup and presentation maintained across every property you manage.' },
          { title: 'Multi-Property Oversight', body: 'Centralised tracking regardless of how many properties are involved.' },
        ]}
        comparison={{
          withoutLabel: 'Untracked Supplies',
          withLabel: 'Managed Linen & Toiletries',
          without: [
            'Shortages discovered by guests, not by you',
            'Restocking handled reactively',
            'Standards drifting between properties',
            'No coordination with cleaning schedules',
          ],
          with: [
            'Stock tracked before it becomes a problem',
            'Restocking organised ahead of every turnover',
            'Consistent standard across every property',
            "Fully aligned with your cleaning team's schedule",
          ],
        }}
        whoItsFor={[
          'Hosts managing more properties than they can personally track supplies for',
          'Serviced accommodation businesses wanting a consistent guest experience across units',
          'Operators who’ve had guest complaints about missing or inconsistent supplies',
          'Hosts wanting one less thing to remember before every check-in',
        ]}
        testimonials={[
          {
            quote: 'I used to get a text from cleaners asking where the extra towels were. That doesn’t happen anymore.',
            name: 'Chloe M.',
            role: 'Host, Cardiff',
          },
          {
            quote: "Every one of our five flats now has exactly the same setup. It sounds small but it's made the whole operation feel more professional.",
            name: 'Ibrahim Y.',
            role: 'SA Operator, Birmingham',
          },
        ]}
        faqs={[
          {
            q: 'Do you manage stock levels?',
            a: 'Yes, usage and stock are monitored across properties so you never run short before an arrival.',
          },
          {
            q: 'Can you coordinate with our cleaners?',
            a: 'Yes, linen and toiletry preparation is aligned directly with your cleaning schedule.',
          },
          {
            q: 'What items are included?',
            a: 'Linen such as bed sets, towels and bathmats, plus standard toiletries like soap, shampoo, conditioner, body wash and toilet paper.',
          },
          {
            q: 'Does this work across multiple properties?',
            a: 'Yes, we maintain consistent standards and coordination across all your units regardless of how many properties you manage.',
          },
        ]}
        ctaHeading="Ready for Every Property to Feel Consistently Ready?"
        ctaBody="Book a free call and we'll show you how we'd manage supplies across your properties."
      />
    </>
  )
}
