import {
  Butterfly,
  GithubLogo,
  LinkedinLogo,
  RedditLogo,
  SlackLogo,
  TwitterLogo,
  YoutubeLogo,
} from '@phosphor-icons/react/dist/ssr'

import {
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
} from '@/constants/siteMetadata'

export const socialIcons = {
  bluesky: Butterfly,
  github: GithubLogo,
  linkedin: LinkedinLogo,
  reddit: RedditLogo,
  slack: SlackLogo,
  twitter: TwitterLogo,
  youtube: YoutubeLogo,
}

export type SocialIconKey = keyof typeof socialIcons

export const socialLinks = {
  ...FILECOIN_FOUNDATION_URLS.social,
  ...FILECOIN_URLS.social,
}
