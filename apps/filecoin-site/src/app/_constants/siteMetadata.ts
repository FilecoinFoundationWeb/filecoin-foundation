import type { Metadata } from 'next'

const BASE_DOMAIN = 'filecoin-site.vercel.app'
const BASE_URL = `https://${BASE_DOMAIN}`
const ORGANIZATION_NAME = 'Filecoin'

const SEO = {
  title:
    "Filecoin | World's Largest Decentralized Storage Network for Humanity's Data",
  description:
    "Preserve humanity's most important information on Filecoin, the decentralized storage network with verifiable integrity, global redundancy, and no centralized control. Build apps, store data securely, or become a storage provider today.",
} as const

const FILECOIN_DOCS_BASE_URL = 'https://docs.filecoin.io/'

const FILECOIN_DOCS_URLS = {
  basicsBlockhainPoRep: `${FILECOIN_DOCS_BASE_URL}basics/the-blockchain/proofs#proof-of-replication-porep`,
  basicsBlockhainPoSt: `${FILECOIN_DOCS_BASE_URL}basics/the-blockchain/proofs#proof-of-spacetime-post`,
  basicsHowStorageWorks: `${FILECOIN_DOCS_BASE_URL}basics/how-storage-works/filecoin-plus`,
  basicsWhatIsFilecoin: `${FILECOIN_DOCS_BASE_URL}basics/what-is-filecoin`,
  builderCookbook: `${FILECOIN_DOCS_BASE_URL}builder-cookbook/overview`,
  networksMainnetRCPs: `${FILECOIN_DOCS_BASE_URL}networks/mainnet/rpcs`,
  smartContractDevelopingFilecoinSol: `${FILECOIN_DOCS_BASE_URL}smart-contracts/developing-contracts/filecoin.sol`,
  smartContractFundamentalsErc20: `${FILECOIN_DOCS_BASE_URL}smart-contracts/fundamentals/erc-20-quickstart`,
  smartContractFundamentalsFVM: `${FILECOIN_DOCS_BASE_URL}smart-contracts/fundamentals/the-fvm`,
  storageProviderBlockRewards: `${FILECOIN_DOCS_BASE_URL}storage-providers/filecoin-economics/block-rewards#block-rewards`,
  storageProviderBlockRewardsImpact: `${FILECOIN_DOCS_BASE_URL}storage-providers/filecoin-economics/block-rewards#impact-of-storage-capacity-on-block-rewards`,
} as const

const FILECOIN_FOUNDATION_URLS = {
  events: 'https://fil.org/events',
  grants: 'https://fil.org/grants',
  security: 'https://fil.org/security',
  ecosystemExplorer: 'https://fil.org/ecosystem-explorer',
  emails: {
    contact: 'hello@fil.org',
    devgrants: 'devgrants@fil.org',
  },
} as const

const FILECOIN_URLS = {
  github: 'https://github.com/filecoin-project',
  securityBugBounty: 'https://immunefi.com/bug-bounty/filecoin/',
  social: {
    bluesky: {
      href: 'https://bsky.app/profile/filecoin.io',
      label: 'Bluesky',
    },
    discord: {
      href: 'https://discord.gg/yeQ2hcd2TD',
      label: 'Discord',
    },
    reddit: {
      href: 'https://www.reddit.com/r/Filecoin/',
      label: 'Reddit',
    },
    slack: {
      href: 'https://filecoinproject.slack.com/ssb/redirect',
      label: 'Slack',
    },
    telegram: {
      href: 'https://t.me/filecoin',
      label: 'Telegram',
    },
    telegramKorea: {
      href: 'https://t.me/filecoinkor',
      label: 'Telegram Korea',
    },
    twitter: {
      href: 'https://twitter.com/filecoin',
      label: 'X',
      handle: '@filecoin',
    },
    weChat: {
      href: 'https://filecointldr.io/filecoin-wechat',
      label: 'WeChat',
    },
    youTube: {
      href: 'https://www.youtube.com/@FilecoinProject',
      label: 'YouTube',
    },
  },
  video: {
    whatIsFilecoin: 'https://www.youtube.com/embed/26ZdMAo23mM',
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
  FILECOIN_DOCS_BASE_URL,
  FILECOIN_DOCS_URLS,
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
  ORGANIZATION_NAME,
  ROOT_METADATA,
  SEO,
}
