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

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO('solutions/airbnb-va').catch(() => null)
  return generatePageMeta({
    slug: 'solutions/airbnb-va',
    seoDoc,
    fallbackTitle: 'Airbnb Virtual Assistant',
  })
}

const subServices = [
  { title: 'Multi-Platform Listing', href: '/solutions/airbnb-va/multi-platform-listing' },
  { title: 'Listing Creation & Optimisation', href: '/solutions/airbnb-va/listing-creation-optimisation' },
  { title: 'Pricing Optimisation', href: '/solutions/airbnb-va/pricing-optimisation' },
  { title: 'Professional Photography', href: '/solutions/airbnb-va/professional-photography' },
  { title: 'Guest Communication', href: '/solutions/airbnb-va/guest-communication' },
  { title: 'Guest Vetting', href: '/solutions/airbnb-va/guest-vetting' },
  { title: 'Guest Check-In & Check-Out', href: '/solutions/airbnb-va/guest-check-in-check-out' },
  { title: 'Calendar Management', href: '/solutions/airbnb-va/calendar-management' },
  { title: 'Cleaning Coordination', href: '/solutions/airbnb-va/cleaning-coordination' },
  { title: 'Linen & Toiletries Management', href: '/solutions/airbnb-va/linen-toiletries' },
  { title: 'Property Maintenance', href: '/solutions/airbnb-va/property-maintenance' },
  { title: 'Monthly Finance Reporting', href: '/solutions/airbnb-va/monthly-finance-reporting' },
  { title: 'Graphical Content Creation', href: '/solutions/airbnb-va/graphical-content-creation' },
]

export default async function AirbnbVaPage() {
  const seoDoc = await getPageSEO('solutions/airbnb-va').catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Airbnb Virtual Assistant',
              description:
                seoDoc?.meta?.description ??
                'Full Airbnb virtual assistant services for UK hosts, covering guest communication, cleaning, listings, and pricing.',
              url: `${siteConfig.url}/solutions/airbnb-va`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Airbnb Virtual Assistant', href: '/solutions/airbnb-va' },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Airbnb Virtual Assistant', href: '/solutions/airbnb-va' },
        ]}
        eyebrow="Solutions · Airbnb Virtual Assistant"
        title="Airbnb Virtual Assistant Solutions That Actually Run Your Operations"
        subhead="A full remote operations team for UK hosts — guest communication, cleaning coordination, pricing, listings, and the systems that hold it all together."
        overview={[
          'Most Airbnb VAs complete tasks in isolation: reply to a message here, update a calendar there. That works for a week. It falls apart the moment your portfolio grows past what you can personally supervise.',
          'Our Airbnb VA service is built differently. It is a structured team covering every part of day-to-day operations, so nothing depends on you remembering to chase it.',
        ]}
        problems={[
          {
            title: 'Generic VAs don’t understand STR',
            body: 'Freelance VAs hired for general admin rarely understand platform rules, guest expectations, or turnover logistics.',
          },
          {
            title: 'DIY doesn’t scale',
            body: 'Answering messages and coordinating cleaners yourself works for one property. It breaks down at three or four.',
          },
          {
            title: 'Tasks without structure repeat themselves',
            body: 'Without SOPs, the same issues get solved from scratch every time instead of being prevented.',
          },
          {
            title: 'Inconsistent guest experience hurts reviews',
            body: 'Slow replies and missed details show up directly in your ratings and repeat bookings.',
          },
        ]}
        whatsIncluded={[
          { title: 'Guest Communication', body: 'Messages answered quickly, professionally, every day of the week.' },
          { title: 'Cleaning & Turnover Coordination', body: 'Cleaners scheduled and confirmed around your booking calendar.' },
          { title: 'Pricing & Listing Optimisation', body: 'Rates and listing content kept sharp and competitive.' },
          { title: 'Calendar Management', body: 'Availability kept accurate across every platform you list on.' },
          { title: 'Maintenance Coordination', body: 'Issues logged, tracked, and resolved with contractors.' },
          { title: 'Monthly Reporting', body: 'Clear visibility into occupancy, revenue, and costs every month.' },
        ]}
        comparison={{
          withoutLabel: 'Generic VA / DIY',
          withLabel: 'Assist BNB',
          without: [
            'Tasks handled in isolation',
            'No STR-specific knowledge',
            'Breaks down as you scale',
            'You are still the fallback for everything',
          ],
          with: [
            'A structured operations team',
            'UK STR expertise from day one',
            'Systems built to handle growth',
            'You stay in control, not on call',
          ],
        }}
        whoItsFor={[
          'Hosts managing 1–10 short-term rental properties',
          'Serviced accommodation operators outgrowing ad-hoc support',
          'Co-hosts who need a dependable delivery partner',
          'Anyone tired of running their STR business from their phone',
        ]}
        testimonials={[
          {
            quote: 'I stopped answering guest messages at 11pm. Occupancy went up and I got my evenings back.',
            name: 'SA Business Owner',
            role: 'Scaling Host, Manchester',
          },
          {
            quote: 'They act like part of the team, not an outside vendor ticking off tasks.',
            name: 'Portfolio Manager',
            role: 'UK Operator, 6 properties',
          },
        ]}
        faqs={[
          {
            q: 'Do you cover check-ins outside office hours?',
            a: 'Yes — guest communication and check-in support run on a 7-day operational schedule, not just weekday office hours.',
          },
          {
            q: 'Can I start with just guest communication?',
            a: 'Yes. You can start with a single area, such as guest communication, and expand into cleaning coordination, pricing, or systems as needed.',
          },
          {
            q: 'Do you work with our existing cleaners and contractors?',
            a: 'Yes — we coordinate with the team you already trust rather than replacing them, unless you want help sourcing new ones.',
          },
          {
            q: 'How is this different from hiring a general VA?',
            a: 'A general VA completes tasks you assign. We bring STR-specific structure, tools, and judgement so fewer things need to be assigned in the first place.',
          },
        ]}
        ctaHeading="Ready to Stop Managing Everything Yourself?"
        ctaBody="Book a free call and we'll map out exactly where our team fits around your properties."
        extra={
          <section className="py-20 bg-muted">
            <div className="container max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                Explore Airbnb VA Solutions
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
