import type { CTAProps } from '@/types/ctaType'

import type { Event } from '../../types/eventType'

type ctaArrayProps = {
  externalLink?: Event['externalLink']
  lumaCalendarLink?: Event['lumaCalendarLink']
}

export function buildCtaArray({
  externalLink,
  lumaCalendarLink,
}: ctaArrayProps) {
  const ctaArray: Array<CTAProps> = []

  if (externalLink) {
    ctaArray.push({
      href: externalLink.url,
      text: externalLink.text || 'View Event Details',
    })
  }

  if (lumaCalendarLink) {
    ctaArray.push({ href: lumaCalendarLink, text: 'Check Event Calendar' })
  }

  return ctaArray.length > 0 ? ctaArray : undefined
}
