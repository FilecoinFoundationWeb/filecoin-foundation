import {
  CodeSimpleIcon,
  ArchiveIcon,
  DatabaseIcon,
} from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'

import type { LinkCardData } from '@/components/LinkCard'

export const resilientInternetCta: Array<LinkCardData> = [
  {
    title: 'Build on Filecoin',
    href: PATHS.BUILD_ON_FILECOIN.path,
    icon: CodeSimpleIcon,
  },
  {
    title: 'Store your data',
    href: PATHS.STORE_DATA.path,
    icon: ArchiveIcon,
  },
  {
    title: 'Become a storage provider',
    href: PATHS.OFFER_STORAGE.path,
    icon: DatabaseIcon,
  },
]
