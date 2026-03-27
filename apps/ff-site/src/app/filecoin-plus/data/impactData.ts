import { PATHS } from '@/constants/paths'
import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import type { ImpactData } from '../components/ImpactCard'

export const impactData: Array<ImpactData> = [
  {
    label: 'For Clients',
    title: 'Store valuable data with more trust',
    description: [
      'As a client, Filecoin Plus helps you store important real-world data—like public records, research, or open-source datasets—more effectively. By working with an approved allocator, you can request DataCap, a special resource that signals to storage providers that your data is valuable and trusted. This makes it easier to secure deals and can lead to better pricing and prioritization.',
      'Learn more about active Fil+ allocators and find the right one for your data storage needs.',
    ],
    cta: { href: PATHS.ALLOCATORS.path, text: 'Find an Allocator' },
    image: graphicsData.filPlusAbout3,
  },
  {
    label: 'For Allocators',
    title:
      'Support the integrity of the network by guiding how DataCap is distributed',
    description: [
      'Allocators are trusted community members who help decide which clients receive DataCap. This role is central to ensuring that Filecoin is used for storing meaningful, verifiable data rather than spam or low-quality content.',
      "Becoming an allocator involves understanding the program's principles, submitting an application that outlines your background and evaluation approach, and participating in a transparent community review process.",
    ],
    cta: {
      href: FIL_PLUS_URLS.dataCap.allocatorsApplication,
      text: 'Apply to Become an Allocator',
    },
    image: graphicsData.filPlusAbout2,
  },
  {
    label: 'For Storage Providers',
    title: 'Boost your ability to earn block rewards by storing valuable data',
    description: [
      'For storage providers, Filecoin Plus offers a direct incentive to prioritize verified, high-value data.',
      'When you accept deals backed by DataCap, your Quality Adjusted Power increases—improving your ability to earn block rewards. These deals often come from clients who are working on public-good projects and value long-term reliability.',
    ],
    cta: {
      href: FIL_PLUS_URLS.dataCap.docs,
      text: 'Learn more about DataCap',
    },
    image: graphicsData.filPlusAbout1,
  },
]
