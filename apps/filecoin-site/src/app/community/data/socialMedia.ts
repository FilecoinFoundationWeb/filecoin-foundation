import {
  DiscordLogoIcon,
  RedditLogoIcon,
  SlackLogoIcon,
  TelegramLogoIcon,
  TwitterLogoIcon,
  WechatLogoIcon,
  YoutubeLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_URLS } from '@/constants/siteMetadata'

import type { LinkCardData } from '@/components/LinkCard'

const {
  slack,
  twitter,
  discord,
  youTube,
  reddit,
  weChat,
  telegram,
  telegramKorea,
} = FILECOIN_URLS.social

export const socialMedia: Array<LinkCardData> = [
  {
    title: slack.label,
    description:
      'Connect with builders and contributors across themed channels in the Filecoin Slack workspace.',
    href: slack.href,
    icon: SlackLogoIcon,
  },
  {
    title: twitter.label,
    description:
      'Follow for real-time updates, community highlights, and ecosystem announcements.',
    href: twitter.href,
    icon: TwitterLogoIcon,
  },
  {
    title: discord.label,
    description:
      'Hang out with builders, share feedback, and join voice chats across Filecoin projects.',
    href: discord.href,
    icon: DiscordLogoIcon,
  },
  {
    title: youTube.label,
    description:
      'Watch recordings of community calls, talks, demos, and tutorials from across the ecosystem.',
    href: youTube.href,
    icon: YoutubeLogoIcon,
  },
  {
    title: reddit.label,
    description:
      'Ask questions, share ideas, and discover community-driven discussions on r/Filecoin.',
    href: reddit.href,
    icon: RedditLogoIcon,
  },
  {
    title: weChat.label,
    description:
      'Connect with the Chinese-speaking Filecoin community for updates, resources, and support.',
    href: weChat.href,
    icon: WechatLogoIcon,
  },
  {
    title: telegram.label,
    description:
      'Join the global Filecoin Telegram to chat with the community, ask questions, and stay in the loop.',
    href: telegram.href,
    icon: TelegramLogoIcon,
  },
  {
    title: telegramKorea.label,
    description:
      'Join the Korean-speaking Filecoin community for local updates, support, and conversation.',
    href: telegramKorea.href,
    icon: TelegramLogoIcon,
  },
]
