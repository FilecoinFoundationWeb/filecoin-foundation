import {
  DiscordLogoIcon,
  SlackLogoIcon,
  TelegramLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_URLS } from '@/constants/siteMetadata'

import BlueskyLogo from '@/assets/logos/bluesky-logo.svg'

const socialIcons = {
  bluesky: BlueskyLogo,
  discord: DiscordLogoIcon,
  slack: SlackLogoIcon,
  telegram: TelegramLogoIcon,
  twitter: XLogoIcon,
  youTube: YoutubeLogoIcon,
}

type SocialIconKey = keyof typeof socialIcons

const socialLinkOrder = [
  'slack',
  'discord',
  'twitter',
  'bluesky',
  'telegram',
  'youTube',
] as const

export const socialLinksWithIcons = socialLinkOrder.map((key) => {
  const { label, href } = FILECOIN_URLS.social[key]
  return {
    label,
    href,
    icon: socialIcons[key as SocialIconKey],
  }
})
