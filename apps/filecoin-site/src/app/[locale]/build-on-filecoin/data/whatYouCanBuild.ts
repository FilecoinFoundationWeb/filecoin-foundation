import type { TranslationFunction } from '@/i18n/types'

import {
  FlowArrowIcon,
  ShareNetworkIcon,
  ShieldCheckIcon,
  StackIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@filecoin-foundation/ui-filecoin/Card'

export function getWhatYouCanBuild(t: TranslationFunction) {
  return [
    {
      title: t('whatYouCanBuild.decentralizedStorageApps.title'),
      description: t('whatYouCanBuild.decentralizedStorageApps.description'),
      icon: ShareNetworkIcon,
    },
    {
      title: t('whatYouCanBuild.aiDataPipelines.title'),
      description: t('whatYouCanBuild.aiDataPipelines.description'),
      icon: FlowArrowIcon,
    },
    {
      title: t('whatYouCanBuild.web3Infrastructure.title'),
      description: t('whatYouCanBuild.web3Infrastructure.description'),
      icon: StackIcon,
    },
    {
      title: t('whatYouCanBuild.dataVerificationServices.title'),
      description: t('whatYouCanBuild.dataVerificationServices.description'),
      icon: ShieldCheckIcon,
    },
  ] satisfies Array<CardData>
}
