import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/systems-building/team-structuring'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Team Structuring' })
}

export default async function TeamStructuringPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Team Structuring',
              description:
                seoDoc?.meta?.description ??
                'Team structuring for UK short-term rental businesses — clear roles, responsibilities, and workflows so operations run without constant oversight.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Systems Building', href: '/solutions/systems-building' },
              { name: 'Team Structuring', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Systems Building', href: '/solutions/systems-building' },
          { name: 'Team Structuring', href: `/${slug}` },
        ]}
        eyebrow="Systems Building · Team Structuring"
        title="Build a Team That Runs Your STR Business Properly"
        subhead="Hiring people doesn't solve operational problems on its own. Structure is what makes a team actually effective."
        overview={[
          'Adding people to an unstructured operation often just means more coordination, not less work. Without clear roles, tasks overlap, responsibilities go undefined, and mistakes increase — the team grows, but the chaos grows with it.',
          'We design the role structure your STR business actually needs: who owns guest communication, who owns operations, who owns admin and reporting, and how those roles hand off to one another — so growth adds capacity, not confusion.',
        ]}
        problems={[
          {
            title: 'Tasks overlap',
            body: 'Multiple people end up handling the same thing without realising it, wasting effort.',
          },
          {
            title: 'Responsibilities are unclear',
            body: 'Nobody knows who owns what, so things fall through the gaps between people.',
          },
          {
            title: 'Mistakes increase with headcount',
            body: 'Without defined process, adding people multiplies errors rather than reducing them.',
          },
          {
            title: 'The owner remains the bottleneck',
            body: 'Every decision still routes through one person, even with a team in place.',
          },
        ]}
        whatsIncluded={[
          { title: 'Role Definition', body: 'Clear roles built around guest communication, operations, and admin.' },
          { title: 'Responsibility Mapping', body: 'Every task assigned an owner, so nothing sits in a grey area.' },
          { title: 'Handoff Design', body: 'Clear points where work passes between roles without anything getting lost.' },
          { title: 'Reporting Lines', body: 'A simple structure for who reports what, and to whom.' },
          { title: 'Hiring Guidance', body: 'Support identifying which role to bring on next as you grow.' },
          { title: 'Integration With SOPs', body: 'Roles paired with the documentation needed to execute them consistently.' },
        ]}
        comparison={{
          withoutLabel: 'No Structure',
          withLabel: 'Structured Team',
          without: [
            'Tasks overlap or get missed entirely',
            'Responsibilities are unclear or informal',
            'Errors increase as headcount grows',
            'The owner remains involved in everything',
          ],
          with: [
            'Every task has a clear, single owner',
            'Roles and responsibilities are documented',
            'Consistent execution regardless of team size',
            'The owner steps back from day-to-day operations',
          ],
        }}
        whoItsFor={[
          'Hosts bringing on their first VA or team member',
          'Multi-property operators where responsibilities have become blurred',
          'Businesses scaling headcount without a matching structure',
          'Owners who want to step back from day-to-day operations without losing control',
        ]}
        testimonials={[
          {
            quote: 'We had three people doing overlapping work and no one doing others. Once roles were properly defined, everything ran smoother almost immediately.',
            name: 'Fiona R.',
            role: 'Portfolio Operator, Glasgow',
          },
          {
            quote: 'I was the bottleneck for every decision, even with staff in place. Structuring the team properly let me actually step back.',
            name: 'Callum B.',
            role: 'STR Host, Newcastle',
          },
        ]}
        faqs={[
          {
            q: 'Do you help with hiring, or only with structure?',
            a: 'Our focus is on structure — defining the roles and responsibilities your business needs. We can also advise on which role to prioritise hiring next.',
          },
          {
            q: 'What if I only have one or two team members?',
            a: 'Structure matters even at small scale. Clear roles now make it far easier to add people later without creating confusion.',
          },
          {
            q: 'How does this relate to SOPs and automation?',
            a: 'Team structuring defines who is responsible for what. SOPs then document how each role should execute its responsibilities — the two work best together.',
          },
          {
            q: 'Will this help me step back from daily operations?',
            a: 'Yes — that is the primary goal. With clear roles and reporting lines in place, the business can run without the owner being involved in every decision.',
          },
        ]}
        ctaHeading="Ready to Build a Team That Runs Without You?"
        ctaBody="Book a free call and we'll map out the role structure your business needs next."
      />
    </>
  )
}
