import { PATHS } from '@/constants/paths'
import { FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'

export const desktopNavigationItems = {
  getInvolvedItems: [
    {
      label: PATHS.EVENTS.label,
      href: PATHS.EVENTS.path,
      description: 'Overview of upcoming and past events',
    },
    {
      label: PATHS.GRANTS.label,
      href: PATHS.GRANTS.path,
      description:
        'Information on funding opportunities supporting projects that contribute to the growth of the Filecoin Network',
    },
    {
      label: 'Become a Storage Provider',
      href: 'https://destor.com/destor-network/overview',
      description:
        'Dive right in and become an essential part of the ecosystem',
    },
    {
      label: 'Contribute to the Filecoin Project',
      href: FILECOIN_DOCS_URLS.waysToContribute,
      description:
        'Shape the future of Filecoin by contributing to its code, research, or docs.',
    },
  ],
  communityItems: [
    {
      label: PATHS.ECOSYSTEM.label,
      href: PATHS.ECOSYSTEM.path,
      description: 'Learn about various ecosystem projects or submit your own',
    },
    {
      label: PATHS.GOVERNANCE.label,
      href: PATHS.GOVERNANCE.path,
      description:
        'Learn about Filecoin Improvement Proposals and other governance mechanisms',
    },
  ],
  learnMoreItem: {
    label: 'Learn more about Filecoin',
    href: FILECOIN_DOCS_URLS.site,
  },
}

export default desktopNavigationItems
