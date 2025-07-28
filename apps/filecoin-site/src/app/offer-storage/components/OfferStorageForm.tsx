import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'
// import { InternalTextLink } from '@filecoin-foundation/ui/TextLink/InternalTextLink'

import { Button } from '@/components/Button'

export function OfferStorageForm() {
  return (
    <div className="space-y-15">
      <p>Form</p>

      <p className="text-zinc-600">
        From time to time, we would like to contact you about our products and
        services, as well as other content that may be of interest to you.
        Please review the{' '}
        <ExternalTextLink href="#">
          Filecoin Foundation Privacy Policy
        </ExternalTextLink>{' '}
        and the{' '}
        <ExternalTextLink href="#">
          Protocol Labs Privacy Policy
        </ExternalTextLink>{' '}
        for additional information on our privacy practices. Please select one:
      </p>

      <Button variant="primary">Book onboarding call</Button>
    </div>
  )
}
