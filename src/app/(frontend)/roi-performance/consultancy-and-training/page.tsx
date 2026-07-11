import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'roi-performance/consultancy-and-training'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Airbnb Consultancy & Training' })
}

export default async function ConsultancyAndTrainingPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Airbnb Consultancy & Training',
              description:
                seoDoc?.meta?.description ??
                'Expert consultancy and training for UK Airbnb hosts who want guidance on pricing, listings, and operations while staying in control.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Growth & ROI', href: '/roi-performance' },
              { name: 'Consultancy & Training', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Growth & ROI', href: '/roi-performance' },
          { name: 'Consultancy & Training', href: `/${slug}` },
        ]}
        eyebrow="Growth & ROI · Consultancy & Training"
        title="Airbnb Consultancy & Training for Hosts Who Want to Stay in Control"
        subhead="Not every host wants full management. Some want expert guidance, clarity, and a team that can execute it — without handing the business over."
        overview={[
          'Some hosts want direction, not outsourcing. They want to keep making the decisions, but with better information and a framework behind those decisions instead of guesswork.',
          'Our consultancy and training service reviews your listings, pricing, operations, and systems, then gives you a clear, prioritised plan — plus training so you or your team can execute it consistently.',
        ]}
        problems={[
          {
            title: 'No clear strategy',
            body: 'Operating without a plan means reacting to problems rather than preventing them.',
          },
          {
            title: 'Decisions change with the mood, not the data',
            body: 'Without a framework, pricing and operational choices shift based on what feels right in the moment.',
          },
          {
            title: 'No access to experienced input',
            body: 'Hosts without expert guidance often spend months solving problems an outside eye could resolve in a single session.',
          },
          {
            title: 'Learning happens the expensive way',
            body: 'Trial and error in a live business costs time, money, and missed bookings that guidance could have avoided.',
          },
        ]}
        whatsIncluded={[
          { title: 'Listing & Performance Review', body: 'A full audit of your current listings across platforms with specific improvement points.' },
          { title: 'Pricing & Calendar Guidance', body: 'Advice on dynamic pricing and availability management based on your market.' },
          { title: 'Operations Advice', body: 'A review of current workflows to identify where time and money are being lost.' },
          { title: 'Systems & Automation Guidance', body: 'Recommendations on tools and integrations that reduce manual work.' },
          { title: 'Team & Scaling Support', body: 'Advice on team structure and role definition as your portfolio grows.' },
          { title: 'Host or Team Training', body: 'Structured training so you or your team can execute the plan consistently.' },
        ]}
        comparison={{
          withoutLabel: 'Trial & Error',
          withLabel: 'Expert Guidance',
          without: [
            'Slow, expensive learning through mistakes',
            'Unclear direction on what to prioritise',
            'The same mistakes repeated across bookings',
            'Performance improvements that are inconsistent',
          ],
          with: [
            'Faster improvement from experienced input',
            'A clear, prioritised strategy',
            'Structured progress instead of repeated errors',
            'Measurable performance improvement over time',
          ],
        }}
        whoItsFor={[
          'Self-managing hosts who want expert input without giving up control',
          'Serviced accommodation businesses needing strategic guidance to scale',
          'Teams or VAs who need structured training to work more effectively',
          'Operators who have grown and need clarity to manage the added complexity',
        ]}
        testimonials={[
          {
            quote: 'I did not want someone else running my business — I wanted to run it better myself. The session identified three changes I made immediately, and occupancy improved the following month.',
            name: 'Laura M.',
            role: 'Self-Managing Host, Edinburgh',
          },
          {
            quote: 'We had five properties and no clear strategy. The review showed us exactly what was wrong with our pricing and operations, and the training brought our team up to speed properly.',
            name: 'Thomas N.',
            role: 'SA Operator, Manchester',
          },
        ]}
        faqs={[
          {
            q: 'Is this one-to-one consultancy?',
            a: 'Yes — sessions are tailored to your specific business and goals, based on an assessment of your actual operation and data, not a generic framework.',
          },
          {
            q: 'Can you train my team?',
            a: 'Yes. We provide structured training for VAs and operations staff, covering the areas relevant to their roles — guest communication, operational processes, or pricing procedures.',
          },
          {
            q: 'What areas do you cover?',
            a: 'Listings and performance, pricing strategy, operations and workflow, systems and automation, team structure, and scaling planning — a single session can focus on one area or several.',
          },
          {
            q: 'Will this actually improve my performance?',
            a: 'Consultancy provides direction — the improvement depends on implementation. Hosts who apply the recommendations consistently typically see measurable gains in occupancy and revenue.',
          },
        ]}
        ctaHeading="Need Clear Direction for Your STR Business?"
        ctaBody="Book a free call and we'll review your setup and give you a clear plan to move forward."
      />
    </>
  )
}
