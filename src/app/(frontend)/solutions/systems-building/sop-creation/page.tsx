import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/systems-building/sop-creation'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'SOP Creation' })
}

export default async function SOPCreationPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'SOP Creation',
              description:
                seoDoc?.meta?.description ??
                'SOP creation and documentation for UK short-term rental businesses — turning systems into processes a team can actually execute.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Systems Building', href: '/solutions/systems-building' },
              { name: 'SOP Creation', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Systems Building', href: '/solutions/systems-building' },
          { name: 'SOP Creation', href: `/${slug}` },
        ]}
        eyebrow="Systems Building · SOP Creation"
        title="SOPs That Turn Your Systems Into Real Execution"
        subhead="Tools, automation, and workflows only work if they're followed consistently. SOPs are the documentation that makes that happen."
        overview={[
          'You can have the right tools, automation, and workflows in place, but without written SOPs, none of it gets followed consistently — especially the moment more than one person is involved. SOPs are the missing layer between having a system and actually running on one.',
          'We document your processes step by step — guest check-in, cleaning handovers, maintenance escalation, whatever your operation depends on — so that anyone on your team can execute them the same way, without having to ask you first.',
        ]}
        problems={[
          {
            title: 'Knowledge lives in one person’s head',
            body: 'If a process only exists in the host’s memory, it can’t be delegated or scaled.',
          },
          {
            title: 'Inconsistent execution',
            body: 'Without a written standard, the same task gets done differently depending on who does it.',
          },
          {
            title: 'Slow onboarding',
            body: 'New team members take far longer to get up to speed without clear documentation to follow.',
          },
          {
            title: 'Mistakes repeat themselves',
            body: 'Without a documented process, the same issues get solved from scratch every time instead of being prevented.',
          },
        ]}
        whatsIncluded={[
          { title: 'Process Mapping', body: 'Your existing workflows mapped out step by step before anything is written.' },
          { title: 'Written SOPs', body: 'Clear, structured documentation for every operational process that needs one.' },
          { title: 'Team-Ready Format', body: 'SOPs written so a new team member could follow them without prior context.' },
          { title: 'Version Control', body: 'Documentation kept current as your processes evolve, not left to go stale.' },
          { title: 'Escalation & Exceptions', body: 'Clear guidance on what to do when a situation falls outside the standard process.' },
          { title: 'Centralised Access', body: 'SOPs stored in one place your team can reference whenever needed.' },
        ]}
        comparison={{
          withoutLabel: 'No SOPs',
          withLabel: 'Documented SOPs',
          without: [
            'Processes exist only in the host’s head',
            'Execution varies depending on who is doing the task',
            'New team members take weeks to get up to speed',
            'The same mistakes happen repeatedly',
          ],
          with: [
            'Every process written down and accessible',
            'Consistent execution regardless of who is on shift',
            'New team members productive within days',
            'Issues get fixed at the source, not repeated',
          ],
        }}
        whoItsFor={[
          'Hosts bringing on their first team member or contractor',
          'Multi-property operators where execution currently varies by person',
          'Businesses that already have workflows but nothing written down',
          'Anyone preparing to delegate operations without losing quality control',
        ]}
        testimonials={[
          {
            quote: 'We had systems, technically. Nothing was written down though, so new hires took weeks to get up to speed. That changed completely once we had real SOPs.',
            name: 'Harriet L.',
            role: 'SA Operator, Edinburgh',
          },
          {
            quote: 'Having every process documented meant I could finally hand off check-in day to someone else without worrying it would be done differently.',
            name: 'Owen P.',
            role: 'Host, Cardiff',
          },
        ]}
        faqs={[
          {
            q: 'Do you write the SOPs, or do we?',
            a: 'We map your existing processes with you, then write the documentation. You review and approve before anything is finalised.',
          },
          {
            q: 'How many SOPs will my business need?',
            a: 'That depends on your operation, but most hosts need documentation for check-in/check-out, cleaning handovers, guest communication, and maintenance escalation at minimum.',
          },
          {
            q: 'Will SOPs need to be updated over time?',
            a: 'Yes — as your operation evolves, we help keep documentation current so it never becomes outdated or ignored.',
          },
          {
            q: 'Can this be combined with automation or team structuring?',
            a: 'Yes, and it usually should be — SOPs, automation, and team structure work best together as one system, not in isolation.',
          },
        ]}
        ctaHeading="Ready to Turn Your Systems Into Real Execution?"
        ctaBody="Book a free call and we'll identify which processes in your business most need documenting first."
      />
    </>
  )
}
