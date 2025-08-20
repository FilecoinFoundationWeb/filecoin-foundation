import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import codeOnScreen from '@/assets/images/code-on-screen.webp'
import conference from '@/assets/images/conference.webp'
import microphone from '@/assets/images/microphone.webp'

export const joinVibrantCommunityImages: Array<StaticImageProps> = [
  {
    data: conference,
    alt: 'A large group of people attending a tech conference or workshop, with a speaker presenting on stage and attendees seated on chairs and beanbags, many working on laptops.',
  },

  {
    data: microphone,
    alt: 'A close-up of a microphone on a stand with a blurred audience in the background, suggesting a public speaking or performance setting.',
  },

  {
    data: codeOnScreen,
    alt: 'A laptop screen displaying code written in Go language, showing a struct definition and functions for managing funds.',
  },
]
