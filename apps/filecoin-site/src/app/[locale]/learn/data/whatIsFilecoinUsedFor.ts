import archiveRoom from '@/assets/images/archive-room.webp'
import computerMontherboardCircuit from '@/assets/images/computer-motherboard-circuit.webp'
import historicLibrary from '@/assets/images/historic-library.webp'
import testTubes from '@/assets/images/test-tubes.webp'

import type { CardData } from '@/components/Card'

export const whatIsFilecoinUsedFor = [
  {
    title: 'Web3 apps & AI datasets',
    description:
      'Powering the data layer for NFTs, video streaming, AI training datasets, and dApps.',

    image: {
      data: computerMontherboardCircuit,
      alt: 'Close-up view of a computer motherboard showing chips and circuits',
    },
  },
  {
    title: 'Backups & archival storage',
    description: 'Secure, long-term storage for mission-critical data.',

    image: {
      data: archiveRoom,
      alt: 'Rows of shelves filled with old books in an archive room',
    },
  },
  {
    title: 'Cultural archives',
    description:
      "Preserving humanity's knowledge and records for the long term.",

    image: {
      data: historicLibrary,
      alt: 'Marble busts lined up beside tall bookshelves in a historic library',
    },
  },
  {
    title: 'Scientific datasets',
    description:
      'Enabling resilient access to genomics, public research, and large-scale scientific data.',

    image: {
      data: testTubes,
      alt: 'Laboratory pipette dispensing pink liquid into test tubes',
    },
  },
] as const satisfies Array<CardData>
