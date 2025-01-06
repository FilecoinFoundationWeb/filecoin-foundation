import { FileText, UserCircle } from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { extractEmailAddress } from '@/utils/extractEmailAddress'

import type { IconProps } from '@/components/Icon'
import { ExternalTextLink } from '@/components/TextLink/ExternalTextLink'

type DeveloperSupportData = {
  description: React.ReactNode,
  heading: {
    icon: IconProps['component'],
    title: string
  }
}

export const developerSupportData: Array<DeveloperSupportData> = [
  {
    heading: {
      title: 'Auditor Network',
      icon: UserCircle,
    },
    description: (
      <>
        Filecoin Foundation supports a security auditor network for developers
        in the Filecoin ecosystem. Interested in having your project audited?
        Contact the Foundation’s security team at{' '}
        <ExternalTextLink
          href={FILECOIN_FOUNDATION_URLS.security.emails.audits.href}
        >
          {extractEmailAddress(
            FILECOIN_FOUNDATION_URLS.security.emails.audits.href,
          )}
        </ExternalTextLink>
        .
      </>
    ),
  },
  {
    heading: {
      title: 'Security Resources',
      icon: FileText,
    },
    description: (
      <>
        Check out the latest security resources, including{' '}
        <ExternalTextLink
          href={
            FILECOIN_FOUNDATION_URLS.security.resources.filecoinEVMCompatibility
          }
        >
          Filecoin EVM Compatibility
        </ExternalTextLink>{' '}
        and{' '}
        <ExternalTextLink
          href={FILECOIN_FOUNDATION_URLS.security.resources.auditReports}
        >
          Audit Reports
        </ExternalTextLink>
        .
      </>
    ),
  },
]
