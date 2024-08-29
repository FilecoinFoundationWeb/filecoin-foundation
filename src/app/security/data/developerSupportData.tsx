import { FileText, UserCircle } from '@phosphor-icons/react/dist/ssr'

import type { IconProps } from '@/components/Icon'
import { TextLink } from '@/components/TextLink'

import { extractEmailAddress } from '@/utils/extractEmailAddress'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

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
      icon: UserCircle,
    },
    description: (
      <>
        Filecoin Foundation supports a security auditor network for developers
        in the Filecoin ecosystem. Interested in having your project audited?
        Contact the Foundation’s security team at{' '}
        <TextLink href={FILECOIN_FOUNDATION_URLS.security.emails.audits.href}>
          {extractEmailAddress(
            FILECOIN_FOUNDATION_URLS.security.emails.audits.href,
          )}
        </TextLink>
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
        <TextLink
          href={
            FILECOIN_FOUNDATION_URLS.security.resources.filecoinEVMCompatibility
          }
        >
          Filecoin EVM Compatibility
        </TextLink>{' '}
        and{' '}
        <TextLink
          href={FILECOIN_FOUNDATION_URLS.security.resources.auditReports}
        >
          Audit Reports
        </TextLink>
        .
      </>
    ),
  },
]
