import React from 'react'
import Link from 'next/link'
import { Faq, type FaqItem } from '@/components/Faq'

export type ServiceTemplateContent = {
  eyebrow: string
  title: string
  subhead: string
  overview: string[]
  problems: { title: string; body: string }[]
  whatsIncluded: { title: string; body: string }[]
  comparison?: {
    withoutLabel?: string
    withLabel?: string
    without: string[]
    with: string[]
  }
  whoItsFor: string[]
  testimonials?: { quote: string; name: string; role: string }[]
  faqs: FaqItem[]
  ctaHeading: string
  ctaBody: string
  breadcrumbs?: { name: string; href: string }[]
  /** Optional extra section rendered between "What's included" and the comparison table — used by the ROI calculator page. */
  extra?: React.ReactNode
}

export const ServiceTemplate: React.FC<ServiceTemplateContent> = ({
  eyebrow,
  title,
  subhead,
  overview,
  problems,
  whatsIncluded,
  comparison,
  whoItsFor,
  testimonials,
  faqs,
  ctaHeading,
  ctaBody,
  breadcrumbs,
  extra,
}) => {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-24 bg-muted text-center px-4">
        <div className="container max-w-3xl">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="mb-6 flex flex-wrap items-center justify-center gap-1.5 text-xs text-muted-foreground">
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={crumb.href}>
                  {i > 0 && <span aria-hidden>/</span>}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-foreground">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-primary transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{subhead}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Book a Free Call
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium hover:bg-background transition-colors"
            >
              See All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl">
          <div className="prose dark:prose-invert max-w-none">
            {overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 bg-muted">
        <div className="container max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Why This Usually Goes Wrong
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="rounded-lg border border-border p-6 bg-background">
                <h3 className="font-semibold mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">What&apos;s Included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncluded.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {extra}

      {/* Comparison */}
      {comparison && (
        <section className="py-20 bg-muted">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              The Difference This Makes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg border border-border p-6 bg-background">
                <h3 className="font-semibold mb-4 text-muted-foreground">
                  {comparison.withoutLabel ?? `Without ${'Assist BNB'}`}
                </h3>
                <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                  {comparison.without.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="text-destructive mt-0.5">✕</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-primary/40 p-6 bg-background">
                <h3 className="font-semibold mb-4 text-primary">
                  {comparison.withLabel ?? `With Assist BNB`}
                </h3>
                <ul className="flex flex-col gap-3 text-sm">
                  {comparison.with.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Who it's for */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Who This Is For</h2>
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
      {testimonials && testimonials.length > 0 && (
        <section className="py-20 bg-muted">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              What Hosts Are Saying
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <blockquote
                  key={t.name}
                  className="rounded-lg border border-border p-6 bg-background"
                >
                  <p className="text-sm mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{t.name}</span> — {t.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Faq items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{ctaHeading}</h2>
          <p className="mb-8 opacity-90">{ctaBody}</p>
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
