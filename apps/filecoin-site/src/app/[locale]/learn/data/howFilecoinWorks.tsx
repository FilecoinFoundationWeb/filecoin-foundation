import {
  CloudArrowDownIcon,
  CoinsIcon,
  HandshakeIcon,
  ShieldCheckIcon,
  KeyIcon,
  StackIcon,
} from '@phosphor-icons/react/dist/ssr'

import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink'

import type { TranslationFunction } from '@/i18n/types'

import { FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'

export function getHowFilecoinWorks(t: TranslationFunction) {
  return [
    {
      title: t('unique.storageDeals.title'),
      description: t('unique.storageDeals.description'),
      icon: HandshakeIcon,
    },
    {
      title: t('unique.cryptographicProofs.title'),
      description: t('unique.cryptographicProofs.description'),
      icon: KeyIcon,
    },
    {
      title: t('unique.verifiableSecurity.title'),
      description: t.rich('unique.verifiableSecurity.description', {
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
      title: t('unique.retrievalOnDemand.title'),
      description: t.rich('unique.retrievalOnDemand.description', {
        focLink: (chunks) => (
          <ExternalTextLink href="https://docs.filecoin.cloud/introduction/about/">
            {chunks}
          </ExternalTextLink>
        ),
      }),
      icon: CloudArrowDownIcon,
    },
    {
      title: t('unique.builtForScale.title'),
      description: t('unique.builtForScale.description'),
      icon: StackIcon,
    },
    {
      title: t('unique.poweredByIncentives.title'),
      description: t.rich('unique.poweredByIncentives.description', {
        filLink: (chunks) => (
          <ExternalTextLink
            href={FILECOIN_DOCS_URLS.cryptoEconomicsNativeCurrency}
          >
            {chunks}
          </ExternalTextLink>
        ),
      }),
      icon: CoinsIcon,
    },
  ]
}
