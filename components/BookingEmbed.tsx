'use client'

import { InlineWidget } from 'react-calendly'
import { siteConfig } from '@/lib/siteConfig'

export function BookingEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-white">
      <InlineWidget
        url={siteConfig.calendlyUrl}
        styles={{ height: '700px' }}
      />
    </div>
  )
}
