import {
  CloudArrowDownIcon,
  CoinsIcon,
  ShieldCheckIcon,
  StackIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@filecoin-foundation/ui-filecoin/Card'

import type { TranslationFunction } from '@/i18n/types'

export function getDecentralizedByDesign(t: TranslationFunction) {
  return [
    {
      title: t('decentralizedByDesign.onchainProof.title'),
      description: t('decentralizedByDesign.onchainProof.description'),
      icon: ShieldCheckIcon,
    },
    {
      title: t('decentralizedByDesign.poweredByIncentives.title'),
      description: t('decentralizedByDesign.poweredByIncentives.description'),
      icon: CoinsIcon,
    },
    {
      title: t('decentralizedByDesign.verifiableRetrieval.title'),
      description: t('decentralizedByDesign.verifiableRetrieval.description'),
      icon: CloudArrowDownIcon,
    },
    {
      title: t('decentralizedByDesign.builtForScale.title'),
      description: t('decentralizedByDesign.builtForScale.description'),
      icon: StackIcon,
    },
  ] satisfies Array<CardData>
}
