import { Heading } from '@/components/Heading'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageSection } from '@/components/PageSection'

import { ProvideStorageForm } from './components/ProvideStorageForm'

export default function ProvideStorageFormPage() {
  return (
    <>
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light">
        <div className="max-w-4xl">
          <Heading tag="h2" className="text-5xl/14 font-medium">
            Thanks for your interest in offering storage on the Filecoin
            network.
          </Heading>
          <p className="pt-6 pb-25 text-xl/8 text-pretty text-[var(--color-paragraph-text)]">
            Please fill out this form below, and a member of the onboarding team
            will reach out to guide you through next steps in becoming a storage
            provider.
          </p>

          <ProvideStorageForm />
        </div>
      </PageSection>
    </>
  )
}
