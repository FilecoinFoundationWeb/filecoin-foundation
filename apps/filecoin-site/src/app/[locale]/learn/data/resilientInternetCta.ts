import {
  ArchiveIcon,
  ChatsCircleIcon,
  CodeSimpleIcon,
  DatabaseIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { LinkCardData } from '@filecoin-foundation/ui-filecoin/LinkCard'

import { PATHS } from '@/constants/paths'


export const resilientInternetCta = [
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
    href: PATHS.PROVIDE_STORAGE.path,
    icon: DatabaseIcon,
  },
  {
    title: 'Join the community',
    href: PATHS.COMMUNITY_HUB.path,
    icon: ChatsCircleIcon,
  },
] as const satisfies Array<LinkCardData>
