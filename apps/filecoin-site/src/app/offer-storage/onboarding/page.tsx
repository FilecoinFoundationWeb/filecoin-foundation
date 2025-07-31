import { Heading } from '@/components/Heading'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageSection } from '@/components/PageSection'

import { OfferStorageForm } from './components/OfferStorageForm'

export default function OfferStorageFormPage() {
  return (
    <>
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light">
        <div className="max-w-4xl">
          <Heading tag="h2" variant="5xl-medium">
            Thanks for your interest in offering storage on the Filecoin
            network.
          </Heading>
          <p className="pt-6 pb-25 text-xl leading-8 font-normal text-balance text-zinc-600">
            Please fill out this form below, and a member of the onboarding team
            will reach out to guide you through next steps in becoming a storage
            provider.
          </p>

          <OfferStorageForm />
        </div>
      </PageSection>
    </>
  )
}
