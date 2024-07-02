import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export const securityResourcesData = [
  {
    title: 'Filecoin EVM Compatibility',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.security.documents.filecoinCompatibility,
      text: 'Learn More',
      icon: BookOpen,
    },
  },
  {
    title: 'Audit Reports',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.security.documents.auditReports,
      text: 'Learn More',
      icon: BookOpen,
    },
  },
]
