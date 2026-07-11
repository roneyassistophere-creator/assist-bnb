import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import { Faq } from '@/components/Faq'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO('faq').catch(() => null)
  return generatePageMeta({ slug: 'faq', seoDoc, fallbackTitle: 'FAQ' })
}

const categories = [
  {
    label: 'Getting Started',
    faqs: [
      {
        q: 'What exactly does Assist BNB do?',
        a: 'Assist BNB is a full-service short-term rental management and virtual assistance company based in the UK. We handle guest communication, cleaning coordination, listing and pricing optimisation, social media, and the backend systems that keep an STR business running.',
      },
      {
        q: 'Who is Assist BNB for?',
        a: 'UK hosts and serviced accommodation operators managing anywhere from a single property to a large multi-property portfolio, who want reliable operational support instead of doing everything themselves.',
      },
      {
        q: 'Do I need to already have a property listed?',
        a: 'No. We work with hosts before they list a first property as well as established operators running dozens of units.',
      },
      {
        q: 'How do I get started?',
        a: 'Book a free discovery call through our contact page. We will discuss your properties and goals, then put together a tailored proposal.',
      },
      {
        q: 'Do you work with hosts outside the UK?',
        a: 'Our core focus is UK short-term rentals, though we do take on select international clients where the fit is right. Get in touch and we can discuss your situation.',
      },
    ],
  },
  {
    label: 'Our Services',
    faqs: [
      {
        q: 'What does the Airbnb Virtual Assistant service cover?',
        a: 'Guest communication, guest vetting, check-in/check-out coordination, cleaning coordination, calendar management, pricing optimisation, listing creation, photography guidance, and monthly finance reporting.',
      },
      {
        q: 'What is "Systems Building"?',
        a: 'It is building the operational infrastructure of your STR business — SOPs, automation, and team structuring — so the business runs consistently whether or not you are personally involved day to day.',
      },
      {
        q: 'Do you manage social media too?',
        a: 'Yes. We offer content creation, posting and scheduling, community engagement, and platform management to build a brand around your properties.',
      },
      {
        q: 'Can you build a direct booking website?',
        a: 'Yes — we design and build direct booking websites with integrated payments, plus SEO and Google Ads support to drive traffic to them.',
      },
      {
        q: 'Do you offer consultancy instead of full management?',
        a: 'Yes. Our Growth & ROI consultancy and training service is built for hosts who want guidance and structure rather than full outsourced management.',
      },
    ],
  },
  {
    label: 'Pricing & Packages',
    faqs: [
      {
        q: 'How much does it cost?',
        a: 'Pricing is tailored to your properties and the services you need — there is no one-size-fits-all package. Book a free call and we will put together a proposal.',
      },
      {
        q: 'Do you charge a percentage of revenue or a fixed fee?',
        a: 'Both models are available depending on the service and scope. We will recommend whichever makes more sense for your business during the discovery call.',
      },
      {
        q: 'Is there a setup fee?',
        a: 'Some services (like systems building or a direct booking website) include a one-off setup phase. This will always be made clear in your proposal before you commit to anything.',
      },
      {
        q: 'Can I pick individual services rather than a full package?',
        a: 'Yes. You can start with a single service — such as guest communication — and add others as needed.',
      },
      {
        q: 'Do you offer a free trial?',
        a: 'We do not offer a free trial, but every engagement starts with a free, no-obligation discovery call so you know exactly what you are getting before committing.',
      },
    ],
  },
  {
    label: 'Working With Us',
    faqs: [
      {
        q: 'How do we communicate day to day?',
        a: 'Typically over WhatsApp or email, with tools like Slack or Notion added for larger portfolios that need more structured reporting.',
      },
      {
        q: 'How long does onboarding take?',
        a: 'Most engagements are fully onboarded within 5–10 business days, depending on the number of properties and how much existing documentation you have.',
      },
      {
        q: 'What length of contract do you require?',
        a: 'Most clients start on a monthly rolling basis. Longer-term agreements are available and typically come with preferential pricing.',
      },
      {
        q: 'What information do you need from me to get started?',
        a: 'Access to your listings, calendar/PMS, and any existing SOPs or guest communication templates. We will provide a simple onboarding checklist.',
      },
      {
        q: 'Can I pause or cancel at any time?',
        a: 'Monthly rolling agreements can be paused or cancelled with notice as set out in your contract — we do not lock hosts into arrangements that are not working for them.',
      },
    ],
  },
  {
    label: 'Social Media',
    faqs: [
      {
        q: 'Which platforms do you manage?',
        a: 'Instagram, Facebook, TikTok, and LinkedIn, depending on where your audience actually is.',
      },
      {
        q: 'Do you create the content, or just post it?',
        a: 'Both — content creation is included as part of our social media management service, not billed as a separate extra.',
      },
      {
        q: 'How often do you post?',
        a: 'Typically 3 to 7 posts per week depending on the plan and platform mix agreed with you.',
      },
      {
        q: 'Do I get to approve content before it goes out?',
        a: 'Yes, we run an approval workflow so nothing is published without your sign-off unless you prefer otherwise.',
      },
      {
        q: 'What metrics do you track?',
        a: 'Reach, engagement rate, follower growth, and — where relevant — direct booking enquiries generated from social channels.',
      },
    ],
  },
  {
    label: 'Technology & Tools',
    faqs: [
      {
        q: 'What property management systems do you work with?',
        a: 'We regularly work with Guesty, Hostfully, and Lodgify, among others, and can adapt to whatever PMS you are already using.',
      },
      {
        q: 'What tools do you use for social media?',
        a: 'Scheduling and reporting tools such as Later, Buffer, and Metricool, depending on the platforms involved.',
      },
      {
        q: 'How do we stay in sync internally?',
        a: 'We typically use Slack, Notion, or ClickUp for day-to-day communication and reporting, matched to whatever your team already uses where possible.',
      },
      {
        q: 'Can you set up automated guest messaging?',
        a: 'Yes — automated message sequences are part of our systems building and Airbnb VA services, always monitored so nothing feels robotic to guests.',
      },
    ],
  },
  {
    label: 'Results & Performance',
    faqs: [
      {
        q: 'How quickly will I see results?',
        a: 'Listing and pricing changes typically show results within 2–4 weeks. Social media momentum tends to build over 2–3 months.',
      },
      {
        q: 'Can you guarantee a specific revenue figure?',
        a: 'No — no honest STR partner can guarantee exact revenue, since it depends on market, seasonality, and property specifics. We can show you the levers we pull and how they typically move occupancy and revenue.',
      },
      {
        q: 'What if I am not happy with performance?',
        a: 'We review performance regularly and adjust strategy together. If something is not working, we would rather have that conversation early than let it slide.',
      },
      {
        q: 'Do you report on performance regularly?',
        a: 'Yes — monthly finance and performance reporting is included as part of our Airbnb VA service.',
      },
    ],
  },
  {
    label: 'Trust & Security',
    faqs: [
      {
        q: 'How do you handle access to my accounts and credentials?',
        a: 'Access is granted through secure, revocable methods wherever platforms support it, and credentials are never shared beyond the team members who need them.',
      },
      {
        q: 'Is my business information kept confidential?',
        a: 'Yes — confidentiality is standard in every client agreement, and we do not share your data or performance figures with other clients.',
      },
      {
        q: 'Are you GDPR compliant?',
        a: 'Assist BNB is UK-based and operates in accordance with UK GDPR requirements for handling client and guest data.',
      },
      {
        q: 'Do you carry business insurance?',
        a: 'Yes, Assist BNB holds business insurance appropriate to the services we provide.',
      },
    ],
  },
]

export default async function FaqPage() {
  const seoDoc = await getPageSEO('faq').catch(() => null)
  const totalFaqs = categories.reduce((sum, c) => sum + c.faqs.length, 0)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'FAQ',
              description:
                seoDoc?.meta?.description ??
                'Answers to common questions about working with Assist BNB.',
              url: `${siteConfig.url}/faq`,
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'FAQ', href: '/faq' },
            ]),
          ]),
        }}
      />

      {/* Hero */}
      <section className="py-24 bg-muted text-center px-4">
        <div className="container max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            {totalFaqs} answers across {categories.length} categories — from getting started to
            pricing, tools, and trust.
          </p>
        </div>
      </section>

      {/* Category jump links */}
      <section className="py-10 bg-background border-b border-border">
        <div className="container max-w-4xl flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href={`#${cat.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm px-4 py-2 rounded-md border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl flex flex-col gap-16">
          {categories.map((cat) => (
            <div key={cat.label} id={cat.label.toLowerCase().replace(/\s+/g, '-')}>
              <h2 className="text-2xl font-bold mb-6 scroll-mt-24">{cat.label}</h2>
              <Faq items={cat.faqs} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-8 opacity-90">Book a free call and we&apos;ll answer them directly.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-background text-foreground px-6 py-3 font-medium hover:bg-background/90 transition-colors"
          >
            Book a Free Call
          </Link>
        </div>
      </section>
    </>
  )
}
