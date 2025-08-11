import type { Metadata } from 'next'

const BASE_DOMAIN = 'filecoin.io'
const BASE_URL = `https://${BASE_DOMAIN}`
const ORGANIZATION_NAME = 'Filecoin'
const PARENT_ORGANIZATION_NAME = 'Filecoin Foundation'
const PARENT_ORGANIZATION_URL = 'https://fil.org/'

const SEO = {
  title:
    "Filecoin | World's Largest Decentralized Storage Network for Humanity's Data",
  description:
    "Preserve humanity's most important information on Filecoin, the decentralized storage network with verifiable integrity, global redundancy, and no centralized control. Build apps, store data securely, or become a storage provider today.",
} as const

const FILECOIN_URLS = {
  docs: 'https://docs.filecoin.io/',
  github: 'https://github.com/filecoin-project',
  security: 'https://fil.org/security',
  ecosystemExplorer: 'https://fil.org/ecosystem-explorer',
  social: {
    bluesky: {
      href: 'https://bsky.app/profile/filecoin.io',
      label: 'Bluesky',
    },
    discord: {
      href: 'https://discord.gg/yeQ2hcd2TD',
      label: 'Discord',
    },
    slack: {
      href: 'https://filecoinproject.slack.com/ssb/redirect',
      label: 'Slack',
    },
    telegram: {
      href: 'https://t.me/filecoin',
      label: 'Telegram',
    },
    twitter: {
      href: 'https://twitter.com/filecoin',
      label: 'X',
      handle: '@filecoin',
    },
  },
} as const

const ROOT_METADATA = {
  title: {
    template: `${ORGANIZATION_NAME} | %s`,
    default: ORGANIZATION_NAME,
  },
  metadataBase: new URL(BASE_URL),
} as const satisfies Metadata

export {
  BASE_DOMAIN,
  BASE_URL,
  FILECOIN_URLS,
  ORGANIZATION_NAME,
  PARENT_ORGANIZATION_NAME,
  PARENT_ORGANIZATION_URL,
  ROOT_METADATA,
  SEO,
}
