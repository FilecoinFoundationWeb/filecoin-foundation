import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink'

export function ProvideStoragePrivacyDisclaimer() {
  return (
    <p className="text-zinc-600">
      From time to time, we would like to contact you about our products and
      services, as well as other content that may be of interest to you. Please
      review the{' '}
      <ExternalTextLink href="https://fil.org/privacy-policy">
        Filecoin Foundation Privacy Policy
      </ExternalTextLink>{' '}
      for additional information on our privacy practices.
    </p>
  )
}
