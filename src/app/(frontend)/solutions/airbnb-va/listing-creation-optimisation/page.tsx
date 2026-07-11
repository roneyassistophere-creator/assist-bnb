import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/airbnb-va/listing-creation-optimisation'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Listing Creation & Optimisation' })
}

export default async function ListingCreationOptimisationPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Listing Creation & Optimisation',
              description:
                seoDoc?.meta?.description ??
                'Airbnb listing creation and optimisation for UK hosts, built to turn views into bookings.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Airbnb Virtual Assistant', href: '/solutions/airbnb-va' },
              { name: 'Listing Creation & Optimisation', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Airbnb Virtual Assistant', href: '/solutions/airbnb-va' },
          { name: 'Listing Creation & Optimisation', href: `/${slug}` },
        ]}
        eyebrow="Airbnb Virtual Assistant · Listing Creation & Optimisation"
        title="Listing Creation and Optimisation That Turns Views Into Bookings"
        subhead="Titles, descriptions, photo order and structure — built around how guests actually decide, not just what's technically accurate about your property."
        overview={[
          "A good property doesn't guarantee a good listing. Most underperforming listings aren't let down by the space itself — they're let down by a weak title, a wall of unstructured text, or photos in the wrong order.",
          "We create and optimise listings around the guest's decision path: what makes them click, what makes them keep reading, and what finally gets them to book. That applies whether you're launching a new listing or fixing one that's already live.",
        ]}
        problems={[
          {
            title: 'Weak titles get lost in search',
            body: 'A generic title blends into a page of similar-looking listings.',
          },
          {
            title: 'Descriptions are written for the host, not the guest',
            body: 'Long, unstructured text buries the details guests actually scan for.',
          },
          {
            title: 'Photo order undersells the property',
            body: "The strongest room photographed can still lose bookings if it's buried tenth in the sequence.",
          },
          {
            title: 'No platform-specific adjustment',
            body: "What ranks well on Airbnb doesn't necessarily rank well on Booking.com or Vrbo.",
          },
        ]}
        whatsIncluded={[
          { title: 'Title Optimisation', body: 'Clear, positioning-led titles built to earn the click in search results.' },
          { title: 'Description Structure', body: 'Guest-focused copy organised so key details are found in seconds, not paragraphs.' },
          { title: 'Image Sequencing', body: 'Photos ordered to lead with your strongest angles and guide guests through the space.' },
          { title: 'Amenity & Detail Prioritisation', body: 'Key information surfaced where guests actually look for it, not buried.' },
          { title: 'Platform-Specific Adjustments', body: 'Content adapted to how each platform ranks and displays listings.' },
          { title: 'Ongoing Performance Review', body: 'Listings revisited and adjusted as bookings and conversion data come in.' },
        ]}
        comparison={{
          withoutLabel: 'Standard Listing',
          withLabel: 'Optimised Listing',
          without: [
            'Generic title that blends in',
            'Unstructured, host-written description',
            'Random photo order',
            'Set once and left alone',
          ],
          with: [
            'Clear, click-worthy positioning',
            'Structured copy guests can scan quickly',
            'Photos sequenced for impact',
            'Reviewed and adjusted as performance data comes in',
          ],
        }}
        whoItsFor={[
          'Hosts with a good property and disappointing booking numbers',
          'New listings that need to be set up properly from day one',
          'Serviced accommodation businesses wanting listings that reflect a professional operation',
          'Operators adding properties who need consistent, optimised listings at scale',
        ]}
        testimonials={[
          {
            quote: 'Same flat, same price — just a rewritten listing and photo order, and enquiries noticeably picked up within a couple of weeks.',
            name: 'Josh T.',
            role: 'Host, Nottingham',
          },
          {
            quote: 'They rebuilt our description from scratch. It finally reads the way a guest actually thinks, not how we think.',
            name: 'Priya N.',
            role: 'SA Operator, London',
          },
        ]}
        faqs={[
          {
            q: 'How long does optimisation take?',
            a: 'A full review — title, description, photo order and structure — typically takes one to two weeks depending on scope.',
          },
          {
            q: "Can you improve a listing that's already live?",
            a: 'Yes, most of our work is on live listings that are underperforming rather than brand new ones.',
          },
          {
            q: 'Will this guarantee more bookings?',
            a: "We can't guarantee bookings, but a clearly structured, well-positioned listing consistently outperforms a generic one over time.",
          },
          {
            q: 'Do you optimise for each platform separately?',
            a: 'Yes — Airbnb, Booking.com and Vrbo each rank and display listings differently, so content is adjusted per platform rather than copy-pasted.',
          },
        ]}
        ctaHeading="Ready for a Listing That Actually Converts?"
        ctaBody="Book a free call and we'll show you exactly what we'd change about your current listing."
      />
    </>
  )
}
