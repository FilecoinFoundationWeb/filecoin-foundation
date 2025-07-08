import {
  FacebookLogoIcon,
  LinkedinLogoIcon,
  RedditLogoIcon,
  XLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

const ALL_SOCIAL_LINKS = {
  facebook: {
    icon: FacebookLogoIcon,
    label: 'Facebook',
    buildLink(url: string, title: string) {
      return `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`
    },
  },
  linkedin: {
    icon: LinkedinLogoIcon,
    label: 'LinkedIn',
    buildLink(url: string, title: string) {
      return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`
    },
  },
  reddit: {
    icon: RedditLogoIcon,
    label: 'Reddit',
    buildLink(url: string, title: string) {
      return `https://old.reddit.com/submit?url=${url}&title=${title}`
    },
  },
  x: {
    icon: XLogoIcon,
    label: 'X',
    buildLink(url: string, title: string) {
      return `https://twitter.com/share?url=${url}&text=${title}`
    },
  },
}

type SocialPlatform = keyof typeof ALL_SOCIAL_LINKS

type ShareArticleLinksProps = {
  URL: string
  title: string
  BASE_URL: string
  platforms?: Array<SocialPlatform>
}

export function generateShareArticleLinks({
  URL,
  title,
  BASE_URL,
  platforms = ['facebook', 'linkedin', 'reddit', 'x'],
}: ShareArticleLinksProps) {
  const formattedURL = URL ? encodeURIComponent(URL) : BASE_URL

  const selectedLinks = platforms.map((platform) => ALL_SOCIAL_LINKS[platform])

  return selectedLinks.map(({ icon, label, buildLink }) => ({
    icon,
    label,
    href: buildLink(formattedURL, title),
  }))
}
