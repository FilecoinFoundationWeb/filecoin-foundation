import type { TranslationFunction } from '@/i18n/types'

import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import conference from '@/assets/images/conference.webp'
import panelDiscussion from '@/assets/images/panel-discussion-speaker-with-microphone.webp'
import techPresentation from '@/assets/images/tech-presentation-audience-raising-hands.webp'

export function getJoinVibrantCommunityImages(
  t: TranslationFunction,
): Array<StaticImageProps> {
  return [
    {
      data: conference,
      alt: t('community.images.conference'),
    },
    {
      data: panelDiscussion,
      alt: t('community.images.panel'),
    },
    {
      data: techPresentation,
      alt: t('community.images.presentation'),
    },
  ]
}
