import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO('about').catch(() => null)
  return generatePageMeta({ slug: 'about', seoDoc, fallbackTitle: 'About Us' })
}

const pillars = [
  {
    title: 'Guest Communication',
    body: 'Every message answered, every question handled, day or night.',
  },
  {
    title: 'Cleaning & Turnovers',
    body: 'Coordinated around your calendar so nothing gets missed between guests.',
  },
  {
    title: 'Pricing & Listings',
    body: 'Rates and content kept sharp so your properties keep earning what they should.',
  },
  {
    title: 'Backend Systems',
    body: 'SOPs and structure so the business runs the same way whether or not you are watching.',
  },
]

const approach = [
  {
    title: 'Systems',
    body: 'We build the operational infrastructure first — the processes that make everything else repeatable.',
  },
  {
    title: 'Daily Execution',
    body: 'Guest comms, cleaning, pricing, and listings are handled every single day, not just when something breaks.',
  },
  {
    title: 'Long-Term Growth',
    body: 'We look past this week’s bookings to the systems and channels that grow the business over time.',
  },
]

const stats = [
  { value: '7-Day', label: 'Operational Coverage' },
  { value: 'UK', label: 'Based & STR-Focused' },
  { value: 'Real', label: 'Operational Experience' },
  { value: 'End-to-End', label: 'Backend Management' },
]

const personas = [
  { title: 'Multi-Property Hosts', body: 'Running more than one listing and feeling it in every spare hour.' },
  { title: 'SA Operators', body: 'Serviced accommodation businesses that have outgrown ad-hoc support.' },
  { title: 'Co-Hosts', body: 'Managing properties for others and needing a reliable delivery partner.' },
  { title: 'Growth-Stage Operators', body: 'Ready to scale but blocked by how much still depends on them personally.' },
]

const testimonials = [
  {
    quote:
      'Assist BNB changed how our business runs. The operational consistency they brought was something we tried to build ourselves for two years.',
    name: 'Portfolio Manager',
    role: 'UK Operator, 6 properties',
  },
  {
    quote: 'They act like part of the team, not an outside vendor ticking off tasks.',
    name: 'SA Business Owner',
    role: 'Scaling Host, Manchester',
  },
  {
    quote: 'I finally have visibility into what is actually happening across my properties.',
    name: 'Multi-Listing Host',
    role: 'Growth Stage, Bristol',
  },
]

export default async function AboutPage() {
  const seoDoc = await getPageSEO('about').catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? `About Us`,
              description:
                seoDoc?.meta?.description ??
                `Assist BNB is a UK-based operations team for Airbnb and short-term rental hosts.`,
              url: `${siteConfig.url}/about`,
              type: 'AboutPage',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
            ]),
          ]),
        }}
      />

      {/* Hero */}
      <section className="py-24 bg-muted text-center px-4">
        <div className="container max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            About Assist BNB
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Built Around How STR Businesses Actually Run
          </h1>
          <p className="text-lg text-muted-foreground">
            More than a virtual assistant service — we are a remote operations team for UK
            Airbnb and short-term rental hosts.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p>
              Most hosts don&apos;t struggle because they lack demand. They struggle because
              everything depends on them — the messages, the cleaners, the pricing, the listings,
              the maintenance calls. Assist BNB exists to carry that operational load so hosts can
              stay in control of their business without running every part of it themselves.
            </p>
            <p>
              We don&apos;t just support your business. We help it run properly.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-lg border border-border p-6">
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-24 bg-muted">
        <div className="container">
          <h2 className="text-2xl font-bold mb-12 text-center">Our Approach</h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {approach.map((a) => (
              <div key={a.title} className="rounded-lg border border-border p-6 bg-background">
                <h3 className="font-semibold mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background border-y border-border">
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

      {/* Who we work with */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-2xl font-bold mb-12 text-center">Who We Work With</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personas.map((p) => (
              <div key={p.title} className="rounded-lg border border-border p-6">
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold mb-12 text-center">What Hosts Say</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Learn more links */}
      <section className="py-16 bg-background">
        <div className="container max-w-3xl text-center">
          <p className="text-muted-foreground mb-6">Want to know more about how we work?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: 'Why Us', href: '/about/why-us' },
              { label: 'Our Team', href: '/about/our-team' },
              { label: 'Our Clients', href: '/about/our-clients' },
              { label: 'Client Reviews', href: '/about/reviews' },
              { label: 'Case Studies', href: '/about/case-studies' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s work together</h2>
          <p className="mb-8 opacity-90">
            Tell us about your properties. We&apos;d love to learn how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-background text-foreground px-6 py-3 font-medium hover:bg-background/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
