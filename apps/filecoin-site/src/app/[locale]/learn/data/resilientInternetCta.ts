import {
  ArchiveIcon,
  ChatsCircleIcon,
  CodeSimpleIcon,
  DatabaseIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { LinkCardData } from '@filecoin-foundation/ui-filecoin/LinkCard'

export const resilientInternetCta = [
  {
    title: 'Build on Filecoin',
    href: '/build-on-filecoin',
    icon: CodeSimpleIcon,
  },
  {
    title: 'Store your data',
    href: '/store-data',
    icon: ArchiveIcon,
  },
  {
    title: 'Become a storage provider',
    href: '/provide-storage',
    icon: DatabaseIcon,
  },
  {
    title: 'Join the community',
    href: '/community-hub',
    icon: ChatsCircleIcon,
  },
] as const satisfies Array<LinkCardData>
