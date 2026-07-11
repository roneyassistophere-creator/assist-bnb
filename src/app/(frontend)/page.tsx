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
  const seoDoc = await getPageSEO('home').catch(() => null)
  return generatePageMeta({ slug: '/', seoDoc, fallbackTitle: siteConfig.seo.defaultTitle })
}

const stats = [
  { value: '50+', label: 'Properties supported' },
  { value: '100%', label: 'Inbox response rate' },
  { value: '7-Day', label: 'Operational coverage' },
  { value: '£0', label: 'Commission charged' },
]

const serviceCategories = [
  {
    title: 'Airbnb Virtual Assistant',
    href: '/services/airbnb-va',
    description:
      'Guest communication, cleaning coordination, calendar management, and everything else that keeps a listing running day to day.',
  },
  {
    title: 'Direct Booking Engine',
    href: '/services/direct-booking-engine',
    description:
      'Your own booking website, integrated payments, and organic growth so you rely less on platform commission.',
  },
  {
    title: 'Lead Generation',
    href: '/services/lead-generation',
    description: 'A consistent pipeline of landlord leads and direct guest bookings.',
  },
  {
    title: 'Social Media Management',
    href: '/services/social-media-management',
    description: 'Content, scheduling, and community engagement that builds a brand beyond the listing.',
  },
  {
    title: 'Systems Building',
    href: '/services/systems-building',
    description: 'SOPs, automation, and team structuring so your business runs without depending on you.',
  },
  {
    title: 'Growth & ROI',
    href: '/roi-performance',
    description: 'ROI calculators, performance optimisation, and consultancy for hosts ready to scale.',
  },
]

const problems = [
  'Guest messages pile up while you are at your day job',
  'Cleaners, contractors, and calendars are managed from memory, not a system',
  'Pricing sits on autopilot instead of tracking demand',
  'Every task still depends on you, no matter how many tools you buy',
]

const differentiators = [
  { title: 'We run operations, not tasks', body: 'A structured backend team, not a list of one-off jobs completed in isolation.' },
  { title: 'UK-based and STR-focused', body: 'We understand UK hosting, platform rules, and guest expectations first-hand.' },
  { title: 'You stay in control', body: 'You make the decisions. We handle guest comms, cleaning, listings, and systems.' },
  { title: 'No commission model', body: 'Flat, transparent pricing — we are not incentivised by how much you charge guests.' },
]

const whoItsFor = [
  'Hosts managing 1–10 short-term rental properties',
  'Serviced accommodation operators scaling past what they can manage alone',
  'Co-hosts and property managers who need a reliable operations partner',
  'Anyone tired of running their STR business from their phone at midnight',
]

const testimonials = [
  {
    quote:
      'The operational consistency Assist BNB brought was something we tried to build ourselves for two years.',
    name: 'Portfolio Manager',
    role: 'UK Operator, 6 properties',
  },
  {
    quote:
      'I stopped answering guest messages at 11pm. Occupancy went up and I got my evenings back.',
    name: 'SA Business Owner',
    role: 'Scaling Host, Manchester',
  },
]

const faqs = [
  {
    q: 'What exactly does Assist BNB do?',
    a: 'We are a full-service STR operations partner. We handle guest communication, cleaning coordination, listing and pricing optimisation, social media, and the backend systems that keep a short-term rental business running — so you do not have to do it all yourself.',
  },
  {
    q: 'Do I need to already have properties listed?',
    a: 'No. We work with hosts at every stage — from setting up a first listing properly to running the operations of an established multi-property portfolio.',
  },
  {
    q: 'How is pricing structured?',
    a: 'Pricing is tailored to the services and number of properties involved — there is no one-size-fits-all package. Book a free call and we will recommend the right scope for your business.',
  },
]

export default async function HomePage() {
  const seoDoc = await getPageSEO('home').catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? siteConfig.seo.defaultTitle,
              description: seoDoc?.meta?.description ?? siteConfig.seo.defaultDescription,
              url: siteConfig.url,
            }),
            breadcrumbSchema([{ name: 'Home', href: '/' }]),
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[80vh] bg-linear-to-br from-background to-muted text-center px-4">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            Supporting UK hosts with 7-day operational coverage
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your Team for <span className="text-primary">Short-Term Rental Growth</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            We handle guest communication, cleaning coordination, listing optimisation, and
            backend systems — so you can save time, stay organised, and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Book a Free Call
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium hover:bg-muted transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-24 bg-muted">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Sound Familiar?</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Most hosts do not struggle because they lack demand. They struggle because everything
            depends on them.
          </p>
          <ul className="rounded-lg border border-border divide-y divide-border bg-background">
            {problems.map((problem) => (
              <li key={problem} className="px-5 py-4 text-sm flex items-start gap-2">
                <span className="text-primary mt-0.5">✕</span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Full Backend of Your STR Business</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              More than virtual assistants — a structured team covering every part of how your
              short-term rental business runs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-lg border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium hover:bg-muted transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Hosts Choose Assist BNB</h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((item) => (
              <div key={item.title} className="rounded-lg border border-border p-6 bg-background">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Who This Is For</h2>
          <ul className="rounded-lg border border-border divide-y divide-border">
            {whoItsFor.map((line) => (
              <li key={line} className="px-5 py-4 text-sm flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-12 text-center">What Hosts Are Saying</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-lg border border-border p-6 bg-background">
                <p className="text-sm mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{t.name}</span> — {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Common Questions</h2>
          <Faq items={faqs} />
          <div className="text-center mt-8">
            <Link href="/faq" className="text-sm font-medium text-primary hover:underline">
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-8 opacity-90">
            One conversation can change the trajectory of your STR business. Let&apos;s talk.
          </p>
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
