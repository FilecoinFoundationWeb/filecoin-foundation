import {
  CloudArrowDownIcon,
  CoinsIcon,
  ShieldCheckIcon,
  StackIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@filecoin-foundation/ui-filecoin/Card'
import { ExternalTextLink } from '@filecoin-foundation/ui-filecoin/TextLink/ExternalTextLink'

import type { TranslationFunction } from '@/i18n/types'

import {
  FILECOIN_CLOUD_DOCS_URLS,
  FILECOIN_DOCS_URLS,
} from '@/constants/siteMetadata'

export function getDecentralizedByDesign(t: TranslationFunction) {
  return [
    {
      title: t('decentralizedByDesign.onchainProof.title'),
      description: t.rich('decentralizedByDesign.onchainProof.description', {
        porepLink: (chunks) => (
          <ExternalTextLink href={FILECOIN_DOCS_URLS.proofsPoRep}>
            {chunks}
          </ExternalTextLink>
        ),
        postLink: (chunks) => (
          <ExternalTextLink href={FILECOIN_DOCS_URLS.proofsPoSt}>
            {chunks}
          </ExternalTextLink>
        ),
      }),
      icon: ShieldCheckIcon,
    },
    {
      title: t('decentralizedByDesign.poweredByIncentives.title'),
      description: t.rich(
        'decentralizedByDesign.poweredByIncentives.description',
        {
          filLink: (chunks) => (
            <ExternalTextLink
              href={FILECOIN_DOCS_URLS.cryptoEconomicsNativeCurrency}
            >
              {chunks}
            </ExternalTextLink>
          ),
        },
      ),
      icon: CoinsIcon,
    },
    {
      title: t('decentralizedByDesign.verifiableRetrieval.title'),
      description: t.rich(
        'decentralizedByDesign.verifiableRetrieval.description',
        {
          focLink: (chunks) => (
            <ExternalTextLink href={FILECOIN_CLOUD_DOCS_URLS.about}>
              {chunks}
            </ExternalTextLink>
          ),
        },
      ),
      icon: CloudArrowDownIcon,
    },
    {
      title: t('decentralizedByDesign.builtForScale.title'),
      description: t('decentralizedByDesign.builtForScale.description'),
      icon: StackIcon,
    },
  ] satisfies Array<CardData>
}
