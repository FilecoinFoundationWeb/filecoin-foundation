import {
  DiscordLogoIcon,
  RedditLogoIcon,
  SlackLogoIcon,
  TelegramLogoIcon,
  TwitterLogoIcon,
  WechatLogoIcon,
  YoutubeLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { LinkCardData } from '@filecoin-foundation/ui-filecoin/LinkCard'

import { FILECOIN_URLS } from '@/constants/siteMetadata'


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

export const socialMedia = [
  {
    title: slack.label,
    href: slack.href,
    icon: SlackLogoIcon,
  },
  {
    title: twitter.label,
    href: twitter.href,
    icon: TwitterLogoIcon,
  },
  {
    title: discord.label,
    href: discord.href,
    icon: DiscordLogoIcon,
  },
  {
    title: youTube.label,
    href: youTube.href,
    icon: YoutubeLogoIcon,
  },
  {
    title: reddit.label,
    href: reddit.href,
    icon: RedditLogoIcon,
  },
  {
    title: weChat.label,
    href: weChat.href,
    icon: WechatLogoIcon,
  },
  {
    title: telegram.label,
    href: telegram.href,
    icon: TelegramLogoIcon,
  },
  {
    title: telegramKorea.label,
    href: telegramKorea.href,
    icon: TelegramLogoIcon,
  },
] as const satisfies Array<LinkCardData>
