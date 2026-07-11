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

const slug = 'solutions/social-media-management'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({
    slug,
    seoDoc,
    fallbackTitle: 'Social Media Management',
  })
}

const subServices = [
  { title: 'Content Creation', href: `/${slug}/content-creation` },
  { title: 'Posting & Scheduling', href: `/${slug}/posting-and-scheduling` },
  { title: 'Brand Growth', href: `/${slug}/brand-growth` },
  { title: 'Community Engagement', href: `/${slug}/community-engagement` },
  { title: 'Platform Management', href: `/${slug}/platform-management` },
]

export default async function SocialMediaManagementPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Social Media Management',
              description:
                seoDoc?.meta?.description ??
                'Social media management for UK Airbnb and short-term rental hosts, covering content, scheduling, brand growth, and engagement.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Social Media Management', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Social Media Management', href: `/${slug}` },
        ]}
        eyebrow="Solutions · Social Media Management"
        title="Social Media Management That Builds Your STR Brand"
        subhead="Structured content, consistent posting, and real engagement — so your short-term rental business looks active, professional, and worth booking directly."
        overview={[
          'Most STR hosts either don’t post at all, or post in bursts with no plan behind it. For a business that depends on trust and first impressions, an inconsistent social presence undermines exactly the credibility you’re trying to build.',
          'Our social media management service handles the full picture: content that showcases your properties, a posting schedule that never slips, a brand that guests recognise, and genuine engagement with the people already following you.',
        ]}
        problems={[
          {
            title: 'Posting is inconsistent',
            body: 'A burst of posts followed by weeks of silence signals an inactive business to guests and algorithms alike.',
          },
          {
            title: 'Content has no strategy',
            body: 'Random posts with no theme or plan don’t build an audience — they just fill a feed.',
          },
          {
            title: 'No one replies to comments or DMs',
            body: 'Messages and comments left unanswered read as neglect, and quietly cost you enquiries.',
          },
          {
            title: 'Accounts look amateur',
            body: 'Inconsistent visuals and no clear brand identity make it hard for guests to trust what they’re booking.',
          },
        ]}
        whatsIncluded={[
          { title: 'Content Creation', body: 'Branded visuals and copy that showcase your properties and guest experience.' },
          { title: 'Posting & Scheduling', body: 'A planned content calendar that goes live on time, every week, without gaps.' },
          { title: 'Brand Growth', body: 'A consistent identity across every platform that guests come to recognise and trust.' },
          { title: 'Community Engagement', body: 'Comments and DMs answered promptly, in your voice, every day.' },
          { title: 'Platform Management', body: 'Instagram, Facebook, and other accounts kept active and aligned from one system.' },
          { title: 'Monthly Reporting', body: 'Clear visibility into what was posted, what worked, and what’s next.' },
        ]}
        comparison={{
          withoutLabel: 'DIY / Inactive Social Media',
          withLabel: 'Assist BNB',
          without: [
            'Posts go out whenever there’s time — or not at all',
            'No consistent visual identity or brand voice',
            'Comments and DMs sit unanswered for days',
            'Social media stays disconnected from bookings',
          ],
          with: [
            'A planned, consistent posting schedule',
            'A recognisable brand across every platform',
            'Comments and messages answered promptly',
            'Content and engagement built to support direct bookings',
          ],
        }}
        whoItsFor={[
          'Hosts who know they should be active on social media but can’t keep up with it',
          'Serviced accommodation operators wanting a more professional online presence',
          'Hosts trying to reduce reliance on Airbnb and build direct bookings',
          'Anyone whose accounts look inconsistent or have gone quiet for weeks at a time',
        ]}
        testimonials={[
          {
            quote: 'Our Instagram used to go silent for a month at a time. Now it never stops, and it actually looks like a real business.',
            name: 'Priya K.',
            role: 'SA Operator, Birmingham',
          },
          {
            quote: 'Handing over social media meant our accounts finally got replies and consistent posts. Within a few months we had our first direct booking enquiry through DMs.',
            name: 'James T.',
            role: 'STR Host, Manchester',
          },
        ]}
        faqs={[
          {
            q: 'Which platforms do you manage?',
            a: 'We primarily manage Instagram and Facebook, as these tend to be highest-value for property showcase and direct booking growth for UK STR businesses. Other platforms can be added depending on your goals.',
          },
          {
            q: 'Do you create the content yourselves?',
            a: 'Yes — content creation, captions, scheduling, and posting are all handled end to end. We’ll advise on any photography or footage we need from you along the way.',
          },
          {
            q: 'Can this help bring in direct bookings?',
            a: 'Yes, though it works alongside content and time rather than overnight. A consistent, well-managed social presence builds the trust and awareness that leads to direct enquiries.',
          },
          {
            q: 'Can I start with just one part, like posting?',
            a: 'Yes. Many hosts start with posting and scheduling or content creation, then expand into brand growth, engagement, or full platform management as needed.',
          },
        ]}
        ctaHeading="Ready for Social Media That Works for Your STR Business?"
        ctaBody="Book a free call and we'll map out exactly how we'd manage your accounts."
        extra={
          <section className="py-20 bg-muted">
            <div className="container max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                Explore Social Media Management Solutions
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
