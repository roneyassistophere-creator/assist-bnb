import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/airbnb-va/guest-communication'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Guest Communication' })
}

export default async function GuestCommunicationPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Guest Communication',
              description:
                seoDoc?.meta?.description ??
                'Guest communication management that keeps your short-term rental business running smoothly.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Airbnb Virtual Assistant', href: '/services/airbnb-va' },
              { name: 'Guest Communication', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Airbnb Virtual Assistant', href: '/services/airbnb-va' },
          { name: 'Guest Communication', href: `/${slug}` },
        ]}
        eyebrow="Airbnb Virtual Assistant · Guest Communication"
        title="Guest Communication That Keeps Your STR Business Running"
        subhead="Guest communication isn't just replying to messages — it's the front line of your reviews, your rebookings, and your reputation."
        overview={[
          'Every guest message is a small moment that adds up to your overall rating: a question before booking, a check-in query, a problem at 2am. Handled well, these moments build trust and repeat guests. Handled inconsistently, they show up directly in your reviews.',
          'We manage the full guest communication lifecycle — pre-booking questions, check-in details, in-stay issues, and post-stay follow-up — with the same tone and standard every time.',
        ]}
        problems={[
          {
            title: 'Messages get answered late',
            body: 'A guest question that sits for hours creates anxiety and shows up in review scores.',
          },
          {
            title: 'Tone is inconsistent',
            body: 'Different people (or a stressed you) answering messages leads to a patchy guest experience.',
          },
          {
            title: 'Issues get forgotten mid-stay',
            body: 'Without a system, a reported problem can fall through the cracks until checkout.',
          },
          {
            title: 'No pattern tracking',
            body: 'The same complaint keeps coming up because nobody is tracking it across bookings.',
          },
        ]}
        whatsIncluded={[
          { title: 'Pre-Booking Questions', body: 'Fast, accurate answers that help convert enquiries into bookings.' },
          { title: 'Check-In & Check-Out Messaging', body: 'Clear instructions sent at the right time, every stay.' },
          { title: 'In-Stay Support', body: 'Issues acknowledged quickly and resolved or escalated appropriately.' },
          { title: 'Review Follow-Up', body: 'Post-stay messages timed to encourage genuine, positive reviews.' },
          { title: 'Multi-Platform Coverage', body: 'Consistent responses across Airbnb, Booking.com, and direct channels.' },
          { title: 'Issue Pattern Tracking', body: 'Recurring problems flagged so they get fixed at the source, not just patched.' },
        ]}
        comparison={{
          withoutLabel: 'Unstructured Communication',
          withLabel: 'Managed Communication',
          without: [
            'Slow, inconsistent replies',
            'Different tone depending on who answers',
            'Issues handled reactively',
            'No visibility into recurring problems',
          ],
          with: [
            'Fast, consistent responses around the clock',
            'One reliable voice for your brand',
            'Issues tracked from report to resolution',
            'Patterns spotted and fixed proactively',
          ],
        }}
        whoItsFor={[
          'Hosts who currently answer every guest message personally',
          'Portfolios where response times slip during busy periods',
          'Anyone whose reviews mention slow or inconsistent communication',
          'Co-hosts managing guest experience across multiple owners',
        ]}
        testimonials={[
          {
            quote: 'Guest messages get answered within minutes, even at 11pm. That alone was worth it.',
            name: 'Daniel M.',
            role: 'Co-Host, Bristol',
          },
          {
            quote: 'Our review scores went up within the first month of handing over communication.',
            name: 'Sophie H.',
            role: 'SA Operator, London',
          },
        ]}
        faqs={[
          {
            q: 'What hours do you cover?',
            a: 'Guest communication is covered on a 7-day operational schedule, including evenings and weekends when guests are most likely to message.',
          },
          {
            q: 'Do you use templates or personalised replies?',
            a: 'Both — we use templates for speed on common questions, personalised where the situation calls for it, always matched to your brand voice.',
          },
          {
            q: 'What happens with urgent issues, like a lockout?',
            a: 'Urgent issues are escalated immediately according to an agreed process, including contacting you or on-the-ground contacts where necessary.',
          },
          {
            q: 'Can you also manage guest vetting?',
            a: 'Yes — guest vetting is available as a related service and pairs naturally with communication management.',
          },
        ]}
        ctaHeading="Ready to Stop Managing Guest Messages Yourself?"
        ctaBody="Book a free call and we'll show you exactly how we'd handle your guest communication."
      />
    </>
  )
}
