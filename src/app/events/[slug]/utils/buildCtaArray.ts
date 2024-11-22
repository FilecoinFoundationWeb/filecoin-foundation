import type { CTAProps } from '@/types/ctaType'

import type { Event } from '../../types/eventType'

type Links = {
  externalLink?: Event['externalLink']
  lumaCalendarLink?: Event['lumaCalendarLink']
  recapYoutubePlaylistUrl?: Event['recapYoutubePlaylistUrl']
}

type CtaArrayProps = {
  links: Links
  eventHasConcluded: boolean
}

export function buildCtaArray({
  links: { externalLink, lumaCalendarLink, recapYoutubePlaylistUrl },
  eventHasConcluded,
}: CtaArrayProps) {
  const ctaArray: Array<CTAProps> = []

  if (eventHasConcluded) {
    if (recapYoutubePlaylistUrl) {
      ctaArray.push({
        href: recapYoutubePlaylistUrl,
        text: 'Watch Event Highlights',
      })
    } else {
      return undefined
    }
  } else {
    if (externalLink) {
      ctaArray.push({
        href: externalLink,
        text: 'View Event Details',
      })
    }

    if (lumaCalendarLink) {
      ctaArray.push({ href: lumaCalendarLink, text: 'Check Event Calendar' })
    }
  }

  return ctaArray.length > 0 ? ctaArray : undefined
}
