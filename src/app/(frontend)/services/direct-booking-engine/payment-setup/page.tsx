import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/direct-booking-engine/payment-setup'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMeta({
    slug,
    seoDoc: await getPageSEO(slug).catch(() => null),
    fallbackTitle: 'Payment Setup',
  })
}

export default async function PaymentSetupPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Payment Setup',
              description:
                seoDoc?.meta?.description ??
                'Secure payment gateway, deposit, and automation setup for UK short-term rental direct bookings.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
              { name: 'Payment Setup', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Direct Booking Engine', href: '/services/direct-booking-engine' },
          { name: 'Payment Setup', href: `/${slug}` },
        ]}
        eyebrow="Direct Booking Engine · Payment Setup"
        title="Secure, Automated Payment Setup for Direct Bookings"
        subhead="Payment gateways, deposits, and automated collection configured properly — so guests pay confidently and you don't chase invoices manually."
        overview={[
          'Payments seem simple until you try to manage them properly. Once you move away from a platform’s built-in payment handling, you need a structured system of your own, and most hosts run into problems after setting something up quickly.',
          'We configure secure payment gateways, deposit handling, and automated collection — so bookings, payments, and confirmations flow together without manual chasing.',
        ]}
        problems={[
          {
            title: 'No clear payment structure',
            body: 'Guests left confused about what to pay and when leads to hesitation and disputes.',
          },
          {
            title: 'Deposits handled manually',
            body: 'Manual deposit tracking is time-consuming and easy to get wrong.',
          },
          {
            title: 'Unclear refund process',
            body: 'Without a defined process, refunds turn into awkward, ad-hoc conversations.',
          },
          {
            title: 'No automation',
            body: 'Manually confirming every payment is unsustainable as bookings grow.',
          },
        ]}
        whatsIncluded={[
          { title: 'Payment Gateway Setup', body: 'A secure, trusted system such as Stripe configured for your bookings.' },
          { title: 'Deposit System', body: 'Refundable deposits or damage waivers handled and tracked properly.' },
          { title: 'Booking Payment Flow', body: 'Full or split payment options with a clear guest-facing journey.' },
          { title: 'Automation Setup', body: 'Automatic confirmations and receipts that cut manual admin.' },
          { title: 'Refund & Adjustment Handling', body: 'A controlled, professional process for refunds and changes.' },
          { title: 'System Integration', body: 'Payments linked directly to your booking engine and operations.' },
        ]}
        comparison={{
          withoutLabel: 'Manual Setup',
          withLabel: 'Structured System',
          without: [
            'Time-consuming manual processing',
            'Higher risk around security and errors',
            'Confusing guest payment experience',
            'Awkward, ad-hoc refund conversations',
          ],
          with: [
            'Automated collection and confirmation',
            'Encrypted, secure payment handling',
            'Clear and professional guest experience',
            'A defined, controlled refund process',
          ],
        }}
        whoItsFor={[
          'Hosts taking bookings through their own website',
          'Serviced accommodation businesses where manual payments create risk',
          'Operators managing multiple listings and payment flows',
          'Hosts wanting clarity on what guests pay and when',
        ]}
        testimonials={[
          {
            quote: 'Deposits used to be a headache. Now they’re just handled.',
            name: 'Farah A.',
            role: 'Host, Cardiff',
          },
          {
            quote: 'Guests pay through a proper checkout now instead of a bank transfer request.',
            name: 'Ollie B.',
            role: 'SA Operator, Nottingham',
          },
        ]}
        faqs={[
          {
            q: 'What payment systems do you use?',
            a: 'We primarily work with Stripe, one of the most widely used and trusted payment processors. Depending on your booking engine, we may recommend an alternative gateway.',
          },
          {
            q: 'Can guests pay securely?',
            a: 'Yes — all payment processing runs through encrypted, PCI-compliant systems, giving guests the same security they’d expect from any professional booking platform.',
          },
          {
            q: 'How do deposits work?',
            a: 'We configure deposit handling to your requirements — refundable security deposits, non-refundable booking fees, or damage waivers — with clear guest communication throughout.',
          },
          {
            q: 'Can payments be automated?',
            a: 'Yes — confirmations, receipts, deposit requests, and balance collection can all run automatically, so you don’t need to manually process each booking.',
          },
        ]}
        ctaHeading="Ready to Set Up Your Payment System Properly?"
        ctaBody="Book a free call and we'll design a payment setup that's secure, clear, and easy to manage."
      />
    </>
  )
}
