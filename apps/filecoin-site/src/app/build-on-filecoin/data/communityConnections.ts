import {
  ChatsIcon,
  SlackLogoIcon,
  XLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { LinkCardData } from '@/components/LinkCard'

export const communityConnections: Array<LinkCardData> = [
  {
    title: '#fil-builder on Slack',
    description:
      'Join the conversation, ask questions, and share your progress with fellow builders in the Filecoin Slack community.',
    href: '#',
    icon: SlackLogoIcon,
  },
  {
    title: '@filbuilders on X',
    description:
      'Follow for the latest updates, developer highlights, and ecosystem news.',
    href: '#',
    icon: XLogoIcon,
  },
  {
    title: 'Developer working group',
    description:
      'Collaborate directly with other developers through regular meetups, discussions, and technical deep-dives.',
    href: '#',
    icon: ChatsIcon,
  },
]
