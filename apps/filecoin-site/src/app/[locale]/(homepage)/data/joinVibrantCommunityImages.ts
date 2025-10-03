import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import conference from '@/assets/images/conference.webp'
import panelDiscussion from '@/assets/images/panel-discussion-speaker-with-microphone.webp'
import techPresentation from '@/assets/images/tech-presentation-audience-raising-hands.webp'

export const joinVibrantCommunityImages = [
  {
    data: conference,
    alt: 'A large group of people attending a tech conference or workshop, with a speaker presenting on stage and attendees seated on chairs and beanbags, many working on laptops.',
  },

  {
    data: panelDiscussion,
    alt: 'A man speaks into a microphone during a discussion panel, smiling while other participants listen attentively beside him.',
  },

  {
    data: techPresentation,
    alt: 'A woman gives a presentation to a seated audience, several participants raising their hands to ask questions in a modern meeting room.',
  },
] as const satisfies Array<StaticImageProps>
