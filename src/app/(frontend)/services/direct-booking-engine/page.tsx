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
  const seoDoc = await getPageSEO('services/direct-booking-engine').catch(() => null)
  return generatePageMeta({
    slug: 'services/direct-booking-engine',
    seoDoc,
    fallbackTitle: 'Direct Booking Engine',
  })
}

const subServices = [
  { title: 'Direct Booking Website', href: '/services/direct-booking-engine/direct-booking-website' },
  { title: 'Direct Booking Conversions', href: '/services/direct-booking-engine/direct-booking-conversions' },
  { title: 'Booking Engine Integration', href: '/services/direct-booking-engine/booking-engine-integration' },
  { title: 'Payment Setup', href: '/services/direct-booking-engine/payment-setup' },
  { title: 'SEO & Organic Growth', href: '/services/direct-booking-engine/seo-organic-growth' },
  { title: 'Google Ads', href: '/services/direct-booking-engine/google-ads' },
]

export default async function DirectBookingEnginePage() {
  const seoDoc = await getPageSEO('services/direct-booking-engine').catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Direct Booking Engine',
              description:
                seoDoc?.meta?.description ??
                'Direct booking systems for UK short-term rental hosts — websites, booking engine integration, payments, and traffic that reduce reliance on Airbnb and other platforms.',
              url: `${siteConfig.url}/services/direct-booking-engine`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
        ]}
        eyebrow="Services · Direct Booking Engine"
        title="Direct Booking Systems That Reduce Your Reliance on Platforms"
        subhead="A website, booking engine, payment setup, and traffic system built together — so guests can book with you directly, without the platform fees."
        overview={[
          'Platforms like Airbnb bring visibility, but every booking that goes through them comes with a fee, and the guest relationship belongs to the platform, not you. A direct booking system gives you a channel of your own.',
          'We build the full system: a booking-focused website, a properly integrated booking engine, secure payment handling, and the traffic — organic or paid — to bring guests to it. Not a bolt-on widget, a working channel.',
        ]}
        problems={[
          {
            title: 'A website alone isn’t a booking system',
            body: 'Plenty of hosts have a nice-looking site with no working availability, payments, or booking flow behind it.',
          },
          {
            title: 'Manual booking management doesn’t scale',
            body: 'Without proper integration, availability, payments, and confirmations become manual work every time.',
          },
          {
            title: 'No traffic means no bookings',
            body: 'A direct booking website nobody visits does nothing for your business.',
          },
          {
            title: 'Platform fees quietly cap your margins',
            body: 'Every booking through a platform costs you a cut you would otherwise keep.',
          },
        ]}
        whatsIncluded={[
          { title: 'Direct Booking Website', body: 'A conversion-focused website built specifically for STR bookings.' },
          { title: 'Booking Engine Integration', body: 'Real-time availability, payments, and confirmations connected properly.' },
          { title: 'Payment Setup', body: 'Secure payment gateways, deposits, and automated collection.' },
          { title: 'Conversion Optimisation', body: 'A booking journey structured to turn visitors into guests.' },
          { title: 'SEO & Organic Growth', body: 'Search visibility that brings in traffic without platform fees.' },
          { title: 'Google Ads', body: 'Paid campaigns that fill calendar gaps and drive bookings on demand.' },
        ]}
        comparison={{
          withoutLabel: 'Platform Only',
          withLabel: 'Direct Booking System',
          without: [
            'A cut of every booking lost to fees',
            'No ownership of the guest relationship',
            'Visibility controlled by someone else’s algorithm',
            'No repeat-booking channel of your own',
          ],
          with: [
            'Bookings that keep more of your revenue',
            'A guest relationship and brand you control',
            'Traffic channels that belong to you',
            'A system that gets stronger the longer it runs',
          ],
        }}
        whoItsFor={[
          'Hosts with one or more properties ready to reduce platform dependency',
          'Serviced accommodation businesses building a proper brand',
          'Operators who already have traffic but a booking flow that leaks guests',
          'Anyone tired of paying platform fees on repeat guests',
        ]}
        testimonials={[
          {
            quote: 'We went from fully dependent on Airbnb to a real chunk of direct bookings within a few months.',
            name: 'James O.',
            role: 'SA Operator, Leeds',
          },
          {
            quote: 'The website looks great, but what actually matters is that it books guests on its own now.',
            name: 'Priya K.',
            role: 'Portfolio Host, Birmingham',
          },
        ]}
        faqs={[
          {
            q: 'Do I still need Airbnb once I have a direct booking system?',
            a: 'Yes — platforms still bring valuable visibility, especially for new guests. A direct booking system works alongside them, capturing repeat guests and reducing your overall dependency over time.',
          },
          {
            q: 'Can this work with multiple properties?',
            a: 'Yes — a direct booking system is particularly effective for multi-property operators, giving guests one place to browse and book any of your listings.',
          },
          {
            q: 'Do I need everything at once — website, payments, traffic?',
            a: 'No. Most hosts start with the website and booking engine, then add payment automation and traffic (SEO or ads) as the foundation is in place.',
          },
          {
            q: 'How long does the full system take to set up?',
            a: 'A typical build runs 4–8 weeks depending on scope, covering discovery, build, integration, testing, and launch, with traffic work continuing afterwards.',
          },
        ]}
        ctaHeading="Ready to Build a Direct Booking Channel of Your Own?"
        ctaBody="Book a free call and we'll map out the website, booking engine, and traffic system that fits your properties."
        extra={
          <section className="py-20 bg-muted">
            <div className="container max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                Explore Direct Booking Engine Services
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
