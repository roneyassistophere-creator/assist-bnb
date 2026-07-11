import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/airbnb-va/professional-photography'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Professional Photography' })
}

export default async function ProfessionalPhotographyPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Professional Photography',
              description:
                seoDoc?.meta?.description ??
                'Professional photography guidance and coordination for UK short-term rental listings.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Airbnb Virtual Assistant', href: '/solutions/airbnb-va' },
              { name: 'Professional Photography', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Airbnb Virtual Assistant', href: '/solutions/airbnb-va' },
          { name: 'Professional Photography', href: `/${slug}` },
        ]}
        eyebrow="Airbnb Virtual Assistant · Professional Photography"
        title="Professional Photography Support That Gets the Click"
        subhead="Preparation guidance, shot planning and image selection that turns your property's photos into your strongest booking driver."
        overview={[
          "Guests decide whether to click on your listing within seconds, almost entirely based on the cover photo. Everything else — your pricing, your description, your amenities — only gets seen if the photos earn that click first.",
          'We help hosts get the most out of property photography: preparing the space properly, planning what to shoot and how, and selecting and ordering the final images so the listing tells a clear, compelling story.',
        ]}
        problems={[
          {
            title: 'Dark or inconsistent photos',
            body: 'Poor lighting makes rooms look smaller and less inviting than they are.',
          },
          {
            title: 'No staging before the shoot',
            body: "An unprepared property photographs like it's unoccupied, even when it isn't.",
          },
          {
            title: 'Weak or buried cover photo',
            body: 'The single most important image in your listing is often an afterthought.',
          },
          {
            title: 'No logical photo order',
            body: 'Random sequencing leaves guests confused about the layout and flow of the space.',
          },
        ]}
        whatsIncluded={[
          { title: 'Pre-Shoot Preparation Guidance', body: 'Staging, decluttering and layout advice for each room before the camera arrives.' },
          { title: 'Shot List Planning', body: "Key angles and features identified in advance, so the shoot isn't left to chance." },
          { title: 'Photographer Coordination', body: 'We can coordinate a shoot on your behalf, or work with photos you already have.' },
          { title: 'Image Selection & Ordering', body: 'Your strongest images chosen and sequenced for maximum impact.' },
          { title: 'Cover Photo Selection', body: 'The single most important image in your listing chosen deliberately, not by default.' },
          { title: 'Listing Integration', body: 'Photos aligned with your description and overall listing narrative, not treated separately.' },
        ]}
        comparison={{
          withoutLabel: 'Unplanned Photos',
          withLabel: 'Photography Support',
          without: [
            'Dark, inconsistent phone photos',
            'No staging before shooting',
            'Weak or buried cover image',
            'Random photo order',
          ],
          with: [
            'Bright, consistent, well-lit images',
            'Property properly prepared beforehand',
            'A deliberately chosen, strong cover photo',
            "Photos sequenced to tell the property's story",
          ],
        }}
        whoItsFor={[
          'Listings with a low click-through rate from search',
          'New properties launching and wanting the right foundation from day one',
          'Serviced accommodation businesses needing professional-looking listings',
          'Hosts improving an underperforming listing where photography is the likely culprit',
        ]}
        testimonials={[
          {
            quote: 'We had decent photos already, just in the wrong order with a weak cover shot. Fixing that alone noticeably lifted clicks.',
            name: 'Alex F.',
            role: 'Host, Brighton',
          },
          {
            quote: 'Getting proper guidance on staging before the shoot made more difference than I expected — the photos genuinely look like a different property.',
            name: 'Ruth O.',
            role: 'SA Operator, Cardiff',
          },
        ]}
        faqs={[
          {
            q: 'Do you provide photographers?',
            a: 'We work with and can coordinate photographers as part of the service, and provide preparation guidance regardless of who shoots.',
          },
          {
            q: 'Can you improve photos I already have?',
            a: 'Yes — we can review existing images, advise on what’s working, and help you plan targeted replacements or reordering.',
          },
          {
            q: 'Does better photography actually increase bookings?',
            a: "Better photos improve click-through rate, which is the first step toward more bookings, though we can't guarantee specific results.",
          },
          {
            q: 'What should I prepare before a shoot?',
            a: "We'll guide you on staging, decluttering and which features to highlight — preparation matters as much as the shoot itself.",
          },
        ]}
        ctaHeading="Ready to Fix Your Listing's First Impression?"
        ctaBody="Book a free call and we'll review your current photos and tell you exactly what we'd change."
      />
    </>
  )
}
