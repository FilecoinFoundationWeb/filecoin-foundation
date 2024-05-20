import {
  Butterfly,
  GithubLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

const socialIcons = {
  bluesky: Butterfly,
  github: GithubLogo,
  linkedin: LinkedinLogo,
  twitter: XLogo,
  youtube: YoutubeLogo,
}

type SocialIconKey = keyof typeof socialIcons

export const socialLinksWithIcons = Object.entries(
  FILECOIN_FOUNDATION_URLS.social,
).map(([key, { label, href }]) => ({
  label,
  href,
  icon: socialIcons[key as SocialIconKey],
}))
