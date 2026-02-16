import type { TranslationFunction } from '@/i18n/types'

import type { CardData } from '@filecoin-foundation/ui-filecoin/Card'

import archiveRoom from '@/assets/images/archive-room.webp'
import computerMotherboardCircuit from '@/assets/images/computer-motherboard-circuit.webp'
import historicLibrary from '@/assets/images/historic-library.webp'
import testTubes from '@/assets/images/test-tubes.webp'

export function getWhatIsFilecoinUsedFor(t: TranslationFunction) {
  return [
    {
      title: t('usedFor.web3Apps.title'),
      description: t('usedFor.web3Apps.description'),
      image: {
        data: computerMotherboardCircuit,
        alt: 'Close-up view of a computer motherboard showing chips and circuits',
      },
    },
    {
      title: t('usedFor.backups.title'),
      description: t('usedFor.backups.description'),
      image: {
        data: archiveRoom,
        alt: 'Rows of shelves filled with old books in an archive room',
      },
    },
    {
      title: t('usedFor.culturalArchives.title'),
      description: t('usedFor.culturalArchives.description'),
      image: {
        data: historicLibrary,
        alt: 'Marble busts lined up beside tall bookshelves in a historic library',
      },
    },
    {
      title: t('usedFor.scientificDatasets.title'),
      description: t('usedFor.scientificDatasets.description'),
      image: {
        data: testTubes,
        alt: 'Laboratory pipette dispensing pink liquid into test tubes',
      },
    },
  ] satisfies Array<CardData>
}
