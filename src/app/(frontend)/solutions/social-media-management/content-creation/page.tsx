import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/social-media-management/content-creation'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Content Creation' })
}

export default async function ContentCreationPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Content Creation',
              description:
                seoDoc?.meta?.description ??
                'Social media content creation for UK short-term rental hosts, built to showcase properties and grow your brand.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Social Media Management', href: '/solutions/social-media-management' },
              { name: 'Content Creation', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Social Media Management', href: '/solutions/social-media-management' },
          { name: 'Content Creation', href: `/${slug}` },
        ]}
        eyebrow="Social Media Management · Content Creation"
        title="Content Creation That Makes Your STR Brand Visible"
        subhead="Content isn't just posting — it's positioning. We create structured, branded content that shows guests exactly what they're booking."
        overview={[
          'Most STR content is created reactively — whatever photo is on hand, whatever caption comes to mind, whenever there’s a spare moment. It fills a feed, but it doesn’t build anything.',
          'We create content with a plan behind it: property showcases, branded posts, and educational or promotional pieces that all reinforce the same identity, month after month.',
        ]}
        problems={[
          {
            title: 'No content plan',
            body: 'Without a structure, content becomes reactive and sporadic, with no cumulative effect on your brand.',
          },
          {
            title: 'Inconsistent visuals',
            body: 'Different fonts, filters, and layouts on every post mean nothing becomes recognisable.',
          },
          {
            title: 'Reused shots and captions',
            body: 'The same angle and wording on repeat leads to audience fatigue and disengagement.',
          },
          {
            title: 'Posting without purpose',
            body: 'Content with no clear goal generates impressions but rarely leads to enquiries or bookings.',
          },
        ]}
        whatsIncluded={[
          { title: 'Property Showcase Posts', body: 'Interior, exterior, and amenity content that helps guests picture their stay.' },
          { title: 'Branded Graphics & Captions', body: 'Consistent visual design and copy aligned to your voice and audience.' },
          { title: 'Educational Content', body: 'Guest tips and local area guides that add value and build authority.' },
          { title: 'Promotional Posts', body: 'Offers, availability, and seasonal content designed to drive direct enquiries.' },
          { title: 'Monthly Content Planning', body: 'Themes and post ideas mapped out in advance — never a blank calendar.' },
          { title: 'Review & Approval', body: 'You see the plan before anything goes live, so you stay in full control.' },
        ]}
        comparison={{
          withoutLabel: 'Random Content',
          withLabel: 'Structured Content',
          without: [
            'No plan behind what gets posted',
            'Visuals and tone change post to post',
            'Content created reactively, last minute',
            'No link between posts and business goals',
          ],
          with: [
            'A monthly content plan with clear themes',
            'A consistent, recognisable visual identity',
            'Content produced ahead of time, not scrambled',
            'Every post connected to bookings and brand growth',
          ],
        }}
        whoItsFor={[
          'Hosts who aren’t sure what to post, or keep putting it off',
          'Serviced accommodation businesses wanting professional, on-brand content',
          'Operators building a brand that compounds over time',
          'Hosts who want consistency without doing it themselves',
        ]}
        testimonials={[
          {
            quote: 'I had no idea what to post and went weeks without anything going up. Now there’s a plan and content goes out every week.',
            name: 'Sarah K.',
            role: 'STR Host, Birmingham',
          },
          {
            quote: 'The content genuinely reflects the quality of our properties. It looks professional and it’s completely off my plate now.',
            name: 'Marcus P.',
            role: 'SA Operator, Bristol',
          },
        ]}
        faqs={[
          {
            q: 'What type of content do you create?',
            a: 'Property showcase posts, branded graphics, educational content, seasonal promotions, and direct booking prompts — all structured around your brand and goals.',
          },
          {
            q: 'Do you provide content ideas?',
            a: 'Yes. Content planning is core to what we do — we build a monthly calendar with themes and post types mapped out, which you review before anything is created.',
          },
          {
            q: 'Can this help with bookings?',
            a: 'Indirectly but meaningfully. Structured, professional content builds the brand awareness and trust that leads to direct enquiries and website traffic over time.',
          },
          {
            q: 'How often is content created?',
            a: 'Frequency is agreed as part of your package — typically three to five posts per week, plus supporting content, all planned a month ahead.',
          },
        ]}
        ctaHeading="Ready for Content That Actually Represents Your Brand?"
        ctaBody="Book a free call and we'll show you exactly how we'd plan and create your content."
      />
    </>
  )
}
