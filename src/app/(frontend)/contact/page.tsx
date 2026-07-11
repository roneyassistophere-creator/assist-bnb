import type { Metadata } from 'next'
import React from 'react'

import { getPageSEO } from '@/utilities/getPageSEO'
import { generatePageMeta } from '@/utilities/generateMeta'
import { jsonLdScript, webPageSchema, breadcrumbSchema } from '@/utilities/jsonld'
import siteConfig from '@/config/site'

export const dynamic = 'force-static'
export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const seoDoc = await getPageSEO('contact').catch(() => null)
  return generatePageMeta({ slug: 'contact', seoDoc, fallbackTitle: 'Contact' })
}

const qualifyingCriteria = [
  'You own or manage 1–10 short-term rental properties',
  'You are drowning in the day-to-day guest and cleaning coordination',
  'You suspect you are leaving money on the table with pricing or listings',
  'You want to grow without it costing you your sanity',
]

const processSteps = [
  { step: '01', title: 'You reach out', body: 'Send a message or book a call — whichever is easier.' },
  { step: '02', title: 'We schedule a call', body: 'A short conversation to understand your properties and goals.' },
  { step: '03', title: 'Discovery conversation', body: 'We ask the right questions and identify where we can help most.' },
  { step: '04', title: 'Tailored proposal', body: 'A scope and price built around your business, not a generic package.' },
]

export default async function ContactPage() {
  const seoDoc = await getPageSEO('contact').catch(() => null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Contact',
              description:
                seoDoc?.meta?.description ??
                `Get in touch with ${siteConfig.name}. We would love to hear about your properties.`,
              url: `${siteConfig.url}/contact`,
              type: 'ContactPage',
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Contact', href: '/contact' },
            ]),
          ]),
        }}
      />

      {/* Header */}
      <section className="py-24 bg-muted text-center px-4">
        <div className="container max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            Let&apos;s Talk — No Obligation
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Get Your STR Operations Running Properly
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a portfolio in mind? We&apos;d love to hear about it. Reach out and we will get
            back to you within one business day.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 bg-background border-b border-border">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-6 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
            <p>No obligation</p>
            <p>Straightforward discussion</p>
            <p>Focused on your setup</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container max-w-5xl grid md:grid-cols-2 gap-16">
          {/* Contact details */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <dl className="flex flex-col gap-5 text-sm">
              {siteConfig.contact.email && (
                <div>
                  <dt className="text-muted-foreground mb-1">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </dd>
                </div>
              )}
              {siteConfig.contact.phone && (
                <div>
                  <dt className="text-muted-foreground mb-1">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                      className="hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </dd>
                </div>
              )}
              {siteConfig.contact.address && (
                <div>
                  <dt className="text-muted-foreground mb-1">Address</dt>
                  <dd className="whitespace-pre-line">{siteConfig.contact.address}</dd>
                </div>
              )}
              <div>
                <dt className="text-muted-foreground mb-1">Typical response time</dt>
                <dd>Within one business day</dd>
              </div>
            </dl>

            {siteConfig.social.length > 0 && (
              <div className="mt-10">
                <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  {siteConfig.social.map(({ platform, href }) => (
                    <a
                      key={platform}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-4 py-2 rounded-md border border-border hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10">
              <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
                Who We Work With
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                {qualifyingCriteria.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
            <form action="/api/contact" method="POST" className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="properties" className="text-sm font-medium">
                  Number of Properties <span className="text-destructive">*</span>
                </label>
                <select
                  id="properties"
                  name="properties"
                  required
                  defaultValue=""
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="1">1</option>
                  <option value="2-3">2–3</option>
                  <option value="4-10">4–10</option>
                  <option value="10+">10+</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your properties and what you're looking for help with."
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-24 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-12 text-center">What Happens Next</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-lg border border-border p-6 bg-background">
                <p className="text-sm font-semibold text-primary mb-2">{step.step}</p>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
