import {
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from '@phosphor-icons/react/dist/ssr'

import { FFDW_URLS } from '@/constants/siteMetadata'

const socialIcons = {
  twitter: XLogo,
  linkedin: LinkedinLogo,
  youtube: YoutubeLogo,
}

type SocialIconKey = keyof typeof socialIcons

const socialLinkOrder = ['twitter', 'linkedin', 'youtube'] as const

export const socialLinksWithIcons = socialLinkOrder.map((key) => {
  const { label, href } = FFDW_URLS.social[key]
  return {
    label,
    href,
    icon: socialIcons[key as SocialIconKey],
  }
})
