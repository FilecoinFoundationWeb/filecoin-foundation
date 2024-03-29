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

const socialIcons = {
  bluesky: Butterfly,
  github: GithubLogo,
  linkedin: LinkedinLogo,
  reddit: RedditLogo,
  slack: SlackLogo,
  twitter: TwitterLogo,
  youtube: YoutubeLogo,
}

const socialLinks = {
  ...FILECOIN_FOUNDATION_URLS.social,
  ...FILECOIN_URLS.social,
}

export function Social() {
  return (
    <ul className="flex flex-wrap items-center justify-between gap-4 px-3">
      {Object.entries(socialLinks).map(([key, { label, href }]) => {
        const IconComponent = socialIcons[key as keyof typeof socialIcons]

        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-white hover:text-brand-300 focus:outline-2"
              aria-label={`${label} (opens in new window)`}
            >
              {IconComponent && <IconComponent size={24} aria-hidden="true" />}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
