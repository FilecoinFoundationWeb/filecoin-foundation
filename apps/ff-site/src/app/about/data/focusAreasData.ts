import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import { graphicsData } from '@/data/graphicsData'

type FocusAreaData = {
  title: string
  description: string
  image: StaticImageProps
}

export const focusAreasData: Array<FocusAreaData> = [
  {
    title: 'Governance',
    description:
      'Filecoin Foundation facilitates community-led, transparent governance of the Filecoin protocol, aligning with open-source principles.',
    image: graphicsData.governance1,
  },
  {
    title: 'Research & Development',
    description:
      'Filecoin Foundation funds research and development projects that build on top of the Filecoin network and related decentralized technologies.',
    image: graphicsData.rAndD,
  },
  {
    title: 'Community & Ecosystem Growth',
    description:
      'Filecoin Foundation hosts, sponsors, and supports events around the world, bringing new builders, clients, and storage providers into the Filecoin ecosystem.',
    image: graphicsData.events1,
  },
]
