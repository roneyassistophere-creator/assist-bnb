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
  const seoDoc = await getPageSEO('our-team').catch(() => null)
  return generatePageMeta({ slug: 'about/our-team', seoDoc, fallbackTitle: 'Our Team' })
}

const departments: { department: string; members: { name: string; role: string; bio: string }[] }[] = [
  {
    department: 'Leadership',
    members: [
      {
        name: 'Founder & Operations Lead',
        role: 'Founder',
        bio: 'Sets the standard for how every property is run and trains the team to hold that line.',
      },
    ],
  },
  {
    department: 'Guest Communications',
    members: [
      {
        name: 'Guest Communications Lead',
        role: 'Team Lead',
        bio: 'Owns inbox response time and guest experience across every managed property.',
      },
      {
        name: 'Guest Communications Associate',
        role: 'Associate',
        bio: 'Handles day-to-day guest messaging, check-in coordination, and issue resolution.',
      },
    ],
  },
  {
    department: 'Operations',
    members: [
      {
        name: 'Operations Coordinator',
        role: 'Coordinator',
        bio: 'Coordinates cleaners, contractors, and calendars so nothing is missed between bookings.',
      },
    ],
  },
  {
    department: 'Systems',
    members: [
      {
        name: 'Systems & Automation Specialist',
        role: 'Specialist',
        bio: 'Builds the SOPs and automations that keep every client’s operations consistent.',
      },
    ],
  },
  {
    department: 'Marketing',
    members: [
      {
        name: 'Social Media & Content Lead',
        role: 'Team Lead',
        bio: 'Runs content, scheduling, and community engagement for client social accounts.',
      },
    ],
  },
]

export default async function OurTeamPage() {
  const seoDoc = await getPageSEO('our-team').catch(() => null)
  const memberCount = departments.reduce((sum, d) => sum + d.members.length, 0)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageSchema({
              name: seoDoc?.meta?.title ?? 'Our Team',
              description:
                seoDoc?.meta?.description ??
                'Meet the team that runs the backend of your Airbnb and short-term rental business.',
              url: `${siteConfig.url}/about/our-team`,
            }),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Our Team', href: '/about/our-team' },
            ]),
          ]),
        }}
      />

      {/* Hero */}
      <section className="py-24 bg-muted text-center px-4">
        <div className="container max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Team That Runs Your STR Business</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Every person on our team is trained, structured, and aligned to deliver consistent,
            professional results for our clients.
          </p>
          <div className="flex justify-center gap-10 text-sm">
            <div>
              <p className="text-2xl font-bold text-primary">{memberCount}</p>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">{departments.length}</p>
              <p className="text-muted-foreground">Departments</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">UK</p>
              <p className="text-muted-foreground">Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team grid by department */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl flex flex-col gap-16">
          {departments.map((dept) => (
            <div key={dept.department}>
              <h2 className="text-xl font-bold mb-6">{dept.department}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.members.map((member) => (
                  <div key={member.name} className="rounded-lg border border-border p-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold mb-4">
                      {member.name
                        .split(' ')
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join('')}
                    </div>
                    <h3 className="font-semibold mb-1">{member.name}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Want This Team Working For You?</h2>
          <p className="mb-8 opacity-90">
            Book a free call and we&apos;ll walk through how our team fits around your properties.
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
