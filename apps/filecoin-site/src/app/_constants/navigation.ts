import { PATHS } from './paths'
import { FILECOIN_URLS } from './siteMetadata'

type NavItem = { label: string; href: string }

const { social: socialLinks, docs, github, security, ecosystemExplorer } = FILECOIN_URLS

const social: NavItem[] = [
  {
    label: socialLinks.slack.label,
    href: socialLinks.slack.href,
  },
  {
    label: socialLinks.bluesky.label,
    href: socialLinks.bluesky.href,
  },
  {
    label: socialLinks.twitter.label,
    href: socialLinks.twitter.href,
  },
  {
    label: socialLinks.telegram.label,
    href: socialLinks.telegram.href,
  },
  {
    label: socialLinks.discord.label,
    href: socialLinks.discord.href,
  },
]

const resources: NavItem[] = [
  { label: 'Docs', href: docs },
  { label: 'Github', href: github },
  { label: 'Security', href: security },
  { label: 'Ecosystem Explorer', href: ecosystemExplorer },
]

const navigation: NavItem[] = [
  { label: PATHS.BUILD_ON_FILECOIN.label, href: PATHS.BUILD_ON_FILECOIN.path },
  { label: PATHS.STORE_DATA.label, href: PATHS.STORE_DATA.path },
  { label: PATHS.OFFER_STORAGE.label, href: PATHS.OFFER_STORAGE.path },
  { label: PATHS.LEARN.label, href: PATHS.LEARN.path },
  { label: PATHS.BLOG.label, href: PATHS.BLOG.path },
]

export const legalLinks: NavItem[] = [
  { label: PATHS.PRIVACY_POLICY.label, href: PATHS.PRIVACY_POLICY.path },
  { label: PATHS.TERMS_OF_USE.label, href: PATHS.TERMS_OF_USE.path },
]

export const footerNavigationItems: Record<string, NavItem[]> = {
  Navigation: navigation,
  Resources: resources,
  'Reach out': social,
}
