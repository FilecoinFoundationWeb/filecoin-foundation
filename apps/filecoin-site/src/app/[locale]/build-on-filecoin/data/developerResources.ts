import type { TranslationFunction } from '@/i18n/types'

import {
  BookIcon,
  BracketsCurlyIcon,
  DropIcon,
  PlugIcon,
} from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_DOCS_URL, FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'


export function getDeveloperResources(t: TranslationFunction) {
  return [
    {
      title: t('developerResources.documentation.title'),
      description: t('developerResources.documentation.description'),
      href: FILECOIN_DOCS_URL,
      icon: BookIcon,
    },
    {
      title: t('developerResources.testFILFaucet.title'),
      description: t('developerResources.testFILFaucet.description'),
      href: 'https://faucet.calibnet.chainsafe-fil.io/',
      icon: DropIcon,
    },
    {
      title: t('developerResources.rpcEndpoints.title'),
      description: t('developerResources.rpcEndpoints.description'),
      href: FILECOIN_DOCS_URLS.networksMainnetRCPs,
      icon: PlugIcon,
    },
    {
      title: t('developerResources.filecoinSol.title'),
      description: t('developerResources.filecoinSol.description'),
      href: FILECOIN_DOCS_URLS.smartContractDevelopingFilecoinSol,
      icon: BracketsCurlyIcon,
    },
  ]
}
