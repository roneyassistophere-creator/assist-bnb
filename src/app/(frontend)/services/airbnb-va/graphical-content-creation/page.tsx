import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/airbnb-va/graphical-content-creation'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Graphical Content Creation' })
}

export default async function GraphicalContentCreationPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Graphical Content Creation',
              description:
                seoDoc?.meta?.description ??
                'Graphical content and listing design for UK short-term rental hosts, built to stand out across every platform.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Airbnb Virtual Assistant', href: '/services/airbnb-va' },
              { name: 'Graphical Content Creation', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Airbnb Virtual Assistant', href: '/services/airbnb-va' },
          { name: 'Graphical Content Creation', href: `/${slug}` },
        ]}
        eyebrow="Airbnb Virtual Assistant · Graphical Content Creation"
        title="Graphical Content That Makes Your Listing Look Intentional"
        subhead="Branded visuals, feature callouts and marketing graphics designed to make your listing stand out — built around your property, not a generic template."
        overview={[
          "In a search results page full of similar-looking listings, generic photos with no visual structure blend in. Guests scroll past what they can't quickly understand or what looks like every other option.",
          'We design graphical content — feature highlights, branded templates, and marketing visuals — that helps your listing stand out and communicate clearly, built around your actual property and consistent across every platform you use.',
        ]}
        problems={[
          {
            title: 'No visual identity',
            body: 'A listing with no consistent look feels interchangeable with every other option nearby.',
          },
          {
            title: 'Mixed, inconsistent visuals',
            body: 'Different styles and formats across images make a listing look unpolished.',
          },
          {
            title: 'Unclear presentation',
            body: "Guests scroll past listings that don't quickly communicate what makes the property worth booking.",
          },
          {
            title: 'No visual hierarchy',
            body: "Without structure, guests don't know what to look at first or what's actually different about your place.",
          },
        ]}
        whatsIncluded={[
          { title: 'Listing Visual Enhancements', body: 'Feature highlights and information overlays that make key details immediately clear.' },
          { title: 'Branded Templates', body: 'A consistent visual style applied across your listings and materials.' },
          { title: 'Marketing Graphics', body: 'Ready-to-use visuals for promotions, seasonal offers and campaigns.' },
          { title: 'Presentation Improvements', body: 'Cleaner layouts and clearer visual hierarchy across your listing assets.' },
          { title: 'Platform-Ready Formatting', body: 'Assets sized and structured correctly for Airbnb, Booking.com, Vrbo and direct sites.' },
          { title: 'Brand Alignment', body: 'Visuals matched to your existing colours, style and tone, if you have one already.' },
        ]}
        comparison={{
          withoutLabel: 'Generic Visuals',
          withLabel: 'Designed Content',
          without: [
            'Looks like every other listing nearby',
            'No consistent visual identity',
            'Unstructured images with no flow',
            'Forgettable, easily scrolled past',
          ],
          with: [
            'Stands out visually in search results',
            'A recognisable, consistent identity',
            'Structured visuals that guide the guest',
            'A more memorable first impression',
          ],
        }}
        whoItsFor={[
          'Hosts in competitive markets needing to stand out from similar listings',
          'Operators building a recognisable brand across multiple properties',
          'Hosts running seasonal promotions who need professional marketing graphics',
          'Anyone wanting a cleaner, more professional listing presentation',
        ]}
        testimonials={[
          {
            quote: 'Our listings finally look like they belong to the same business instead of five random flats thrown online separately.',
            name: 'Naomi K.',
            role: 'SA Operator, Bristol',
          },
          {
            quote: 'The feature callouts on our photos get mentioned in guest messages before they even book. It clearly helps.',
            name: 'Ben T.',
            role: 'Host, Manchester',
          },
        ]}
        faqs={[
          {
            q: 'What kind of graphics do you create?',
            a: 'Listing visual enhancements, branded templates, and marketing graphics — everything needed to make your listing stand out visually across platforms.',
          },
          {
            q: 'Can this actually improve bookings?',
            a: "Strong, clear visuals drive more clicks and help guests understand your property faster, though we can't guarantee specific booking outcomes.",
          },
          {
            q: 'Do you match our existing branding?',
            a: 'Yes, we align colour palette, style and tone with whatever brand identity you already have.',
          },
          {
            q: 'Can this be used across platforms?',
            a: 'Yes, graphics are designed to work across Airbnb, Booking.com, Vrbo and any direct booking channels you run.',
          },
        ]}
        ctaHeading="Ready for a Listing That Looks Intentional?"
        ctaBody="Book a free call and we'll show you what we'd design for your listing."
      />
    </>
  )
}
