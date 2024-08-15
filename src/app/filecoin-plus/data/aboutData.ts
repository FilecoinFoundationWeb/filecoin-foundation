import type { StaticImageProps } from '@/components/StaticImage'

import { graphicsData } from '@/data/graphicsData'

export type AboutData = {
  title: string
  description: string
  image: StaticImageProps
}

export const aboutData: AboutData[] = [
  {
    title: 'Initial Allocation of DataCap',
    description:
      'The Fil+ program provides Allocators with a resource called DataCap.',
    image: graphicsData.filPlusAbout1,
  },
  {
    title: 'Distribution to Storage Clients',
    description:
      'Allocators distribute DataCap to storage clients who want to store useful data on Filecoin.',
    image: graphicsData.filPlusAbout2,
  },
  {
    title: 'Securing Deals',
    description:
      'The storage clients use DataCap to secure deals with storage providers, which increases their probability of earning block rewards.',
    image: graphicsData.filPlusAbout3,
  },
]
