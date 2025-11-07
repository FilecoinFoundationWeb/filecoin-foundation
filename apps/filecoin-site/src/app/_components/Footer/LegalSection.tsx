import { LegalSection as SharedLegalSection } from '@filecoin-foundation/ui-filecoin/Footer/LegalSection'

import { BASE_DOMAIN, FILECOIN_FOUNDATION_URL } from '@/constants/siteMetadata'

import FilecoinFoundationLogo from '@/assets/logos/filecoin-foundation-logo.svg'

import { footerLegalItems } from '../Navigation/constants/navigation'

export function LegalSection() {
  return (
    <SharedLegalSection
      baseDomain={BASE_DOMAIN}
      leadingText="Managed by"
      legalItems={footerLegalItems}
      creators={[
        {
          companyName: 'Filecoin Foundation',
          websiteUrl: FILECOIN_FOUNDATION_URL,
          LogoComponent: FilecoinFoundationLogo,
        },
      ]}
    />
  )
}
