import type { TranslationFunction } from '@/i18n/types'

import type {
  ExpandedNavItem,
  NavItem,
  NavigationMenuItem,
} from '@filecoin-foundation/ui-filecoin/Navigation/types'

import { PATHS } from '@/constants/paths'
import {
  FILECOIN_DOCS_URL,
  FILECOIN_DOCS_URLS,
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
} from '@/constants/siteMetadata'

import { pickNavItem } from '../utils/pickNavItem'

type FooterNavigationItem = { title: string; items: Array<NavItem> }

function getBlockExplorerItems(t: TranslationFunction): Array<ExpandedNavItem> {
  return [
    {
      label: 'Beryx',
      description: t('descriptions.beryx'),
      href: 'https://beryx.io/',
    },
    {
      label: 'Blockscout (FEVM)',
      description: t('descriptions.blockscout'),
      href: 'https://www.blockscout.com/',
    },
    {
      label: 'Filfox',
      description: t('descriptions.filfox'),
      href: 'https://filfox.info/',
    },
    {
      label: 'Filscan',
      description: t('descriptions.filscan'),
      href: 'https://filscan.io/en/',
    },
  ]
}

function getCommunityItems(t: TranslationFunction): Array<ExpandedNavItem> {
  return [
    {
      label: t('communityHub'),
      description: t('descriptions.communityHub'),
      href: PATHS.COMMUNITY_HUB.path,
    },
    {
      label: t('events'),
      description: t('descriptions.events'),
      href: FILECOIN_FOUNDATION_URLS.events.href,
    },
    {
      label: 'Orbit',
      description: t('descriptions.orbit'),
      href: FILECOIN_FOUNDATION_URLS.orbit.href,
    },
    {
      label: t('fipsGovernance'),
      description: t('descriptions.fipsGovernance'),
      href: FILECOIN_FOUNDATION_URLS.governance.href,
    },
  ]
}

function getNetworkMonitoringItems(
  t: TranslationFunction,
): Array<ExpandedNavItem> {
  return [
    {
      label: t('networkStatus'),
      description: t('descriptions.networkStatus'),
      href: 'https://status.filecoin.io/',
    },
    {
      label: t('networkHealth'),
      description: t('descriptions.networkHealth'),
      href: 'https://dashboard.starboard.ventures/',
    },
  ]
}

function getDeveloperResourcesItems(
  t: TranslationFunction,
): Array<ExpandedNavItem> {
  return [
    {
      label: t('documentation'),
      description: t('descriptions.documentation'),
      href: FILECOIN_DOCS_URL,
    },
    {
      label: t('cookbook'),
      description: t('descriptions.cookbook'),
      href: FILECOIN_DOCS_URLS.builderCookbook,
    },
    {
      label: 'GitHub',
      description: t('descriptions.github'),
      href: FILECOIN_URLS.github.href,
    },
  ]
}

function getContributeItems(t: TranslationFunction): Array<ExpandedNavItem> {
  return [
    {
      label: t('grants'),
      description: t('descriptions.grants'),
      href: FILECOIN_FOUNDATION_URLS.grants.href,
    },
    {
      label: t('bugBounty'),
      description: t('descriptions.bugBounty'),
      href: FILECOIN_URLS.securityBugBounty.href,
    },
  ]
}

function getInternalNavigationItems(t: TranslationFunction): Array<NavItem> {
  return [
    { label: t('learn'), href: PATHS.LEARN.path },
    { label: t('caseStudies'), href: PATHS.CASE_STUDIES.path },
    { label: t('storeData'), href: PATHS.STORE_DATA.path },
    { label: t('provideStorage'), href: PATHS.PROVIDE_STORAGE.path },
    { label: t('buildOnFilecoin'), href: PATHS.BUILD_ON_FILECOIN.path },
    { label: t('communityHub'), href: PATHS.COMMUNITY_HUB.path },
    { label: t('blog'), href: PATHS.BLOG.path },
  ]
}

export function getMobileNavigationItems(t: TranslationFunction) {
  return getInternalNavigationItems(t)
}

export function getHeaderNavigationItems(
  t: TranslationFunction,
): Array<NavItem | NavigationMenuItem> {
  return [
    {
      label: t('learn'),
      items: [
        {
          title: t('sections.understandFilecoin'),
          links: [
            {
              label: t('learn'),
              description: t('descriptions.learn'),
              href: PATHS.LEARN.path,
            },
            {
              label: t('caseStudies'),
              description: t('descriptions.caseStudies'),
              href: PATHS.CASE_STUDIES.path,
            },
          ],
        },
      ],
    },
    { label: t('storeData'), href: PATHS.STORE_DATA.path },
    { label: t('provideStorage'), href: PATHS.PROVIDE_STORAGE.path },
    {
      label: t('developers'),
      items: [
        {
          title: t('sections.explore'),
          links: [
            {
              label: t('buildOnFilecoin'),
              description: t('descriptions.buildOnFilecoin'),
              href: PATHS.BUILD_ON_FILECOIN.path,
            },
            ...getDeveloperResourcesItems(t),
          ],
        },
        { title: t('sections.contribute'), links: getContributeItems(t) },
      ],
    },
    {
      label: t('network'),
      items: [
        {
          title: t('sections.blockExplorers'),
          links: getBlockExplorerItems(t),
        },
        {
          title: t('sections.networkMonitoring'),
          links: getNetworkMonitoringItems(t),
        },
      ],
    },
    {
      label: t('community'),
      items: [
        { title: t('sections.getInvolved'), links: getCommunityItems(t) },
      ],
    },
    { label: t('blog'), href: PATHS.BLOG.path },
  ]
}

export function getFooterNavigationItems(
  t: TranslationFunction,
): Array<FooterNavigationItem> {
  return [
    {
      title: t('sections.navigation'),
      items: getInternalNavigationItems(t).filter(
        ({ href }) => href !== PATHS.COMMUNITY_HUB.path,
      ),
    },
    {
      title: t('sections.resources'),
      items: [
        ...getDeveloperResourcesItems(t).map(pickNavItem),
        ...getContributeItems(t).map(pickNavItem),
        { label: t('brandKit'), href: 'https://hub.fil.org/design' },
        ...getNetworkMonitoringItems(t).map(pickNavItem),
      ],
    },
    {
      title: t('sections.blockExplorers'),
      items: getBlockExplorerItems(t).map(pickNavItem),
    },
    {
      title: t('sections.community'),
      items: getCommunityItems(t).map(pickNavItem),
    },
  ]
}

export function getFooterLegalItems(t: TranslationFunction): Array<NavItem> {
  return [
    { label: t('privacyPolicy'), href: PATHS.PRIVACY_POLICY.path },
    { label: t('termsOfUse'), href: PATHS.TERMS_OF_USE.path },
  ]
}
