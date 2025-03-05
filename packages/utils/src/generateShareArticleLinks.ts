import {
  FacebookLogo,
  LinkedinLogo,
  RedditLogo,
  XLogo,
} from '@phosphor-icons/react/dist/ssr'

const PLACEHOLDER_TITLE = 'Explore more on our website!'

export function generateShareArticleLinks(
  URL: string,
  title: string,
  baseUrl: string,
) {
  const PLACEHOLDER_URL = baseUrl
  const formattedURL = URL ? encodeURIComponent(URL) : PLACEHOLDER_URL

  const SHARE_SOCIAL_LINKS_CONFIG = [
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
      href: `https://old.reddit.com/submit?url=${PLACEHOLDER_URL}&title=${PLACEHOLDER_TITLE}`,
    },
    {
      icon: XLogo,
      label: 'X',
      href: `https://twitter.com/share?url=${PLACEHOLDER_URL}&text=${PLACEHOLDER_TITLE}`,
    },
  ]

  return SHARE_SOCIAL_LINKS_CONFIG.map(({ icon, label, href }) => ({
    icon,
    label,
    href: href
      .replace(PLACEHOLDER_URL, formattedURL)
      .replace(PLACEHOLDER_TITLE, title || PLACEHOLDER_TITLE),
  }))
}
