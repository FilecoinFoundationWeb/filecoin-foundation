import { FileTextIcon, UserCircleIcon } from '@phosphor-icons/react/dist/ssr'

import type { IconProps } from '@filecoin-foundation/ui/Icon'
import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { extractEmailAddress } from '@/utils/extractEmailAddress'

type DeveloperSupportData = {
  heading: {
    title: string
    icon: IconProps['component']
  }
  description: React.ReactNode
}

export const developerSupportData: Array<DeveloperSupportData> = [
  {
    heading: {
      title: 'Auditor Network',
      icon: UserCircleIcon,
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
      icon: FileTextIcon,
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
