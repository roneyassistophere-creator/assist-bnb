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
  const seoDoc = await getPageSEO('reviews').catch(() => null)
  return generatePageMeta({ slug: 'about/reviews', seoDoc, fallbackTitle: 'Client Reviews' })
}

const reviews = [
  {
    name: 'Raj K.',
    title: 'Portfolio Host, Manchester',
    rating: 5,
    text: 'Occupancy is up, my inbox is finally under control, and I actually took a proper weekend off for the first time in years.',
    service: 'Airbnb VA',
  },
  {
    name: 'Sophie H.',
    title: 'SA Operator, London',
    rating: 5,
    text: 'The onboarding was fast and the team clearly knew short-term rentals inside out from day one.',
    service: 'Systems Building',
  },
  {
    name: 'Daniel M.',
    title: 'Co-Host, Bristol',
    rating: 5,
    text: 'Guest messages get answered within minutes, even at 11pm. That alone was worth it.',
    service: 'Guest Communication',
  },
  {
    name: 'Natasha P.',
    title: 'New Host, Leeds',
    rating: 4,
    text: 'Helped me avoid a lot of the mistakes I would have made setting up my first listing.',
    service: 'STR Business Setup',
  },
  {
    name: 'George H.',
    title: 'Multi-Listing Host, London',
    rating: 5,
    text: 'Our occupancy moved from around 60% to the mid-70s within six weeks of handing over pricing.',
    service: 'Performance Optimisation',
  },
  {
    name: 'Priya B.',
    title: 'SA Business Owner, London',
    rating: 5,
    text: 'Direct bookings are climbing and we are relying a lot less on platform commission.',
    service: 'Direct Booking Engine',
  },
]

export default async function ReviewsPage() {
  const seoDoc = await getPageSEO('reviews').catch(() => null)
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
  const fiveStarCount = reviews.filter((r) => r.rating === 5).length

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Client Reviews',
              description:
                seoDoc?.meta?.description ??
                'Real feedback from UK hosts who work with Assist BNB.',
              url: `${siteConfig.url}/about/reviews`,
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Client Reviews', href: '/about/reviews' },
            ]),
          ]),
        }}
      />

      {/* Hero */}
      <section className="py-24 bg-muted text-center px-4">
        <div className="container max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            Client Reviews · Real Feedback
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">What Our Clients Actually Say</h1>
          <div className="flex justify-center gap-10 text-sm">
            <div>
              <p className="text-2xl font-bold text-primary">{avgRating}</p>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">{reviews.length}</p>
              <p className="text-muted-foreground">Reviews</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">{fiveStarCount}</p>
              <p className="text-muted-foreground">5-Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <blockquote key={review.name} className="rounded-lg border border-border p-6">
                <p className="text-primary mb-3" aria-label={`${review.rating} out of 5 stars`}>
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </p>
                <p className="text-sm mb-4 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm">
                  <span className="font-medium">{review.name}</span>
                  <span className="text-muted-foreground"> — {review.title}</span>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                    {review.service}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Results Like These?</h2>
          <p className="mb-8 opacity-90">Book a free call and let&apos;s talk about your properties.</p>
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
