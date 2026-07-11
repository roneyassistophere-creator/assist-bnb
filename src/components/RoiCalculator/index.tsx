'use client'

import React, { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ASSUMED_INVESTMENT = 15000

const currency = (value: number) =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(value)

export const RoiCalculator: React.FC = () => {
  const [nightlyRate, setNightlyRate] = useState(120)
  const [occupancy, setOccupancy] = useState(70)
  const [monthlyCosts, setMonthlyCosts] = useState(800)
  const [daysAvailable, setDaysAvailable] = useState(30)

  const results = useMemo(() => {
    const bookedNights = (daysAvailable * occupancy) / 100
    const monthlyRevenue = bookedNights * nightlyRate
    const monthlyProfit = monthlyRevenue - monthlyCosts
    const annualProfit = monthlyProfit * 12
    const annualRoi = (annualProfit / ASSUMED_INVESTMENT) * 100

    return { bookedNights, monthlyRevenue, monthlyProfit, annualProfit, annualRoi }
  }, [nightlyRate, occupancy, monthlyCosts, daysAvailable])

  return (
    <div className="rounded-lg border border-border bg-background p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="nightlyRate">Average nightly rate (£)</Label>
            <Input
              id="nightlyRate"
              type="number"
              min={0}
              value={nightlyRate}
              onChange={(e) => setNightlyRate(Number(e.target.value) || 0)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="occupancy">Target occupancy (%)</Label>
            <Input
              id="occupancy"
              type="number"
              min={0}
              max={100}
              value={occupancy}
              onChange={(e) => setOccupancy(Number(e.target.value) || 0)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="monthlyCosts">Monthly running costs (£)</Label>
            <Input
              id="monthlyCosts"
              type="number"
              min={0}
              value={monthlyCosts}
              onChange={(e) => setMonthlyCosts(Number(e.target.value) || 0)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="daysAvailable">Days available per month</Label>
            <Input
              id="daysAvailable"
              type="number"
              min={0}
              max={31}
              value={daysAvailable}
              onChange={(e) => setDaysAvailable(Number(e.target.value) || 0)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-border p-5">
            <p className="text-sm text-muted-foreground mb-1">Booked nights / month</p>
            <p className="text-2xl font-bold">{results.bookedNights.toFixed(0)}</p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <p className="text-sm text-muted-foreground mb-1">Monthly revenue</p>
            <p className="text-2xl font-bold">{currency(results.monthlyRevenue)}</p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <p className="text-sm text-muted-foreground mb-1">Monthly profit</p>
            <p className="text-2xl font-bold">{currency(results.monthlyProfit)}</p>
          </div>
          <div className="rounded-lg border border-primary/40 p-5 bg-primary/5">
            <p className="text-sm text-muted-foreground mb-1">Estimated annual ROI</p>
            <p className="text-3xl font-bold text-primary">{results.annualRoi.toFixed(1)}%</p>
            <p className="text-xs text-muted-foreground mt-1">
              Based on an illustrative {currency(ASSUMED_INVESTMENT)} property investment.
            </p>
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-8 text-center">
        This is an estimate only and does not account for seasonality, platform fees, or
        management style. Book a free call for a proper analysis of your property.
      </p>
    </div>
  )
}
