import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'services/systems-building/str-automation'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'STR Automation' })
}

export default async function STRAutomationPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'STR Automation',
              description:
                seoDoc?.meta?.description ??
                'Automation for repetitive STR tasks — guest messaging, booking workflows, and operations — without losing control of your business.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Systems Building', href: '/services/systems-building' },
              { name: 'STR Automation', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Systems Building', href: '/services/systems-building' },
          { name: 'STR Automation', href: `/${slug}` },
        ]}
        eyebrow="Systems Building · STR Automation"
        title="Automate Your STR Operations Without Losing Control"
        subhead="Automation isn't about removing you from the business — it's about removing repetition, so your time goes to decisions that actually need it."
        overview={[
          'Every STR business has tasks that follow the same pattern every time: confirmation messages, cleaning assignments, check-in reminders, review requests. Handling those manually, every single time, is where most of a host’s week disappears.',
          'We set up automation around your existing workflows — triggered from a new booking through to the post-stay review request — so the routine runs itself, while anything that genuinely needs a human decision still reaches you.',
        ]}
        problems={[
          {
            title: 'Manual repetition eats your time',
            body: 'The same messages and tasks get handled by hand, booking after booking.',
          },
          {
            title: 'Automation without structure fails',
            body: 'Bolting automation onto a chaotic process just creates faster chaos, not less of it.',
          },
          {
            title: 'Inconsistent execution',
            body: 'Manual tasks get missed or delayed depending on who is available that day.',
          },
          {
            title: 'No time for higher-value work',
            body: 'Time spent on repetitive tasks is time not spent on growth, pricing strategy, or guest experience.',
          },
        ]}
        whatsIncluded={[
          { title: 'Messaging Automation', body: 'Confirmation, check-in, and check-out messages sent automatically and on time.' },
          { title: 'Task Triggers', body: 'Cleaning and maintenance tasks assigned automatically from booking events.' },
          { title: 'Review Requests', body: 'Post-stay review prompts sent at the right moment, every time.' },
          { title: 'Calendar & Booking Sync', body: 'Availability kept accurate across platforms without manual updates.' },
          { title: 'Escalation Rules', body: 'Anything that needs a human decision is flagged and routed to the right person.' },
          { title: 'Ongoing Refinement', body: 'Automations reviewed and adjusted as your operation changes.' },
        ]}
        comparison={{
          withoutLabel: 'Manual Operations',
          withLabel: 'Automated Operations',
          without: [
            'Every message and task handled by hand',
            'Execution depends on who is available that day',
            'Delays and missed steps during busy periods',
            'Time spent on repetition instead of growth',
          ],
          with: [
            'Routine tasks run automatically, every time',
            'Consistent execution regardless of who is on shift',
            'Nothing slips through during busy periods',
            'Your time freed up for decisions that matter',
          ],
        }}
        whoItsFor={[
          'Hosts spending hours a week on repetitive messaging and task coordination',
          'Multi-property operators where manual processes are starting to break down',
          'Portfolios experiencing inconsistent execution during busy periods',
          'Anyone who wants to reduce day-to-day involvement without losing oversight',
        ]}
        testimonials={[
          {
            quote: 'We were sending the same messages manually every single day. Automating it gave us hours back every week without losing the personal touch.',
            name: 'Priya S.',
            role: 'STR Operator, Leeds',
          },
          {
            quote: 'I was nervous about automating too much. They built it so I still see everything important — it just removed the busywork.',
            name: 'Tom G.',
            role: 'Co-Host, Bristol',
          },
        ]}
        faqs={[
          {
            q: 'Will automation replace my involvement entirely?',
            a: 'No. Automation handles the repetitive, predictable parts of your operation. Anything that needs judgement or a personal touch is routed to you or your team.',
          },
          {
            q: 'What tools do you use for automation?',
            a: 'We build around your existing property management and messaging tools where possible, adding automation platforms only where they genuinely fill a gap.',
          },
          {
            q: 'Is this only for larger portfolios?',
            a: 'No — automation helps at any scale. Even a single property benefits from consistent, on-time messaging and task handling.',
          },
          {
            q: 'What happens if something goes wrong with an automated task?',
            a: 'Escalation rules are built in from the start, so anything unusual or urgent is flagged to a person rather than left to run unattended.',
          },
        ]}
        ctaHeading="Ready to Remove the Repetition From Your Operations?"
        ctaBody="Book a free call and we'll identify exactly which tasks in your business are worth automating first."
      />
    </>
  )
}
