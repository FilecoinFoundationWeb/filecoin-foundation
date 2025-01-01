import type { CTAProps } from '@/types/ctaType'

import { DEFAULT_CTA_TEXT } from '../../constants/constants'
import type { Event } from '../../types/eventType'

type Links = {
  externalLink?: Event['externalLink']
  lumaCalendarLink?: Event['lumaCalendarLink']
  youtubePlaylistUrl?: NonNullable<Event['recap']>['youtubePlaylistUrl']
}

type CtaArrayProps = {
  links: Links
  eventHasConcluded: boolean
}

export function buildCtaArray({
  links: { externalLink, lumaCalendarLink, youtubePlaylistUrl },
  eventHasConcluded,
}: CtaArrayProps) {
  const ctaArray: Array<CTAProps> = []

  if (eventHasConcluded) {
    if (youtubePlaylistUrl) {
      ctaArray.push({
        href: youtubePlaylistUrl,
        text: 'Watch Event Highlights',
      })
    } else {
      return undefined
    }
  } else {
    if (externalLink) {
      ctaArray.push({
        href: externalLink,
        text: DEFAULT_CTA_TEXT,
      })
    }

    if (lumaCalendarLink) {
      ctaArray.push({ href: lumaCalendarLink, text: 'Check Event Calendar' })
    }
  }

  return ctaArray.length > 0 ? ctaArray : undefined
}
