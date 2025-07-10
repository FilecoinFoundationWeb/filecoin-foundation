import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { PageSection } from '@/components/PageSection'

export default function OfferStorage() {
  return (
    <PageSection backgroundVariant="dark">
      <PageHeader
        title="Join the world's largest decentralized storage network"
        description="Become a Filecoin storage provider and contribute capacity to a global system preserving humanity's most important data. If you've got the infrastructure, you can become a core part of it."
        cta={
          <Button href="" variant="primaryDark">
            Check requirements
          </Button>
        }
      />
    </PageSection>
  )
}
