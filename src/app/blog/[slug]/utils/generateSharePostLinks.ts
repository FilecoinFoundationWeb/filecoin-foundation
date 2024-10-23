import {
  FacebookLogo,
  LinkedinLogo,
  RedditLogo,
  XLogo,
} from '@phosphor-icons/react/dist/ssr'

const PLACEHOLDER_URL = 'currentURL'
const PLACEHOLDER_TITLE = 'postTitle'

export const SHARE_SOCIAL_LINKS_CONFIG = [
  {
    icon: FacebookLogo,
    label: 'Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${PLACEHOLDER_URL}&quote=${PLACEHOLDER_TITLE}`,
  },
  {
    icon: LinkedinLogo,
    label: 'LinkedIn',
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${PLACEHOLDER_URL}&title=${PLACEHOLDER_TITLE}`,
  },
  {
    icon: RedditLogo,
    label: 'Reddit',
    href: `https://reddit.com/submit?url=${PLACEHOLDER_URL}&title=${PLACEHOLDER_TITLE}`,
  },
  {
    icon: XLogo,
    label: 'X',
    href: `https://twitter.com/share?url=${PLACEHOLDER_URL}&text=${PLACEHOLDER_TITLE}`,
  },
]

export function generateSharePostLinks(currentURL: string, postTitle: string) {
  const formattedTitle = `${postTitle}`
  const formattedURL = `${encodeURIComponent(currentURL)}`

  return SHARE_SOCIAL_LINKS_CONFIG.map(({ icon, label, href }) => ({
    icon,
    label,
    href: href
      .replace('currentURL', formattedURL)
      .replace('postTitle', formattedTitle),
  }))
}
