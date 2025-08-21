import { PATHS } from './paths'
import {
  FILECOIN_DOCS_URL,
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
} from './siteMetadata'

export type NavItem = { label: string; href: string }

type FooterNavigationItem = { title: string; items: Array<NavItem> }

export type ExpandedNavItem = {
  label: NavItem['label']
  items: Array<{
    title: string
    links: Array<NavItem & { description: string }>
  }>
}

const { social: socialLinks, github, securityBugBounty } = FILECOIN_URLS

const { security, ecosystemExplorer, grants, events, orbit, governance } =
  FILECOIN_FOUNDATION_URLS

const social: Array<NavItem> = [
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

const resources: Array<NavItem> = [
  { label: 'Docs', href: FILECOIN_DOCS_URL },
  { label: 'GitHub', href: github },
  { label: 'Security', href: security },
  { label: 'Ecosystem Explorer', href: ecosystemExplorer },
  { label: 'Brand Kit', href: 'https://hub.fil.org/design' },
]

export const navigationBis: Array<NavItem | ExpandedNavItem> = [
  {
    label: PATHS.LEARN.label,
    items: [
      {
        title: 'Understand Filecoin',
        links: [
          {
            label: 'What is Filecoin?',
            description: 'Understand what Filecoin is and how it works',
            href: PATHS.LEARN.path,
          },
          {
            label: 'Case Studies',
            description: 'See how others are using Filecoin in the real world',
            href: PATHS.CASE_STUDIES.path,
          },
        ],
      },
    ],
  },
  { label: PATHS.STORE_DATA.label, href: PATHS.STORE_DATA.path },
  { label: PATHS.PROVIDE_STORAGE.label, href: PATHS.PROVIDE_STORAGE.path },
  {
    label: 'Developers',
    items: [
      {
        title: 'Explore',
        links: [
          {
            label: 'Build on Filecoin',
            description: 'Start building apps on the Filecoin network',
            href: PATHS.BUILD_ON_FILECOIN.path,
          },
          {
            label: 'Documentation',
            description: 'Official documentation for Filecoin',
            href: FILECOIN_DOCS_URL,
          },
          {
            label: 'Cookbook',
            description: 'Recipes for building with Filecoin and the FVM',
            href: '/',
          },
          {
            label: 'GitHub',
            description: "Explore Filecoin's open-source repositories",
            href: FILECOIN_URLS.github,
          },
        ],
      },
      {
        title: 'Contribute',
        links: [
          {
            label: 'Grants',
            description: 'Funding opportunities to build in the ecosystem',
            href: grants,
          },
          {
            label: 'Bug Bounty',
            description: 'Help find vulnerabilities and get rewarded',
            href: securityBugBounty,
          },
        ],
      },
    ],
  },
  {
    label: 'Network',
    items: [
      {
        title: 'Block Explorers',
        links: [
          {
            label: 'Beryx',
            description: 'Explorer and API for accessing real-time data',
            href: 'https://beryx.io/',
          },
          {
            label: 'Blockscout (FEVM)',
            description: 'Open-source explorer for FEVM smart contracts',
            href: 'https://www.blockscout.com/',
          },
          {
            label: 'Filfox',
            description: 'Explorer with rich network and storage statistics',
            href: 'https://filfox.info/',
          },
          {
            label: 'Filscan',
            description: 'Explorer for blocks, deals, and addresses',
            href: 'https://filscan.io/en/',
          },
        ],
      },
      {
        title: 'Network Monitoring',
        links: [
          {
            label: 'Network Status',
            description: 'The status of the Filecoin networks',
            href: '/',
          },
          {
            label: 'Network Health',
            description: 'Filecoin chain activity and performance',
            href: '/',
          },
        ],
      },
    ],
  },
  {
    label: 'Community',
    items: [
      {
        title: 'Get involved',
        links: [
          {
            label: 'Community Hub',
            description: 'Explore ways to contribute to the ecosystem',
            href: PATHS.COMMUNITY.path,
          },
          {
            label: 'Events',
            description: 'Join meetups, hackathons, and conferences',
            href: events,
          },
          {
            label: 'Orbit',
            description: 'Become a Filecoin Orbit ambassador',
            href: orbit,
          },
          {
            label: 'FIPs & Governance',
            description: 'Propose, discuss, and shape future upgrades',
            href: governance,
          },
        ],
      },
    ],
  },
  { label: PATHS.BLOG.label, href: PATHS.BLOG.path },
]

const navigation: Array<NavItem> = [
  { label: PATHS.BUILD_ON_FILECOIN.label, href: PATHS.BUILD_ON_FILECOIN.path },
  { label: PATHS.STORE_DATA.label, href: PATHS.STORE_DATA.path },
  { label: PATHS.PROVIDE_STORAGE.label, href: PATHS.PROVIDE_STORAGE.path },
  { label: PATHS.LEARN.label, href: PATHS.LEARN.path },
  { label: PATHS.BLOG.label, href: PATHS.BLOG.path },
]

export const legalLinks: Array<NavItem> = [
  { label: PATHS.PRIVACY_POLICY.label, href: PATHS.PRIVACY_POLICY.path },
  { label: PATHS.TERMS_OF_USE.label, href: PATHS.TERMS_OF_USE.path },
]

export const footerNavigationItems: Array<FooterNavigationItem> = [
  { title: 'Navigation', items: navigation },
  { title: 'Resources', items: resources },
  { title: 'Reach out', items: social },
]
