import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { PageSection } from '@/components/PageSection'

export default function Home() {
  return (
    <Container>
      <PageSection>
        <PageHeader
          description="Keep your data accessible, verifiable, and free from centralized control with the world's largest decentralized storage network."
          title="Preserving humanity's most important information"
          backgroundVariant="light"
          kicker="Filecoin"
        />
        <p>
          Keep your data accessible, verifiable, and free from centralized
          control with the world's largest decentralized storage network.
        </p>
      </PageSection>
    </Container>
  )
}
