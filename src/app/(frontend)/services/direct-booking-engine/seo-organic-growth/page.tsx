import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/direct-booking-engine/seo-organic-growth'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMeta({
    slug,
    seoDoc: await getPageSEO(slug).catch(() => null),
    fallbackTitle: 'SEO & Organic Growth',
  })
}

export default async function SeoOrganicGrowthPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'SEO & Organic Growth',
              description:
                seoDoc?.meta?.description ??
                'SEO and organic growth for UK short-term rental direct booking websites, reducing reliance on platforms.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
              { name: 'SEO & Organic Growth', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
          { name: 'SEO & Organic Growth', href: `/${slug}` },
        ]}
        eyebrow="Direct Booking Engine · SEO & Organic Growth"
        title="SEO and Organic Growth for Direct Bookings"
        subhead="Search visibility and content built around booking intent — so guests find and book your direct website, not just your Airbnb listing."
        overview={[
          'Every booking that comes through a platform is a booking you don’t fully own — the guest relationship, the data, and the repeat visit all belong to the platform, not you.',
          'We build organic visibility around your direct booking website: technical SEO, local search targeting, and content structured around real booking intent, so traffic grows steadily without paying for every click.',
        ]}
        problems={[
          {
            title: 'No ownership of traffic',
            body: 'Guests found through a platform belong to that platform, not your business.',
          },
          {
            title: 'No control over visibility',
            body: 'Algorithm changes on any platform can hurt your bookings overnight.',
          },
          {
            title: 'Limited repeat guest capture',
            body: 'Without a direct channel, no real relationship gets built with past guests.',
          },
          {
            title: 'Constant reliance on algorithms',
            body: 'Your income ends up following someone else’s rules, not your own strategy.',
          },
        ]}
        whatsIncluded={[
          { title: 'Website SEO', body: 'Optimised page structure and keyword targeting for the searches that matter.' },
          { title: 'Local SEO', body: 'Location-based visibility targeting the UK cities and areas you operate in.' },
          { title: 'Funnel Optimisation', body: 'A traffic-to-booking journey structured to convert, not just attract clicks.' },
          { title: 'Content Strategy', body: 'Pages built around real search intent rather than generic blog posts.' },
          { title: 'Performance Tracking', body: 'Clear visibility into what traffic is working and what needs improving.' },
          { title: 'Ongoing Improvements', body: 'ISO-style refinement as rankings and behaviour data come in.' },
        ]}
        comparison={{
          withoutLabel: 'Platform Only',
          withLabel: 'SEO & Organic Growth',
          without: [
            'Bookings dependent on the platform',
            'No control over your own traffic',
            'Growth capped to short-term platform reach',
            'Guest relationship belongs to the platform',
          ],
          with: [
            'An independent booking channel',
            'Traffic and visibility you own',
            'Growth that compounds over the long term',
            'A guest relationship that belongs to you',
          ],
        }}
        whoItsFor={[
          'Hosts with a direct booking website who now need traffic',
          'Serviced accommodation businesses investing in long-term visibility',
          'Operators done with short-term fixes, wanting a system that builds over time',
          'Hosts wanting to own the relationship with their guests',
        ]}
        testimonials={[
          {
            quote: 'Organic traffic to our own site has quietly become a real source of bookings.',
            name: 'Grace M.',
            role: 'SA Operator, Sheffield',
          },
          {
            quote: 'We’re far less nervous about an algorithm change than we used to be.',
            name: 'Dev P.',
            role: 'Host, Reading',
          },
        ]}
        faqs={[
          {
            q: 'How long does SEO take to work?',
            a: 'SEO is a medium to long-term investment — most businesses see meaningful results within 3 to 6 months, though technical improvements can show earlier signals.',
          },
          {
            q: 'Do I need a website first?',
            a: 'Yes — SEO builds on a website. If you don’t have one yet, we can help as part of a wider direct booking setup.',
          },
          {
            q: 'Will this replace Airbnb?',
            a: 'Not necessarily, and that’s not always the goal. For most hosts, the aim is reduced dependency rather than leaving platforms entirely.',
          },
          {
            q: 'How do you track results?',
            a: 'We track organic traffic growth, keyword rankings, and booking funnel behaviour, giving you a clear view of what’s working and where we’re focusing next.',
          },
        ]}
        ctaHeading="Ready to Grow Beyond Platforms?"
        ctaBody="Book a free call and we'll map out an SEO plan that brings in bookings without relying only on OTAs."
      />
    </>
  )
}
