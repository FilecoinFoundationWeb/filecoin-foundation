export const BASE_DOMAIN = 'filecoin.io'
export const BASE_URL = `https://${BASE_DOMAIN}`

export const FILECOIN_URLS = {
  docs: 'https://docs.filecoin.io/',
  github: 'https://github.com/filecoin-project',
  security: 'https://fil.org/security',
  ecosystemExplorer: 'https://fil.org/ecosystem-explorer',
  social: {
    slack: {
      href: 'https://filecoin.io/slack',
      label: 'Slack',
    },
    bluesky: {
      href: 'https://bsky.app/profile/filecoin.io',
      label: 'Bluesky',
    },
    twitter: {
      href: 'https://twitter.com/filecoin',
      label: 'X',
    },
    telegram: {
      href: 'https://t.me/filecoin',
      label: 'Telegram',
    },
    discord: {
      href: 'https://discord.gg/yeQ2hcd2TD',
      label: 'Discord',
    },
  },
} as const
