import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export function ProvideStoragePrivacyDisclaimer() {
  return (
    <p className="text-[var(--color-paragraph-text)]">
      From time to time, we would like to contact you about our products and
      services, as well as other content that may be of interest to you. Please
      review the{' '}
      <ExternalTextLink href={FILECOIN_FOUNDATION_URLS.privacyPolicy.href}>
        Filecoin Foundation Privacy Policy
      </ExternalTextLink>{' '}
      for additional information on our privacy practices.
    </p>
  )
}
