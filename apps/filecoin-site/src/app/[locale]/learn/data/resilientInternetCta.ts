import type { TranslationFunction } from '@/i18n/types'

import {
  ArchiveIcon,
  ChatsCircleIcon,
  CodeSimpleIcon,
  DatabaseIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { LinkCardData } from '@filecoin-foundation/ui-filecoin/LinkCard'


import { PATHS } from '@/constants/paths'

export function getResilientInternetCta(t: TranslationFunction) {
  return [
    {
      title: t('resilientInternet.buildOnFilecoin'),
      href: PATHS.BUILD_ON_FILECOIN.path,
      icon: CodeSimpleIcon,
    },
    {
      title: t('resilientInternet.storeYourData'),
      href: PATHS.STORE_DATA.path,
      icon: ArchiveIcon,
    },
    {
      title: t('resilientInternet.becomeProvider'),
      href: PATHS.PROVIDE_STORAGE.path,
      icon: DatabaseIcon,
    },
    {
      title: t('resilientInternet.joinCommunity'),
      href: PATHS.COMMUNITY_HUB.path,
      icon: ChatsCircleIcon,
    },
  ] satisfies Array<LinkCardData>
}
