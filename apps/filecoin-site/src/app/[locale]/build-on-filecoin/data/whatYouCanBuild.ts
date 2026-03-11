import type { TranslationFunction } from '@/i18n/types'

import {
  FlowArrowIcon,
  ShareNetworkIcon,
  ShieldCheckIcon,
  StackIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { LinkCardData } from '@filecoin-foundation/ui-filecoin/LinkCard'

export function getWhatYouCanBuild(t: TranslationFunction) {
  return [
    {
      title: t('whatYouCanBuild.decentralizedStorageApps.title'),
      description: t('whatYouCanBuild.decentralizedStorageApps.description'),
      icon: ShareNetworkIcon,
      href: '#',
    },
    {
      title: t('whatYouCanBuild.aiDataPipelines.title'),
      description: t('whatYouCanBuild.aiDataPipelines.description'),
      icon: FlowArrowIcon,
      href: '#',
    },
    {
      title: t('whatYouCanBuild.web3Infrastructure.title'),
      description: t('whatYouCanBuild.web3Infrastructure.description'),
      icon: StackIcon,
      href: '#',
    },
    {
      title: t('whatYouCanBuild.dataVerificationServices.title'),
      description: t('whatYouCanBuild.dataVerificationServices.description'),
      icon: ShieldCheckIcon,
      href: '#',
    },
  ] satisfies Array<LinkCardData>
}
