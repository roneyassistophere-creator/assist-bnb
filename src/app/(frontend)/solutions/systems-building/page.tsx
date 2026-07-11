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

const slug = 'solutions/systems-building'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({
    slug,
    seoDoc,
    fallbackTitle: 'Systems Building',
  })
}

const subServices = [
  { title: 'STR Business Setup', href: '/solutions/systems-building/str-business-setup' },
  { title: 'STR Automation', href: '/solutions/systems-building/str-automation' },
  { title: 'SOP Creation', href: '/solutions/systems-building/sop-creation' },
  { title: 'Team Structuring', href: '/solutions/systems-building/team-structuring' },
]

export default async function SystemsBuildingPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Systems Building',
              description:
                seoDoc?.meta?.description ??
                'Operational infrastructure for UK short-term rental businesses — business setup, automation, SOPs, and team structuring that reduce dependence on the owner.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Systems Building', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Systems Building', href: `/${slug}` },
        ]}
        eyebrow="Solutions · Systems Building"
        title="The Operational Infrastructure Behind a Business That Runs Without You"
        subhead="Structured workflows, automation, documentation, and team roles — the backend that lets your STR business scale instead of depending entirely on the owner."
        overview={[
          'Most STR businesses run on manual processes, scattered tools, and constant involvement from the host. That works at the start. It breaks the moment you try to scale, take a step back, or bring on a team.',
          'Systems building is the work of turning that setup into a structured business — whether you are launching from scratch, automating repetitive tasks, documenting how things should be done, or organising a team around clear roles. Each area works on its own, and together they form the backend of a business that runs predictably.',
        ]}
        problems={[
          {
            title: 'No standard processes',
            body: 'Every task is done differently each time, with no consistency between them.',
          },
          {
            title: 'Repeated manual work',
            body: 'Time is spent solving the same problems from scratch instead of following a system.',
          },
          {
            title: 'Everything depends on the host',
            body: 'Nothing moves unless the owner is personally involved, which caps how far the business can grow.',
          },
          {
            title: 'Tools with no structure behind them',
            body: 'Software and platforms get added without a plan, creating more confusion, not less.',
          },
        ]}
        whatsIncluded={[
          { title: 'Business Setup', body: 'Structured systems and workflows built in from day one for new STR businesses.' },
          { title: 'Automation', body: 'Repetitive messaging and operational tasks automated without losing control.' },
          { title: 'SOP Creation', body: 'Clear documentation that turns your systems into processes a team can actually follow.' },
          { title: 'Team Structuring', body: 'Defined roles and responsibilities so operations run without constant oversight.' },
          { title: 'Workflow Design', body: 'Task tracking and coordination so nothing depends on memory.' },
          { title: 'Ongoing Refinement', body: 'Systems reviewed and adjusted as your business and portfolio grow.' },
        ]}
        comparison={{
          withoutLabel: 'Manual Setup',
          withLabel: 'Systemised',
          without: [
            'Reactive, ad hoc operations',
            'The host required for almost everything',
            'Inconsistent quality depending on who does what',
            'Growth adds pressure rather than progress',
          ],
          with: [
            'Structured, repeatable processes',
            'The host can step back without things stopping',
            'Consistent quality across every booking',
            'A business built to scale, not rebuild',
          ],
        }}
        whoItsFor={[
          'New hosts wanting to start their STR business with the right structure from day one',
          'Multi-property operators whose manual processes are breaking down under growth',
          'SA businesses that need consistent operations across a growing portfolio',
          'Anyone who knows they need a proper system but doesn’t know where to start',
        ]}
        testimonials={[
          {
            quote: 'Before, every day was firefighting. Now we have a proper system and I actually have time to focus on growth.',
            name: 'Daniel H.',
            role: 'STR Host, Birmingham',
          },
          {
            quote: 'I was managing several properties on spreadsheets. Now we have structured workflows for everything — night and day difference.',
            name: 'Marcus K.',
            role: 'Portfolio Host, Leeds',
          },
        ]}
        faqs={[
          {
            q: 'Do I need all four areas, or can I start with one?',
            a: 'You can start with whichever area matters most right now — a new setup, automating a specific bottleneck, documenting a process, or structuring your team — and expand from there.',
          },
          {
            q: 'Can this work with tools I already use?',
            a: 'Yes. We work with your existing platforms where possible and only recommend changes when your current tools are creating friction.',
          },
          {
            q: 'How long does systems building take?',
            a: 'It depends on scope and complexity. A single workflow can be documented in days; a full business setup or team structure typically takes a few weeks.',
          },
          {
            q: 'Will this actually reduce my day-to-day workload?',
            a: 'That is the primary goal. Replacing manual processes with documented systems, automation, and clear roles means the business runs with less of your direct time required.',
          },
        ]}
        ctaHeading="Ready to Turn Your Setup Into a System?"
        ctaBody="Book a free call and we'll map out exactly which systems your business needs first."
        extra={
          <section className="py-20 bg-muted">
            <div className="container max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                Explore Systems Building Solutions
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
