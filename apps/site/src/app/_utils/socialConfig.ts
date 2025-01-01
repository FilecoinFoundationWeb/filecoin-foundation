import {
  GithubLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import BlueskyLogo from '@/assets/logos/bluesky-logo.svg'

const socialIcons = {
  bluesky: BlueskyLogo,
  github: GithubLogo,
  linkedin: LinkedinLogo,
  twitter: XLogo,
  youtube: YoutubeLogo,
}

type SocialIconKey = keyof typeof socialIcons

const socialLinkOrder = [
  'twitter',
  'youtube',
  'linkedin',
  'github',
  'bluesky',
] as const

export const socialLinksWithIcons = socialLinkOrder.map((key) => {
  const { label, href } = FILECOIN_FOUNDATION_URLS.social[key]
  return {
    label,
    href,
    icon: socialIcons[key as SocialIconKey],
  }
})
