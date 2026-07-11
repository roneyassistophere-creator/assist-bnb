import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { ServiceTemplate } from '@/components/ServiceTemplate'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

const slug = 'solutions/social-media-management/community-engagement'

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO(slug).catch(() => null)
  return generatePageMeta({ slug, seoDoc, fallbackTitle: 'Community Engagement' })
}

export default async function CommunityEngagementPage() {
  const seoDoc = await getPageSEO(slug).catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Community Engagement',
              description:
                seoDoc?.meta?.description ??
                'Social media engagement management for UK short-term rental hosts, replying to comments and messages to build guest trust.',
              url: `${siteConfig.url}/${slug}`,
              type: 'Service',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Social Media Management', href: '/solutions/social-media-management' },
              { name: 'Community Engagement', href: `/${slug}` },
            ]),
          ]),
        }}
      />

      <ServiceTemplate
        breadcrumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Social Media Management', href: '/solutions/social-media-management' },
          { name: 'Community Engagement', href: `/${slug}` },
        ]}
        eyebrow="Social Media Management · Community Engagement"
        title="Community Engagement That Builds Trust Around Your Brand"
        subhead="Posting content is only half the work. Growth comes from the conversations that happen around it — comments, DMs, and how quickly you respond."
        overview={[
          'Most STR accounts focus entirely on posting and leave comments and messages unanswered. That reads as neglect, and it quietly costs enquiries every week.',
          'We manage comments, DMs, and audience interaction as a system — every message gets a timely, on-brand reply, so your account feels active and trustworthy.',
        ]}
        problems={[
          {
            title: 'Messages left unanswered',
            body: 'Enquiries that never get a reply signal neglect, and potential guests move on immediately.',
          },
          {
            title: 'No replies to comments',
            body: 'Comments without a response make an account feel automated and impersonal.',
          },
          {
            title: 'Slow response times',
            body: 'Delayed replies damage credibility and lose time-sensitive enquiries.',
          },
          {
            title: 'No interaction with followers',
            body: 'Ignoring your audience creates a one-way presence that never builds real community.',
          },
        ]}
        whatsIncluded={[
          { title: 'Comment Management', body: 'Replies kept active across every post, not just the newest ones.' },
          { title: 'Direct Message Handling', body: 'Enquiries answered professionally and guided toward a booking.' },
          { title: 'Audience Interaction', body: 'Genuine engagement with followers to build community, not just replies.' },
          { title: 'Tone & Brand Alignment', body: 'Every interaction matched to your voice, formal or friendly.' },
          { title: 'Response Time Standards', body: 'Messages answered within an hour during active hours.' },
          { title: 'Activity Monitoring', body: 'Nothing missed — every comment and DM tracked to a reply.' },
        ]}
        comparison={{
          withoutLabel: 'Inactive Engagement',
          withLabel: 'Managed Engagement',
          without: [
            'No replies to comments or DMs',
            'Low trust from your audience',
            'A weak, passive brand presence',
            'Missed booking opportunities',
          ],
          with: [
            'Consistent interaction across channels',
            'Higher credibility and audience trust',
            'A strong, recognisable brand presence',
            'Better conversion from social to bookings',
          ],
        }}
        whoItsFor={[
          'Hosts posting regularly but seeing little interaction back',
          'Serviced accommodation businesses wanting a professional, responsive presence',
          'Operators building a brand who want a real community around it',
          'Anyone who’s noticed the gap between posting and actually connecting',
        ]}
        testimonials={[
          {
            quote: 'We were posting regularly but getting no replies back. Now our account feels alive — guests actually comment back.',
            name: 'Rachel S.',
            role: 'STR Host, Leeds',
          },
          {
            quote: 'Enquiries used to sit for days. Now every DM gets a reply within the hour, and it’s made a real difference to bookings.',
            name: 'Marcus W.',
            role: 'SA Operator, London',
          },
        ]}
        faqs={[
          {
            q: 'Do you reply to all messages?',
            a: 'Yes — we manage all incoming comments and DMs across your active platforms, and every message gets a professional, brand-aligned reply.',
          },
          {
            q: 'How fast are your response times?',
            a: 'We aim to respond within an hour during active hours. Exact protocols are agreed during onboarding to match your audience and platforms.',
          },
          {
            q: 'Can you match our tone and brand voice?',
            a: 'Yes. We spend time understanding your brand voice before managing any engagement, whether it’s professional, warm, or conversational.',
          },
          {
            q: 'Does engagement actually help with bookings?',
            a: 'Yes. Guests who see active, quick replies trust your brand more, and are far more likely to enquire or book directly.',
          },
        ]}
        ctaHeading="Ready to Build a More Engaged Audience?"
        ctaBody="Book a free call and we'll show you how we'd manage your engagement."
      />
    </>
  )
}
