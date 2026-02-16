import { getTranslations } from 'next-intl/server'

import { LegalSection as SharedLegalSection } from '@filecoin-foundation/ui-filecoin/Footer/LegalSection'

import { FILECOIN_FOUNDATION_URL } from '@/constants/siteMetadata'

import FilecoinFoundationLogo from '@/assets/logos/filecoin-foundation-logo.svg'

import { getFooterLegalItems } from '../Navigation/constants/navigation'

export async function LegalSection() {
  const t = await getTranslations('navigation')

  return (
    <SharedLegalSection
      leadingText={t('managedBy')}
      legalItems={getFooterLegalItems(t)}
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
