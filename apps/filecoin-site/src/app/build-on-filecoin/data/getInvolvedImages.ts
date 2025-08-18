import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import conferencePresentation from '@/assets/images/conferencePresentation.webp'
import groupCollaboration from '@/assets/images/groupCollaboration.webp'
import pairProgramming from '@/assets/images/pairProgramming.webp'

export type GetInvolvedImages = {
  image: StaticImageProps
}

export const getInvolvedImages: Array<GetInvolvedImages> = [
  {
    image: {
      data: pairProgramming,
      alt: 'Two people working closely on a laptop at a table, discussing code with a notebook and drink nearby.',
    },
  },
  {
    image: {
      data: groupCollaboration,
      alt: 'Two people sitting at a table with laptops and a large sheet of paper, collaborating and writing notes with a marker.',
    },
  },
  {
    image: {
      data: conferencePresentation,
      alt: 'Audience seated in a dark room watching a presentation on a large screen at a tech conference.',
    },
  },
]
