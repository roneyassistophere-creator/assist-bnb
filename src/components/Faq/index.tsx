import React from 'react'

export type FaqItem = {
  q: string
  a: string
}

type FaqProps = {
  items: FaqItem[]
  className?: string
}

export const Faq: React.FC<FaqProps> = ({ items, className }) => {
  return (
    <div className={`flex flex-col gap-3 ${className ?? ''}`}>
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-lg border border-border bg-background px-5 py-4 open:pb-4"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:content-none">
            {item.q}
            <span className="shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
