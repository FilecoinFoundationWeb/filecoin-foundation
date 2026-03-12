import type { TranslationFunction } from '@/i18n/types'

import type { SimpleCardData } from '@filecoin-foundation/ui-filecoin/SimpleCard'

import { FILECOIN_CLOUD_TUTORIALS_URLS } from '@/constants/siteMetadata'

export function getTutorialsAndGuides(t: TranslationFunction) {
  return [
    {
      title: t('tutorials.buildDecentralizedFileStorageApp.title'),
      description: t('tutorials.buildDecentralizedFileStorageApp.description'),
      cta: {
        href: FILECOIN_CLOUD_TUTORIALS_URLS.buildDecentralizedFileStorageApp,
        text: t('tutorials.buildDecentralizedFileStorageApp.cta'),
      },
    },
    {
      title: t('tutorials.filecoinPinDeveloperGuide.title'),
      description: t('tutorials.filecoinPinDeveloperGuide.description'),
      cta: {
        href: FILECOIN_CLOUD_TUTORIALS_URLS.filecoinPinDeveloperGuide,
        text: t('tutorials.filecoinPinDeveloperGuide.cta'),
      },
    },
    {
      title: t('tutorials.trustlessAiAgentsWithFilecoin.title'),
      description: t('tutorials.trustlessAiAgentsWithFilecoin.description'),
      cta: {
        href: FILECOIN_CLOUD_TUTORIALS_URLS.trustlessAiAgentsWithFilecoin,
        text: t('tutorials.trustlessAiAgentsWithFilecoin.cta'),
      },
    },
    {
      title: t('tutorials.filecoinOnchainCloudExplained.title'),
      description: t('tutorials.filecoinOnchainCloudExplained.description'),
      cta: {
        href: FILECOIN_CLOUD_TUTORIALS_URLS.filecoinOnchainCloudExplained,
        text: t('tutorials.filecoinOnchainCloudExplained.cta'),
      },
    },
  ] satisfies Array<SimpleCardData>
}
