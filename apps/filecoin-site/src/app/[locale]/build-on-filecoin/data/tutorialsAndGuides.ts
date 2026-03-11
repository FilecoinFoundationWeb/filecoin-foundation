import type { TranslationFunction } from '@/i18n/types'

import type { SimpleCardData } from '@filecoin-foundation/ui-filecoin/SimpleCard'

export function getTutorialsAndGuides(t: TranslationFunction) {
  return [
    {
      title: t('tutorials.buildDecentralizedFileStorageApp.title'),
      description: t('tutorials.buildDecentralizedFileStorageApp.description'),
      cta: {
        href: '#',
        text: t('tutorials.buildDecentralizedFileStorageApp.cta'),
      },
    },
    {
      title: t('tutorials.filecoinPinDeveloperGuide.title'),
      description: t('tutorials.filecoinPinDeveloperGuide.description'),
      cta: {
        href: '#',
        text: t('tutorials.filecoinPinDeveloperGuide.cta'),
      },
    },
    {
      title: t('tutorials.trustlessAiAgentsWithFilecoin.title'),
      description: t('tutorials.trustlessAiAgentsWithFilecoin.description'),
      cta: {
        href: '#',
        text: t('tutorials.trustlessAiAgentsWithFilecoin.cta'),
      },
    },
    {
      title: t('tutorials.filecoinOnchainCloudExplained.title'),
      description: t('tutorials.filecoinOnchainCloudExplained.description'),
      cta: {
        href: '#',
        text: t('tutorials.filecoinOnchainCloudExplained.cta'),
      },
    },
  ] satisfies Array<SimpleCardData>
}
