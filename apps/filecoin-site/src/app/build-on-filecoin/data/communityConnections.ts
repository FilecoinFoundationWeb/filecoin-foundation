import {
  ChatsIcon,
  SlackLogoIcon,
  XLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

type CommunityConnection = {
  title: string
  description: string
  icon: typeof ChatsIcon
}

export const communityConnections: CommunityConnection[] = [
  {
    title: '#fil-builder on Slack',
    description:
      'Join the conversation, ask questions, and share your progress with fellow builders in the Filecoin Slack community.',
    icon: SlackLogoIcon,
  },
  {
    title: '@filbuilders on X',
    description:
      'Follow for the latest updates, developer highlights, and ecosystem news.',
    icon: XLogoIcon,
  },
  {
    title: 'Developer Working Group',
    description:
      'Collaborate directly with other developers through regular meetups, discussions, and technical deep-dives.',
    icon: ChatsIcon,
  },
] as const
