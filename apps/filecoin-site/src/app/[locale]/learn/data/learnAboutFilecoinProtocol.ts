import type { SimpleCardData } from '@filecoin-foundation/ui-filecoin/SimpleCard'

import type { TranslationFunction } from '@/i18n/types'

import { FILECOIN_DOCS_URL, FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'

export function getLearnAboutFilecoinProtocol(t: TranslationFunction) {
  return [
    {
      title: t('protocol.contentAddressing.title'),
      description: t('protocol.contentAddressing.description'),
      cta: {
        href: 'https://docs.ipfs.tech/concepts/content-addressing/',
        text: t('protocol.contentAddressing.cta'),
      },
    },
    {
      title: t('protocol.storageDeals.title'),
      description: t('protocol.storageDeals.description'),
      cta: {
        href: FILECOIN_DOCS_URLS.storageModel,
        text: t('protocol.storageDeals.cta'),
      },
    },
    {
      title: t('protocol.proofsVerification.title'),
      description: t('protocol.proofsVerification.description'),
      cta: {
        href: FILECOIN_DOCS_URLS.proofs,
        text: t('protocol.proofsVerification.cta'),
      },
    },
    {
      title: t('protocol.tokenIncentives.title'),
      description: t('protocol.tokenIncentives.description'),
      cta: {
        href: FILECOIN_DOCS_URLS.cryptoEconomics,
        text: t('protocol.tokenIncentives.cta'),
      },
    },
    {
      title: t('protocol.fvm.title'),
      description: t('protocol.fvm.description'),
      cta: {
        href: FILECOIN_DOCS_URLS.filecoinVirtualMachine,
        text: t('protocol.fvm.cta'),
      },
    },
    {
      title: t('protocol.filecoinPlus.title'),
      description: t('protocol.filecoinPlus.description'),
      cta: {
        href: `${FILECOIN_DOCS_URL}basics/how-storage-works/filecoin-plus`,
        text: t('protocol.filecoinPlus.cta'),
      },
    },
  ] satisfies Array<SimpleCardData>
}
