import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/lead-generation/guest-leads'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Guest Leads' })
}

export default async function GuestLeadsPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Guest Leads',
              description:
                seoDoc?.meta?.description ??
                'Direct guest lead generation for UK short-term rental operators — paid and organic campaigns that fill your calendar outside of platform commission.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Lead Generation', href: '/services/lead-generation' },
              { name: 'Guest Leads', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Lead Generation', href: '/services/lead-generation' },
          { name: 'Guest Leads', href: `/${slug}` },
        ]}
        eyebrow="Lead Generation · Guest Leads"
        title="Direct Guest Leads, Outside the Platforms"
        subhead="Targeted guest lead generation through paid and organic channels — so you can fill your calendar without paying commission on every booking."
        overview={[
          'Platform bookings are convenient, but every one costs 10–20% in commission, and the platform owns the guest relationship, not you. Guest lead generation builds a direct channel of your own — an audience you can market to again, not just a name and a date handed over by an algorithm.',
          'We run targeted advertising, SEO-driven landing pages, and retargeting built around your ideal guest profile, so enquiries arrive already interested, ready to convert into direct bookings.',
        ]}
        problems={[
          {
            title: 'Full dependence on platforms',
            body: 'Relying entirely on Airbnb and Booking.com means paying commission on every booking with no direct relationship with your audience.',
          },
          {
            title: 'No guest pipeline of your own',
            body: 'When platforms change algorithms or fees, operators with no direct channel are entirely at their mercy.',
          },
          {
            title: 'Seasonality with no buffer',
            body: 'During quiet periods, hosts with no direct guest channel feel it hardest.',
          },
          {
            title: 'Untapped long-stay demand',
            body: 'Business travellers and relocating professionals rarely come through Airbnb search — targeted lead gen reaches them directly.',
          },
        ]}
        whatsIncluded={[
          { title: 'Targeted Audience Building', body: 'Defining your ideal guest profile and targeting by location and intent.' },
          { title: 'Paid & Organic Campaigns', body: 'Google and Meta ads, retargeting, and SEO-driven landing page traffic.' },
          { title: 'Lead Capture & Qualification', body: 'Optimised landing pages and forms that filter enquiries before delivery.' },
          { title: 'Funnel Tracking', body: 'Cost per lead and conversion data broken down by channel.' },
          { title: 'Retargeting', body: 'Recovering guests who browsed but didn’t book, instead of losing them for good.' },
          { title: 'Monthly Reporting', body: 'Clear visibility of what is driving your guest bookings each month.' },
        ]}
        comparison={{
          withoutLabel: 'Platforms Only',
          withLabel: 'With Direct Guest Pipeline',
          without: [
            'Entirely dependent on Airbnb and Booking.com algorithms',
            'Platform fee on every booking — 10–20% per reservation',
            'Empty calendar with no direct way to fill gaps',
            'Platform owns the relationship — you see a name and a date',
          ],
          with: [
            'Your own direct guest pipeline, independent of platforms',
            'Direct bookings with no commission cost',
            'Active pipeline generating demand year-round',
            'You own the guest contact and can market to them again',
          ],
        }}
        whoItsFor={[
          'Hosts looking to reduce platform dependence and grow direct bookings',
          'Operators wanting to fill quiet periods without relying on platform promotions',
          'STR businesses targeting niche guests — business travellers, long-stays, groups',
          'Anyone building a direct booking channel who needs a source of guest leads',
        ]}
        testimonials={[
          {
            quote: 'I was paying significant commission on every booking with no way to reach guests directly. Since setting up a proper guest lead funnel, a meaningful share of our bookings now come direct.',
            name: 'Claire T.',
            role: 'STR Host, Lake District',
          },
          {
            quote: 'The business travel segment we were targeting wasn’t coming through Airbnb at all. Once we ran targeted lead gen for that audience, we started getting long-stay enquiries consistently.',
            name: 'Robert H.',
            role: 'Multi-Property Operator, London',
          },
        ]}
        faqs={[
          {
            q: 'What are guest leads?',
            a: 'Guest leads are prospective guests who have shown interest in booking a short-term rental — typically via ads, landing pages, or organic search — before they book on a platform like Airbnb. Capturing them directly lets you convert to direct bookings and reduce commission.',
          },
          {
            q: 'How do you generate guest leads?',
            a: 'We use targeted digital advertising, SEO-driven landing pages, and retargeting strategies to attract guests looking for properties in your target area or dates. Leads are captured and delivered to your booking funnel.',
          },
          {
            q: 'Do I need a direct booking website?',
            a: 'A direct booking website significantly improves conversion of guest leads. If you do not have one, this pairs naturally with our Direct Booking Engine service.',
          },
          {
            q: 'What areas and guest types do you target?',
            a: 'We build targeting around your specific property location and target guest profile — leisure, business, or long-stay — to improve lead quality and reduce wasted spend.',
          },
        ]}
        ctaHeading="Ready to Build a Direct Guest Channel?"
        ctaBody="Stop letting platforms own your guests. Book a free call and we'll show you how a guest lead pipeline would work for your property."
      />
    </>
  )
}
