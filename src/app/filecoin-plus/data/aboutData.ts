import type { StaticImageData } from 'next/image'

import { graphicsDataRefactored } from '@/data/graphicsData'

export type AboutData = {
  title: string
  description: string
  image: StaticImageData & { alt: string }
}

export const aboutData = [
  {
    title: 'Initial Allocation of DataCap',
    description:
      'The Fil+ program provides Allocators with a resource called DataCap.',
    image: graphicsDataRefactored.filPlusAbout1,
  },
  {
    title: 'Distribution to Storage Clients',
    description:
      'Allocators distribute DataCap to storage clients who want to store useful data on Filecoin.',
    image: graphicsDataRefactored.filPlusAbout2,
  },
  {
    title: 'Securing Deals',
    description:
      'The storage clients use DataCap to secure deals with storage providers, which increases their probability of earning block rewards.',
    image: graphicsDataRefactored.filPlusAbout3,
  },
]
