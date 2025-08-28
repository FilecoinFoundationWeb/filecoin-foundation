import type { Route } from 'next'

import type { BaseLinkProps } from '@filecoin-foundation/ui/BaseLink'

import { PATHS } from '@/constants/paths'
import {
  FILECOIN_DOCS_URL,
  FILECOIN_DOCS_URLS,
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
} from '@/constants/siteMetadata'

type NavItem = { label: string; href: BaseLinkProps['href'] }
type InternalNavItem = { label: string; href: Route }
type ExpandedNavItem = NavItem & { description: string }

type FooterNavigationItem = { title: string; items: Array<NavItem> }

export type LabelledExpandedNavItems = {
  label: string
  items: Array<{
    title: string
    links: Array<ExpandedNavItem>
  }>
}

const blockExplorerItems: Array<ExpandedNavItem> = [
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
]

const communityItems: Array<ExpandedNavItem> = [
  {
    label: FILECOIN_FOUNDATION_URLS.events.label,
    description: 'Join meetups, hackathons, and conferences',
    href: FILECOIN_FOUNDATION_URLS.events.href,
  },
  {
    label: FILECOIN_FOUNDATION_URLS.orbit.label,
    description: 'Become a Filecoin Orbit ambassador',
    href: FILECOIN_FOUNDATION_URLS.orbit.href,
  },
  {
    label: 'FIPs & Governance',
    description: 'Propose, discuss, and shape future upgrades',
    href: FILECOIN_FOUNDATION_URLS.governance.href,
  },
]

const resourceItems: Array<NavItem> = [
  { label: 'Documentation', href: FILECOIN_DOCS_URL },
  { label: 'Cookbook', href: FILECOIN_DOCS_URLS.builderCookbook },
  { label: FILECOIN_URLS.github.label, href: FILECOIN_URLS.github.href },
  {
    label: FILECOIN_FOUNDATION_URLS.grants.label,
    href: FILECOIN_FOUNDATION_URLS.grants.href,
  },
  {
    label: FILECOIN_URLS.securityBugBounty.label,
    href: FILECOIN_URLS.securityBugBounty.href,
  },
  { label: 'Brand Kit', href: 'https://hub.fil.org/design' },
  { label: 'Network Status', href: 'https://status.filecoin.io/' },
  { label: 'Network Health', href: 'https://dashboard.starboard.ventures/' },
]

export const internalNavigationItems: Array<InternalNavItem> = [
  { label: PATHS.LEARN.label, href: PATHS.LEARN.path },
  { label: PATHS.CASE_STUDIES.label, href: PATHS.CASE_STUDIES.path },
  { label: PATHS.STORE_DATA.label, href: PATHS.STORE_DATA.path },
  { label: PATHS.PROVIDE_STORAGE.label, href: PATHS.PROVIDE_STORAGE.path },
  { label: PATHS.BUILD_ON_FILECOIN.label, href: PATHS.BUILD_ON_FILECOIN.path },
  { label: PATHS.COMMUNITY_HUB.label, href: PATHS.COMMUNITY_HUB.path },
  { label: PATHS.BLOG.label, href: PATHS.BLOG.path },
]

export const legalLinks: Array<InternalNavItem> = [
  { label: PATHS.PRIVACY_POLICY.label, href: PATHS.PRIVACY_POLICY.path },
  { label: PATHS.TERMS_OF_USE.label, href: PATHS.TERMS_OF_USE.path },
]

export const headerNavigation: Array<NavItem | LabelledExpandedNavItems> = [
  {
    label: PATHS.LEARN.label,
    items: [
      {
        title: 'Understand Filecoin',
        links: [
          {
            label: PATHS.LEARN.label,
            description: 'Understand what Filecoin is and how it works',
            href: PATHS.LEARN.path,
          },
          {
            label: PATHS.CASE_STUDIES.label,
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
            label: PATHS.BUILD_ON_FILECOIN.label,
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
            href: FILECOIN_DOCS_URLS.builderCookbook,
          },
          {
            label: FILECOIN_URLS.github.label,
            description: "Explore Filecoin's open-source repositories",
            href: FILECOIN_URLS.github.href,
          },
        ],
      },
      {
        title: 'Contribute',
        links: [
          {
            label: FILECOIN_FOUNDATION_URLS.grants.label,
            description: 'Funding opportunities to build in the ecosystem',
            href: FILECOIN_FOUNDATION_URLS.grants.href,
          },
          {
            label: FILECOIN_URLS.securityBugBounty.label,
            description: 'Help find vulnerabilities and get rewarded',
            href: FILECOIN_URLS.securityBugBounty.href,
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
        links: blockExplorerItems,
      },
      {
        title: 'Network Monitoring',
        links: [
          {
            label: 'Network Status',
            description: 'The status of the Filecoin networks',
            href: 'https://status.filecoin.io/',
          },
          {
            label: 'Network Health',
            description: 'Filecoin chain activity and performance',
            href: 'https://dashboard.starboard.ventures/',
          },
        ],
      },
    ],
  },
  {
    label: 'Community',
    items: [{ title: 'Get involved', links: communityItems }],
  },
  { label: PATHS.BLOG.label, href: PATHS.BLOG.path },
]

export const footerNavigationItems: Array<FooterNavigationItem> = [
  {
    title: 'Navigation',
    items: internalNavigationItems.filter(
      ({ href }) => href !== PATHS.COMMUNITY_HUB.path,
    ),
  },
  { title: 'Resources', items: resourceItems },
  {
    title: 'Block Explorers',
    items: blockExplorerItems.map(({ label, href }) => ({
      label,
      href,
    })),
  },
  {
    title: 'Community',
    items: [
      { label: PATHS.COMMUNITY_HUB.label, href: PATHS.COMMUNITY_HUB.path },
      ...communityItems.map(({ label, href }) => ({
        label,
        href,
      })),
    ],
  },
]
