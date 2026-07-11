import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/social-media-management/posting-and-scheduling'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Posting & Scheduling' })
}

export default async function PostingAndSchedulingPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Posting & Scheduling',
              description:
                seoDoc?.meta?.description ??
                'Consistent social media posting and scheduling for UK short-term rental hosts, so your accounts never go quiet.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Social Media Management', href: '/solutions/social-media-management' },
              { name: 'Posting & Scheduling', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Social Media Management', href: '/solutions/social-media-management' },
          { name: 'Posting & Scheduling', href: `/${slug}` },
        ]}
        eyebrow="Social Media Management · Posting & Scheduling"
        title="Posting & Scheduling That Keeps Your STR Brand Consistent"
        subhead="Posting five times in one week then going silent for three is worse than posting twice a week, every week. We keep the rhythm going without you having to think about it."
        overview={[
          'Consistency matters more than frequency. Algorithms reward reliability, and so do guests deciding whether your business feels active and trustworthy.',
          'We plan, schedule, and publish your content on a fixed rhythm across your chosen platforms — so there are no missed weeks and no last-minute scrambles.',
        ]}
        problems={[
          {
            title: 'Lack of time',
            body: 'Running an STR business is demanding, and social media always gets pushed to tomorrow.',
          },
          {
            title: 'No content calendar',
            body: 'Without a plan, every post starts from scratch, which guarantees inconsistency.',
          },
          {
            title: 'Manual posting only',
            body: 'Relying on remembering to post yourself means gaps are inevitable.',
          },
          {
            title: 'Missed posting days pile up',
            body: 'One missed day becomes a week, and rebuilding momentum takes longer than maintaining it would have.',
          },
        ]}
        whatsIncluded={[
          { title: 'Monthly Content Calendar', body: 'A structured posting plan agreed and reviewed with you in advance.' },
          { title: 'Scheduled Publishing', body: 'Posts go live at the right time, on the right platform, without manual uploads.' },
          { title: 'Timing Optimisation', body: 'Publish windows chosen around when your audience is actually active.' },
          { title: 'Multi-Platform Coverage', body: 'Consistent activity maintained across Instagram, Facebook, and beyond.' },
          { title: 'Gap Monitoring', body: 'Scheduled posts checked to make sure nothing fails silently.' },
          { title: 'Plan Adjustments', body: 'Schedules updated when bookings, offers, or priorities change.' },
        ]}
        comparison={{
          withoutLabel: 'Inconsistent Posting',
          withLabel: 'Structured Scheduling',
          without: [
            'Posts go out whenever there’s time',
            'Weeks go by with no activity at all',
            'Every post requires a decision on the day',
            'Output depends entirely on your availability',
          ],
          with: [
            'A fixed, planned posting rhythm',
            'Consistent activity, week after week',
            'Content planned and approved a month ahead',
            'Posting continues regardless of how busy you are',
          ],
        }}
        whoItsFor={[
          'Hosts whose posting keeps slipping down the priority list',
          'Serviced accommodation businesses wanting an active, professional account',
          'Operators managing content across several platforms at once',
          'Anyone who wants to know their social media runs without having to check it',
        ]}
        testimonials={[
          {
            quote: 'I used to post maybe once a month when I remembered. Now it goes out every week without me touching it.',
            name: 'Tom W.',
            role: 'STR Host, Manchester',
          },
          {
            quote: 'I review the plan at the start of the month, approve it, and then it just happens. Exactly what I needed.',
            name: 'Louise C.',
            role: 'SA Operator, London',
          },
        ]}
        faqs={[
          {
            q: 'How often do you post?',
            a: 'Frequency is agreed as part of your package — standard management includes three to five posts per week across agreed platforms.',
          },
          {
            q: 'Do you schedule content in advance?',
            a: 'Yes, all content is scheduled ahead of time as part of a monthly plan. You review and approve the calendar before publishing begins.',
          },
          {
            q: 'Which platforms do you cover?',
            a: 'We primarily schedule for Instagram and Facebook. Other platforms can be added depending on your goals and package.',
          },
          {
            q: 'Can schedules be adjusted?',
            a: 'Yes — if a booking comes in or you want to promote something specific, we can adjust the calendar with reasonable notice.',
          },
        ]}
        ctaHeading="Ready to Stay Consistent on Social Media?"
        ctaBody="Book a free call and we'll show you exactly how we'd structure your posting schedule."
      />
    </>
  )
}
